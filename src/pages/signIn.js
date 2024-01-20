import React, { useContext, useState, useRef, useEffect} from "react";
import { useForm } from "react-hook-form";
import {
  Route,
  BrowserRouter,
  Switch,
  Link,
  useHistory,
  Redirect,
  withRouter,
} from "react-router-dom";
import { useCookies } from "react-cookie";

import FocusLock from "react-focus-lock";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { GoogleLogin } from "react-google-login";
import { useLinkedIn} from "react-linkedin-login-oauth2";

//import { refreshTokenSetup } from '../utils/refreshTokenSetup';

import styles from "../styles/signIn.module.scss";
///import { Desktop, Tablet, Mobile, MobileX } from '../contexts/breakPoints';
import { VisibilityContext } from "../contexts/visibilityContext";
import { AuthContext } from "../contexts/authContext";
import { NavContext } from "../contexts/navContext";

import img from "../assets/abstract-blue.jpg";
import eye from '../assets/Icon/eye.png';
import linkedinLogo from "../assets/LinkedIn-Icon-White-Logo.wine.svg";
//import twitter from '../assets/twitter5.svg';
//import google from '../assets/google.svg';

import SignUp from "../pages/signUp";
import ResetPassword from "../pages/resetPassword";

///import http from '../services/httpService';

