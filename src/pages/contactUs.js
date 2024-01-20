import React, { useContext, useState, useEffect } from "react";
import { useHistory, Redirect, withRouter } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Captcha from "react-numeric-captcha";

import styles from "../styles/contactUs.module.scss";
import { Desktop, Tablet, Mobile, MobileX } from "../contexts/breakPoints";
import { VisibilityContext } from "../contexts/visibilityContext";
import img from "../assets/abstract-blue.jpg";

///import path from '../utils/path';

const ContactUs = (props = "") => {
  const [submitStatus, setSubmitStatus] = useState("Submit");
  const [policy, setPolicy] = useState(false);
  const [dataForm, setDataForm] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [captchaSuccess, setCaptchaSuccess] = useState(false);

  toast.configure();

  const { contactFrmShow, setContactFrmShow, setAboutUsFrmShow, setFormsHide } =
    useContext(VisibilityContext);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isDirty, isValid },
    isSubmitSuccessful,
  } = useForm({
    mode: "onTouch",
    reValidateMode: "onChange",
  });

  // document.title= 'SofTesting | ContactUs ';

  let emailW = "", userNameW = "";


  useEffect(()=>{
    if (JSON.parse(localStorage.getItem('userEmail'))){ emailW= JSON.parse(localStorage.getItem('userEmail')); } 
       setValue('customerMail', emailW);
    },[] )
  
    useEffect(()=>{
      if (localStorage.getItem("userEmail") !== 'undefined' && 
      localStorage.getItem("userEmail") !== '' &&
      localStorage.getItem("userEmail") !== null) {
      if (JSON.parse(localStorage.getItem('userEmail'))){
         emailW= JSON.parse(localStorage.getItem('userEmail'));  
         setValue('customerMail', emailW);
        }
      }
        if (localStorage.getItem("userName") !== 'undefined' && 
            localStorage.getItem("userName") !== '' &&
            localStorage.getItem("userName") !== null) {
         if (JSON.parse(localStorage.getItem("userName"))) {
               userNameW = JSON.parse(localStorage.getItem("userName"));
               setValue("customerName", userNameW); 
             }
            }
      },[] )
      
  let history = useHistory();
  const handleFrmClose = () => {
    history.push("/");
    setFormsHide();
  };

  const handleChangeB = (e) => {
    setPolicy(!e.target.checked);
  };
  const handleChange = (e) => {
    setPolicy(!e.target.checked);
  };

  // useEffect(() => {
  //     setTimeout(() => setUser({ title: 'Mr', firstName: 'Frank', lastName: 'Murphy' }), 1000);
  // }, []);

  // useEffect(() => {
  //     reset(user);
  // }, [user]);

  const onChange = (e) => {
    setSelectedFiles(e.target.files);
  };
  const onClick = () => {
    setSelectedFiles(null);
  };
  const onChangeCustomerName = (e) => {
    setName(e.target.CustomerName);
    console.log(name);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.email);
    console.log(email);
  };
  const onChangePhone = (e) => {
    setPhone(e.target.phone);
  };
  const onChangeMessage = (e) => {
    setMessage(e.target.message);
  };

  const onChangeCaptcha = (status) => {
    if (status) {
      setCaptchaSuccess(status);
    }
    console.log(captchaSuccess);
  };

  const onSubmit = (data, e) => {
    if (!captchaSuccess) {
      toast.info("Please enter security code", { theme: "dark" });
    } else {
      setSubmitStatus("Sending...");

      //    console.log(  "onSubmitFn:",   data,   "imageFile:",  JSON.stringify(data).current );

      //   const fd = new FormData();
      //   for (var key in JSON.stringify(data)) {
      //     fd.append(key, data[key]); // formdata doesn't take objects
      //   }
      //    console.log(fd);
      //   fd.append(
      //     "fileInput",
      //     JSON.stringify(data).current.fileInput,
      //     JSON.stringify(data).fileInput.current.files[0].name
      //   );

      //   const storageRef = app.storage().ref();
      //   const fileRef =storageRef.child(data.image[0].name);
      //   fileRef.put(data.image[0]).then(()=> {
      //     console.log("Uploaded a file")
      // })
      let formData = new FormData();
      // let formData1 = new FormData();
      // console.log('name', data.customerName, name);
      //  console.log('email',data.customerMail, email);
      //  formData1.append('customerName', data.customerName);
      //  formData1.append('customerMail', data.customerMail);
      //  formData1.append('Phone', data.phone);
      //  formData1.append('customerMessage', data.customerMessage);
      //  formData1.append('files', selectedFiles);

      //console.log(formData1.entries(),JSON.stringify(formData1))
      setDataForm(data);
      const location = window.location.hostname;
      let url_file = "",
        key = "";

      let url = "";
      // if (location === "localhost") {
      //   url = `http://${location}:8000/api/email`;

      //   if (selectedFiles.length > 1) {
      //     url_file = `http://${location}:8000/api/file/multi`;
      //     key = "myFiles";
      //   } else {
      //     url_file = `http://${location}:8000/api/file`;
      //     key = "myFile";
      //   }
      // } else {
        url = `https://api.softestingca.com/api/email`;

        if (selectedFiles.length > 1) {
          url_file = "https://api.softestingca.com/api/file/multi";
          key = "myFiles";
        } else {
          url_file = "https://api.softestingca.com/api/file";
          key = "myFile";
        }
   //   }

      // if (selectedFiles.length > 1) {
      //     url_file = `http://${location}:8000/api/file/multi`
      //     key = 'myFiles';
      // }
      // else {
      //     url_file = `http://${location}:8000/api/file`
      //     key = 'myFile';
      // }

      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append(`${key}`, selectedFiles[i]);
      }

      if (selectedFiles.length > 0) {
        //data.customerMail
        //'photos'
        console.log("selectedFiles", selectedFiles)
        console.log('formData', formData)
        console.log(data.customerMail.replace(" ", ""));
        axios({
          method: "post",
          url: url_file,
          data: formData,
          ///     mode:'same-origin',
          //     withCredentials: true,
          headers: {
            //     'Access-Control-Allow-Origin' : 'https://softestingca.com',
            "content-type": "multipart/form-data",
            category: data.customerMail.replace(" ", "").trim(),
          },
        })
          .then((response) => {
            console.log("response file", response);
            toast.success("File is uploaded.", { theme: "colored" });
          })
          .catch((error) => {
            console.log("error file", error.response);
            console.log("error file", error.request);
            console.log("error file", error.message);
            toast.error("File failed to upload.", { theme: "dark" });
          });
      }

      axios({
        method: "post",
        url: url,
        data: data,
        ///         mode:'same-origin',
        //     withCredentials: true,
        //   headers:{
        // 'Content-Type': 'application/json',
        // 'Accept': 'application/json',
        //      'Access-Control-Allow-Origin' : 'https://softestingca.com',
        //     'X-Requested-With': 'XMLHttpRequest',
        //   }
      }).then((response) => {
        if (response.data.status === "Message Sent") {
          toast.success("Message Sent.", { theme: "colored" });
          reset();
        } else if (response.data.status === "ERROR") {
          toast.success("Message failed to send.", { theme: "dark" });
        }
      });

      setSubmitStatus("Submit");
    }
  };

  return props.src === "body" ? (
    <>
      <Desktop>
        <form id={styles.contactUs} onSubmit={handleSubmit(onSubmit)}>
          <h3 id={styles.title}> TALK TO US</h3>
          <p id={styles.note}>
            Please leave your details below and we’ll call you back in the next
            24 hours
          </p>

          <input
            placeholder="Enter Full Name"
            id={styles.customerName}
            className={`${
              errors.customerName ? styles.errorBorder : styles.Border
            }`}
            defaultValue=""
            type="text"
            name="customerName"
            onChange={onChangeCustomerName}
            {...register("customerName", {
              required: "*",
              minLength: (10, "*"),
              maxLength: (120, "*"),
              pattern: {
                value: /^([a-zA-Z\s])+$/,
                message: "*",
              },
            })}
          />

          {/*     /^[a-zA-Z]*$/  */}

          <input
            placeholder="Enter E-mail Address"
            id={styles.customerMail}
            className={`${
              errors.customerMail ? styles.errorBorder : styles.Border
            }`}
            defaultValue=""
            type="email"
            name="customerMail"
            onChange={onChangeEmail}
            {...register("customerMail", {
              required: "*",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "*",
              },
            })}
          />
          <input
            placeholder="Enter phone Number(with country code)"
            id={styles.phone}
            className={`${errors.phone ? styles.errorBorder : styles.Border}`}
            defaultValue=""
            type="phone"
            name="phone"
            onChange={onChangePhone}
            {...register("phone", {
              required: "*",
              pattern: {
                value:
                  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
                message: "*",
              },
            })}
          />

          <textarea
            id={styles.customerMessage}
            placeholder="Your Message"
            className={`${
              errors.customerMessage ? styles.errorBorder : styles.Border
            }`}
            defaultValue=""
            type="text"
            name="customerMessage"
            onChange={onChangeMessage}
            {...register("customerMessage")}
          />

          <label id={styles.rf}>You Can Upload your Documents</label>
          <input
            type="file"
            placeholder="Your File"
            id={styles.rfp}
            multiple
            name="fileInput"
            {...register("fileInput")}
            accept=" .pdf, .jpeg, .jpg, .png, .zip "
            onChange={onChange}
            onClick={onClick}
          />

          <input
            type="checkbox"
            id={styles.policy}
            name="policy"
            onClick={(e) => handleChangeB(e)}
            {...register("policy", { required: "*" })}
          />

          <label id={styles.confirm}>
            {" "}
            I agree of the Terms of use and Privacy policy{" "}
          </label>

          {errors.customerName && (
            <p id={styles.nError} role="alert">
              {errors.customerName.message}
            </p>
          )}
          {errors.customerMail && (
            <p id={styles.mError} role="alert">
              {" "}
              {errors.customerMail.message}
            </p>
          )}
          {errors.phone && (
            <p id={styles.pError} role="alert">
              {" "}
              {errors.phone.message}
            </p>
          )}

          {(errors.customerName ||
            errors.customerMail ||
            errors.phone ||
            policy) && (
            <p id={styles.dError} role="alert">
              {" "}
              Please fill out all Fields!{" "}
            </p>
          )}
          <div className={styles.rnc}>
            <Captcha onChange={onChangeCaptcha} />
          </div>
          <button
            id={styles.submit}
            className={`${
              !policy && isSubmitSuccessful ? styles.allow : styles.notallow
            }`}
            type="submit"
            onClick={handleSubmit(onSubmit)}
            disabled={policy || isSubmitSuccessful}
          >
            {submitStatus}
          </button>
        </form>
      </Desktop>

      <Tablet>
        <form id={styles.contactUs} onSubmit={handleSubmit(onSubmit)}>
          <h1 id={styles.title}> TALK TO US</h1>
          <p id={styles.note}>
            Please leave your details below and we’ll call you back in the next
            24 hours
          </p>

          <input
            placeholder="Enter Full Name"
            id={styles.customerName}
            className={`${
              errors.customerName ? styles.errorBorder : styles.Border
            }`}
            defaultValue=""
            type="text"
            name="customerName"
            onChange={onChangeCustomerName}
            {...register("customerName", {
              required: "*",
              minLength: (10, "*"),
              maxLength: (120, "*"),
              pattern: {
                value: /^([a-zA-Z\s])+$/,
                message: "*",
              },
            })}
          />

          {/*     /^[a-zA-Z]*$/  */}

          <input
            id={styles.customerMail}
            className={`${
              errors.customerMail ? styles.errorBorder : styles.Border
            }`}
            defaultValue=""
            type="email"
            placeholder="Enter Email Address"
            name="customerMail"
            onChange={onChangeEmail}
            {...register("customerMail", {
              required: "*",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "*",
              },
            })}
          />
          <input
            placeholder="Enter phone Number(with country code)"
            id={styles.phone}
            className={`${errors.phone ? styles.errorBorder : styles.Border}`}
            defaultValue=""
            type="phone"
            name="phone"
            onChange={onChangePhone}
            {...register("phone", {
              required: "*",
              pattern: {
                value:
                  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
                message: "*",
              },
            })}
          />

          <textarea
            id={styles.customerMessage}
            placeholder="Your Message"
            className={`${
              errors.customerMessage ? styles.errorBorder : styles.Border
            }`}
            defaultValue=""
            type="text"
            name="customerMessage"
            onChange={onChangeMessage}
            {...register("customerMessage")}
          />

          <label id={styles.rf}>you can upload your documents</label>
          <input
            type="file"
            placeholder="Your File"
            id={styles.rfp}
            multiple
            name="fileInput"
            {...register("fileInput")}
            accept=" .pdf, .jpeg, .jpg, .png, .zip "
            onChange={onChange}
            onClick={onClick}
          />

          <input
            type="checkbox"
            id={styles.policy}
            name="policy"
            onClick={(e) => handleChangeB(e)}
            {...register("policy", { required: "*" })}
          />

          <label id={styles.confirm}>
            {" "}
            I agree of the terms of use and privacy policy{" "}
          </label>

          {errors.customerName && (
            <p id={styles.nError} role="alert">
              {errors.customerName.message}
            </p>
          )}
          {errors.customerMail && (
            <p id={styles.mError} role="alert">
              {" "}
              {errors.customerMail.message}
            </p>
          )}
          {errors.phone && (
            <p id={styles.pError} role="alert">
              {" "}
              {errors.phone.message}
            </p>
          )}

          {(errors.customerName ||
            errors.customerMail ||
            errors.phone ||
            policy) && (
            <p id={styles.dError} role="alert">
              {" "}
              Please fill out all Fields!{" "}
            </p>
          )}
          <div className={styles.rnc}>
            <Captcha onChange={onChangeCaptcha} />
          </div>
          <button
            id={styles.submit}
            className={`${
              !policy && isSubmitSuccessful ? styles.allow : styles.notallow
            }`}
            type="submit"
            onClick={handleSubmit(onSubmit)}
            disabled={policy || isSubmitSuccessful}
          >
            {submitStatus}
          </button>
        </form>
      </Tablet>
      <Mobile>
        <form id={styles.contactUs} onSubmit={handleSubmit(onSubmit)}>
          <h1 id={styles.title}> TALK TO US</h1>
          <p id={styles.note}>
            Please leave your details below and we’ll call you back in the next
            24 hours
          </p>

          <input
            placeholder="Enter Full Name"
            id={styles.customerName}
            className={`${
              errors.customerName ? styles.errorBorder : styles.Border
            }`}
            defaultValue=""
            type="text"
            name="customerName"
            onChange={onChangeCustomerName}
            {...register("customerName", {
              required: "*",
              minLength: (10, "*"),
              maxLength: (120, "*"),
              pattern: {
                value: /^([a-zA-Z\s])+$/,
                message: "*",
              },
            })}
          />

          {/*     /^[a-zA-Z]*$/  */}

          <input
            id={styles.customerMail}
            className={`${
              errors.customerMail ? styles.errorBorder : styles.Border
            }`}
            defaultValue=""
            type="email"
            placeholder="Enter Email Address"
            name="customerMail"
            onChange={onChangeEmail}
            {...register("customerMail", {
              required: "*",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "*",
              },
            })}
          />
          <input
            placeholder="Enter phone Number(with country code)"
            id={styles.phone}
            className={`${errors.phone ? styles.errorBorder : styles.Border}`}
            defaultValue=""
            type="phone"
            name="phone"
            onChange={onChangePhone}
            {...register("phone", {
              required: "*",
              pattern: {
                value:
                  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
                message: "*",
              },
            })}
          />

          <textarea
            id={styles.customerMessage}
            placeholder="Your Message"
            className={`${
              errors.customerMessage ? styles.errorBorder : styles.Border
            }`}
            defaultValue=""
            type="text"
            name="customerMessage"
            onChange={onChangeMessage}
            {...register("customerMessage")}
          />

          {/* <label id={styles.rf} >You Can Upload your Documents</label> */}
          <input
            type="file"
            placeholder="Your File"
            id={styles.rfp}
            multiple
            name="fileInput"
            {...register("fileInput")}
            accept=" .pdf, .jpeg, .jpg, .png, .zip "
            onChange={onChange}
            onClick={onClick}
          />

          <input
            type="checkbox"
            id={styles.policy}
            name="policy"
            onClick={(e) => handleChangeB(e)}
            {...register("policy", { required: "*" })}
          />

          <label id={styles.confirm}> I agree privacy policy </label>

          {errors.customerName && (
            <p id={styles.nError} role="alert">
              {errors.customerName.message}
            </p>
          )}
          {errors.customerMail && (
            <p id={styles.mError} role="alert">
              {" "}
              {errors.customerMail.message}
            </p>
          )}
          {errors.phone && (
            <p id={styles.pError} role="alert">
              {" "}
              {errors.phone.message}
            </p>
          )}

          {(errors.customerName ||
            errors.customerMail ||
            errors.phone ||
            policy) && (
            <p id={styles.dError} role="alert">
              {" "}
              Please fill out all Fields!{" "}
            </p>
          )}
          <div className={styles.rnc}>
            <Captcha onChange={onChangeCaptcha} />
          </div>
          <button
            id={styles.submit}
            className={`${
              !policy && isSubmitSuccessful ? styles.allow : styles.notallow
            }`}
            type="submit"
            onClick={handleSubmit(onSubmit)}
            disabled={policy || isSubmitSuccessful}
          >
            {submitStatus}
          </button>
        </form>
      </Mobile>
      <MobileX>
        <form id={styles.contactUs} onSubmit={handleSubmit(onSubmit)}>
          <h1 id={styles.title}> TALK TO US</h1>
          <p id={styles.note}>
            Please leave your details below and we’ll call you back in the next
            24 hours
          </p>

          <input
            placeholder="Enter Full Name"
            id={styles.customerName}
            className={`${
              errors.customerName ? styles.errorBorder : styles.Border
            }`}
            defaultValue=""
            type="text"
            name="customerName"
            onChange={onChangeCustomerName}
            {...register("customerName", {
              required: "*",
              minLength: (10, "*"),
              maxLength: (120, "*"),
              pattern: {
                value: /^([a-zA-Z\s])+$/,
                message: "*",
              },
            })}
          />

          {/*     /^[a-zA-Z]*$/  */}

          <input
            id={styles.customerMail}
            className={`${
              errors.customerMail ? styles.errorBorder : styles.Border
            }`}
            defaultValue=""
            type="email"
            placeholder="Enter Email Address"
            name="customerMail"
            onChange={onChangeEmail}
            {...register("customerMail", {
              required: "*",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "*",
              },
            })}
          />
          <input
            placeholder="Enter phone Number(with country code)"
            id={styles.phone}
            className={`${errors.phone ? styles.errorBorder : styles.Border}`}
            defaultValue=""
            type="phone"
            name="phone"
            onChange={onChangePhone}
            {...register("phone", {
              required: "*",
              pattern: {
                value:
                  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
                message: "*",
              },
            })}
          />

          <textarea
            id={styles.customerMessage}
            placeholder="Your Message"
            className={`${
              errors.customerMessage ? styles.errorBorder : styles.Border
            }`}
            defaultValue=""
            type="text"
            name="customerMessage"
            onChange={onChangeMessage}
            {...register("customerMessage")}
          />

          {/* <label id={styles.rf}>You Can Upload your Documents</label> */}
          <input
            type="file"
            placeholder="Your File"
            id={styles.rfp}
            multiple
            name="fileInput"
            {...register("fileInput")}
            accept=" .pdf, .jpeg, .jpg, .png, .zip "
            onChange={onChange}
            onClick={onClick}
          />

          <input
            type="checkbox"
            id={styles.policy}
            name="policy"
            onClick={(e) => handleChangeB(e)}
            {...register("policy", { required: "*" })}
          />

          <label id={styles.confirm}>I agree policy </label>

          {errors.customerName && (
            <p id={styles.nError} role="alert">
              {errors.customerName.message}
            </p>
          )}
          {errors.customerMail && (
            <p id={styles.mError} role="alert">
              {" "}
              {errors.customerMail.message}
            </p>
          )}
          {errors.phone && (
            <p id={styles.pError} role="alert">
              {" "}
              {errors.phone.message}
            </p>
          )}

          {(errors.customerName ||
            errors.customerMail ||
            errors.phone ||
            policy) && (
            <p id={styles.dError} role="alert">
              {" "}
              Please fill out all Fields!{" "}
            </p>
          )}
          <div className={styles.rnc} style={{ width: "180px", left: "150px" }}>
            <Captcha onChange={onChangeCaptcha} />
          </div>
          <button
            id={styles.submit}
            className={`${
              !policy && isSubmitSuccessful ? styles.allow : styles.notallow
            }`}
            type="submit"
            onClick={handleSubmit(onSubmit)}
            disabled={policy || isSubmitSuccessful}
          >
            {submitStatus}
          </button>
        </form>
      </MobileX>
    </>
  ) : (
    <>
      <Desktop>
        <form
          id={styles.modalContactUs}
          onSubmit={handleSubmit(onSubmit)}
          style={{ backgroundImage: `url(${img})` }}
          className={
            contactFrmShow
              ? props.src == "REQUEST A PROPOSAL"
                ? styles.fp
                : props.src == "JOIN US"
                ? styles.fj
                : styles.modalContactUs
              : styles.inactive
          }
        >
          <div className={styles.container}>
            <span
              id={styles.closeBtn}
              onClick={handleFrmClose}
              className={styles.closeBtn}
            >
              <svg id={styles.svg}>
                <line id={styles.line1} x1="0" y1="0" x2="20" y2="20" />
                <line id={styles.line2} x1="20" y1="0" x2="0" y2="20" />
              </svg>
            </span>
            <h1 id={styles.title}>
              <b> {props.src} </b>
            </h1>

            <input
              placeholder="Enter Full Name"
              id={styles.customerName}
              className={`${
                errors.customerName ? styles.errorBorder : styles.Border
              }`}
              defaultValue=""
              type="text"
              name="customerName"
              onChange={onChangeCustomerName}
              {...register("customerName", {
                required: "*",
                minLength: (10, "*"),
                maxLength: (120, "*"),
                pattern: {
                  value: /^([a-zA-Z\s])+$/,
                  message: "*",
                },
              })}
            />

            <input
              id={styles.customerMail}
              onChange={onChangeEmail}
              className={`${
                errors.customerMail ? styles.errorBorder : styles.Border
              }`}
              defaultValue=""
              type="email"
              placeholder="Enter Email Address"
              name="customerMail"
              {...register("customerMail", {
                required: "*",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "*",
                },
              })}
            />

            <input
              placeholder="Enter phone Number(with country code)"
              id={styles.phone}
              
              className={`${errors.phone ? styles.errorBorder : styles.Border}`}
              defaultValue=""
              type="phone"
              name="phone"
              onChange={onChangePhone}
              {...register("phone", {
                required: "*",
                pattern: {
                  value:
                    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
                  message: "*",
                },
              })}
            />

            <textarea
              id={styles.customerMessage}
              placeholder="Your Message"
              className={`${
                errors.customerMessage ? styles.errorBorder : styles.Border
              }`}
              defaultValue=""
              type="text"
              name="customerMessage"
              onChange={onChangeMessage}
              {...register("customerMessage")}
            />

            <label id={styles.rf}>You Can Upload your Documents</label>
            <input
              type="file"
              placeholder="Your File"
              id={styles.rfp}
              name="fileInput"
              {...register("fileInput")}
              multiple
              accept=" .pdf, .jpg, .jpeg, .png, .zip "
              onChange={onChange}
              onClick={onClick}
            />

            <input
              type="checkbox"
              id={styles.policy}
              name="policy"
              defaultValue={false}
              onClick={(e) => handleChange(e)}
              {...register("policy", { required: "*" })}
            />
            <label id={styles.confirm}>
              I agree of the Terms of use and privacy policy{" "}
            </label>

            {errors.customerName && (
              <p id={styles.nError} role="alert">
                {errors.customerName.message}
              </p>
            )}
            {errors.customerMail && (
              <p id={styles.mError} role="alert">
                {" "}
                {errors.customerMail.message}
              </p>
            )}
            {errors.phone && (
              <p id={styles.pError} role="alert">
                {" "}
                {errors.phone.message}
              </p>
            )}

            {(errors.customerName ||
              errors.customerMail ||
              errors.phone ||
              policy) && (
              <p id={styles.dError} role="alert">
                {" "}
                Please fill out all Fields!{" "}
              </p>
            )}
            <div className={styles.rnc}>
              <Captcha onChange={onChangeCaptcha} />
            </div>
            <button
              id={styles.submit}
              type="submit"
              className={`${
                !policy && isSubmitSuccessful ? styles.allow : styles.notallow
              }`}
              onClick={handleSubmit(onSubmit)}
              disabled={policy || isSubmitSuccessful}
            >
              {submitStatus}
            </button>
          </div>
        </form>
      </Desktop>
      <Tablet>
        <form
          id={styles.modalContactUs}
          onSubmit={handleSubmit(onSubmit)}
          style={{ backgroundImage: `url(${img})` }}
          className={
            contactFrmShow
              ? props.src == "REQUEST A PROPOSAL"
                ? styles.fp
                : props.src == "JOIN US"
                ? styles.fj
                : styles.modalContactUs
              : styles.inactive
          }
        >
          <div className={styles.container}>
            <span
              id={styles.closeBtn}
              onClick={handleFrmClose}
              className={styles.closeBtn}
            >
              <svg id={styles.svg}>
                <line id={styles.line1} x1="0" y1="0" x2="20" y2="20" />
                <line id={styles.line2} x1="20" y1="0" x2="0" y2="20" />
              </svg>
            </span>
            <h1 id={styles.title}>
              <b> {props.src} </b>
            </h1>

            <input
              placeholder="Enter Full Name"
              id={styles.customerName}
              className={`${
                errors.customerName ? styles.errorBorder : styles.Border
              }`}
              defaultValue=""
              type="text"
              name="customerName"
              onChange={onChangeCustomerName}
              {...register("customerName", {
                required: "*",
                minLength: (10, "*"),
                maxLength: (120, "*"),
                pattern: {
                  value: /^([a-zA-Z\s])+$/,
                  message: "*",
                },
              })}
            />

            <input
              id={styles.customerMail}
              onChange={onChangeEmail}
              className={`${
                errors.customerMail ? styles.errorBorder : styles.Border
              }`}
              defaultValue=""
              type="email"
              placeholder="Enter Email Address"
              name="customerMail"
              {...register("customerMail", {
                required: "*",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "*",
                },
              })}
            />

            <input
              placeholder="Enter phone Number(with country code)"
              id={styles.phone}
              
              className={`${errors.phone ? styles.errorBorder : styles.Border}`}
              defaultValue=""
              type="phone"
              name="phone"
              onChange={onChangePhone}
              {...register("phone", {
                required: "*",
                pattern: {
                  value:
                    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
                  message: "*",
                },
              })}
            />

            <textarea
              id={styles.customerMessage}
              placeholder="Your Message"
              className={`${
                errors.customerMessage ? styles.errorBorder : styles.Border
              }`}
              defaultValue=""
              type="text"
              name="customerMessage"
              onChange={onChangeMessage}
              {...register("customerMessage")}
            />

            <label id={styles.rf}>You Can Upload your Documents</label>
            <input
              type="file"
              placeholder="Your File"
              id={styles.rfp}
              name="fileInput"
              {...register("fileInput")}
              multiple
              accept=" .pdf, .jpg, .jpeg, .png, .zip "
              onChange={onChange}
              onClick={onClick}
            />

            <input
              type="checkbox"
              id={styles.policy}
              name="policy"
              defaultValue={false}
              onClick={(e) => handleChange(e)}
              {...register("policy", { required: "*" })}
            />
            <label id={styles.confirm}>
              {" "}
              I agree of the terms of use and privacy policy{" "}
            </label>

            {errors.customerName && (
              <p id={styles.nError} role="alert">
                {errors.customerName.message}
              </p>
            )}
            {errors.customerMail && (
              <p id={styles.mError} role="alert">
                {" "}
                {errors.customerMail.message}
              </p>
            )}
            {errors.phone && (
              <p id={styles.pError} role="alert">
                {" "}
                {errors.phone.message}
              </p>
            )}

            {(errors.customerName ||
              errors.customerMail ||
              errors.phone ||
              policy) && (
              <p id={styles.dError} role="alert">
                {" "}
                Please fill out all Fields!{" "}
              </p>
            )}
            <div className={styles.rnc}>
              <Captcha onChange={onChangeCaptcha} />
            </div>
            <button
              id={styles.submit}
              type="submit"
              className={`${
                !policy && isSubmitSuccessful ? styles.allow : styles.notallow
              }`}
              onClick={handleSubmit(onSubmit)}
              disabled={policy || isSubmitSuccessful}
            >
              {submitStatus}
            </button>
          </div>
        </form>
      </Tablet>
      <Mobile>
        <form
          id={styles.modalContactUs}
          onSubmit={handleSubmit(onSubmit)}
          style={{ backgroundImage: `url(${img})` }}
          className={
            contactFrmShow
              ? props.src == "REQUEST A PROPOSAL"
                ? styles.fp
                : props.src == "JOIN US"
                ? styles.fj
                : styles.modalContactUs
              : styles.inactive
          }
        >
          <div className={styles.container}>
            <span
              id={styles.closeBtn}
              onClick={handleFrmClose}
              className={styles.closeBtn}
            >
              <svg id={styles.svg}>
                <line id={styles.line1} x1="0" y1="0" x2="20" y2="20" />
                <line id={styles.line2} x1="20" y1="0" x2="0" y2="20" />
              </svg>
            </span>
            <h1 id={styles.title}>
              <b> {props.src} </b>
            </h1>

            <input
              placeholder="Enter Full Name"
              id={styles.customerName}
              className={`${
                errors.customerName ? styles.errorBorder : styles.Border
              }`}
              defaultValue=""
              type="text"
              name="customerName"
              onChange={onChangeCustomerName}
              {...register("customerName", {
                required: "*",
                minLength: (10, "*"),
                maxLength: (120, "*"),
                pattern: {
                  value: /^([a-zA-Z\s])+$/,
                  message: "*",
                },
              })}
            />

            <input
              id={styles.customerMail}
              onChange={onChangeEmail}
              className={`${
                errors.customerMail ? styles.errorBorder : styles.Border
              }`}
              defaultValue=""
              type="email"
              placeholder="Enter Email Address"
              name="customerMail"
              {...register("customerMail", {
                required: "*",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "*",
                },
              })}
            />

            <input
              placeholder="Enter phone Number(with country code)"
              id={styles.phone}
              
              className={`${errors.phone ? styles.errorBorder : styles.Border}`}
              defaultValue=""
              type="phone"
              name="phone"
              onChange={onChangePhone}
              {...register("phone", {
                required: "*",
                pattern: {
                  value:
                    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
                  message: "*",
                },
              })}
            />

            <textarea
              id={styles.customerMessage}
              placeholder="Your Message"
              className={`${
                errors.customerMessage ? styles.errorBorder : styles.Border
              }`}
              defaultValue=""
              type="text"
              name="customerMessage"
              onChange={onChangeMessage}
              {...register("customerMessage")}
            />

            {/* <label id={styles.rf}>You Can Upload your Documents</label> */}
            <input
              type="file"
              placeholder="Your File"
              id={styles.rfp}
              name="fileInput"
              {...register("fileInput")}
              multiple
              accept=" .pdf, .jpg, .jpeg, .png, .zip "
              onChange={onChange}
              onClick={onClick}
            />

            <input
              type="checkbox"
              id={styles.policy}
              name="policy"
              defaultValue={false}
              onClick={(e) => handleChange(e)}
              {...register("policy", { required: "*" })}
            />
            <label id={styles.confirm}> I agree privacy policy </label>

            {errors.customerName && (
              <p id={styles.nError} role="alert">
                {errors.customerName.message}
              </p>
            )}
            {errors.customerMail && (
              <p id={styles.mError} role="alert">
                {" "}
                {errors.customerMail.message}
              </p>
            )}
            {errors.phone && (
              <p id={styles.pError} role="alert">
                {" "}
                {errors.phone.message}
              </p>
            )}

            {(errors.customerName ||
              errors.customerMail ||
              errors.phone ||
              policy) && (
              <p id={styles.dError} role="alert">
                {" "}
                Please fill out all Fields!{" "}
              </p>
            )}
            <div className={styles.rnc}>
              <Captcha onChange={onChangeCaptcha} />
            </div>
            <button
              id={styles.submit}
              type="submit"
              className={`${
                !policy && isSubmitSuccessful ? styles.allow : styles.notallow
              }`}
              onClick={handleSubmit(onSubmit)}
              disabled={policy || isSubmitSuccessful}
            >
              {submitStatus}
            </button>
          </div>
        </form>
      </Mobile>
      <MobileX>
        <form
          id={styles.modalContactUs}
          onSubmit={handleSubmit(onSubmit)}
          style={{ backgroundImage: `url(${img})` }}
          className={
            contactFrmShow
              ? props.src == "REQUEST A PROPOSAL"
                ? styles.fp
                : props.src == "JOIN US"
                ? styles.fj
                : styles.modalContactUs
              : styles.inactive
          }
        >
          <div className={styles.container}>
            <span
              id={styles.closeBtn}
              onClick={handleFrmClose}
              className={styles.closeBtn}
            >
              <svg id={styles.svg}>
                <line id={styles.line1} x1="0" y1="0" x2="20" y2="20" />
                <line id={styles.line2} x1="20" y1="0" x2="0" y2="20" />
              </svg>
            </span>
            <h1 id={styles.title}>
              <b> {props.src} </b>
            </h1>

            <input
              placeholder="Enter Full Name"
              id={styles.customerName}
              className={`${
                errors.customerName ? styles.errorBorder : styles.Border
              }`}
              defaultValue=""
              type="text"
              name="customerName"
              onChange={onChangeCustomerName}
              {...register("customerName", {
                required: "*",
                minLength: (10, "*"),
                maxLength: (120, "*"),
                pattern: {
                  value: /^([a-zA-Z\s])+$/,
                  message: "*",
                },
              })}
            />

            <input
              id={styles.customerMail}
              onChange={onChangeEmail}
              className={`${
                errors.customerMail ? styles.errorBorder : styles.Border
              }`}
              defaultValue=""
              type="email"
              placeholder="Enter Email Address"
              name="customerMail"
              {...register("customerMail", {
                required: "*",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "*",
                },
              })}
            />

            <input
              placeholder="Enter phone Number(with country code)"
              id={styles.phone}
              
              className={`${errors.phone ? styles.errorBorder : styles.Border}`}
              defaultValue=""
              type="phone"
              name="phone"
              onChange={onChangePhone}
              {...register("phone", {
                required: "*",
                pattern: {
                  value:
                    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
                  message: "*",
                },
              })}
            />

            <textarea
              id={styles.customerMessage}
              placeholder="Your Message"
              className={`${
                errors.customerMessage ? styles.errorBorder : styles.Border
              }`}
              defaultValue=""
              type="text"
              name="customerMessage"
              onChange={onChangeMessage}
              {...register("customerMessage")}
            />

            {/* <label id={styles.rf} >You Can Upload your Documents</label> */}
            <input
              type="file"
              placeholder="Your File"
              id={styles.rfp}
              name="fileInput"
              {...register("fileInput")}
              multiple
              accept=" .pdf, .jpg, .jpeg, .png, .zip "
              onChange={onChange}
              onClick={onClick}
            />

            <input
              type="checkbox"
              id={styles.policy}
              name="policy"
              defaultValue={false}
              onClick={(e) => handleChange(e)}
              {...register("policy", { required: "*" })}
            />
            <label id={styles.confirm}> I agree privacy policy </label>

            {errors.customerName && (
              <p id={styles.nError} role="alert">
                {errors.customerName.message}
              </p>
            )}
            {errors.customerMail && (
              <p id={styles.mError} role="alert">
                {" "}
                {errors.customerMail.message}
              </p>
            )}
            {errors.phone && (
              <p id={styles.pError} role="alert">
                {" "}
                {errors.phone.message}
              </p>
            )}

            {(errors.customerName ||
              errors.customerMail ||
              errors.phone ||
              policy) && (
              <p id={styles.dError} role="alert">
                {" "}
                Please fill out all Fields!{" "}
              </p>
            )}
            <div className={styles.rnc} style={{ width: "120px" }}>
              <Captcha onChange={onChangeCaptcha} />
            </div>
            <button
              id={styles.submit}
              type="submit"
              className={`${
                !policy && isSubmitSuccessful ? styles.allow : styles.notallow
              }`}
              onClick={handleSubmit(onSubmit)}
              disabled={policy || isSubmitSuccessful}
            >
              {submitStatus}
            </button>
          </div>
        </form>
      </MobileX>
    </>
  );
};

export default ContactUs;
