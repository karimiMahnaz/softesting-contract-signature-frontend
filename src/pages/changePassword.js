import React, { useContext, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {  useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import FocusLock from 'react-focus-lock';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Captcha from "react-numeric-captcha";


import styles from '../styles/changePassword.module.scss';

import { Desktop, Tablet, Mobile, MobileX } from '../contexts/breakPoints';
import { VisibilityContext } from '../contexts/visibilityContext';
import img from '../assets/abstract-blue.jpg'
import eye from '../assets/Icon/eye.png';
//import SignIn from '../pages/signIn';

 // <title>SofTesting | ChangePassword</title>

///import http from '../services/httpService';

const ChangePassword = () => {

  const { changePassFrmShow, setFormsHide } = useContext(VisibilityContext);
  const { register, handleSubmit, reset, formState: { errors }, isSubmiting } = useForm({
    mode: "onTouched",
    reValidateMode: "onChange"
  });
  const [statusSubmit, setStatusSubmit] = useState("Reset Password");
  const [captchaSuccess, setCaptchaSuccess] = useState(false);
  const [show, setShow] = useState(true);
  const [passwordShown, setPasswordShown] = useState(false);
  toast.configure()

  const history = useHistory();
  const { token } = useParams();

  document.title= 'SofTesting | Change Password ';

  const handleFrmRClose = () => {
    history.push("/");
     setFormsHide();
     setShow(false); 
    }

  useEffect(() => {
    console.log(`issubmitting:${isSubmiting}`)
  }, [isSubmiting])


  const onChangeCaptcha = (status) => {
    if (status) {
      setCaptchaSuccess(status)
    }
    console.log(captchaSuccess);

  }

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  }

  const onSubmit = async (data, e) => {
    console.log("onSubmit");

    if (!captchaSuccess) {
      toast.info("Please enter security code", { theme: "dark" });

    } else {


      if (data.newPassword !== data.coNewPassword) {
        toast.info("Confirm Password is not valid", { theme: "dark" });
        return;
      }

      if (data.newPassword === data.currentPassword) {
        toast.info("The new Password must be different from current", { theme: "dark" });
        return;
      }

      setStatusSubmit("Sending...");


      const location = window.location.hostname;

      let url = '';
      if (location ==='localhost') {
        url=`http://${location}:8000/api/user/changePassword`
      } else{
        url='https://api.softestingca.com/api/user/changePassword'
      }
      

      await axios({
        method: "post",
        url: url,
        data: { data, token: token.substr(1) }

      })
        .then((response) => {
          console.log('response.data.status', response);
          if (response.request.status === 200) {
            toast.success("Password has changed.", { theme: "colored" });
            reset();
            //setLoginFrmShow();
           // history.push('/src/pages/signIn');
          } else if (response.request.statusCode === 405) {
            toast.error("current password or verification code is not valid", { theme: "dark" })
          } else  if (response.request.statusCode !== 200) {
            toast.error("Password failed to change.", { theme: "dark" })
          }
        })
        .catch(
          (ex) => {
            console.log('exex', ex);
          
            // if (ex.Error.statusCode === 405) {
            //   toast.error("current password or verification code is not valid", { theme: "dark" })
            // } else  if (ex.Error.statusCode !== 200) {
            //   alert(ex.Error.statusCode)
              toast.error("Password failed to change.", { theme: "dark" })
        //    }
            
          });
      setStatusSubmit("Submit");

    }
  };


  return (
    <>
      <Desktop>
        <form className={changePassFrmShow? styles.modal : styles.inActive} onSubmit={handleSubmit(onSubmit)} style={{ backgroundImage: `url(${img})` }}>

          <div className={styles.container}>
           
            <h1 className ={styles.h1}> SofTesting Change Password</h1>
            <span id={styles.desc}>

            </span>
            <FocusLock>
              <input id={styles.currentPassword} placeholder="Enter Current Password Or Verification Code" autoFocus
                className={`${errors.currentPassword ? styles.errorBorder : styles.Border}`}
                defaultValue="" type={passwordShown ? "text" : "password"}
                 name="currentPassword"
                style={{ backgroundImage: `url(${eye})` }}
                onClick={togglePassword}
                {...register('currentPassword', {
                  required: "*",
                  pattern: {
                    value: /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/i,
                    message: "*"
                  }
                })} />

              {errors.currentPassword && <p id={styles.cError} role="alert" >{errors.currentPassword.message}</p>}

              <input id={styles.newPassword} placeholder="Enter New Password" 
                className={`${errors.newPassword ? styles.errorBorder : styles.Border}`}
                defaultValue="" type={passwordShown ? "text" : "password"} name="newPassword"
                style={{ backgroundImage: `url(${eye})` }}
                  onClick={togglePassword}
                {...register('newPassword', {
                  required: "*",
                  pattern: {
                    value: /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/i,
                    message: "*"
                  }
                })} />

              {errors.newPassword && <p id={styles.nError} role="alert" >{errors.newPassword.message}</p>}


              <input id={styles.coNewPassword} placeholder="Confirm New Password" 
                className={`${errors.coNewPassword ? styles.errorBorder : styles.Border}`}
                defaultValue="" type={passwordShown ? "text" : "password"} name="coNewPassword"
                style={{ backgroundImage: `url(${eye})` }}
                onClick={togglePassword}
                {...register('coNewPassword', {
                  required: "*",
                  pattern: {
                    value: /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/i,
                    message: "*"
                  }
                })} />

              {errors.coNewPassword && <p id={styles.nError} role="alert" >{errors.coNewPassword.message}</p>}

              <div className={styles.rnc}>
                <Captcha
                  onChange={onChangeCaptcha}
                />
              </div>

              <button type="submit" id={styles.submit} disabled={isSubmiting} onClick={handleSubmit(onSubmit)}>{statusSubmit}</button>
            </FocusLock>
          </div>
        </form>
      </Desktop>
      <Tablet>
        <form className={changePassFrmShow ? styles.modal : styles.inActive} onSubmit={handleSubmit(onSubmit)} style={{ backgroundImage: `url(${img})` }}>

          <div className={styles.container}>
           
            <h1 className ={styles.h1}> SofTesting Change Password</h1>
            <span id={styles.desc}>

            </span>
            <FocusLock>
              <input id={styles.currentPassword} placeholder="Current Password Or Verification Code" autoFocus
                className={`${errors.currentPassword ? styles.errorBorder : styles.Border}`}
                defaultValue="" type={passwordShown ? "text" : "password"} name="currentPassword"
                style={{ backgroundImage: `url(${eye})` }}
                onClick={togglePassword}
                {...register('currentPassword', {
                  required: "*",
                  pattern: {
                    value: /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/i,
                    message: "*"
                  }
                })} />

              {errors.currentPassword && <p id={styles.cError} role="alert" >{errors.currentPassword.message}</p>}

              <input id={styles.newPassword} placeholder="Enter New Password" 
                className={`${errors.newPassword ? styles.errorBorder : styles.Border}`}
                defaultValue="" type={passwordShown ? "text" : "password"} name="newPassword"
                style={{ backgroundImage: `url(${eye})` }}
                onClick={togglePassword}
                {...register('newPassword', {
                  required: "*",
                  pattern: {
                    value: /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/i,
                    message: "*"
                  }
                })} />

              {errors.newPassword && <p id={styles.nError} role="alert" >{errors.newPassword.message}</p>}


              <input id={styles.coNewPassword} placeholder="Confirm New Password" 
                className={`${errors.coNewPassword ? styles.errorBorder : styles.Border}`}
                defaultValue="" type={passwordShown ? "text" : "password"} name="coNewPassword"
                style={{ backgroundImage: `url(${eye})` }}
                onClick={togglePassword}
                {...register('coNewPassword', {
                  required: "*",
                  pattern: {
                    value: /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/i,
                    message: "*"
                  }
                })} />

              {errors.coNewPassword && <p id={styles.nError} role="alert" >{errors.coNewPassword.message}</p>}

              <div className={styles.rnc}>
                <Captcha
                  onChange={onChangeCaptcha}
                />
              </div>

              <button type="submit" id={styles.submit} disabled={isSubmiting} onClick={handleSubmit(onSubmit)}>{statusSubmit}</button>
            </FocusLock>
          </div>
        </form>
      </Tablet>
      <Mobile>
        <form className={changePassFrmShow ? styles.modal : styles.inActive} onSubmit={handleSubmit(onSubmit)} style={{ backgroundImage: `url(${img})` }}>

          <div className={styles.container}>
           
            <h1 className ={styles.h1}> SofTesting Change Password</h1>
            <span id={styles.desc}>

            </span>
            <FocusLock>
              <input id={styles.currentPassword} placeholder="Current Password Or Verification Code" autoFocus
                className={`${errors.currentPassword ? styles.errorBorder : styles.Border}`}
                defaultValue="" type={passwordShown ? "text" : "password"} name="currentPassword"
                style={{ backgroundImage: `url(${eye})` }}
                onClick={togglePassword}
                {...register('currentPassword', {
                  required: "*",
                  pattern: {
                    value: /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/i,
                    message: "*"
                  }
                })} />

              {errors.currentPassword && <p id={styles.cError} role="alert" >{errors.currentPassword.message}</p>}

              <input id={styles.newPassword} placeholder="Enter New Password" 
                className={`${errors.newPassword ? styles.errorBorder : styles.Border}`}
                defaultValue="" type={passwordShown ? "text" : "password"} name="newPassword"
                style={{ backgroundImage: `url(${eye})` }}
                onClick={togglePassword}
                {...register('newPassword', {
                  required: "*",
                  pattern: {
                    value: /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/i,
                    message: "*"
                  }
                })} />

              {errors.newPassword && <p id={styles.nError} role="alert" >{errors.newPassword.message}</p>}


              <input id={styles.coNewPassword} placeholder="Confirm New Password" 
                className={`${errors.coNewPassword ? styles.errorBorder : styles.Border}`}
                defaultValue="" type={passwordShown ? "text" : "password"} name="coNewPassword"
                style={{ backgroundImage: `url(${eye})` }}
                onClick={togglePassword}
                {...register('coNewPassword', {
                  required: "*",
                  pattern: {
                    value: /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/i,
                    message: "*"
                  }
                })} />

              {errors.coNewPassword && <p id={styles.nError} role="alert" >{errors.coNewPassword.message}</p>}

              <div className={styles.rnc}>
                <Captcha
                  onChange={onChangeCaptcha}
                />
              </div>

              <button type="submit" id={styles.submit} disabled={isSubmiting} onClick={handleSubmit(onSubmit)}>{statusSubmit}</button>
            </FocusLock>
          </div>
        </form>
      </Mobile>
      <MobileX>
        <form className={changePassFrmShow? styles.modal : styles.inActive} onSubmit={handleSubmit(onSubmit)} style={{ backgroundImage: `url(${img})` }}>

          <div className={styles.container}>
           
            <h1 className ={styles.h1}> SofTesting Change Password</h1>
            <span id={styles.desc}>

            </span>
            <FocusLock>
              <input id={styles.currentPassword} placeholder="Current Password Or Verification Code" autoFocus
                className={`${errors.currentPassword ? styles.errorBorder : styles.Border}`}
                defaultValue="" type={passwordShown ? "text" : "password"} name="currentPassword"
                style={{ backgroundImage: `url(${eye})` }}
                onClick={togglePassword}
                {...register('currentPassword', {
                  required: "*",
                  pattern: {
                    value: /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/i,
                    message: "*"
                  }
                })} />

              {errors.currentPassword && <p id={styles.cError} role="alert" >{errors.currentPassword.message}</p>}

              <input id={styles.newPassword} placeholder="Enter New Password" 
                className={`${errors.newPassword ? styles.errorBorder : styles.Border}`}
                defaultValue="" type={passwordShown ? "text" : "password"} name="newPassword"
                style={{ backgroundImage: `url(${eye})` }}
                onClick={togglePassword}
                {...register('newPassword', {
                  required: "*",
                  pattern: {
                    value: /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/i,
                    message: "*"
                  }
                })} />

              {errors.newPassword && <p id={styles.nError} role="alert" >{errors.newPassword.message}</p>}


              <input id={styles.coNewPassword} placeholder="Confirm New Password" 
                className={`${errors.coNewPassword ? styles.errorBorder : styles.Border}`}
                defaultValue="" type={passwordShown ? "text" : "password"} name="coNewPassword"
                style={{ backgroundImage: `url(${eye})` }}
                onClick={togglePassword}
                {...register('coNewPassword', {
                  required: "*",
                  pattern: {
                    value: /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/i,
                    message: "*"
                  }
                })} />

              {errors.coNewPassword && <p id={styles.nError} role="alert" >{errors.coNewPassword.message}</p>}

              <div className={styles.rnc}>
                <Captcha
                  onChange={onChangeCaptcha}
                />
              </div>

              <button type="submit" id={styles.submit} disabled={isSubmiting} onClick={handleSubmit(onSubmit)}>{statusSubmit}</button>
            </FocusLock>
          </div>
        </form>
      </MobileX>
    </>
  );

}


export default ChangePassword;