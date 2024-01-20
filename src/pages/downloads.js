import React, { useContext, useState, useEffect, useRef } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import axios from "axios";
import styles from "../styles/downloads.module.scss";

import { NavContext } from "../contexts/navContext";
import { VisibilityContext } from "../contexts/visibilityContext";
//import { Desktop, Tablet, Mobile, MobileX } from "../contexts/breakPoints";

import ContactUs from "../pages/contactUs";
import ScrollToTop from "../components/scrollToTop";
import Footer from "../components/footer";

import android_r from "../assets/downloads/android-red.png";
import android_b from "../assets/downloads/android-black.png";
////import ios_r from "../assets/downloads/ios-red.svg";
import ios_b from "../assets/downloads/ios-black.png";
//import mac_r from "../assets/downloads/mac-red.svg";
import mac_b from "../assets/downloads/mac-black.png";
//import windows_r from "../assets/downloads/windows-red.svg";
import windows_b from "../assets/downloads/windows-black.png";
import esignature from "../assets/downloads/431924233.png";
import mabileSign from  "../assets/downloads/googlePlay_medium.png";


const Downloads = (props) => {
  const { setOffMenu } = useContext(NavContext);
  const { setBlogShow } = useContext(VisibilityContext);

  document.title = "SofTesting | Downloads";

  const handleFrmLoad = () => {
    setBlogShow();
  };

  useEffect(() => {
    handleFrmLoad();
  }, []);

  const handleApkDownload = () =>{

 //   const location = window.location.hostname;
    let getUrl = "";

  //console.log('osName' , osName())

 // if (location === "localhost") {
  //  getUrl = `http://${location}:8000/api/contract/download`;
  //} else {
  ////  getUrl = `https://api.softestingca.com/api/contract/download`;
 // }

//  axios.get(getUrl).then((res) => {
//   console.log('res', res)
// });

    fetch("https://api.softestingca.com/apps/esignature/android/app-release.apk",
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/vnd.android.package-archive',
      },
    })
    .then((response) => response.blob())
    .then((blob) => { 
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(new Blob([blob]),
            );
            // Setting various property values
            let alink = document.createElement("a");
            alink.href = fileURL;
         //   alink.download = "app-release.apk";
            alink.setAttribute(
              'download',
              'app-release.apk',
            );
            alink.click();
        });
   }

  return (
    <div className={styles.article}>
      <div className={styles.article1}>
        <h1>All Platforms. All Devices.</h1>

        <div className={styles.line1}>
          <p className={styles.text1}>
            {" "}
            By downloading and using SofTesting Apps, you accept{" "}
          </p>{" "}
          <Link
            className={styles.policy}
            to={"/src/pages/policy"}
            target="_blank"
          >
            {" "}
            our Terms & Conditions and our Privacy Policy..
          </Link>
        </div>

        <h2>SofTesting Digital Signature</h2>

        <div className={styles.grid0}>
          <div className={styles.osIcons}>
            <Link to={"/contract/signature"} target="_blank" >
              <img
                className={styles.img}
                src={windows_b}
                alt="windows"
                width={120}
                height={150}
              />
              <p className={styles.tag}>
                {" "}
                Windows{" "}
              </p>
            </Link>
          </div>
          <div className={styles.osIcons}>
          {/* <a href={"https://api.softestingca.com/apps/esignature/android/app-release.apk"} download="app-release.apk" target="_blank" rel="noreferrer"></a> */}
             <Link to={"/downloads"} onClick={() => handleApkDownload()}  > 
              <img
                className={styles.img}
                src={android_b}
                alt="android"
                width={120}
                height={150}
              />
               <p  className={styles.tag}>
                {" "}
                Android{" "}
               </p>
             </Link> 
          </div>
          <div className={styles.osIcons}  target="_blank">
            <a href="https://apps.apple.com/app/softesting-digital-signature/id6450856832"
             target="_blank"
             rel="noopener noreferrer"
            >
              <img
                className={styles.img}
                src={ios_b}
                alt="ios"
                width={120}
                height={150}
              />
              <p className={styles.tag}>
                {" "}
                IOS{" "}
              </p>
            </a>
          </div>
          <div className={styles.osIcons}>
            <Link to={"/contract/signature"} target="_blank">
              <img
                className={styles.img}
                src={mac_b}
                alt="MacOs"
                width={120}
                height={150}
              />
              <p  className={styles.tag}>
                {" "}
                MacOs{" "}
              </p>
            </Link>
          </div>
        </div>
      </div>

      <ScrollToTop />

      <section className={styles.grid0}>
        <div className={styles.introduce}>
            <p >

                Progressive Web Apps are built using web technologies such as HTML, CSS, and JavaScript, and they are designed to be responsive and device-agnostic. This means that they can be accessed from any browser, regardless of the operating system, and that they will automatically scale to fit the screen size of the device. One of the benefits of Progressive Web Apps is that they can be installed on a user&apos;s device without having to go through traditional app stores, such as the Google Play Store or the Apple App Store. This is because they are built using web technologies, and do not require a separate download or installation process.
                
            </p>
     
           <img
                className={styles.img}
                src={esignature}
                alt="image1"
                width={450}
                height={400}
              />
        </div>
        <div className={styles.introduce}>
          <img
                className={styles.img}
                src={mabileSign}
                alt="image2"
                width={200}
                height={300}
              />

            
                <p>
                   Mobile Application (Android & IOS)
                  Electronic Signature Software solution flexible for single, or multiple signers, sequentially or in any order.
                  eSignature works where you do. Send and sign from virtually anywhere, on any device.
                </p>
            

         </div>
      </section>
      <section className={styles.six}>
        <ContactUs src="body" />
      </section>
      <section className={styles.footer}>
        <Footer />
      </section>
    </div>
  );
};

export default Downloads;
