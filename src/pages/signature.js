import React, { useContext, useState, useEffect, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory, Link, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignatureCanvas from "react-signature-canvas";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styles from "../styles/signature.module.scss";
import { Desktop, Tablet, Mobile, MobileX } from "../contexts/breakPoints";
import { VisibilityContext } from "../contexts/visibilityContext";
import { AuthContext } from "../contexts/authContext";
import { NavContext } from "../contexts/navContext";
import img from "../assets/abstract-blue.jpg";

// <title>SofTesting | Signature</title>;

const Signature = () => {
  const {
    setBlogShow,
  } = useContext(VisibilityContext);
  const { setOffMenu } = useContext(NavContext);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    isSubmiting,
    setValue,
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const [statusSubmit, setStatusSubmit] = useState("Submit");
  const [signDate, setSignDate] = useState(new Date());
  const [subTitle, setSubTitle] = useState(null);
  const [sign, setSign] = useState(null);
  const [contracts, setContracts] = useState([]);
  const [email, setEmail] = useState("");
  const [isSign, setIsSign] = useState(false);
  
  toast.configure();
  const { token } = useParams();

  let sigCanvasRef = useRef({});

  const history = useHistory();

  document.title = "SofTesting | Signature ";

  
  useEffect(() => {
    console.log(`issubmitting:${isSubmiting}`);
  }, [isSubmiting]);

  const location = window.location.hostname;
  let getUrl = "";
  let tokenUrl = "";

  if (location === "localhost") {
    getUrl = `http://${location}:8000/api/contract/getContracts`;
  } else {
    getUrl = `https://api.softestingca.com/api/contract/getContracts`;
  }
  
   if (location ==='localhost') {
        tokenUrl=`http://${location}:8000/api/contract/tokenCheck`
      } else{
        tokenUrl='https://api.softestingca.com/api/contract/tokenCheck'
      }

  useEffect(() => {
   
    if (localStorage.getItem("subTitle"))
      setSubTitle(localStorage.getItem("subTitle").replace(/"/g, ""));

    if (localStorage.getItem("signature")) {
      setIsSign(true);
      setSign(
        localStorage
          .getItem("signature")
          .split("base64,")[1]
          .replace(/(?:\r\n|\r|\n)/g, "")
      );
    } else {
      setIsSign(false);
    }

    if (localStorage.getItem("signDate"))
      setSignDate(
        localStorage.getItem("signDate").split(".000")[0].replace('"', "")
      );

    setValue("subTitle", subTitle);

    //  if (sigCanvas.current) {
    //    sigCanvas.current.fromDataURL(sign);
    //  }
    
    console.log('email', JSON.parse(localStorage.getItem("userEmail")));
    let emailW = JSON.parse(localStorage.getItem("userEmail"));
    if (emailW === null || emailW === undefined || emailW === "") {
      history.push("/contract/login");
    } else {
      console.log('token',  token);
      setEmail(emailW);

     axios({
        method: "post",
        url: tokenUrl,
        data: { token: token ?  token.substr(1): token }

      })
        .then((response) => {
          if (response.request.status === 200) {
            console.log('response.data.status', response);
          }
        })
        .catch(
          (ex) => {
            console.log('exex', ex);
              toast.error("You don't have permission to sign SofTesting documents!", { theme: "dark" });
              return;
          });


      axios.get(getUrl, { params: { email: emailW } }).then((res) => {
      //  const contractInfo = res.data;
        
         setContracts(res.data);
         console.log('mailresult', contracts)
        
      });
    }
   
  }, []);

  const viewDocument = async (e) => {
    if (!isSign) {
      toast.error("Please register your signature");
    }
    console.log(
      `pdf: https://api.softestingca.com/uploaded-files/` +
        email.replace(/"/g, "").trim().toLowerCase() + `_contract` +
        `/` + e
    );
    const documentUrl = `https://api.softestingca.com/uploaded-files/${email.replace(/"/g, '').trim().toLowerCase()}_contract/${e}`;
  

    await localStorage.removeItem("documentUrl");
    await localStorage.setItem('documentUrl',documentUrl);
    console.log(await localStorage.getItem('documentUrl'));
    //history.push("/contract/documentsign");
       // <Route path="/contract/documentsign" exact/>
      //            <DocumentSign uri= {documentUrl}/>
      //  </Route>   
  };

  const signClear = () => {
    if (sigCanvasRef.current) {
      sigCanvasRef.current.clear();
    }
    setValue("subTitle", "");
    setValue("signDate", "");
  };

  const formatIntoPng = () => {
    if (sigCanvasRef.current) {
      const dataURL = sigCanvasRef.current.toDataURL();
      return dataURL;
    }
  };

  const handleFrmLoad = () => {
    setBlogShow();
  };

  const submitControl = () => {
    if (isSubmiting === true) {
      toast.info("Please enter data completely!");
    }
  };
  const onSubmit = async (data, e) => {
    console.log("onSubmit");

    try {
      setStatusSubmit("Sending...");

      localStorage.setItem("signature", JSON.stringify(data.sigCanvas));
      localStorage.setItem("subTitle", JSON.stringify(data.subTitle));
      localStorage.setItem("signDate", JSON.stringify(data.signDate));
      setIsSign(true);

      let emailW = JSON.parse(localStorage.getItem("userEmail"));
      if (emailW === null || emailW === undefined || emailW === "") {
          history.push("/contract/login");
       } else {
         console.log('emailW', emailW);
         setEmail(emailW);
         axios.get(getUrl, { params: { email: emailW } }).then((res) => {
               
         setContracts(res.data);
        
      });
    }
      toast.success("signature is registered.", { theme: "colored" });
    } catch (ex) {
        console.log(ex);
        setIsSign(false);
        toast.error("Failed.", { theme: "dark" });
      }
    
    setStatusSubmit("Submit");
  };
  
  
  useEffect(() => {
    handleFrmLoad();
  }, []);

  return (
    <>
      <Desktop>
        <form
          className={styles.modal}
          onMouseEnter={setOffMenu}
          onSubmit={handleSubmit(onSubmit)}
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className={styles.container}>
            <h1 className={styles.h1}> SofTesting Signature</h1>
            <span id={styles.desc}></span>

            <input
              id={styles.subTitle}
              placeholder="subTitle..."
              className={`${
                errors.subTitle ? styles.errorBorder : styles.Border
              }`}
              defaultValue=""
              type="text"
              name="subTitle"
              {...register("subTitle")}
            />
            {errors.subTitle && (
              <p id={styles.cError} role="alert">
                {errors.subTitle.message}
              </p>
            )}

            <Controller
              control={control}
              name="signDate"
              defaultValue={signDate}
              {...register("signDate", {
                required: "*",
              })}
              className={`${
                errors.signDate ? styles.errorBorder : styles.Border
              }`}
              render={({ field: { onChange, onBlur, value } }) => (
                <DatePicker
                  id={styles.signDate}
                  placeholderText="Sign Date"
                  onChange={onChange}
                  onBlur={onBlur}
                  selected={value}
                />
              )}
            />
            {errors.signDate && (
              <p id={styles.sError} role="alert">
                {errors.signDate.message}
              </p>
            )}

            <Controller
            
              name="sigCanvas"
              control={control}
              {...register("sigCanvas", {
                required: "*",
              })}
              className={`${
                errors.sigCanvas ? styles.errorBorder : styles.Border
              }`}
              render={({ field }) => (
                <SignatureCanvas
                  ref={sigCanvasRef}
                  onEnd={() => field.onChange(formatIntoPng())}
                  penColor="black"
                  canvasProps={{
                    width: 350,
                    height: 300,

                    style: {
                      border: "1px solid green",
                      position: "absolute",
                      left: "50%",
                      top: "40px",
                      backgroundColor: "white",
                    },
                  }}
                />
              )}
            />
            {errors.sigCanvas && (
              <p id={styles.snError} role="alert">
                {errors.sigCanvas.message}
              </p>
            )}
             <p className={styles.canvas}>Signature Canvas</p>
            <button id={styles.clear} onClick={signClear}>
              Clear
            </button>

            <button
              type="submit"
              id={styles.submit}
              disabled={isSubmiting}
              onMouseDown={submitControl}
              onClick={handleSubmit(onSubmit)}
            >
              {statusSubmit}
            </button>
          </div>
      
         { (contracts && isSign )? ( 
            <div>
              <div className={styles.documentText}>
                SofTesting documents to sign
              </div>
              <div className={styles.emailText}>{email}</div>
              <div className={styles.discription}>
                Click On document name to sign:
              </div>
             
             <ul className={styles.document}>
             {
                 contracts.map((contract, index) =>
           
                   <li className={styles.fileName}
                       onClick={() =>  viewDocument(contract.contractName)}
                       key={contract._id}>
                      {/* <a   className={styles.linkFileName} href="data:application/pdf;base64,[base64]" download= {contract.contractName}> {contract.contractName}</a>    */}
                        <Link  to ="/contract/documentsign"  className={styles.linkFileName}> {contract.contractName}</Link>
                    </li>

                  )}  
              </ul>
            </div>
            ) : ( 
            <div className={styles.noDocumentText}>
              There is no SofTesting document to sign.<br />
              Please register your signature.
            </div>
           )} 
          </form>
      
      </Desktop>
      <Tablet>
      <form
          className={styles.modal}
          onMouseEnter={setOffMenu}
          onSubmit={handleSubmit(onSubmit)}
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className={styles.container}>
            <h1 className={styles.h1}> SofTesting Signature</h1>
            <span id={styles.desc}></span>

            <input
              id={styles.subTitle}
              placeholder="subTitle..."
              className={`${
                errors.subTitle ? styles.errorBorder : styles.Border
              }`}
              defaultValue=""
              type="text"
              name="subTitle"
              {...register("subTitle")}
            />
            {errors.subTitle && (
              <p id={styles.cError} role="alert">
                {errors.subTitle.message}
              </p>
            )}

            <Controller
              control={control}
              name="signDate"
              defaultValue={signDate}
              {...register("signDate", {
                required: "*",
              })}
              className={`${
                errors.signDate ? styles.errorBorder : styles.Border
              }`}
              render={({ field: { onChange, onBlur, value } }) => (
                <DatePicker
                  id={styles.signDate}
                  placeholderText="Sign Date"
                  onChange={onChange}
                  onBlur={onBlur}
                  selected={value}
                />
              )}
            />
            {errors.signDate && (
              <p id={styles.sError} role="alert">
                {errors.signDate.message}
              </p>
            )}

            <Controller
              name="sigCanvas"
              control={control}
              {...register("sigCanvas", {
                required: "*",
              })}
              className={`${
                errors.sigCanvas ? styles.errorBorder : styles.Border
              }`}
              render={({ field }) => (
                <SignatureCanvas
                  ref={sigCanvasRef}
                  onEnd={() => field.onChange(formatIntoPng())}
                  penColor="black"
                  canvasProps={{
                    width: 350,
                    height: 300,

                    style: {
                      border: "1px solid green",
                      position: "absolute",
                      left: "50%",
                      top: "40px",
                      backgroundColor: "white",
                    },
                  }}
                />
              )}
            />
            {errors.sigCanvas && (
              <p id={styles.snError} role="alert">
                {errors.sigCanvas.message}
              </p>
            )}
             <p className={styles.canvas}>Signature Canvas</p>
            <button id={styles.clear} onClick={signClear}>
              clear
            </button>

            <button
              type="submit"
              id={styles.submit}
              disabled={isSubmiting}
              onMouseDown={submitControl}
              onClick={handleSubmit(onSubmit)}
            >
              {statusSubmit}
            </button>
          </div>
      
         { isSign? ( 
            <div>
              <div className={styles.documentText}>
                SofTesting documents to sign
              </div>
              <div className={styles.emailText}>{email}</div>
              <div className={styles.discription}>
                Click On document name to sign:
              </div>
             
             <ul className={styles.document}>
             {
                 contracts.map((contract, index) =>
           
                   <li className={styles.fileName}
                       onClick={() =>viewDocument(contract.contractName)}
                       key={index}>
                      <Link to = "/contract/documentsign" className={styles.linkFileName} download> {contract.contractName}</Link>   
                    </li>

                  )}  
              </ul>
            </div>
            ) : ( 
            <div className={styles.noDocumentText}>
              There is no SofTesting document to sign
            </div>
           )} 
          </form>
      </Tablet>
      <Mobile>
      <form
          className={styles.modal}
          onMouseEnter={setOffMenu}
          onSubmit={handleSubmit(onSubmit)}
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className={styles.container}>
            <h1 className={styles.h1}> SofTesting Signature</h1>
            <span id={styles.desc}></span>

            <input
              id={styles.subTitle}
              placeholder="subTitle..."
              className={`${
                errors.subTitle ? styles.errorBorder : styles.Border
              }`}
              defaultValue=""
              type="text"
              name="subTitle"
              {...register("subTitle")}
            />
            {errors.subTitle && (
              <p id={styles.cError} role="alert">
                {errors.subTitle.message}
              </p>
            )}

            <Controller
              control={control}
              name="signDate"
              defaultValue={signDate}
              {...register("signDate", {
                required: "*",
              })}
              className={`${
                errors.signDate ? styles.errorBorder : styles.Border
              }`}
              render={({ field: { onChange, onBlur, value } }) => (
                <DatePicker
                  id={styles.signDate}
                  placeholderText="Sign Date"
                  onChange={onChange}
                  onBlur={onBlur}
                  selected={value}
                />
              )}
            />
            {errors.signDate && (
              <p id={styles.sError} role="alert">
                {errors.signDate.message}
              </p>
            )}

            <Controller
              name="sigCanvas"
              control={control}
              {...register("sigCanvas", {
                required: "*",
              })}
              className={`${
                errors.sigCanvas ? styles.errorBorder : styles.Border
              }`}
              render={({ field }) => (
                <SignatureCanvas
                  ref={sigCanvasRef}
                  onEnd={() => field.onChange(formatIntoPng())}
                  penColor="black"
                  canvasProps={{
                    width: 350,
                    height: 300,

                    style: {
                      border: "1px solid green",
                      position: "absolute",
                      left: "50%",
                      top: "40px",
                      backgroundColor: "white",
                    },
                  }}
                />
              )}
            />
            {errors.sigCanvas && (
              <p id={styles.snError} role="alert">
                {errors.sigCanvas.message}
              </p>
            )}
            <p className={styles.canvas}>Signature Canvas</p>
            <button id={styles.clear} onClick={signClear}>
              clear
            </button>

            <button
              type="submit"
              id={styles.submit}
              disabled={isSubmiting}
              onMouseDown={submitControl}
              onClick={handleSubmit(onSubmit)}
            >
              {statusSubmit}
            </button>
          </div>
      
         { contracts? ( 
            <div>
              <div className={styles.documentText}>
                SofTesting documents to sign
              </div>
              <div className={styles.emailText}>{email}</div>
              <div className={styles.discription}>
                Click On document name to sign:
              </div>
             
             <ul className={styles.document}>
             {
                 contracts.map((contract, index) =>
           
                   <li className={styles.fileName}
                       onClick={() =>viewDocument(contract.contractName)}
                       key={index}>
                      <Link to = "/contract/documentsign" className={styles.linkFileName} download> {contract.contractName}</Link>   
                    </li>

                  )}  
              </ul>
            </div>
            ) : ( 
            <div className={styles.noDocumentText}>
              There is no SofTesting document to sign
            </div>
           )} 
          </form>
      </Mobile>
      <MobileX>
      <form
          className={styles.modal}
          onMouseEnter={setOffMenu}
          onSubmit={handleSubmit(onSubmit)}
          style={{ backgroundImage: `url(${img})` }}
        >
          <div className={styles.container}>
            <h1 className={styles.h1}> SofTesting Signature</h1>
            <span id={styles.desc}></span>

            <input
              id={styles.subTitle}
              placeholder="subTitle..."
              className={`${
                errors.subTitle ? styles.errorBorder : styles.Border
              }`}
              defaultValue=""
              type="text"
              name="subTitle"
              {...register("subTitle")}
            />
            {errors.subTitle && (
              <p id={styles.cError} role="alert">
                {errors.subTitle.message}
              </p>
            )}

            <Controller
              control={control}
              name="signDate"
              defaultValue={signDate}
              {...register("signDate", {
                required: "*",
              })}
              className={`${
                errors.signDate ? styles.errorBorder : styles.Border
              }`}
              render={({ field: { onChange, onBlur, value } }) => (
                <DatePicker
                  id={styles.signDate}
                  placeholderText="Sign Date"
                  onChange={onChange}
                  onBlur={onBlur}
                  selected={value}
                />
              )}
            />
            {errors.signDate && (
              <p id={styles.sError} role="alert">
                {errors.signDate.message}
              </p>
            )}

            <Controller
              name="sigCanvas"
              control={control}
              {...register("sigCanvas", {
                required: "*",
              })}
              className={`${
                errors.sigCanvas ? styles.errorBorder : styles.Border
              }`}
              render={({ field }) => (
                <SignatureCanvas
                  ref={sigCanvasRef}
                  onEnd={() => field.onChange(formatIntoPng())}
                  penColor="black"
                  canvasProps={{
                    width: 350,
                    height: 300,

                    style: {
                      border: "1px solid green",
                      position: "absolute",
                      left: "50%",
                      top: "40px",
                      backgroundColor: "white",
                    },
                  }}
                />
              )}
            />
            {errors.sigCanvas && (
              <p id={styles.snError} role="alert">
                {errors.sigCanvas.message}
              </p>
            )}
             <p className={styles.canvas}>Signature Canvas</p>
            <button id={styles.clear} onClick={signClear}>
              clear
            </button>

            <button
              type="submit"
              id={styles.submit}
              disabled={isSubmiting}
              onMouseDown={submitControl}
              onClick={handleSubmit(onSubmit)}
            >
              {statusSubmit}
            </button>
          </div>
      
         { isSign? ( 
            <div>
              <div className={styles.documentText}>
                SofTesting documents to sign
              </div>
              <div className={styles.emailText}>{email}</div>
              <div className={styles.discription}>
                Click On document name to sign:
              </div>
             
             <ul className={styles.document}>
             {
                 contracts.map((contract, index) =>
           
                   <li className={styles.fileName}
                       onClick={() =>viewDocument(contract.contractName)}
                       key={index}>
                      <Link to = "/contract/documentsign" className={styles.linkFileName} download> {contract.contractName}</Link>   
                    </li>

                  )}  
              </ul>
            </div>
            ) : ( 
            <div className={styles.noDocumentText}>
              There is no SofTesting document to sign
            </div>
           )} 
          </form>
      </MobileX>
    </>
  );
};

export default Signature;
