import React, { useContext, useState, useRef, useEffect } from "react";
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

import styles from "../styles/signUp.module.scss";
import Policy from "../pages/policy";
import { Desktop, Tablet, Mobile, MobileX } from "../contexts/breakPoints";
import { VisibilityContext } from "../contexts/visibilityContext";
import { AuthContext } from "../contexts/authContext";
//import { LINKEDIN_URL } from '../utils/generic';

import img from "../assets/abstract-blue.jpg";
//import facebook from '../assets/facebook-logo.svg';
//import linkedin from '../assets/LinkedIn-Icon-White-Logo.wine.svg';
//import twitter from '../assets/twitter5.svg';
//import google from '../assets/google.svg';

///import http from '../services/httpService';

const SignUp = () => {
  const {
    setLoginFrmShow,
    registerFrmShow,
    setFormsHide,
    policyFrmShow,
    setPolicyFrmShow,
  } = useContext(VisibilityContext);
  const { states, dispatch } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    setFocus,
    unregister,
    reset,
    setValue,
    formState: { errors },
    isSubmiting,
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
  });

  const [submitStatus, setSubmitStatus] = useState("SignUp");
  const [yupError, setYupError] = useState(false);
  const [dataForm, setDataForm] = useState("");
  const [captchaSuccess, setCaptchaSuccess] = useState(false);
  const [cookies, setCookie] = useCookies(["user"]);
  const [passwordShown, setPasswordShown] = useState(true);
  const [coPasswordShown, setCoPasswordShown] = useState(true);

  toast.configure();
  const history = useHistory();

  let { path, url } = useRouteMatch();

  document.title = "SofTesting | Sign Up";
  let emailW = "",
    userNameW = "";
