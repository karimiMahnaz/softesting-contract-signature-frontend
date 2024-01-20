import React, { useContext, useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
//import FocusLock from 'react-focus-lock';
//import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import GridLayout from "react-grid-layout";
//import { OsTypes } from 'react-device-detect';
//import { Desktop, Tablet, Mobile, MobileX } from '../contexts/breakPoints';
import { VisibilityContext } from "../contexts/visibilityContext";

import styles from "../styles/contract.module.scss";

const Contract = () => {
  const [submitStatus, setSubmitStatus] = useState("Submit");
  const { contractFrmShow } =
    useContext(VisibilityContext);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    isSubmiting,
    control,
  } = useForm({
    mode: "onTouch",
    reValidateMode: "onChange",
  });

  
  toast.configure();

  // const handleFrmClose = () => {
  //   history.push("/");
  //   setFormsHide();
  // }

  document.title = "SofTesting | Contracts";

  
  const [ contract, setContract] = useState(null);
  const [ contractName, setContractName] = useState(null);
  const [ sign, setSign] = useState(null);
  const [ sendEmail, setSendEmail] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [contractInfo, setContractInfo] = useState([]);
  const [ signDate, setSignDate] = useState(new Date());
  const [ userRole, setUserRole] = useState(null);
  const [email, setEmail] = useState(null);

  const location = window.location.hostname;
  let getUrl = "";

  //console.log('osName' , osName())

  if (location === "localhost") {
    getUrl = `http://${location}:8000/api/contract/getContracts`;
  } else {
    getUrl = `https://api.softestingca.com/api/contract/getContracts`;
  }

  useEffect(() => {
    let emailW = "";
    setEmail(JSON.parse(localStorage.getItem("userEmail")));
    //console.log(JSON.parse(localStorage.getItem("userEmail")));
    if (JSON.parse(localStorage.getItem("userEmail"))) {
      emailW = JSON.parse(localStorage.getItem("userEmail"));
    }

    axios.get(getUrl, { params: { email: emailW } }).then((res) => {
      let info1 = [];
      for (let i = 0; i < res.data.length; i++) {
        info1[i] = res.data[i];
      }
      setContractInfo(info1);
            
      if (res.data.sign === true) {
        setValue("sign", true);
      } else {
        setValue("sign", false);
      }
    });
  }, []);

  const onSubmit = (data, e) => {
    setSubmitStatus("Sending");

    let url = "",
      url_file = "",
      key = "",
      url_fileName = "",
      urlRole = "";

    if (location === "localhost") {
      url = `http://${location}:8000/api/contract`;
      urlRole = `http://${location}:8000/api/user/userRole`;

      if (selectedFiles) {
        url_file = `http://${location}:8000/api/file`;
        key = "myFile";
        url_fileName = `http://${location}:8000/api/contract/updateContract`;
      }
    } else {
      url = `https://api.softestingca.com/api/contract`;
      urlRole = `https://api.softestingca.com/api/user/userRole`;

      if (selectedFiles) {
        url_file = "https://api.softestingca.com/api/file";
        key = "myFile";
        url_fileName = `https://api.softestingca.com/api/contract/updateContract`;
      }
    }
  
    if (email) {
      axios.get(urlRole, { params: { email } }).then((res) => {
        setUserRole(res.data);
        console.log("userRole", res.data);
        if (
          res.data !== "admin" || res.data === "" || 
          JSON.parse(localStorage.getItem("userEmail")) === null ||
          JSON.parse(localStorage.getItem("userEmail")) === ""
        ) {
          toast.error("Access Denied", { theme: "dark" });
          return;
        }
      });
    }
   ///console.log('data.signDate',data.signDate)
    if (data.email === "" || data.contractName === "" || data.signDate ==="") {
      toast.error("Please enter data", { theme: "dark" });
    } else {

      axios({
        method: "post",
        url: url,
        data: data,
      })
        .then(({ data, status }) => {
          if (status === 455) {
            toast.success("Access Denied", { theme: "dark" });
            return;
          }
          if (status === 200) {
            toast.success("Insert Is Done.", { theme: "colored" });
          } else
          if (status === 202) {
            toast.success("Update Is Done.", { theme: "colored" });
          } else {
            toast.success("failed to save profile.", { theme: "dark" });
            return;
          }
        })
        .catch((ex) => {
          toast.error("failed to save.", { theme: "dark" });
        });

      let formData = new FormData();
      formData.append(`${key}`, selectedFiles);

      if (selectedFiles) {
        axios({
          method: "post",
          url: url_file,
          data: formData,

          headers: {
            "content-type": "multipart/form-data",
            category: data.email.replace(" ", "").trim() +'_contract',
          },
        })
          .then((response) => {
            // console.log("response file", response);
            // console.log("data.email", data.email);
            // console.log("contractName", data.contractName);
            axios({
              method: "post",
              url: url_fileName,
              data: { email: data.email, contractName: data.contractName },
            })
              .then((response) => {
                if (response.status ===200){
                toast.success("contractName is updated.", {
                  theme: "colored",
                });
              } else{

                toast.error("contractName is not found.", {
                  theme: "dark",
                });

              }
              })
              .catch((error) => {
                toast.error("contractName failed to updated.", {
                  theme: "dark",
                });
              });
          })
          .catch((error) => {
            //  console.log("error file", error.response);
            //  console.log("error file", error.request);
            //  console.log("error file", error.message);
            toast.error("File failed to upload.", { theme: "dark" });
          });
      }

      setSubmitStatus("Done");
    }
  };

  const onChangeContract = (e) => {
    var contract = e.target.files[0];

    setSelectedFiles(e.target.files[0]);
    setContract(contract);
    setContractName(contract.name);
    setValue("contractName", contract.name);
  };

  const onClickContract = (e) => {
    setSelectedFiles(null);
  };

  const handleChangeSign = (e) => {
    setSign(e.target.value);
  };

   const handleChangeSendEmail = (e) =>{
      setSendEmail(e.target.value);
   }

  const handleItem = () => {
    setValue("contractName", contractInfo.contractName);
    setValue("email", contractInfo.email);
  };

  
  

  const layout = [{ i: "a", x: 0, y: 0, w: 1, h: 2, static: true }];

  return (
    <form
      className={contractFrmShow ? styles.container : styles.inactive}
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        id={styles.email}
        placeholder="Email Address"
        autoFocus
        className={`${errors.email ? styles.errorBorder : styles.Border}`}
        defaultValue=""
        type="email"
        name="email"
        tabIndex="0"
        {...register("email", {
          required: "*",
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "*",
          },
        })}
      />

      <input
        type={styles.text}
        id={styles.contractName}
        placeholder="Document Name"
        className={`${
          errors.contractName ? styles.errorBorder : styles.Border
        }`}
        defaultValue=""
        name="contractName"
        tabIndex="0"
        disabled
        {...register("contractName", {
          required: "*",
          minLength: (4, "*"),
          maxLength: (150, "*"),
        })}
      />

      <input
        type="file"
        placeholder="upload contract"
        id={styles.contract}
        multiple
        name="contractInput"
        {...register("contractInput")}
        accept=".pdf"
        onChange={onChangeContract}
        onClick={onClickContract}
      />

      <input
        id={styles.sign}
        name="sign"
        onChange={handleChangeSign}
        type="checkbox"
        {...register("sign")}
      />
      <span id={styles.signLabel}>Document Is Signed</span>

      <input
        id={styles.sendEmail}
        name="sendEmail"
        onChange={handleChangeSendEmail}
        type="checkbox"
        {...register("sendEmail")}
      />
      <span id={styles.sendEmailLabel}>Send Email</span>

     <div  className={styles.signDate}>
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
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <DatePicker
            id={styles.signDate}
            placeholderText="Sign Date"
            onChange={onChange}
            onBlur={onBlur}
            selected={value}
         
          />
        )}
      />
     </div>
      {errors.contractName && (
        <p id={styles.cError} role="alert">
          {errors.contractName.message}
        </p>
      )}
      {errors.email && (
        <p id={styles.eError} role="alert">
          {errors.email.message}
        </p>
      )}
      {errors.signDate && (
        <p id={styles.sError} role="alert">
          {errors.signDate.message}
        </p>
      )}
      <button
        type="submit"
        id={styles.submit}
        tabIndex="0"
        onClick={handleSubmit(onSubmit)}
        disabled={isSubmiting}
      >
        {submitStatus}
      </button>

      <GridLayout
        layout={layout}
        cols={1}
        rowHeight={120}
        width={600}
        className={styles.layout}
      >
        <div className={styles.item} key="a">
          <div className={styles.header}> SofTesting documents </div>
          {contractInfo.map((item) => (
            <div   key={item._id.toString()}
              className={item.sign ? styles.rowIsSigned : styles.rowIsnotSigned}
              onClick={handleItem}
            >
              {item.contractName}
              {item.sign ? " was signed." : " was not signed."}{" "}
              {item.signDate === "0" || item.signDate === null
                ? ""
                : item.signDate.toString().substr(0, item.signDate.length - 14)}
            </div>
          ))}
        </div>
      </GridLayout>
    </form>
  );
};
export default Contract;