const SignIn = (props) => {
  const {
    loginFrmShow,
    registerFrmShow,
    setRegisterFrmShow,
    setResetPassFrmShow,
    setFormsHide,
    setOffLinkedin,
    setOnLinkedin,
    linkedinKey
  } = useContext(VisibilityContext);

  const { states, dispatch } = useContext(AuthContext);
  const { setOffMenu } = useContext(NavContext);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    isSubmiting,
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange",
  });
  let history = useHistory();
  const [status, setStatus] = useState("SignIn");
  const [dataForm, setDataForm] = useState("");
  const [reCaptcha, setReCaptcha] = useState("");
  const [emailV, setEmailV] = useState("");
  const [passwordV, setPasswordV] = useState("");
  const [rememberV, setRememberV] = useState("");
  const [cookies, setCookie] = useCookies(["email"]);
  const [success, setSuccess] = useState(true);
  const [code,setCode]  = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordShown, setPasswordShown] = useState(true);

  const [googleData, setGoogleData] = useState(
    localStorage.getItem("googleData")
      ? JSON.parse(localStorage.getItem("googleData"))
      : null
  );

  ///useState(null);
  // const [reCaptchaResult, setReCaptchaResult] = useState(false);
  // const [googleResult, setGoogleResult] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const reCaptchaRef = useRef(null);

  toast.configure();

  document.title = "SofTesting | SignIn";


   let emailW = '';
  useEffect(()=>{
    //console.log(JSON.parse(localStorage.getItem('userEmail')));
    if (localStorage.getItem("userEmail") !== 'undefined' && 
    localStorage.getItem("userEmail")!== '' &&
    localStorage.getItem("userEmail") !== null) {
    if (JSON.parse(localStorage.getItem('userEmail'))){ 
       emailW= JSON.parse(localStorage.getItem('userEmail')); 
         setValue('email', emailW);
    }
  }
  },[] )
  
  const location = window.location.hostname;
  const googleClientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const linkedinClientId = process.env.REACT_APP_LINKEDIN_CLIENT_ID;
  const linkedinRedirect = process.env.REACT_APP_LINKEDIN_RIDERECT;

  let urlReCaptcha = "";
  let urlGoogle = "";
  let urlCookie = "";
  let urlSignIn = "";

  // if (location === "localhost") {
  //   urlReCaptcha = `http://${location}:8000/api/user/reCaptcha`;
  //   urlSignIn = `http://${location}:8000/api/user/signIn`;
  //   urlGoogle = `http://${location}:8000/auth/google`;
  //   urlCookie = `http://${location}:8000/setCookie`;
  // } else {
    urlReCaptcha = "https://api.softestingca.com/api/user/reCaptcha";
    urlSignIn = `https://api.softestingca.com/api/user/signIn`;
    urlGoogle = "https://api.softestingca.com/auth/google";
    urlCookie = "https://api.softestingca.com/setCookie";
 // }

  const handleSuccess = (data) => {
    console.log('success',data.code);
  };
  const handleFailure = (error) => {
    console.log('linkedin error',error.errorMessage);

    alert(error.errorMessage)
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  }

  const { linkedInLogin } = useLinkedIn({
    clientId: process.env.REACT_APP_LINKEDIN_CLIENT_ID ,
    redirectUri:process.env.REACT_APP_LINKEDIN_RIDERECT,
    scope:process.env.REACT_APP_LINKEDIN_SCOPE,
    onSuccess: (code) => {
      setCode(code);
      alert('success')
      toast.info('linkedin code',code);

    },
    onError: (error) => {
      setErrorMessage(error.errorMessage);
      toast.info(error.errorMessage);
  ///    toast.info(errorMessage);
      setOffLinkedin();
    },
   /// redirectUri: `${window.location.origin}/signin`,

  })
  const linkedinKeypress =()=>{ setOnLinkedin(); console.log(linkedinKey); }

  const onFailure = () => {
    toast.info("google login failed. ");
  };

  const onGoogleSuccess = async (res) => {
    // if (!reCaptcha) {
    //   toast.error("Please Enter ReCaptcha.", { theme: "dark" });
    //   setSuccess(false);
    //   return;
    // }else{
    //   setSuccess(true);
    // }
    try {
      //  console.log('Login Success: currentUser:', res.profileObj);
      console.log("Login Success: currentUser:", googleData);
      if (googleData) toast.info("you were logged in as " + googleData.email);

      //    setGoogleData(res.profileObj);

      if (googleData) {
        setValue("email", googleData.email);
     ///   setValue("password", googleData.password);
      }
      const res2 = await axios({
        method: "post",
        url: urlGoogle,
        data: JSON.stringify({
          token: res.tokenId,
        }),
        //   mode:'same-origin',
        //  withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res2.data;

      setGoogleData(data);
      localStorage.setItem("googleData", JSON.stringify(data));

      setCookie("email", data.email, { path: "/" });
      //setCookie("Password", data.password, { path: "/" });
      setCookie("name", data.name, { path: "/" });

      dispatch({
        type: "SignIn",
        authorized: true,
        userEmail: data.email,
        userName: data.name,
      });

      toast.success("google login is done.", { theme: "colored" });
  //    history.push("/");
      setFormsHide();
    } catch (error) {
      toast.info("google login failed");
    }
  };

  const handleResetPassword = () => {
    setResetPassFrmShow();
    // const location = {
    //   pathname: "/resetpassword",
    //   state: { fromDashboard: true },
    // };

    history.push("/resetpassword");
  };

  const handleSignUp = () => {
    setRegisterFrmShow();
    // const location = {
    //   pathname: "/signup",
    // //  state: { fromDashboard: true },
    // };

    history.push("/signup");
  };

  const handleFrmClose = () => {
   // history.push("/");
    setFormsHide();
  };

  const onChange = (value) => {
    setReCaptcha(value);
    ///  formData.append('reCaptcha',value)
  };
  const onChangeEmail = (e) => {
    setEmailV(e.target.value);
    ///     formData.append('email',e.target.value)
    console.log("eamil", emailV);
  };

  const onSubmit = async (data, e) => {
    setStatus("Sending...");
    setDataForm(data);

    const formData = new FormData();

    formData.append("email", data.email);

    // setRememberV(data.remember);
    // setEmailV(data.email);
    // setPasswordV(data.password);

    // for (var [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }
    // console.log(...formData);

    //   headers:{
    //     Accept: "application/json",
    //     "Content-Type": "application/'json'; charset=utf-8"
    ///    'content-type': 'multipart/form-data'
    // }multipart/form-data   application/x-www-form-urlencoded;

    setInterval(() => {
      ///  console.log('Toplearn');
    }, 9000000);
    ////console.log(dataForm);

    var object = {};

    formData.forEach((value, key) => (object[key] = value));
    var json = JSON.stringify(object);
try{
    let res_recaptcha = await axios({
      method: "post",
      url: urlReCaptcha,
      data: { reCaptcha: reCaptcha },
      // mode:'same-origin',
      // withCredentials: true,
      // 'headers': {
      //   'Access-Control-Allow-Origin' : 'https://softestingca.com',
      //  // 'content-type': 'application/json',
      // }
    })
   //   .then(({ data, status }) => {
        if (res_recaptcha.status === 200) {
          ///   toast.success("ReCaptcha is valid.", { theme: "colored" });
          setStatus("SignIn");
        } else {
          setSuccess(false);
          setStatus("SignIn");
          toast.error(" ReCaptcha is not valid..", { theme: "dark" });
        }
  //    })
     // .catch((ex) => {
        // setSuccess(false);
        // setStatus("SignIn");
        // toast.error("ReCaptcha Failed.", { theme: "dark" });
   //   });

    if (success === true) {
      const res_signin = await axios({
        method: "post",
        url: urlSignIn,
        data: data,
        //  mode:'same-origin',
        //  withCredentials: true,
        // 'headers': {
        //   'Access-Control-Allow-Origin' : 'https://softestingca.com',
        //   'content-type': 'application/json',
        // }
      })
      ///  .then(({ status }) => {
          if (res_signin.status === 200) {
            setStatus("SignIn");

            setCookie("email", data.email, { path: "/" });
         //   setCookie("Password", data.password, { path: "/" });

            dispatch({
              type: "SignIn",
              authorized: true,
              userEmail: data.email,
            });
            toast.success("SignIn IS Done.", { theme: "colored" });
          } else {
            setStatus("SignIn");
            setSuccess(false);
            console.log("status", status);
            toast.error(" Failed.", { theme: "dark" });
          }
      //  })
        // .catch((ex) => {
        //   console.log(ex);
        //   setStatus("SignIn");
        //   setSuccess(false);
        //   toast.error("SignIn Failed.", { theme: "dark" });
        // });
      console.log("cookie will do", success);
      if (success === true) {
        // console.log(...formData);
        // console.log(dataForm);
        // console.log(data);
        const res_cookie = await axios({
          method: "post",
          url: urlCookie,
          data: data,
          //  credentials:'include',
          mode: "same-origin",
          withCredentials: false,
          //   headers:{
          // 'Content-Type': 'application/json',
          // 'Accept': 'application/json',
          //     'Access-Control-Allow-Origin' : 'https://softestingca.com',
          //      'X-Requested-With': 'XMLHttpRequest',
          //    }
        })
       //   .then(({ data, status }) => {
       //     console.log("cookiestatus", status);
            if (res_cookie.status === 200) {
              setStatus("SignIn");
              //   toast.success("Cookies Is Saved .", { theme: "colored" });
            } else {
              setStatus("SignIn");
              setSuccess(false);
              ///      toast.error("Cookies Is Not Saved .", { theme: "dark" });
            }
          // })
          // .catch((ex) => {
          //   setStatus("SignIn");
          //   setSuccess(false);
          //   ///         toast.error("Cookies failed .", { theme: "dark" });
          // });
      }
    }
  }
  catch{
    setStatus("SignIn");
    setSuccess(false);
    toast.error("SignIn Failed.", { theme: "dark" });
  }
  };

  const handleFrmLoad = () =>{
    return setOffMenu;
  }
  
  useEffect(() => {
    handleFrmLoad();
  }, []);

  return (
    <form
      className={loginFrmShow ? styles.modal : styles.inactive}
      onSubmit={handleSubmit(onSubmit)}
      style={{ backgroundImage: `url(${img})` }}
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

        <FocusLock>
          <h1 className={styles.h1}> SofTesting Sign In</h1>
          <input
            id={styles.inemail}
            className={`${errors.email ? styles.errorBorder : styles.Border}`}
            tabIndex="0"
            ref={emailRef}
            defaultValue=""
            type="email"
            placeholder="Enter Email Address"
            name="email"
            onChange={(e) => setEmailV(e.target.value)}
            {...register("email", {
              required: (true, "*"),
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "*",
              },
            })}
          />

          <input
            id={styles.inpassword}
            tabIndex="0"
            className={`${
              errors.password ? styles.errorBorder : styles.Border
            }`}
            ref={passwordRef}
            defaultValue=""
            type={passwordShown ? "text" : "password"}
            placeholder="Enter Password"
            name="password"
            style={{ backgroundImage: `url(${eye})` }}
            onClick={togglePassword}
            onChange={(e) => setPasswordV(passwordRef.current.value)}
            {...register("password", {
              required: (true, "*"),
              pattern: {
                value:
                  /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/i,
                message: "*",
              },
            })}
          />
           
          <div id={styles.recaptcha} tabIndex="0">
            <ReCAPTCHA
              sitekey={process.env.REACT_APP_LOCAL_SITE_KEY}
              size="normal"
              ref={reCaptchaRef}
              onChange={onChange}
            />
          </div>

          {errors.email && (
            <p id={styles.uError} role="alert">
              {errors.email.message}
            </p>
          )}
          {errors.password && (
            <p id={styles.pError} role="alert">
              {" "}
              {errors.password.message}
            </p>
          )}
          {errors.reCaptchaRef && (
            <p id={styles.cError} role="alert">
              {" "}
              {errors.reCaptchaRef.message}
            </p>
          )}

          <input
            id={styles.inremember}
            name="remember"
            type="checkbox"
            onChange={(e) => setRememberV(e.target.value)}
            {...register("remember")}
          />
          <label id={styles.label}> Remember me </label>
        </FocusLock>

        <BrowserRouter>
          <span id={styles.psw}>
           
            <Link to="/resetpassword" onClick={handleResetPassword}>
              Forgot Password?
            </Link>
          </span>

          <label id={styles.signLabel}> Create new account? </label>

          <Link to="/signup" id={styles.signUp} onClick={handleSignUp}>        
            SignUp!
          </Link>
          <Switch>
            <Route path="/signup" exact>
              <SignUp /> 
            </Route>
            <Route path="/resetpassword" exact>
              <ResetPassword />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>

      <GoogleLogin
        clientId={googleClientId}
        onSuccess={onGoogleSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        className={styles.google}
        //// isSignedIn={true}
        buttonText="Google"
      />

      {/* <LinkedIn
        clientId={linkedinClientId}
        onSuccess={handleSuccess}
        onFailure={handleFailure}
        redirectUri={linkedinRedirect}
        style={{ maxWidth: '180px', cursor: 'pointer' }}
      >

        {({ linkedInLogin }) => (
          <button onClick={linkedInLogin}>Linkedin</button>
        )}

      </LinkedIn> */}

      <span className={styles.linkedin} onClick={linkedInLogin} onMouseDown={linkedinKeypress}>
        <img border="0" src={linkedinLogo} className={styles.linkedimg}
          alt="Sign in with Linked In"
        />
         <p className={styles.linkedp}>linkedin</p>
      </span>
     {code &&  <div>Code:  {code}</div>}
     {/* {errorMessage &&  <div>errorMessage:  {errorMessage}</div>} */}
      <button
        type="submit"
        name="submit"
        id={styles.insubmit}
        tabIndex="0"
        onClick={handleSubmit(onSubmit)}
        disabled={isSubmiting}
      >
        {status}
      </button>
    </form>
  );
};

export default withRouter(SignIn);