////console.log('localStorage.getItem("userName")', localStorage.getItem("userName"));

    useEffect(()=>{
      if (localStorage.getItem("userEmail") !== 'undefined' && 
            localStorage.getItem("userEmail") !== '' &&
            localStorage.getItem("userEmail") !== null) {
      if (JSON.parse(localStorage.getItem('userEmail'))){
         emailW= JSON.parse(localStorage.getItem('userEmail'));  
         setValue('email', emailW);
        }
      }
        if (localStorage.getItem("userName") !== 'undefined' && 
            localStorage.getItem("userName") !== '' &&
            localStorage.getItem("userName") !== null) {
         if (JSON.parse(localStorage.getItem("userName"))) {
               userNameW = JSON.parse(localStorage.getItem("userName"));
               setValue("userName", userNameW); 
             }
            }
      },[] )
    
  

  const handleSignIn = () => {
    setLoginFrmShow();
 
   history.push("/signin");
   return <Redirect push to="/signin" />;
  };

  const handlePolicy = () => {
    if (!policyFrmShow) {
      setPolicyFrmShow();
      //   history.push("/policy");
    }
  };

  const handleFrmClose = () => {
    history.push("/");
    setFormsHide();
  };

  const userNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const passwordRef = useRef();
  const coPasswordRef = useRef();

  const location = window.location.hostname;
  let urlLinkedinSignIn = "";
  let urlCredentials = "";
  let urlSignUp = "";
  let urlCookie = "";
  let urlPolicy = "";


  if (location === "localhost") {
    urlLinkedinSignIn = `http://${location}:8000/auth/linkedin/linkedinSignIn`;
    urlCredentials = `http://${location}:8000/auth/linkedin/getUserCredentials`;
    urlSignUp = `http://${location}:8000/api/user/signUp`;
    urlCookie = `http://${location}:8000/setCookie`;
    urlPolicy = "/src/pages/policy";
  } else {
    urlLinkedinSignIn =
      "https://api.softestingca.com/auth/linkedin/linkedinSignIn";
    urlCredentials = `https://api.softestingca.com/auth/linkedin/getUserCredentials`;
    urlSignUp = `https://api.softestingca.com/api/user/signUp`;
    urlCookie = "https://api.softestingca.com/setCookie";
    urlPolicy = "/src/pages/policy";
  }

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  }
  const toggleCoPassword = () => {
    setCoPasswordShown(!coPasswordShown);
  }
  // const linkedinSignUp = () => {
  //   axios
  //     .get(urlLinkedinSignIn)
  //     .then((response) => {
  //       console.log(response);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       console.log("Error getting LinkedIn access token");
  //     });
  // };

  // useEffect(() => {
  //   if (window.opener && window.opener !== window) {
  //     const code = getCodeFromWindowURL(window.location.href);
  //     window.opener.postMessage({ type: "code", code: code }, "*");
  //     window.close();
  //   }
  //   window.addEventListener("message", handlePostMessage);
  // }, []);

  // const handlePostMessage = (event) => {
  //   if (event.data.type === "code") {
  //     const { code } = event.data;
  //     getUserCredentials(code);
  //   }
  // };

  // const getCodeFromWindowURL = (url0) => {
  //   const popupWindowURL = new URL(url0);
  //   return popupWindowURL.searchParams.get("code");
  // };

  // const showPopup = () => {
  //   const clientId = process.env.REACT_APP_LINKEDIN_CLIENT_ID;
  //   const redirectUrl = process.env.REACT_APP_LINKEDIN_RIDERECT;
  //   let oauthUrl = process.env.REACT_APP_OAUTH_URL;
  //   const scope = process.env.REACT_APP_LINKEDIN_SCOPE;
  //   const state = process.env.REACT_APP_LINKEDIN_STATE;

  //   oauthUrl = `${oauthUrl}&client_id=${clientId}&scope=${scope}&state=${state}&redirect_uri=${redirectUrl}`;
  //   const width = 450,
  //     height = 730,
  //     left = window.screen.width / 2 - width / 2,
  //     top = window.screen.height / 2 - height / 2;
  //   window.open(
  //     oauthUrl,
  //     "Linkedin",
  //     "menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=" +
  //       width +
  //       ", height=" +
  //       height +
  //       ", top=" +
  //       top +
  //       ", left=" +
  //       left
  //   );
  // };

  // const getUserCredentials = (code) => {
  //   console.log("code", code);
  //   axios.get(`${urlCredentials}?code=${code}`).then((res) => {
  //     const user = res.data;

  //     /// console.log('getUserCredentials', authorized, userId, userName, userEmail);
  //     // Do something with user
  //   });
  // };

  const handleKeyDown = (e) => {
    if (userNameRef.current) {
      userNameRef.current.focus();
    }
    if (emailRef.current) {
      emailRef.current.focus();
    }
    if (phoneRef.current) {
      phoneRef.current.focus();
    }
    if (passwordRef.current) {
      passwordRef.current.focus();
    }
    if (coPasswordRef.current) {
      coPasswordRef.current.focus();
    }
  };

  // useEffect(() => {
  //   window.addEventListener("keyDown", handleKeyDown);

  //   return () => {
  //     window.removeEventListener("keyDown", handleKeyDown);
  //   };
  // }, []);

  // useEffect(() => {
  //   setFocus("userName");
  //   unregister("userName");
  // }, [setFocus]);

  const onChangeCaptcha = (status) => {
    if (status) {
      setCaptchaSuccess(status);
    }
    console.log(captchaSuccess);
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
          url: urlSignUp,
          data: data,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "content-type": "application/json",
          },
        });

        if (res.status == 200) {
          console.log("response signUp", res);

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

          toast.success("SignUp IS Done.", { theme: "colored" });
          reset();
        }
        if (res.status != 200) {
          console.log(res.status);
        }
      } catch (err) {
        setYupError(true);
        setSubmitStatus("SignUp");

        ///    alert(err.status);
        toast.error(err.message, { theme: "dark" });
        ///  alert(err.data);
        toast.error("failed to signup", { theme: "dark" });
      }
    }
  };

  return (
    <>
      <Desktop>
        <form
          className={registerFrmShow ? styles.modal : styles.inactive}
          onSubmit={handleSubmit(onSubmit)}
          style={{ backgroundImage: `url(${img})` }}
        >
          <FocusLock>
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

              <h1 className={styles.h1}> SofTesting Sign Up</h1>
              <input
                id={styles.userName}
                placeholder="Full Name"
                onMouseDown={handleKeyDown}
                className={`${
                  errors.userName ? styles.errorBorder : styles.Border
                }`}
                defaultValue=""
                type="text"
                name="userName"
                autoFocus
                tabIndex="0"
                ref={userNameRef}
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
                ref={emailRef}
                className={`${
                  errors.email ? styles.errorBorder : styles.Border
                }`}
                onMouseDown={handleKeyDown}
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
                onMouseDown={handleKeyDown}
                defaultValue=""
                type="phone"
                name="phone"
                tabIndex="0"
                ref={phoneRef}
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
                onMouseDown={handleKeyDown}
                defaultValue=""
                type={passwordShown ? "text" : "password"}
                 onClick={togglePassword}
                tabIndex="0"
                ref={passwordRef}
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
                onMouseDown={handleKeyDown}
                defaultValue=""
                type={coPasswordShown ? "text" : "password"}
                 onClick={toggleCoPassword}
                tabIndex="0"
                ref={coPasswordRef}
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
                  Please Try SignIn!{" "}
                </p>
              )}

              {states.authorized && <p>Login by linkedin Authorized</p>}

              <label id={styles.signLabel}> Create new account? </label>

              <BrowserRouter>
                <Link id={styles.signIn} to="/signin" onClick={handleSignIn}>
                  {" "}
                  SignIn!{" "}
                </Link>
                <span id={styles.policy}>
                  By click signup, you are in agreement of the{" "}
                  <Link
                    id={styles.link}
                    to={`${urlPolicy}`}
                    target="_blank"
                    onClick={handlePolicy}
                  >
                    Terms of use and Privacy policy.
                  </Link>
                </span>
                {/* <Switch>
           
               <Route path="/policy">
              
                <Policy src="signUp"/>
              </Route> 

            </Switch>*/}
              </BrowserRouter>
            </div>

            {/*  <a href="https://www.google.com" >
          <img img border="0" alt="Google" src={google} className={styles.google}></img>
        </a>
        <a href="https://www.Twitter.com" >
          <img img border="0" alt="Twitter" src={twitter} className={styles.twitter}></img>
        </a>
        <a onClick={showPopup} >
          <img img border="0" alt="linkedin" src={linkedin} className={styles.linkedin}></img>
        </a>
        <a href="https://www.facebook.com" >
          <img img border="0" alt="facebook" src={facebook} className={styles.facebook}></img>
        </a> */}

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
          className={registerFrmShow ? styles.modal : styles.inactive}
          onSubmit={handleSubmit(onSubmit)}
          style={{ backgroundImage: `url(${img})` }}
        >
          <FocusLock>
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

              <h1 className={styles.h1}> SofTesting Sign Up</h1>
              <input
                id={styles.userName}
                placeholder="Full Name"
                onMouseDown={handleKeyDown}
                className={`${
                  errors.userName ? styles.errorBorder : styles.Border
                }`}
                defaultValue=""
                type="text"
                name="userName"
                autoFocus
                tabIndex="0"
                ref={userNameRef}
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
                ref={emailRef}
                className={`${
                  errors.email ? styles.errorBorder : styles.Border
                }`}
                onMouseDown={handleKeyDown}
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
                onMouseDown={handleKeyDown}
                defaultValue=""
                type="phone"
                name="phone"
                tabIndex="0"
                ref={phoneRef}
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
                onMouseDown={handleKeyDown}
                defaultValue=""
                type={passwordShown ? "text" : "password"}
                 onClick={togglePassword}
                tabIndex="0"
                ref={passwordRef}
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
                onMouseDown={handleKeyDown}
                defaultValue=""
                type={coPasswordShown ? "text" : "password"}
                 onClick={toggleCoPassword}
                tabIndex="0"
                ref={coPasswordRef}
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
                  Please Try SignIn!{" "}
                </p>
              )}

              {states.authorized && <p>Login by linkedin Authorized</p>}

              <label id={styles.signLabel}> Create new account? </label>

              <BrowserRouter>
                <Link id={styles.signIn} to="/signin" onClick={handleSignIn}>
                  {" "}
                  SignIn!{" "}
                </Link>
                <span id={styles.policy}>
                  By click signup, you are in agreement of the{" "}
                  <Link
                    id={styles.link}
                    to={`${urlPolicy}`}
                    target="_blank"
                    onClick={handlePolicy}
                  >
                    Terms of use and Privacy policy.
                  </Link>
                </span>
                <Switch>
                  <Route path="signup/policy" exact>
                    <Policy src="signUp" />
                  </Route>
                </Switch>
              </BrowserRouter>
            </div>

            {/* <a href="https://www.google.com" >
          <img img border="0" alt="Google" src={google} className={styles.google}></img>
        </a>
        <a href="https://www.Twitter.com" >
          <img img border="0" alt="Twitter" src={twitter} className={styles.twitter}></img>
        </a>
        <a onClick={showPopup} >
          <img img border="0" alt="linkedin" src={linkedin} className={styles.linkedin}></img>
        </a>
        <a href="https://www.facebook.com" >
          <img img border="0" alt="facebook" src={facebook} className={styles.facebook}></img>
        </a> */}

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
          className={registerFrmShow ? styles.modal : styles.inactive}
          onSubmit={handleSubmit(onSubmit)}
          style={{ backgroundImage: `url(${img})` }}
        >
          <FocusLock>
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

              <h1 className={styles.h1}> SofTesting Sign Up</h1>
              <input
                id={styles.userName}
                placeholder="Full Name"
                onMouseDown={handleKeyDown}
                className={`${
                  errors.userName ? styles.errorBorder : styles.Border
                }`}
                defaultValue=""
                type="text"
                name="userName"
                autoFocus
                tabIndex="0"
                ref={userNameRef}
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
                ref={emailRef}
                className={`${
                  errors.email ? styles.errorBorder : styles.Border
                }`}
                onMouseDown={handleKeyDown}
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
                onMouseDown={handleKeyDown}
                defaultValue=""
                type="phone"
                name="phone"
                tabIndex="0"
                ref={phoneRef}
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
                onMouseDown={handleKeyDown}
                defaultValue=""
                type={passwordShown ? "text" : "password"}
                 onClick={togglePassword}
                tabIndex="0"
                ref={passwordRef}
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
                onMouseDown={handleKeyDown}
                defaultValue=""
                type={coPasswordShown ? "text" : "password"}
                 onClick={toggleCoPassword}
                tabIndex="0"
                ref={coPasswordRef}
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
                  Please Try SignIn!{" "}
                </p>
              )}

              {states.authorized && <p>Login by linkedin Authorized</p>}

              <label id={styles.signLabel}> Create new account? </label>

              <BrowserRouter>
                <Link id={styles.signIn} to="/signin" onClick={handleSignIn}>
                  {" "}
                  SignIn!{" "}
                </Link>
                <span id={styles.policy}>
                  By click signup, you are in agreement of the{" "}
                  <Link
                    id={styles.link}
                    to={`${urlPolicy}`}
                    target="_blank"
                    onClick={handlePolicy}
                  >
                    Terms of use and Privacy policy.
                  </Link>
                </span>
                <Switch>
                  <Route path="signup/policy" exact>
                    <Policy src="signUp" />
                  </Route>
                </Switch>
              </BrowserRouter>
            </div>

            {/* <a href="https://www.google.com" >
          <img img border="0" alt="Google" src={google} className={styles.google}></img>
        </a>
        <a href="https://www.Twitter.com" >
          <img img border="0" alt="Twitter" src={twitter} className={styles.twitter}></img>
        </a>
        <a onClick={showPopup} >
          <img img border="0" alt="linkedin" src={linkedin} className={styles.linkedin}></img>
        </a>
        <a href="https://www.facebook.com" >
          <img img border="0" alt="facebook" src={facebook} className={styles.facebook}></img>
        </a> */}

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
          className={registerFrmShow ? styles.modal : styles.inactive}
          onSubmit={handleSubmit(onSubmit)}
          style={{ backgroundImage: `url(${img})` }}
        >
          <FocusLock>
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

              <h1 className={styles.h1}> SofTesting Sign Up</h1>
              <input
                id={styles.userName}
                placeholder="Full Name"
                onMouseDown={handleKeyDown}
                className={`${
                  errors.userName ? styles.errorBorder : styles.Border
                }`}
                defaultValue=""
                type="text"
                name="userName"
                autoFocus
                tabIndex="0"
                ref={userNameRef}
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
                ref={emailRef}
                className={`${
                  errors.email ? styles.errorBorder : styles.Border
                }`}
                onMouseDown={handleKeyDown}
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
                onMouseDown={handleKeyDown}
                defaultValue=""
                type="phone"
                name="phone"
                tabIndex="0"
                ref={phoneRef}
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
                onMouseDown={handleKeyDown}
                defaultValue=""
                type={passwordShown ? "text" : "password"}
                onClick={togglePassword}
                tabIndex="0"
                ref={passwordRef}
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
                onMouseDown={handleKeyDown}
                defaultValue=""
                type={coPasswordShown ? "text" : "password"}
                 onClick={toggleCoPassword}
                tabIndex="0"
                ref={coPasswordRef}
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
                  Please Try SignIn!{" "}
                </p>
              )}

              {states.authorized && <p>Login by linkedin Authorized</p>}

              <label id={styles.signLabel}> Create new account? </label>

              <BrowserRouter>
                <Link id={styles.signIn} to="/signin" onClick={handleSignIn}>
                  {" "}
                  SignIn!{" "}
                </Link>
                <span id={styles.policy}>
                  By click signup, you are in agreement of the{" "}
                  <Link
                    id={styles.link}
                    to={`${urlPolicy}`}
                    target="_blank"
                    onClick={handlePolicy}
                  >
                    Terms of use and Privacy policy.
                  </Link>
                </span>
                <Switch>
                  {/* <Route path="/policy" exact>
                <Policy src="signUp"/>
              </Route> */}
                </Switch>
              </BrowserRouter>
            </div>

            {/* <a href="https://www.google.com" >
          <img img border="0" alt="Google" src={google} className={styles.google}></img>
        </a>
        <a href="https://www.Twitter.com" >
          <img img border="0" alt="Twitter" src={twitter} className={styles.twitter}></img>
        </a>
        <a onClick={showPopup} >
          <img img border="0" alt="linkedin" src={linkedin} className={styles.linkedin}></img>
        </a>
        <a href="https://www.facebook.com" >
          <img img border="0" alt="facebook" src={facebook} className={styles.facebook}></img>
        </a> */}

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

export default withRouter(SignUp);





