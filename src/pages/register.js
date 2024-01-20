import React, { useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  Route,
  BrowserRouter,
  Switch,
  Link,
  useHistory,
  Redirect,
  withRouter,
  useRouteMatch,
} from "react-router-dom";
import { useCookies } from "react-cookie";

import axios from "axios";
import FocusLock from "react-focus-lock";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Captcha from "react-numeric-captcha";
import eye from '../assets/Icon/eye.png';

import styles from "../styles/register.module.scss";

import { Desktop, Tablet, Mobile, MobileX } from "../contexts/breakPoints";
import { VisibilityContext } from "../contexts/visibilityContext";
import { AuthContext } from "../contexts/authContext";

import img from "../assets/abstract-blue.jpg";


const Register = () => {
  
  const { states, dispatch } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
    isSubmiting,
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const [submitStatus, setSubmitStatus] = useState("Register");
  const [yupError, setYupError] = useState(false);
  const [dataForm, setDataForm] = useState("");
  const [captchaSuccess, setCaptchaSuccess] = useState(false);
  const [cookies, setCookie] = useCookies(["user"]);
  const [passwordShown, setPasswordShown] = useState(true);
  const [coPasswordShown, setCoPasswordShown] = useState(true);

  toast.configure();
  const history = useHistory();

 
  document.title = "SofTesting | Register";
 
////console.log('localStorage.getItem("userName")', localStorage.getItem("userName"));

    useEffect(()=>{
        let emailW = "",
        userNameW = "";
        console.log(localStorage.getItem("userEmail"));
        console.log(localStorage.getItem("userName"));
      if (localStorage.getItem("userEmail") !== undefined && 
            localStorage.getItem("userEmail") !== '' &&
            localStorage.getItem("userEmail") !== null) {
      if (localStorage.getItem('userEmail')){
         emailW= JSON.parse(localStorage.getItem('userEmail'));  
         setValue('email', emailW);
        }
      }
        if (localStorage.getItem("userName") !== undefined && 
            localStorage.getItem("userName") !== '' &&
            localStorage.getItem("userName") !== null) {
         if (JSON.parse(localStorage.getItem("userName"))) {
               userNameW = JSON.parse(localStorage.getItem("userName"));
               setValue("userName", userNameW); 
             }
            }
      },[] )
    
  

  const handleLogin = () => {
   
   history.push("/contract/login");
  };

  
  const location = window.location.hostname;
  
  let urlRegister = "";
  let urlCookie = "";
  let urlPolicy = "";


  if (location === "localhost") {
    urlRegister = `http://${location}:8000/api/user/signUp`;
    urlCookie = `http://${location}:8000/setCookie`;
    urlPolicy = "/src/pages/policy";
  } else {
    urlRegister = `https://api.softestingca.com/api/user/signUp`;
    urlCookie = "https://api.softestingca.com/setCookie";
    urlPolicy = "/src/pages/policy";
  }

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  }
  const toggleCoPassword = () => {
    setCoPasswordShown(!coPasswordShown);
  }
  
  

  const onChangeCaptcha = (status) => {
    if (status) {
      setCaptchaSuccess(status);
    }
   // console.log(captchaSuccess);
  };

  const onSubmit = async (data, e) => {
     if (!captchaSuccess) {
      await toast.info("Please enter security code", { theme: "dark" });
    } else {
      setSubmitStatus("Sending...");

      setYupError(false);
      setDataForm(data);


      try {
        let res = await axios({
          method: "post",
          url: urlRegister,
          data: data,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "content-type": "application/json",
          },
        });

        if (res.status == 200) {
          console.log("response Register", res);

          setYupError(false);

          setSubmitStatus("Submit");

          dispatch({
            type: "SignUp",
            authorized: true,
            userEmail: data.email,
            userName: data.userName,
          });

          setCookie("name", data.userName, { path: "/" });
          setCookie("email", data.email, { path: "/" });
          setCookie("Password", data.password, { path: "/" });

          let res2 = await axios({
            method: "post",
            url: urlCookie,
            data: data,
            //  credentials:'include',
            //  mode:'same-origin',
            //  withCredentials: true,
            // headers:{
            // 'Content-Type': 'application/json',
            // 'Accept': 'application/json',
            //    'Access-Control-Allow-Origin' : 'https://softestingca.com',
            //    'X-Requested-With': 'XMLHttpRequest',
            //   }
          })
           // .then(({ data, status }) => {
              if (res2.status === 200) {
                ///  toast.success("Cookies Is Saved .", { theme: "colored" });
              } else {
                ///      toast.error("Cookies Is Not Saved .", { theme: "dark" });
              }
          ///  })
         //   .catch((ex) => {
          //    console.log("error in cookie-parser");
              ///       toast.error("Cookies failed .", { theme: "dark" });
       //     });

          toast.success("Register IS Done.", { theme: "colored" });
          reset();
        }
        if (res.status != 200) {
          console.log(res.status);
        }
      } catch (err) {
        setYupError(true);
        setSubmitStatus("Register");

        ///    alert(err.status);
        toast.error(err.message, { theme: "dark" });
        ///  alert(err.data);
        toast.error("failed to register", { theme: "dark" });
      }
    }
  };

  return (
    <>
      <Desktop>
        <form
          className={ styles.modal}
          onSubmit={handleSubmit(onSubmit)}
          style={{ backgroundImage: `url(${img})` }}
        >
          <FocusLock>
            <div className={styles.container}>
    
              <h1 className={styles.h1}> SofTesting Register</h1>
              <input
                id={styles.userName}
                placeholder="Full Name"
                className={`${
                  errors.userName ? styles.errorBorder : styles.Border
                }`}
                defaultValue=""
                type="text"
                name="userName"
                autoFocus
                tabIndex="0"
            
                {...register("userName", {
                  required: "*",
                  minLength: (4, "*"),
                  maxLength: (120, "*"),
                  pattern: {
                    /*  /^[a-zA-Z]*$/ */ value: /^([a-zA-Z\s])+$/,
                    message: "*",
                  },
                })}
              />
              <input
                id={styles.email}
                tabIndex="0"
              
                className={`${
                  errors.email ? styles.errorBorder : styles.Border
                }`}
        
                defaultValue=""
                type="email"
                placeholder="Enter Email Address"
                name="email"
                {...register("email", {
                  required: "*",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "*",
                  },
                })}
              />
              <input
                id={styles.phone}
                placeholder="phone Number(with country code)"
                className={`${
                  errors.phone ? styles.errorBorder : styles.Border
                }`}
             
                defaultValue=""
                type="phone"
                name="phone"
                tabIndex="0"
                {...register("phone", {
                  required: "*",
                  pattern: {
                    value:
                      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
                    message: "*",
                  },
                })}
              />
              <input
                id={styles.password}
                placeholder="Password"
                name="password"
                className={`${
                  errors.password ? styles.errorBorder : styles.Border
                }`}
                style={{ backgroundImage: `url(${eye})` }}
               
                defaultValue=""
                type={passwordShown ? "text" : "password"}
                 onClick={togglePassword}
                tabIndex="0"
              
                {...register("password", {
                  required: "*",
                  minLength: (6, "*"),
                  maxLength: (20, "*"),
                  pattern: {
                    value:
                      /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/i,
                    message: "*",
                  },
                })}
              />

              <input
                id={styles.coPassword}
                placeholder="Password Confirm"
                name="coPassword"
                className={`${
                  errors.coPassword ? styles.errorBorder : styles.Border
                }`}
                style={{ backgroundImage: `url(${eye})` }}
             
                defaultValue=""
                type={coPasswordShown ? "text" : "password"}
                 onClick={toggleCoPassword}
                tabIndex="0"
              
                {...register("coPassword", {
                  required: "*",
                  minLength: (6, "*"),
                  maxLength: (20, "*"),
                  pattern: {
                    value:
                      /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/i,
                    message: "*",
                  },
                })}
              />

              {errors.userName && (
                <p id={styles.uError} role="alert">
                  {errors.userName.message}
                </p>
              )}
              {errors.email && (
                <p id={styles.eError} role="alert">
                  {errors.email.message}
                </p>
              )}
              {errors.phone && (
                <p id={styles.phError} role="alert">
                  {errors.phone.message}
                </p>
              )}
              {errors.password && (
                <p id={styles.pError} role="alert">
                  {errors.password.message}
                </p>
              )}
              {errors.coPassword && (
                <p id={styles.cpError} role="alert">
                  {errors.coPassword.message}
                </p>
              )}

              {!yupError && (
                <p id={styles.errorYup} role="alert">
                  {" "}
                </p>
              )}
              {yupError && (
                <p id={styles.errorYup} role="alert">
                  {" "}
                  Please Try Login!{" "}
                </p>
              )}

              {states.authorized && <p>Login by linkedin Authorized</p>}

              <label id={styles.signLabel}> Create new account? </label>

              <BrowserRouter>
                <Link id={styles.signIn} to="/contract/login" onClick={handleLogin}>
                  {" "}
                  Login!{" "}
                </Link>
                <span id={styles.policy}>
                  By click register, you are in agreement of the{" "}
                  <Link
                    id={styles.link}
                    to={`${urlPolicy}`}
                    target="_blank"
                   
                  >
                    Terms of use and Privacy policy.
                  </Link>
                </span>
                
              </BrowserRouter>
            </div>

          

            <div className={styles.rnc}>
              <Captcha onChange={onChangeCaptcha} />
            </div>

            <button
              type="submit"
              id={styles.submit}
              tabIndex="0"
              onClick={handleSubmit(onSubmit)}
              disabled={isSubmiting}
            >
              {submitStatus}
            </button>
          </FocusLock>
        </form>
      </Desktop>

      <Tablet>
        <form
          className={styles.modal}
          onSubmit={handleSubmit(onSubmit)}
          style={{ backgroundImage: `url(${img})` }}
        >
          <FocusLock>
            <div className={styles.container}>
              
              <h1 className={styles.h1}> SofTesting Resister</h1>
              <input
                id={styles.userName}
                placeholder="Full Name"
              
                className={`${
                  errors.userName ? styles.errorBorder : styles.Border
                }`}
                defaultValue=""
                type="text"
                name="userName"
                autoFocus
                tabIndex="0"
              
                {...register("userName", {
                  required: "*",
                  minLength: (4, "*"),
                  maxLength: (120, "*"),
                  pattern: {
                    /*  /^[a-zA-Z]*$/ */ value: /^([a-zA-Z\s])+$/,
                    message: "*",
                  },
                })}
              />
              <input
                id={styles.email}
                tabIndex="0"
              
                className={`${
                  errors.email ? styles.errorBorder : styles.Border
                }`}
             
                defaultValue=""
                type="email"
                placeholder="Enter Email Address"
                name="email"
                {...register("email", {
                  required: "*",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "*",
                  },
                })}
              />
              <input
                id={styles.phone}
                placeholder="phone Number(with country code)"
                className={`${
                  errors.phone ? styles.errorBorder : styles.Border
                }`}
               
                defaultValue=""
                type="phone"
                name="phone"
                tabIndex="0"
           
                {...register("phone", {
                  required: "*",
                  pattern: {
                    value:
                      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
                    message: "*",
                  },
                })}
              />
              <input
                id={styles.password}
                placeholder="Password"
                name="password"
                className={`${
                  errors.password ? styles.errorBorder : styles.Border
                }`}
                  style={{ backgroundImage: `url(${eye})` }}
                 
                defaultValue=""
                type={passwordShown ? "text" : "password"}
                 onClick={togglePassword}
                tabIndex="0"
            
                {...register("password", {
                  required: "*",
                  minLength: (6, "*"),
                  maxLength: (20, "*"),
                  pattern: {
                    value:
                      /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/i,
                    message: "*",
                  },
                })}
              />

              <input
                id={styles.coPassword}
                placeholder="Password Confirm"
                name="coPassword"
                className={`${
                  errors.coPassword ? styles.errorBorder : styles.Border
                }`}
                style={{ backgroundImage: `url(${eye})` }}
                 
                defaultValue=""
                type={coPasswordShown ? "text" : "password"}
                 onClick={toggleCoPassword}
                tabIndex="0"
             
                {...register("coPassword", {
                  required: "*",
                  minLength: (6, "*"),
                  maxLength: (20, "*"),
                  pattern: {
                    value:
                      /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/i,
                    message: "*",
                  },
                })}
              />

              {errors.userName && (
                <p id={styles.uError} role="alert">
                  {errors.userName.message}
                </p>
              )}
              {errors.email && (
                <p id={styles.eError} role="alert">
                  {errors.email.message}
                </p>
              )}
              {errors.phone && (
                <p id={styles.phError} role="alert">
                  {errors.phone.message}
                </p>
              )}
              {errors.password && (
                <p id={styles.pError} role="alert">
                  {errors.password.message}
                </p>
              )}
              {errors.coPassword && (
                <p id={styles.cpError} role="alert">
                  {errors.coPassword.message}
                </p>
              )}

              {!yupError && (
                <p id={styles.errorYup} role="alert">
                  {" "}
                </p>
              )}
              {yupError && (
                <p id={styles.errorYup} role="alert">
                  {" "}
                  Please Try Login!{" "}
                </p>
              )}

              {states.authorized && <p>Login by linkedin Authorized</p>}

              <label id={styles.signLabel}> Create new account? </label>

             
                <Link id={styles.signIn} to="/contract/login" onClick={handleLogin}>
                  {" "}
                 Login!{" "}
                </Link>
                <span id={styles.policy}>
                  By click register, you are in agreement of the{" "}
                  <Link
                    id={styles.link}
                    to={`${urlPolicy}`}
                    target="_blank"
                   
                  >
                    Terms of use and Privacy policy.
                  </Link>
                </span>
                
            
            </div>

           

            <div className={styles.rnc}>
              <Captcha onChange={onChangeCaptcha} />
            </div>

            <button
              type="submit"
              id={styles.submit}
              tabIndex="0"
              onClick={handleSubmit(onSubmit)}
              disabled={isSubmiting}
            >
              {submitStatus}
            </button>
          </FocusLock>
        </form>
      </Tablet>
      <Mobile>
        <form
          className={ styles.modal }
          onSubmit={handleSubmit(onSubmit)}
          style={{ backgroundImage: `url(${img})` }}
        >
          <FocusLock>
            <div className={styles.container}>
              
              <h1 className={styles.h1}> SofTesting Register</h1>
              <input
                id={styles.userName}
                placeholder="Full Name"
                 
                className={`${
                  errors.userName ? styles.errorBorder : styles.Border
                }`}
                defaultValue=""
                type="text"
                name="userName"
                autoFocus
                tabIndex="0"
             
                {...register("userName", {
                  required: "*",
                  minLength: (4, "*"),
                  maxLength: (120, "*"),
                  pattern: {
                    /*  /^[a-zA-Z]*$/ */ value: /^([a-zA-Z\s])+$/,
                    message: "*",
                  },
                })}
              />
              <input
                id={styles.email}
                tabIndex="0"
               
                className={`${
                  errors.email ? styles.errorBorder : styles.Border
                }`}
                 
                defaultValue=""
                type="email"
                placeholder="Enter Email Address"
                name="email"
                {...register("email", {
                  required: "*",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "*",
                  },
                })}
              />
              <input
                id={styles.phone}
                placeholder="phone Number(with country code)"
                className={`${
                  errors.phone ? styles.errorBorder : styles.Border
                }`}
                 
                defaultValue=""
                type="phone"
                name="phone"
                tabIndex="0"
             
                {...register("phone", {
                  required: "*",
                  pattern: {
                    value:
                      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
                    message: "*",
                  },
                })}
              />
              <input
                id={styles.password}
                placeholder="Password"
                name="password"
                className={`${
                  errors.password ? styles.errorBorder : styles.Border
                }`}
                  style={{ backgroundImage: `url(${eye})` }}
                 
                defaultValue=""
                type={passwordShown ? "text" : "password"}
                 onClick={togglePassword}
                tabIndex="0"
               
                {...register("password", {
                  required: "*",
                  minLength: (6, "*"),
                  maxLength: (20, "*"),
                  pattern: {
                    value:
                      /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/i,
                    message: "*",
                  },
                })}
              />

              <input
                id={styles.coPassword}
                placeholder="Password Confirm"
                name="coPassword"
                className={`${
                  errors.coPassword ? styles.errorBorder : styles.Border
                }`}
                style={{ backgroundImage: `url(${eye})` }}
                 
                defaultValue=""
                type={coPasswordShown ? "text" : "password"}
                 onClick={toggleCoPassword}
                tabIndex="0"
             
                {...register("coPassword", {
                  required: "*",
                  minLength: (6, "*"),
                  maxLength: (20, "*"),
                  pattern: {
                    value:
                      /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/i,
                    message: "*",
                  },
                })}
              />

              {errors.userName && (
                <p id={styles.uError} role="alert">
                  {errors.userName.message}
                </p>
              )}
              {errors.email && (
                <p id={styles.eError} role="alert">
                  {errors.email.message}
                </p>
              )}
              {errors.phone && (
                <p id={styles.phError} role="alert">
                  {errors.phone.message}
                </p>
              )}
              {errors.password && (
                <p id={styles.pError} role="alert">
                  {errors.password.message}
                </p>
              )}
              {errors.coPassword && (
                <p id={styles.cpError} role="alert">
                  {errors.coPassword.message}
                </p>
              )}

              {!yupError && (
                <p id={styles.errorYup} role="alert">
                  {" "}
                </p>
              )}
              {yupError && (
                <p id={styles.errorYup} role="alert">
                  {" "}
                  Please Try Login!{" "}
                </p>
              )}

              {states.authorized && <p>Login by linkedin Authorized</p>}

              <label id={styles.signLabel}> Create new account? </label>

            
                <Link id={styles.signIn} to="/contract/login" onClick={handleLogin}>
                  {" "}
                  Login!{" "}
                </Link>
                <span id={styles.policy}>
                  By click register, you are in agreement of the{" "}
                  <Link
                    id={styles.link}
                    to={`${urlPolicy}`}
                    target="_blank"
                   
                  >
                    Terms of use and Privacy policy.
                  </Link>
                </span>
               
            </div>

            <div className={styles.rnc}>
              <Captcha onChange={onChangeCaptcha} />
            </div>

            <button
              type="submit"
              id={styles.submit}
              tabIndex="0"
              onClick={handleSubmit(onSubmit)}
              disabled={isSubmiting}
            >
              {submitStatus}
            </button>
          </FocusLock>
        </form>
      </Mobile>
      <MobileX>
        <form
          className={ styles.modal }
          onSubmit={handleSubmit(onSubmit)}
          style={{ backgroundImage: `url(${img})` }}
        >
          <FocusLock>
            <div className={styles.container}>
              
              <h1 className={styles.h1}> SofTesting Register</h1>
              <input
                id={styles.userName}
                placeholder="Full Name"
                 
                className={`${
                  errors.userName ? styles.errorBorder : styles.Border
                }`}
                defaultValue=""
                type="text"
                name="userName"
                autoFocus
                tabIndex="0"
             
                {...register("userName", {
                  required: "*",
                  minLength: (4, "*"),
                  maxLength: (120, "*"),
                  pattern: {
                    /*  /^[a-zA-Z]*$/ */ value: /^([a-zA-Z\s])+$/,
                    message: "*",
                  },
                })}
              />
              <input
                id={styles.email}
                tabIndex="0"
           
                className={`${
                  errors.email ? styles.errorBorder : styles.Border
                }`}
                 
                defaultValue=""
                type="email"
                placeholder="Enter Email Address"
                name="email"
                {...register("email", {
                  required: "*",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "*",
                  },
                })}
              />
              <input
                id={styles.phone}
                placeholder="phone Number(with country code)"
                className={`${
                  errors.phone ? styles.errorBorder : styles.Border
                }`}
                 
                defaultValue=""
                type="phone"
                name="phone"
                tabIndex="0"
           
                {...register("phone", {
                  required: "*",
                  pattern: {
                    value:
                      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i,
                    message: "*",
                  },
                })}
              />
              <input
                id={styles.password}
                placeholder="Password"
                name="password"
                className={`${
                  errors.password ? styles.errorBorder : styles.Border
                }`}
                style={{ backgroundImage: `url(${eye})` }}
                 
                defaultValue=""
                type={passwordShown ? "text" : "password"}
                onClick={togglePassword}
                tabIndex="0"
              
                {...register("password", {
                  required: "*",
                  minLength: (6, "*"),
                  maxLength: (20, "*"),
                  pattern: {
                    value:
                      /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/i,
                    message: "*",
                  },
                })}
              />

              <input
                id={styles.coPassword}
                placeholder="Password Confirm"
                name="coPassword"
                className={`${
                  errors.coPassword ? styles.errorBorder : styles.Border
                }`}
                style={{ backgroundImage: `url(${eye})` }}
                 
                defaultValue=""
                type={coPasswordShown ? "text" : "password"}
                 onClick={toggleCoPassword}
                tabIndex="0"
               
                {...register("coPassword", {
                  required: "*",
                  minLength: (6, "*"),
                  maxLength: (20, "*"),
                  pattern: {
                    value:
                      /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/i,
                    message: "*",
                  },
                })}
              />

              {errors.userName && (
                <p id={styles.uError} role="alert">
                  {errors.userName.message}
                </p>
              )}
              {errors.email && (
                <p id={styles.eError} role="alert">
                  {errors.email.message}
                </p>
              )}
              {errors.phone && (
                <p id={styles.phError} role="alert">
                  {errors.phone.message}
                </p>
              )}
              {errors.password && (
                <p id={styles.pError} role="alert">
                  {errors.password.message}
                </p>
              )}
              {errors.coPassword && (
                <p id={styles.cpError} role="alert">
                  {errors.coPassword.message}
                </p>
              )}

              {!yupError && (
                <p id={styles.errorYup} role="alert">
                  {" "}
                </p>
              )}
              {yupError && (
                <p id={styles.errorYup} role="alert">
                  {" "}
                  Please Try Login!{" "}
                </p>
              )}

              {states.authorized && <p>Login by linkedin Authorized</p>}

              <label id={styles.signLabel}> Create new account? </label>

           
                <Link id={styles.signIn} to="/contract/login" onClick={handleLogin}>
                  {" "}
                  Login!{" "}
                </Link>
                <span id={styles.policy}>
                  By click register, you are in agreement of the{" "}
                  <Link
                    id={styles.link}
                    to={`${urlPolicy}`}
                    target="_blank"
                 
                  >
                    Terms of use and Privacy policy.
                  </Link>
                </span>
              
            </div>


            <div className={styles.rnc}>
              <Captcha onChange={onChangeCaptcha} />
            </div>

            <button
              type="submit"
              id={styles.submit}
              tabIndex="0"
              onClick={handleSubmit(onSubmit)}
              disabled={isSubmiting}
            >
              {submitStatus}
            </button>
          </FocusLock>
        </form>
      </MobileX>
    </>
  );
};

export default withRouter(Register);
