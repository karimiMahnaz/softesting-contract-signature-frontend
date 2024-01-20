import React, { useContext, useState, useEffect} from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Document, Page, Outline, pdfjs} from 'react-pdf/dist/esm/entry.webpack';
import {PDFDocument} from 'pdf-lib';
import {decode, encode, base64} from 'base-64';
import { createBrowserHistory } from 'history';
import { useHistory } from "react-router-dom";
import axios from "axios";
import styles from "../styles/documentSign.module.scss";
import { NavContext } from "../contexts/navContext";
import img from "../assets/abstract-blue.jpg";

// <title>SofTesting | To Sign Contract</title>;

const DocumentSign = (params) => {
    
  
  const [email, setEmail] = useState(null);
  const { setOffMenu } = useContext(NavContext);
  const [isSign, setIsSign] = useState(false);
  const [fileDownloaded, setFileDownloaded] = useState(false);
  const [pdfEditMode, setPdfEditMode] = useState(false);
  const [pdfArrayBuffer, setPdfArrayBuffer] = useState(null);
  const [pdfBytes2, setPdfBytes2] = useState(null);
  const [signatureArrayBuffer, setSignatureArrayBuffer] = useState(null);
  const [subTitleBase64, setSubTitleBase64] = useState(null);
  const [signDateBase64, setSignDateBase64] = useState(null);
  const [signatureBase64, setSignatureBase64] = useState(null);
  const [pdfBase64, setPdfBase64] = useState(null);
  const [newPdfPath, setNewPdfPath] = useState(null);
  const [filePath, setFilePath] = useState(
    params.url
  );
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageWidth, setPageWidth] = useState(0);
  const [pageHeight, setPageHeight] = useState(0);
  const [file, setFile] = useState(params.url);
  const [coords, setCoords] = useState({x: 0, y: 0});
  const [scroll, setScroll] = useState(false);
  const [locationKeys, setLocationKeys] = useState([]);
  const [ signDraw, setSignDraw] = useState(false);
  const history = createBrowserHistory();
  let history2 = useHistory();
  const location = window.location.hostname;

  toast.configure();

  useEffect(() => {
    return history.listen(location => {
      if (history.action === 'PUSH') {
        setLocationKeys([location.key])
      }

      if (history.action === 'POP') {
        if (locationKeys[1] === location.key) {
          setLocationKeys(([_, ...keys]) => keys)
          // Handle forward event
          history2.push("/contract/documentsign");
        } else {
          setLocationKeys((keys) => [location.key, ...keys])
          // Handle back event
          history2.push("/contract/signature");
        }
      }
    })
  }, [locationKeys,])


    useEffect(() => {
      console.log('filePath' , filePath);
      if (filePath === null || filePath === '' || filePath === undefined){
        setFilePath(localStorage.getItem('documentUrl'));
      }

      if (localStorage.getItem("subTitle"))
      setSubTitleBase64(localStorage.getItem("subTitle").replace(/"/g, ""));

      if (localStorage.getItem("signature")) {
        setIsSign(true);
        setSignatureBase64(
        localStorage
          .getItem("signature")
         /// .split("base64,")[1]
         /// .replace(/(?:\r\n|\r|\n)/g, "")
      );
    } else {
      setIsSign(false);
    }

    if (localStorage.getItem("signDate"))
      setSignDateBase64(
        localStorage.getItem("signDate").split(".000")[0].replace('"', "")
      );

    setEmail(JSON.parse(localStorage.getItem("userEmail")));


    
    }, []);


   
    const handleMouseDown = event => {
      setCoords({
        x: event.clientX - event.target.offsetLeft,
        y: event.clientY - event.target.offsetTop,
      });
     
      console.log('coords',coords);
      console.log('pageNumber', pageNumber);
      console.log('scroll', scroll);
      
   
      if (coords.x !== 0 || coords.y !==0) {
          if(!scroll) {
             handleSingleClick (pageNumber);
          } else{

            var pageNo = window.scrollY !== 0 ? Math.floor(window.scrollY/1287): 1; 
            if (window.scrollY % 1287){
                 pageNo = pageNo + 1;
               }
               console.log('window.scrollY',window.scrollY);
               console.log('window.scrollY % 1286', window.scrollY % 1286)
               console.log('pageNo', pageNo)

             handleSingleClick (pageNo);
          }
      } else{
        toast.info("Please click to sign again")
      }
        
    };


    useEffect(() => {
      
        
        downloadFile();
    
      if (signatureBase64) {
        setSignatureArrayBuffer(
          _base64ToArrayBuffer(
            signatureBase64 
            .split('base64,')[1]
            .replace(/(?:\r\n|\r|\n)/g, '').replace(/"/g, ""),
          ),
        );
      }
      
   
        setFilePath(newPdfPath);  
        setPdfArrayBuffer(_base64ToArrayBuffer(pdfBase64));
     
    
     setPdfEditMode(true);


    }, [signatureBase64, filePath ]);

    const downloadFile = () => {
         console.log('___downloadFile -> Start');  
          setFileDownloaded(true);
          readFile();
          console.log('___downloadFile -> File downloaded');
    };
    
    const readFile =  async () => {
      
      let getContractBase64 = '';
      let getContractBuffer = '';
      if (location ==='localhost') {
         getContractBase64=  `http://localhost:8000/api/contract/readContractBase64`;
         getContractBuffer=  `http://localhost:8000/api/contract/readContractBuffer`;
        } else{
          getContractBase64= `https://api.softestingca.com/api/contract/readContractBase64`;
          getContractBuffer= `https://api.softestingca.com/api/contract/readContractBuffer`
        }
      

      const pathFile = params.url.replace("https://api.softestingca.com", ".")
      console.log('pathFile' , pathFile)
      setFile(params.url);
       const res = await axios.get(getContractBase64, { params: { url:pathFile }  } 
        , 
        {
        responseType: 'json',
        mode: 'no-cors',
        } 
      )
    ///  .then(res => {
     
      
        setPdfBase64(res.data.replace(/(?:\r\n|\r|\n)/g, '').replace(/"/g, ""));
        const x = await _base64ToArrayBuffer(res.data.replace(/(?:\r\n|\r|\n)/g, '').replace(/"/g, ""));
        setPdfArrayBuffer(x);
      //  console.log('x',res.data); 
      // const pathFile = params.url.replace("https://api.softestingca.com", "./public")
      //let response = await fetch( pathFile )
      //   const data = response;
      //   console.log('data',data)
      //   const blobFile = response.clone().blob();
      //   let binaryData = [];
      //    binaryData.push(blobFile);
      //   const fileURL = window.URL.createObjectURL(new Blob(binaryData, {type: "application/zip"}));
      //   console.log(blobFile);
      //        setFile(fileURL);

    //          let reader = new FileReader();  
                      
    //           reader.onload = function () {
    //           const document = reader.result;
    //         //   setPdfBase64(document);
    //     //    setPdfBase64(data);
    //        };
    //     ///   if (fileURL)  reader.readAsDataURL(fileURL);
    //        reader.onerror = function (error) {
    //            console.log('Error: ', error);
    //          };

    };

    const _base64ToArrayBuffer =  (base64) => {
      
      let binaryString = decode(base64);
     
      let binaryLength = binaryString.length;
     
      let bytes = new Uint8Array(binaryLength);
     
      for (let i = 0; i < binaryLength; i++) {
        let ascii = binaryString.charCodeAt(i);
        bytes[i] = ascii;
      }
    
      return bytes;
    };
  
   
  
    const _uint8ToBase64 = (u8Arr) => {
      const CHUNK_SIZE = 0x8000; //arbitrary number
      let index = 0;
      const length = u8Arr.length;
      let result = '';
      let slice;
      while (index < length) {
        slice = u8Arr.subarray(index, Math.min(index + CHUNK_SIZE, length));
        result += String.fromCharCode.apply(null, slice);
        index += CHUNK_SIZE;
      }
      return encode(result);
    };



    const onItemClick =  ({ dest, pageIndex, pageNumber }) => {
       alert('Clicked an item from page ' + pageNumber + 'pageIndex' + pageIndex + 'dest' + dest)
    }
     const handleSingleClick = async (page) => {
      if (pdfEditMode) {
        setFilePath(null);
 
        const pdfDoc = await PDFDocument.load(pdfArrayBuffer);
        const pages = pdfDoc.getPages();
        const firstPage = pages[page - 1];
       
        const signatureImage = await pdfDoc.embedPng(signatureArrayBuffer);   
        setPageWidth(firstPage.getWidth());
        setPageHeight(firstPage.getHeight());
        
      //   console.log('signDateBase64', signDateBase64)
      //  console.log('firstPage.getWidth()', firstPage.getWidth());
      //  console.log('firstPage.getHeight()', firstPage.getHeight());
      //  console.log('x',x );
      //  console.log('y',y );
          firstPage.drawImage(signatureImage, {
            x: coords.x - 420, //// (firstPage.getWidth() * x) / pageWidth - 50, ////firstPage.getWidth() -270 , ///
            y: coords.y + 130,
            // firstPage.getHeight() -
            //     (firstPage.getHeight() * y) / pageHeight - 75,   ///firstPage.getHeight() -700 ,
            width: 150,
            height: 150,
            
          });
         
            firstPage.drawText(subTitleBase64, {
              x:  coords.x - 400, //firstPage.getWidth() -250, //(firstPage.getWidth() * x) / pageWidth - 10,
              y:  coords.y + 125, //firstPage.getHeight() -700,
                // firstPage.getHeight() -
                // (firstPage.getHeight() * y) / pageHeight -
                // 20,
              width: 80,
              height: 50,
              size:12,
          //    embedFont:subTitleImage,
            });
        ///.substring(0, signDateBase64.length-20
            firstPage.drawText(signDateBase64, {
              x: coords.x - 400, // firstPage.getWidth()-250 , /// (firstPage.getWidth() * x) / pageWidth - 20,
              y: coords.y + 110, // firstPage.getHeight()-720 ,
                // firstPage.getHeight() -
                // (firstPage.getHeight() * y) / pageHeight -
                // 50,
              width: 80,
              height: 50,
              size:9,
          
            });
            const pdfBytes = await pdfDoc.save();
            const pdfBase64 = _uint8ToBase64(pdfBytes);
                setPdfBytes2(pdfBytes);
                setPdfArrayBuffer(pdfBytes);
            //  savePdf();
            //  toast.info('It was signed');

            const pUrl = params.url;
            const path = `${
              pUrl.replace("https://api.softestingca.com", ".").split('.pdf')[0]
            }_${Date.now()}.pdf`;
            
            let url_file = '' ; 
      
            if (location ==='localhost') {
               url_file =  `http://localhost:8000/api/contract/writeContract`;
            }else{
               url_file = 'https://api.softestingca.com/api/contract/writeContract';
                }
                
      
            axios({
              method: "post",
              url: url_file, 
              data:  {pdf: pdfBase64, path: path, email: email , fileName: path.split("/")[3] },
            //  responseType: 'buffer',
            //  resolveBodyOnly:true,
          })
              .then(response => {
                  console.log('response file', response);
                 // setNewPdfPath(path);
                ///  setNewPdfSaved(true);
                 // setPdfBase64(pdfBase64);
                  toast.success("Document is saved.", { theme: "colored" });
              })
              .catch(error => {
                  console.log('error file', error); 
                  toast.error("Document failed to saved.", { theme: "dark" });
              })
      }

      };

     const savePdf = async () =>{
      if (!signDraw) {
        toast.info('Double click on the desired place of the document to be signed.');
        return;
      } 

      const pdf2Base64 = _uint8ToBase64(pdfBytes2);
     
      const pUrl = params.url;
      const path = `${
        pUrl.replace("https://api.softestingca.com", ".").split('.pdf')[0]
      }_${Date.now()}.pdf`;
      
      let url_file = '' ; 

      if (location ==='localhost') {
         url_file =  `http://localhost:8000/api/contract/writeContract`;
      }else{
         url_file = 'https://api.softestingca.com/api/contract/writeContract';
          }
          

      axios({
        method: "post",
        url: url_file, 
        data:  {pdf: pdf2Base64, path: path, email: email , fileName: path.split("/")[3] },
      //  responseType: 'buffer',
      //  resolveBodyOnly:true,
    })
        .then(response => {
            console.log('response file', response);
            // setNewPdfPath(path);
            // setNewPdfSaved(true);
            // setPdfBase64(pdf2Base64);
            toast.success("Document is saved.", { theme: "colored" });
        })
        .catch(error => {
            console.log('error file', error); 
            toast.error("Document failed to saved.", { theme: "dark" });
        })

     }
      
    

    const onDocumentLoadSuccess= ({numPages} ) => {
        setNumPages(numPages);
      }

   const goToPrevPage = () =>{
      setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);
      setScroll(false);
   }

   const goToNextPage = () =>{
      setPageNumber(
        pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
      );
      setScroll(false);
      }

   const showAllPage = () =>{
        setPageNumber(null);
        setScroll(true);
      }

    return(
    <div className={styles.modal}  style={{ backgroundImage: `url(${img})` }}  onMouseEnter={setOffMenu}>
      <div className={styles.container}>
				<button id = {styles.prev}   onClick={goToPrevPage}  disabled={pageNumber <= 1} >Prev</button>
				<button id = {styles.next}   onClick={goToNextPage}  disabled={pageNumber === numPages} >Next</button>
      {  
         pageNumber !== null && <p id = {styles.pageCounter}  >
             Page {pageNumber} of {numPages}
				</p>
      }
     { 
       pageNumber === null && <p id = {styles.pageCounter}  >
             All Pages
				</p>
      }
      </div> 
      <button id = {styles.allPages}   onClick={showAllPage}  >All Pages</button>
      {/* <button id = {styles.savePdf}   onClick={savePdf}  >Save Document</button> */}

      <div className ={styles.description}> Click on the desired place of the document to be signed <br/>
                                            and then click on &apos;Save Document&apos;.  </div>
      <Document className = {styles.pdf} file={params.url}  onLoadSuccess={onDocumentLoadSuccess}   >
        
          <Outline  className = {styles.outLine} onItemClick={onItemClick} 
            onLoadError={(e) => { console.log("error", e);}}
            onLoadSuccess={(pdf, e) => { console.log("success", pdf, e);}}
            onParseSuccess={(pdf, e) => { console.log("parse success", pdf, e);}} /> 
        

        {
          pageNumber === null  && Array.from(
             new Array(numPages), (el, index) => (
               <Page  scale = {1.3} width = {700} key={`page_${index + 1}`} pageNumber={index + 1}  wrap={false} onClick = {handleMouseDown}/>
            )
            )
        }
       {
          pageNumber !== null &&
           <Page  scale = {1.3} width = {700} pageNumber={pageNumber}  wrap={false}  onClick = {handleMouseDown}/>
      }

        {/* {[...Array(numPages).keys()].map((pageNum, index) => ( 
          <div key= {index}  >
          <Page bookmark ="Sign:" scale = {1.3} width = {700} pageNumber={pageNum + 1}  wrap={false} />
          </div>
        ))} */}
      </Document>
      
    </div>

    );
};

export default DocumentSign;
