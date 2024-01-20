
import React, { useContext, useState, useEffect, useRef } from "react";
import { Route, BrowserRouter , Switch, Link, useHistory, Redirect, withRouter, useRouteMatch } from "react-router-dom";

import { ThemeContext } from "../contexts/themeContext";
import { VisibilityContext } from "../contexts/visibilityContext";

import styles from "../styles/body.module.scss";

import SlideShow from "../components/slideShow";
import LogoShow from "../components/logoShow";
import ContactUs from "../pages/contactUs";
import ScrollToTop from "./scrollToTop";
import Footer from "../components/footer";

//import {ReactComponent as img} from "../assets/SlideShow/document1-edited.svg";
import  img from "../assets/SlideShow/DeskTop/document1.svg";
import  testimg from "../assets/SlideShow/DeskTop/document2.svg";
import  developimg from "../assets/SlideShow/DeskTop/document3.svg";

import tabletImg from "../assets/SlideShow/Tablet/document1.svg";
import tabletTestimg from "../assets/SlideShow/Tablet/document2.svg";
import tabletDevelopimg from "../assets/SlideShow/Tablet/document3.svg";

import mobileImg from "../assets/SlideShow/Mobile/document1.svg";
import mobileTestimg from "../assets/SlideShow/Mobile/document2.svg";
import mobileDevelopimg from "../assets/SlideShow/Mobile/document3.svg";

import mobileXImg from "../assets/SlideShow/MobileX/document1.svg";
import mobileXTestimg from "../assets/SlideShow/MobileX/document2.svg";
import mobileXDevelopimg from "../assets/SlideShow/MobileX/document3.svg";

import backimg1 from "../assets/ComputerScience.jpg";
import backimg2 from "../assets/abstract-data.jpg";
import backimg3 from "../assets/5099637.jpg";
import backimg4 from "../assets/3879969.jpg";
//import backimg5 from "../assets/ArtWallpaper.jpg";
//import backimg5 from "../assets/Index22.jpg";

import { NavContext } from "../contexts/navContext";
import { Desktop, Tablet, Mobile, MobileX } from "../contexts/breakPoints";
import icon1 from "../assets/Icon/16894229181556105318.svg"
import icon2 from "../assets/Icon/14098171681556105309.svg"
import icon3 from "../assets/Icon/2627382291556105316.svg"

import icon4 from "../assets/Icon/93434801581665209.svg"
import icon5 from "../assets/Icon/13506714241581665198.svg"
import icon6 from "../assets/Icon/11706062411581665184.svg"
import icon7 from "../assets/Icon/11707724591581665205.svg"
import icon8 from "../assets/Icon/11721476711581665195.svg"
import icon9 from "../assets/Icon/icons8-google.png"

import icon10 from "../assets/Icon/tiles.png"
import icon11 from "../assets/Icon/icons8-google.png"
import icon12 from "../assets/Icon/5353672081620547275.svg"

import icon13 from "../assets/Icon/5636691181536063627.svg"
import icon14 from "../assets/Icon/6063251581583147612.svg"
import icon15 from "../assets/Icon/18086593911556105312.svg"

import angular from "../assets/LogoShow/angular.png";
import jira from "../assets/LogoShow/jira.png";
import jmeter from "../assets/LogoShow/jmeter.png";
import Joomla from "../assets/LogoShow/Joomla.png";
import pwa from "../assets/LogoShow/pwa.svg";
import nodejs from "../assets/LogoShow/nodejs.png";
import owasp from "../assets/LogoShow/owasp.png";
import react from "../assets/LogoShow/react-logo.png";
import router from "../assets/LogoShow/react-router.png";
import spring from "../assets/LogoShow/react-spring.png";
import selenium from "../assets/LogoShow/selenium-logo.png";
import software from "../assets/LogoShow/software-testing.png";
import woocommerce from "../assets/LogoShow/woocommerce.png";
import wordpress from "../assets/LogoShow/wordpress.png";
import android from "../assets/LogoShow/Android.png";


const Body = () => {

  const { isLight, dark, light } = useContext(ThemeContext);
  const theme = isLight ? light : dark;
  const { setOffMenu } = useContext(NavContext);
 // const arrow = " -->";
  ///const { forms , dispatch   } = useContext(VisibilityContext );
  const { loginFrmShow, registerFrmShow, resetPassFrmShow, contactFrmShow, setBlogShow,  bodyFrmShow, linkedinKey,  setFormsHide } = useContext(VisibilityContext);
 // const [StateVariable, setStateVariable] = useState(false)
   const[h3Show, setH3Show]=useState(false);
   
 // const contactRef = useRef(null);

  document.title= "SofTesting | Software Testing & Development";

  const location = window.location.hostname;

  let history0 = useHistory();

useEffect(() => {
  if (!resetPassFrmShow && !loginFrmShow && !registerFrmShow  && !contactFrmShow && !linkedinKey)  {  history0.push("/");}

}, []);



  let urlTestArticle1, urlTestArticle2, urlTestArticle3 ;
  let urlTestArticle4, urlTestArticle5, urlTestArticle6 ;
  let urlTestArticle7, urlTestArticle8, urlTestArticle9 ;
  let urlDevelopArticle1, urlDevelopArticle2, urlDevelopArticle3 ;
  let urlDevelopArticle4, urlDevelopArticle5, urlDevelopArticle6 ;

  if (location === "localhost") {
    urlTestArticle1 = "/src/blog/testArticle1";
    urlTestArticle2 = "/src/blog/testArticle2";
    urlTestArticle3 = "/src/blog/testArticle3";
    urlTestArticle4 = "/src/blog/testArticle4";
    urlTestArticle5 = "/src/blog/testArticle5";
    urlTestArticle6 = "/src/blog/testArticle6";
    urlTestArticle7 = "/src/blog/testArticle7";
    urlTestArticle8 = "/src/blog/testArticle8";
    urlTestArticle9 = "/src/blog/testArticle9";
    urlDevelopArticle1 = "/src/blog/developArticle1";
    urlDevelopArticle2 = "/src/blog/developArticle2";
    urlDevelopArticle3 = "/src/blog/developArticle3";
    urlDevelopArticle4 = "/src/blog/developArticle4";
    urlDevelopArticle5 = "/src/blog/developArticle5";
    urlDevelopArticle6 = "/src/blog/developArticle6";
} else {
    urlTestArticle1 = "/src/blog/testArticle1";
    urlTestArticle2 = "/src/blog/testArticle2";
    urlTestArticle3 = "/src/blog/testArticle3";
    urlTestArticle4 = "/src/blog/testArticle4";
    urlTestArticle5 = "/src/blog/testArticle5";
    urlTestArticle6 = "/src/blog/testArticle6";
    urlTestArticle7 = "/src/blog/testArticle7";
    urlTestArticle8 = "/src/blog/testArticle8";
    urlTestArticle9 = "/src/blog/testArticle9";
    urlDevelopArticle1 = "/src/blog/developArticle1";
    urlDevelopArticle2 = "/src/blog/developArticle2";
    urlDevelopArticle3 = "/src/blog/developArticle3";
    urlDevelopArticle4 = "/src/blog/developArticle4";
    urlDevelopArticle5 = "/src/blog/developArticle5";
    urlDevelopArticle6 = "/src/blog/developArticle6";
}


  //  useEffect(() => {
  //  //// window.history.pushState(null, null, window.location.pathname);//or//
  //  //// window.history.pushState(null, null, window.location.href);

  //       window.addEventListener("popstate" , () => { if (!bodyFrmShow) {setBodyFrmShow()} 
  //       if (aboutFrmShow) {setBodyFrmShow()}   if (policyFrmShow) {setBodyFrmShow()}  })
  //       }, [false]);

  // useEffect(() => {
  //   if (StateVariable === true) {
  //     window.scrollTo(0, 0)
  //   }
  // }, [StateVariable])

  // const UpScrollHandle = () => {
  //   setStateVariable(true);
  // }

  // const[pressed,setPressed] = useState(false);
  // useEffect(()=> {
  //   window.onpopstate=() =>
  //   { setPressed(true)  }

  // } ,[pressed])

const handleBlogShow=()=>{
 setBlogShow();
}

  return (

    <div className={bodyFrmShow ? styles.body : styles.inactive} onClick={setFormsHide } onMouseEnter={setOffMenu} >
      <Desktop>

        <div className={styles.slider}>


          <SlideShow disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}
            interval={9000}
            images={[
              img, testimg, developimg
            ]}
          />


        </div>

        <div className={styles.testSection2}>
          <h3>Test Better, Test Smarter</h3>
          <h4>Test your releases on time. Make users happy. Grow your business.</h4>
        </div>

        <div className={styles.testcards}>

          <div className={styles.card}>
            <div className ={styles.cardHeader}>
              <img src={icon1} alt = "testing capacity" />
              <h6>Scale your testing capacity </h6>
            </div>
            <div className={styles.card_content}>
              <div >
                <span className={styles.text1}>
                  Our job is to launch, support, 
                  and manage the best quality assurance 
                  teams to make your product flawless. 
                  The hired staff can handle any task and 
                  apply the most relevant QA software.
                </span>

                <Link to={`${urlTestArticle1}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>
            
              </div>

            </div>
          </div>

          <div className={styles.card}>
            <div className ={styles.cardHeader}>
              <img src={icon3} alt = "product quality" />
              <h6>Increase product quality</h6>
            </div>

            <div className={styles.card_content}>
              <span className={styles.text1}>
                In-depth testing is essential for 
                any digital project to succeed. Make 
                quality the first business priority with us. 
                We make sure that no bug spoils user experience
                or affects business metrics.
              </span>

              <Link to={`${urlTestArticle2}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>
          <div className={styles.card}>
            <div className ={styles.cardHeader}>
              <img src={icon2} alt = "market"/>
              <h6>Achieve faster time-to-market</h6>
            </div>

            <div className={styles.card_content}>
              <span className={styles.text1}>
                Decrease downtime and reduce testing time
                when outsourcing your QA process. Our proven
                testing practices and test automation tools 
                allow us to address issues and meet goals more
                efficiently.
              </span>

              <Link to={`${urlTestArticle3}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>
        </div>

        <div className={styles.developmentsection2}>
          <h3>  Realise your vision, why choose SofTesting  </h3>
         
        </div>

        <div className={styles.developmentcards}>

          <div className={styles.card}>
            <div className ={styles.cardHeader}>
              <img src={icon10} alt="quickly"/>
              <h6>Save costs and launch quickly </h6>
            </div>
            <div className={styles.card_content}>
              <span>
                Our development process is efficient and fully transparent, allowing us to deliver your software product on time and on budget.
              </span>

              <Link to={`${urlDevelopArticle4}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>

          <div className={styles.card}>
            <div className ={styles.cardHeader}>
               <img src={icon11} alt = "development"/> 
              <h6>Full control over development</h6>
            </div>

            <div className={styles.card_content}>
              <span>
                We provide daily and weekly reports on the project progress, and clearly communicate any issues that may arise beforehand.
              </span>

              <Link to={`${urlDevelopArticle5}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>
          <div className={styles.card}>
            <div className ={styles.cardHeader}>
              <img src={icon12} alt = "support"/>
              <h6>Support after launch</h6>
            </div>

            <div className={styles.card_content}>
              <span>
                Our work doesn’t stop when your custom product goes live. Our reliable support team will ensure your platform runs smoothly.
              </span>

              <Link to={`${urlDevelopArticle6}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>
            </div>
          </div>
        </div>



        <ScrollToTop />



        <div className={styles.testsection3}>
          <h3>  Full-Range QA Services </h3>
        </div>

        <div className={styles.testServices}>
          <div className={styles.testcard}>
            <div className ={styles.cardHeader}>
              <img src={icon4} alt= "mobile"/>
              <h6> Mobile Applications Testing </h6>
            </div>
            <div className={styles.testcard_content}>
              <span>
                Years of experience in testing of mobile applications help us detect and prevent even the most unobvious and hidden bugs that spoil user experience. We make sure that your application is tested for all critical aspects.
              </span>

              <Link to={`${urlTestArticle4}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>

          <div className={styles.testcard}>
            <div className ={styles.cardHeader}>
              <img src={icon7} alt ="web"/>
              <h6> Web Applications Testing </h6>
            </div>

            <div className={styles.testcard_content}>
              <span>
                Make sure your web-based product works properly, meets user expectations, and offers perfect performance and security. Our team has experience with many browsers and tools for efficient testing.
              </span>

              <Link to={`${urlTestArticle5}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>
          <div className={styles.testcard}>
            <div className ={styles.cardHeader}>
              <img src={icon8} alt ="testing"/>
              <h6> Desktop Testing</h6>
            </div>

            <div className={styles.testcard_content}>
              <span>
                We test desktop apps to deliver top-notch usability, functionality, performance, and security. As a result, consistent quality on any device guarantees perfect usability and smooth operation.
              </span>

              <Link to={`${urlTestArticle6}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>

          <div className={styles.testcard}>
            <div className ={styles.cardHeader}>
              <img src={icon5} alt ="manual"/>
              <h6>Manual Testing</h6>
            </div>

            <div className={styles.testcard_content}>
              <span>
                Providing manual testing services, our team aims to verify that all the product functions work perfectly as intended. We use efficient testing techniques to detect even unobvious bugs that can potentially harm user experience.
              </span>

              <Link to={`${urlTestArticle7}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>
          <div className={styles.testcard}>
            <div className ={styles.cardHeader}>
              <img src={icon6} alt="automated testing"/>
              <h6>Automated Testing</h6>
            </div>

            <div className={styles.testcard_content}>
              <span>
                The QAwerk testers have extensive experience in the automation of the QA process. Automated testing can be the most profitable solution to expand testing coverage and achieve efficiency, quality, and cost reduction.
              </span>

              <Link   to={`${urlTestArticle8}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>
          <div className={styles.testcard}>
            <div className ={styles.cardHeader}>
              <img src={icon9} alt="security" />
              <h6>Web Security Testing</h6>
            </div>

            <div className={styles.testcard_content}>
              <span>
                Web application security testing is the process of testing, analyzing and reporting on the security level and/or posture of a Web application. ... The key objective behind Web application security testing is to identify any vulnerabilities or threats that can jeopardize the security or integrity of the Web application.
              </span>

              <Link to={`${urlTestArticle9}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>
        </div>

        <div className={styles.developsection3}>
          <h1>  Modern software for your business success </h1>
        </div>

        <div className={styles.developServices}>
          <div className={styles.developcard}>
            <div className ={styles.cardHeader}>
              <img src={icon13} alt = "mobile"/>
              <h6> Mobile App Development </h6>
            </div>
            <div className={styles.developcard_content}>
              <span>
                Bring flexibility and mobility to business with applications to run on tablets and mobile.
                The development of PWA allows to obtain the effect of a native mobile application in a browser.
              </span>

              <Link to={`${urlDevelopArticle1}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>

          <div className={styles.developcard}>
            <div className ={styles.cardHeader}>
              <img src={icon14} alt="development"/>
              <h6> Web Design & Development </h6>
            </div>

            <div className={styles.developcard_content}>
              <span>
                We analyse , design and develop custom web site as unique as your business.
                Progressive Web Apps (PWA) is a solution that is used by leaders in many industries.
              </span>

              <Link to ={`${urlDevelopArticle2}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>
          <div className={styles.developcard}>
            <div className ={styles.cardHeader}>
               <img src={icon15} alt="development"/>
              <h6> Database Development</h6>
            </div>

            <div className={styles.developcard_content}>
              <span>
                Convert your large and complex excel sheets to robust database solutions.
              </span>

              <Link to ={`${urlDevelopArticle3}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>
        </div>

        <section className={styles.one} style={{ backgroundImage: `url(${backimg1})` }}  >
          <div className={styles.subOne}>
            <h2>Progressive Web Apps (PWA) Custom Development Services</h2>
            <span className={styles.onespan}> Imagine a solution that allows you to provide a great mobile user experience that is
              performant, cost-effective, and doesn’t require development across three different platforms. 
              That’s what PWAs are all about. Picture it as a combination of the best sides of
              native mobile apps and websites.</span>
            <h3>PWA benefits for your company</h3>
            <span className={styles.onespan}>Independence from mobile types and systems 
              Release your product faster and sooner 
              Access to wider promotion methods 
              Able to access your app despite being offline 
              Push notifications 
              Native app experience </span>
          </div>
        </section>
        <section className={styles.two} style={{ backgroundImage: `url(${backimg2})` }}  >
          <h3> The Way Of Software Development Project in SofTesting</h3>
          <h4>A Transparent Way Of Working <br />
            . Brief Consultations <br />
            . Project Scoping <br />
            . UI/UX Design <br />
            . App Development <br />
            . Test & Support <br /> <br />
            We maintain a long-term collaboration with our clients. </h4>
        </section>
        <section className={styles.three} style={{ backgroundImage: `url(${backimg3})` }} >
          <h3> The Way Of Software Testing Project in SofTesting</h3>
          <span>We offer a full range of on-demand QA software testing services.
            Our services encompass many different software quality activities 
            such as quality assurance, functionality testing, mobile testing, 
            performance testing, browser and hardware compatibility testing,
            acceptance testing, and code reviews.  </span>

          <h4> Our testing labs can handle just about anything.</h4>
        </section>
        <section className={styles.four} style={{ backgroundImage: `url(${backimg4})` }}>
          <div className={styles.title}><h3> Partnership Models</h3> </div>
          <h4>Fixed Price Model</h4>
          <span>In this model, the project scope of work with its associated cost and timeline is defined before development or test starts. This is a preferred model for longer periods of engagement. The client always has peace of mind of knowing the project will remain on the same budget as agreed. This model suits best to clients who have a perfect vision of their requirement.</span>
          <h4>Hire Dedicated Model</h4>
          <span>This is a very classic and simple way of engagement wherein clients pay for the number of hours the app developer or tester works on project. Clients easily start the project as they don&apos;t have to walk in with detailed specifications. This model also allows client to update new features any time and clients know exactly what they’re paying for. This drives a lot more trust and communication.</span>
          <h4>On Site Development/Test Model</h4>
          <span>This model is preferred when clients want additional temporary resources for on-site development. This contract type ensures the engagement is cost-effective and includes face-to-face interactions with developers or testers. This model helps reach the deadline on time as there is continuous communication during the whole process.</span>
        </section>
        <section className={styles.logoSlider} >



          <LogoShow
            interval={9000}
            images={[
              angular, jira, jmeter, Joomla, pwa, nodejs, owasp, react, router, spring, selenium,android, woocommerce, wordpress, software
            ]}
          />

        </section>
        {/* style={{ backgroundImage: `url(${backimg5})` }} */}
        <section id={styles.six} className={styles.six}>
          {/* contactRef = {contactRef.current}   */}
          <ContactUs src="body" />
        </section>
        <section className={styles.cover} ></section>

        <section  className={styles.footer}>
                   <Footer/>
        </section>

      </Desktop>




      
      <Tablet>
        <div className={styles.slider}>


          <SlideShow 
            interval={9000}
            images={[
              tabletImg, tabletTestimg, tabletDevelopimg
            ]}
          />


        </div>

        <div className={styles.testSection2}>
          <h3>  Test Better, Test Smarter </h3>
          <h4>  Test your releases on time. Make users happy. Grow your business. </h4>
        </div>

        <div className={styles.testcards}>

          <div className={styles.card}>
            <div className ={styles.cardHeader}>
              <img src={icon1} alt ="capacity"/>
              <h6>Scale your testing capacity </h6>
            </div>
            <div className={styles.card_content}>
              <div >
                <span className={styles.text1}>
                  Our job is to launch, support, 
                  and manage the best quality assurance 
                  teams to make your product flawless. 
                  The hired staff can handle any task and
                  apply the most relevant QA software.
                </span>

                <Link to ={`${urlTestArticle1}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>
              </div>

            </div>
          </div>

          <div className={styles.card}>
            <div className ={styles.cardHeader}>
              <img src={icon3} alt="quality" />
              <h6>Increase product quality</h6>
            </div>

            <div className={styles.card_content}>
              <span className={styles.text1}>
                In-depth testing is essential for 
                any digital project to succeed. Make 
                quality the first business priority with us. 
                We make sure that no bug spoils user experience
                or affects business metrics.
              </span>

              <Link to ={`${urlTestArticle2}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>
            </div>
          </div>
          <div className={styles.card}>
            <div className ={styles.cardHeader}>
              <img src={icon2} alt="market"/>
              <h6>Achieve faster time-to-market</h6>
            </div>

            <div className={styles.card_content}>
              <span className={styles.text1}>
                Decrease downtime and reduce testing time 
                when outsourcing your QA process. Our proven
                testing practices and test automation tools 
                allow us to address issues and meet goals more
                efficiently.
              </span>

              <Link to ={`${urlTestArticle3}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>
        </div>

        <div className={styles.developmentsection2}>
          <h3>  Realise your vision, why choose SofTesting </h3>
          
        </div>

        <div className={styles.developmentcards}>

          <div className={styles.card}>
            <div className ={styles.cardHeader} >
              <img src={icon10} alt="costs"/>
              <h6>Save costs and launch quickly </h6>
            </div>
            <div className={styles.card_content}>
              <span>
                Our development process is efficient and fully transparent, allowing us to deliver your software product on time and on budget.
              </span>

              <Link to ={`${urlDevelopArticle4}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>

          <div className={styles.card}>
            <div className ={styles.cardHeader} >
             <img src={icon11} alt="develoment"/> 
              <h6>Full control over development</h6>
            </div>

            <div className={styles.card_content}>
              <span>
                We provide daily and weekly reports on the project progress, and clearly communicate any issues that may arise beforehand.
              </span>

              <Link to ={`${urlDevelopArticle5}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>
          <div className={styles.card}>
            <div className ={styles.cardHeader}>
              <img src={icon12} alt="support"/>
              <h6>Support after launch</h6>
            </div>

            <div className={styles.card_content}>
              <span>
                Our work doesn’t stop when your custom product goes live. Our reliable support team will ensure your platform runs smoothly.
              </span>

              <Link to ={`${urlDevelopArticle6}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>
        </div>



        <ScrollToTop />



        <div className={styles.testsection3}>
          <h3>  Full-Range QA Services </h3>
        </div>

        <div className={styles.testServices}>
          <div className={styles.testcard}>
            <div className ={styles.cardHeader} >
              <img src={icon4} alt ="mobile"/>
              <h6> Mobile Applications Testing </h6>
            </div>
            <div className={styles.testcard_content}>
              <span>
                Years of experience in testing of mobile applications help us detect and prevent even the most unobvious and hidden bugs that spoil user experience. We make sure that your application is tested for all critical aspects.
              </span>

              <Link to ={`${urlTestArticle4}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>

          <div className={styles.testcard}>
            <div className ={styles.cardHeader}>
              <img src={icon7} alt="web"/>
              <h6> Web Applications Testing </h6>
            </div>

            <div className={styles.testcard_content}>
              <span>
                Make sure your web-based product works properly, meets user expectations, and offers perfect performance and security. Our team has experience with many browsers and tools for efficient testing.
              </span>

              <Link to={`${urlTestArticle5}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>
          <div className={styles.testcard}>
            <div className ={styles.cardHeader}>
              <img src={icon8} alt="testing"/>
              <h6> Desktop Testing</h6>
            </div>

            <div className={styles.testcard_content}>
              <span>
                We test desktop apps to deliver top-notch usability, functionality, performance, and security. As a result, consistent quality on any device guarantees perfect usability and smooth operation.
              </span>

              <Link to={`${urlTestArticle6}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>

          <div className={styles.testcard}>
            <div className ={styles.cardHeader}>
              <img src={icon5} alt="manual"/>
              <h6>Manual Testing</h6>
            </div>

            <div className={styles.testcard_content}>
              <span>
                Providing manual testing services, our team aims to verify that all the product functions work perfectly as intended. We use efficient testing techniques to detect even unobvious bugs that can potentially harm user experience.
              </span>

              <Link to={`${urlTestArticle7}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>
          <div className={styles.testcard}>
            <div className ={styles.cardHeader}>
              <img src={icon6} alt ="automated testing"/>
              <h6>Automated Testing</h6>
            </div>

            <div className={styles.testcard_content}>
              <span>
                The QAwerk testers have extensive experience in the automation of the QA process. Automated testing can be the most profitable solution to expand testing coverage and achieve efficiency, quality, and cost reduction.
              </span>

              <Link to={`${urlTestArticle8}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>
          <div className={styles.testcard}>
            <div className ={styles.cardHeader}>
              <img src={icon9} alt="security"/>
              <h6>Web Security Testing</h6>
            </div>

            <div className={styles.testcard_content}>
              <span>
                Web application security testing is the process of testing, analyzing and reporting on the security level and/or posture of a Web application. ... The key objective behind Web application security testing is to identify any vulnerabilities or threats that can jeopardize the security or integrity of the Web application.
              </span>

              <Link to={`${urlTestArticle9}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>
        </div>

        <div className={styles.developsection3}>
          <h1>  Modern software for your business success </h1>
        </div>

        <div className={styles.developServices}>
          <div className={styles.developcard}>
            <div className ={styles.cardHeader}>
              <img src={icon13} alt="development" />
              <h6> Mobile App Development </h6>
            </div>
            <div className={styles.developcard_content}>
              <span>
                Bring flexibility and mobility to business with applications to run on tablets and mobile.
                The development of PWA allows to obtain the effect of a native mobile application in a browser.
              </span>

              <Link to={`${urlDevelopArticle1}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>

          <div className={styles.developcard}>
            <div className ={styles.cardHeader}>
              <img src={icon14} alt="web"/>
              <h6> Web Design & Development </h6>
            </div>

            <div className={styles.developcard_content}>
              <span>
                We analyse , design and develop custom web site as unique as your business.
                Progressive Web Apps (PWA) is a solution that is used by leaders in many industries.
              </span>

              <Link to={`${urlDevelopArticle2}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>
          <div className={styles.developcard}>
            <div className ={styles.cardHeader}>
             <img src={icon15} alt="database"/>
              <h6> Database Development</h6>
            </div>

            <div className={styles.developcard_content}>
              <span>
                Convert your large and complex excel sheets to robust database solutions.
              </span>

              <Link to ={`${urlDevelopArticle3}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>
        </div>

        <section className={styles.one} style={{ backgroundImage: `url(${backimg1})` }}  >
          <div className={styles.subOne}>
            <h2>Progressive Web Apps (PWA) Custom Development Services</h2>
            <span className={styles.onespan}> Imagine a solution that allows you to provide a great mobile user experience that is
              performant, cost-effective, and doesn’t require development across three different platforms. 
              That’s what PWAs are all about. Picture it as a combination  of the best sides of
              native mobile apps and websites.</span>
            <h3>PWA benefits for your company</h3>
            <span className={styles.onespan}>Independence from mobile types and systems 
              Release your product faster and sooner 
              Access to wider promotion methods 
              Able to access your app despite being offline 
              Push notifications
              Native app experience </span>
          </div>
        </section>
        <section className={styles.two} style={{ backgroundImage: `url(${backimg2})` }}  >
          <h3> The Way Of Software Development Project in SofTesting</h3>
          <h4>A Transparent Way Of Working <br />
            Brief Consultations <br />
            project Scoping <br />
            UI/UX Design <br />
            App Development <br />
            Test & Support <br /> <br />
            We maintain a long-term collaboration with our clients </h4>
        </section>
        <section className={styles.three} style={{ backgroundImage: `url(${backimg3})` }} >
          <h3> The Way Of Software Testing Project in SofTesting</h3>
          <span>We offer a full range of on-demand QA software testing services. 
            Our services encompass many different software quality activities 
            such as quality assurance, functionality testing, mobile testing,
            performance testing, browser and hardware compatibility testing,
            acceptance testing, and code reviews.  </span>

          <h4> Our testing labs can handle just about anything.</h4>
        </section>
        <section className={styles.four} style={{ backgroundImage: `url(${backimg4})` }}>
          <div className={styles.title}><h3> Partnership Models</h3> </div>
          <h4>Fixed Price Model</h4>
          <span>In this model, the project scope of work with its associated cost and timeline is defined before development or test starts. This is a preferred model for longer periods of engagement. Client always has peace of mind of knowing the project will remain on the same budget as agreed. This model suits best to clients who have a perfect vision of their requirement.</span>
          <h4>Hire Dedicated Model</h4>
          <span>This is very classic and simple way of engagement wherein clients pay for the number of hours the app developer or tester works on project. Clients easily start the project as they don&apos;t have to walk in with detailed specifications. This model also allows client to update new features any time and clients know exactly what they’re paying for. This drives a lot more trust and communication.</span>
          <h4>On Site Development/Test Model</h4>
          <span>This model is preferred when clients want additional temporary resources for on-site development. This contract type ensures the engagement is cost-effective and a face-to-face interactions with developers or testers. This model helps in achieving the deadline on time as there is continuous communication during the whole process.</span>
        </section>
        <section className={styles.logoSlider} >



          <LogoShow
            interval={9000}
            images={[
              angular, jira, jmeter, Joomla, pwa, nodejs, owasp
              , react, router, spring, selenium, android , woocommerce, wordpress, software
            ]}
          />

        </section>
        {/* style={{ backgroundImage: `url(${backimg5})` }} */}
        <section id={styles.six} className={styles.six} >
          {/* contactRef = {contactRef.current}   */}
          <ContactUs src="body" />
        </section>
        <section className={styles.cover} ></section>

        <section  className={styles.footer}>
                   <Footer/>
        </section>

      </Tablet>
      <Mobile>
        <div className={styles.slider}>


          <SlideShow disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}
            interval={9000}
            images={[
              mobileImg, mobileTestimg, mobileDevelopimg
            ]}
          />


        </div>

        <div className={styles.testSection2}>
          <h3>  Test Better, Test Smarter </h3>
          <h4>  Test your releases on time. Grow your business. </h4>
        </div>

        <div className={styles.testcards}>
          <div className={styles.card}>
            <div className ={styles.cardHeader}>
              <img src={icon1} alt="capacity"/>
              <h6>Scale your testing capacity </h6>
            </div>
            <div className={styles.card_content}>
              <div >
                <span className={styles.text1}>
                  Our job is to launch, support, 
                  and manage the best quality assurance 
                  
                </span>

                <Link to={`${urlTestArticle1}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>   
                
                 </div>

            </div>
          </div>

          <div className={styles.card}>
            <div className ={styles.cardHeader}>
              <img src={icon3} alt="quality"/>
              <h6>Increase product quality</h6>
            </div>

            <div className={styles.card_content}>
              <span className={styles.text1}>
                In-depth testing is essential for
                any digital project to succeed. Make
                quality the first business priority with us.
              </span>

              <Link to={`${urlTestArticle2}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>
          <div className={styles.card}>
            <div className ={styles.cardHeader}>
              <img src={icon2} alt="market"/>
              <h6>Achieve faster time-to-market</h6>
            </div>

            <div className={styles.card_content}>
              <span className={styles.text1}>
                Decrease downtime and reduce testing time 
                when outsourcing your QA process. 
              </span>

              <Link to={`${urlTestArticle3}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>
        </div>

        <div className={styles.developmentsection2}>
        {h3Show ?<h3>  Realise your vision, why choose SofTesting </h3>:null}
          
        </div>

        <div className={styles.developmentcards}>

          <div className={styles.card}>
            <div className ={styles.cardHeader}>
              <img src={icon10} alt="costs"/>
              <h6>Save costs and launch quickly </h6>
            </div>
            <div className={styles.card_content}>
              <span>
                Our development process is efficient and fully transparent, allowing us to deliver your software product on time and on budget.
              </span>

              <Link to={`${urlDevelopArticle4}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>

          <div className={styles.card}>
            <div className ={styles.cardHeader}>
               <img src={icon11} alt="development"/> 
              <h6>Full control over development</h6>
            </div>

            <div className={styles.card_content}>
              <span>
                We provide daily and weekly reports on the project progress, and clearly communicate any issues that may arise beforehand.
              </span>

              <Link to={`${urlDevelopArticle5}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>
          <div className={styles.card}>
            <div className ={styles.cardHeader}>
              <img src={icon12} alt="support"/>
              <h6>Support after launch</h6>
            </div>

            <div className={styles.card_content}>
              <span>
                Our work doesn’t stop when your custom product goes live. Our reliable support team will ensure your platform runs smoothly.
              </span>

              <Link to={`${urlDevelopArticle6}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>
        </div>



        <ScrollToTop />



        <div className={styles.testsection3}>
         { (h3Show)?<h3>  Full-Range QA Services </h3>:null}
        </div>

        <div className={styles.testServices}>
          <div className={styles.testcard}>
            <div className ={styles.cardHeader} >
              <img src={icon4} alt="mobile" />
              <h6> Mobile Applications Testing </h6>
            </div>
            <div className={styles.testcard_content}>
              <span>
                Years of experience in testing of mobile applications help us detect and prevent even the most unobvious and hidden bugs that spoil user experience. 
              </span>

              <Link to={`${urlTestArticle4}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>

          <div className={styles.testcard}>
            <div className ={styles.cardHeader}>
              <img src={icon7} alt="web"/>
              <h6> Web Applications Testing </h6>
            </div>

            <div className={styles.testcard_content}>
              <span>
                Make sure your web-based product works properly, meets user expectations, and offers perfect performance and security. 
             </span>
             <Link to={`${urlTestArticle5}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>
          <div className={styles.testcard}>
            <div className ={styles.cardHeader}>
              <img src={icon8} alt="desktop"/>
              <h6> Desktop Testing</h6>
            </div>

            <div className={styles.testcard_content}>
              <span>
                We test desktop apps to deliver top-notch usability, functionality, performance, and security. 
              </span>

              <Link to={`${urlTestArticle6}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>

          <div className={styles.testcard}>
            <div className ={styles.cardHeader}>
              <img src={icon5} alt="manual"/>
              <h6>Manual Testing</h6>
            </div>

            <div className={styles.testcard_content}>
              <span>
                Providing manual testing services, our team aims to verify that all the product functions work perfectly as intended.
              </span>

              <Link to={`${urlTestArticle7}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>
          <div className={styles.testcard}>
            <div className ={styles.cardHeader}>
              <img src={icon6} alt="automated testing"/>
              <h6>Automated Testing</h6>
            </div>

            <div className={styles.testcard_content}>
              <span>
                The QAwerk testers have extensive experience in the automation of the QA process. 
              </span>

              <Link to={`${urlTestArticle8}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>
          <div className={styles.testcard}>
            <div className ={styles.cardHeader}>
              <img src={icon9} alt="security"/>
              <h6>Web Security Testing</h6>
            </div>

            <div className={styles.testcard_content}>
              <span>
                Web application security testing is the process of testing, analyzing and reporting. 
              </span>

              <Link to={`${urlTestArticle9}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>
        </div>

       <div className={styles.developsection3}>
           1!==2? <h1>  Modern software for your business success </h1>:null
        </div> 

       <div className={styles.developServices}>
          <div className={styles.developcard}>
            {/* <div className ={styles.cardHeader}>
              <img src={icon13} alt="quality"/>
              <h6> Mobile App Development </h6>
            </div> */}
            {/* <div className={styles.developcard_content}>
          <div>
              <span>
                The development of PWA allows to obtain the effect of a native mobile application in a browser.
              </span> 

                <a href={`${urlDevelopArticle1}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</a>
              </div>
            </div> */}
          </div> 

           <div className={styles.developcard}>
            {/* <div className ={styles.cardHeader}>
              <img src={icon14} alt="quality" />
              <h6> Web Design & Development </h6>
            </div> */}

            {/* <div className={styles.developcard_content}> 
             <span>
                We analyse , design and develop custom web site as unique as your business.
               
              </span> 

           <a href={`${urlDevelopArticle2}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</a>

            </div> */}
          </div>
          <div className={styles.developcard}>
            {/* <div className ={styles.cardHeader}>
               <img src={icon15} alt="quality"/>
              <h6> Database Development</h6>
            </div> */}

            {/* <div className={styles.developcard_content}> 
               <span>
                Convert your large and complex excel sheets to robust database solutions.
              </span>

             <a href={`${urlDevelopArticle3}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</a>

            </div> */}
          </div> 
        </div>

        <section className={styles.one} style={{ backgroundImage: `url(${backimg1})` }}  >
          <div className={styles.subOne}>
            <h2>Progressive Web Apps (PWA) Custom Development Services</h2>
            <span className={styles.onespan}> Imagine a solution that allows you to provide a great mobile user experience that is
              performant, cost-effective, and doesn’t require development across three different platforms. 
              That’s what PWAs are all about. Picture it as a combination of the best sides of
              native mobile apps and websites.</span>
            <h3>PWA benefits for your company</h3>
            <span className={styles.onespan}>Independence from mobile types and systems 
              Release your product faster and sooner 
              Access to wider promotion methods 
              Able to access your app despite being offline 
              Push notifications Native app experience </span>
          </div>
        </section>
        <section className={styles.two} style={{ backgroundImage: `url(${backimg2})` }}  >
          <h3> The Way Of Software Development Project in SofTesting</h3>
          <h4>A Transparent Way Of Working <br />
            Brief Consultations <br />
            project Scoping <br />
            UI/UX Design <br />
            App Development <br />
            Test & Support <br /> <br />
            We maintain a long-term collaboration with our clients </h4>
        </section>
        <section className={styles.three} style={{ backgroundImage: `url(${backimg3})` }} >
          <h3> The Way Of Software Testing Project in SofTesting</h3>
          <span>We offer a full range of on-demand QA software testing services. 
            Our services encompass many different software quality activities 
            such as quality assurance, functionality testing, mobile testing, 
            performance testing, browser and hardware compatibility testing,
            acceptance testing, and code reviews.  </span>

          <h4> Our testing labs can handle just about anything.</h4>
        </section>
        <section className={styles.four} style={{ backgroundImage: `url(${backimg4})` }}>
          <div className={styles.title}><h3> Partnership Models</h3> </div>
          <h4>Fixed Price Model</h4>
          <span>In this model, the project scope of work with its associated cost and timeline is defined before development or test starts. This is a preferred model for longer periods of engagement. Client always has peace of mind of knowing the project will remain on the same budget as agreed. This model suits best to clients who have a perfect vision of their requirement.</span>
          <h4>Hire Dedicated Model</h4>
          <span>This is very classic and simple way of engagement wherein clients pay for the number of hours the app developer or tester works on project. Clients easily start the project as they don&apos;t have to walk in with detailed specifications. This model also allows client to update new features any time and clients know exactly what they’re paying for. This drives a lot more trust and communication.</span>
          <h4>On Site Development/Test Model</h4>
          <span>This model is preferred when clients want additional temporary resources for on-site development. This contract type ensures the engagement is cost-effective and a face-to-face interactions with developers or testers. This model helps in achieving the deadline on time as there is continuous communication during the whole process.</span>
        </section>
        <section className={styles.logoSlider} >



          <LogoShow
            interval={9000}
            images={[
              angular, jira, jmeter, Joomla, pwa, nodejs, owasp
              , react, router, spring, selenium, android, woocommerce, wordpress, software
            ]}
          />

        </section>
        {/* style={{ backgroundImage: `url(${backimg5})` }} */}
        <section id={styles.six} className={styles.six} >
          {/* contactRef = {contactRef.current}   */}
          <ContactUs src="body" />
        </section>
        <section className={styles.cover} ></section>
        
        <section  className={styles.footer}>
                   <Footer/>
        </section>


      </Mobile>
      <MobileX>

        <div className={styles.slider}>


          <SlideShow disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}
            interval={9000}
            images={[
              mobileXImg, mobileXTestimg, mobileXDevelopimg
            ]}
          />


        </div>

        <div className={styles.testSection2}>
          <h3>  Test Better, Test Smarter </h3>
          <h4>  Test your releases on time. Make users happy. Grow your business. </h4>
        </div>

        <div className={styles.testcards}>

          <div className={styles.card}>
            <div className ={styles.cardHeader}>
              <img src={icon1} alt="capacity"/>
              <h6>Scale your testing capacity </h6>
            </div>
            <div className={styles.card_content}>
              <div >
                <span className={styles.text1}>
                  Our job is to launch, support,  
                  and manage the best quality assurance  
                  teams to make your product flawless.  
                  The hired staff can handle any task and  
                  apply the most relevant QA software.
                </span>

                <Link to={`${urlTestArticle1}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>
              </div>

            </div>
          </div>

          <div className={styles.card}>
            <div className ={styles.cardHeader}>
              <img src={icon3} alt="quality"/>
              <h6>Increase product quality</h6>
            </div>

            <div className={styles.card_content}>
              <span className={styles.text1}>
                In-depth testing is essential for  
                any digital project to succeed. Make  
                quality the first business priority with us.  
                We make sure that no bug spoils user experience 
                or affects business metrics.
              </span>

              <Link to={`${urlTestArticle2}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>
           <div className={styles.card}>
            <div className ={styles.cardHeader}>
              <img src={icon2} alt="market"/>
              <h6>Achieve faster time-to-market</h6>
            </div>

            <div className={styles.card_content}>
              <span className={styles.text1}>
                Decrease downtime and reduce testing time  
                when outsourcing your QA process. Our proven 
                testing practices and test automation tools  
                allow us to address issues and meet goals more 
                efficiently.
              </span>

              <Link to={`${urlTestArticle3}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div> 
        </div>

        <div className={styles.developmentsection2}>
       {h3Show? <h3>  Realise your vision, why choose SofTesting </h3>:null}
         
        </div>

        <div className={styles.developmentcards}>

           <div className={styles.card}>
            <div className ={styles.cardHeader}>
              <img src={icon10} alt="costs"/>
              <h6>Save costs and launch quickly </h6>
            </div>
            <div className={styles.card_content}>
              <span>
                Our development process is efficient and fully transparent, allowing us to deliver your software product on time and on budget.
              </span>

              <Link to={`${urlDevelopArticle4}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div> 

          <div className={styles.card}>
            <div className ={styles.cardHeader}>
             <img src={icon11} alt="development"/> 
              <h6>Full control over development</h6>
            </div>

            <div className={styles.card_content}>
              <span>
                We provide daily and weekly reports on the project progress, and clearly communicate any issues that may arise beforehand.
              </span>

              <Link to={`${urlDevelopArticle5}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>
          <div className={styles.card}>
            <div className ={styles.cardHeader}>
              <img src={icon12} alt="support" />
              <h6>Support after launch</h6>
            </div>

            <div className={styles.card_content}>
              <span>
                Our work doesn’t stop when your custom product goes live. Our reliable support team will ensure your platform runs smoothly.
              </span>

              <Link to={`${urlDevelopArticle6}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>
        </div>



           <ScrollToTop /> 


        <div className={styles.testsection3}>
          {(h3Show)?<h3>  Full-Range QA Services </h3>:null}
        </div>

        <div className={styles.testServices}>
           <div className={styles.testcard}>
            <div className ={styles.cardHeader} >
              <img src={icon4} alt="mobile"/>
              <h6> Mobile Applications Testing </h6>
            </div>
            <div className={styles.testcard_content}>
              <span>
                Years of experience in testing of mobile applications help us detect and prevent even the most unobvious and hidden bugs that spoil user experience. We make sure that your application is tested for all critical aspects.
              </span>

              <Link to={`${urlTestArticle4}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div> 

          <div className={styles.testcard}>
            <div className ={styles.cardHeader}>
              <img src={icon7} alt="web"/>
              <h6> Web Applications Testing </h6>
            </div>

            <div className={styles.testcard_content}>
              <span>
                Make sure your web-based product works properly, meets user expectations, and offers perfect performance and security. 
              </span>

              <Link to={`${urlTestArticle5}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>
          <div className={styles.testcard}>
            <div className ={styles.cardHeader}>
              <img src={icon8} alt="desktop"/>
              <h6> Desktop Testing</h6>
            </div>

            <div className={styles.testcard_content}>
              <span>
                We test desktop apps to deliver top-notch usability, functionality, performance, and security. 
              </span>

              <Link to={`${urlTestArticle6}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>

          <div className={styles.testcard}>
            <div className ={styles.cardHeader}>
              <img src={icon5} alt="manual"/>
              <h6>Manual Testing</h6>
            </div>

            <div className={styles.testcard_content}>
              <span>
                Providing manual testing services, our team aims to verify that all the product functions work perfectly as intended. We use efficient testing techniques.
              </span>

              <Link to={`${urlTestArticle7}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>
          <div className={styles.testcard}>
            <div className ={styles.cardHeader}>
              <img src={icon6} alt="automated testing"/>
              <h6>Automated Testing</h6>
            </div>

            <div className={styles.testcard_content}>
              <span>
                The QAwerk testers have extensive experience in the automation of the QA process. Automated testing can be the most profitable solution to achieve efficiency, quality, and cost reduction.
              </span>

              <Link to={`${urlTestArticle8}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div>
          </div>
          <div className={styles.testcard}>
             <div className ={styles.cardHeader}>
              <img src={icon9} alt="security"/>
              <h6>Web Security Testing</h6>
            </div>

            <div className={styles.testcard_content}>
              <span>
                Web application security testing is the process of testing, analyzing and reporting on the security level and/or posture of a Web application.  
             </span>

                <Link to={`${urlTestArticle9}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</Link>

            </div> 
          </div>
        </div>

        <div className={styles.developsection3}>
          <h1>  Modern software for your business success </h1>
        </div> 

        <div className={styles.developServices}>
         <div className={styles.developcard}>
            {/* <div className ={styles.cardHeader}>
              <img src={icon13} alt="quality" />
              <h6> Mobile App Development </h6>
            </div> */}
            {/* <div className={styles.developcard_content}>
              <span>
                Bring flexibility and mobility to business with applications to run on tablets and mobile.
                The development of PWA allows to obtain the effect of a native mobile application in a browser.
              </span>

                 <a href={`${urlDevelopArticle1}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</a>

            </div> */}
          </div> 

          <div className={styles.developcard}>
             {/* <div className ={styles.cardHeader}>
                <img src={icon14} alt="quality"/>
              <h6> Web Design & Development </h6>
            </div> */}

            {/* <div className={styles.developcard_content}>
              <span>
                We analyse, design and develop custom web site.
              </span>

             <a href={`${urlDevelopArticle2}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</a>

            </div>  */}
          </div>
          <div className={styles.developcard}>
             {/* <div className ={styles.cardHeader}>
              <img src={icon15} alt="quality"/> 
              <h6> Database Development</h6>
            </div> */}

            {/* <div className={styles.developcard_content}>
              <span>
                Convert your large and complex excel sheets.
              </span>

              <a href={`${urlDevelopArticle3}`} target="_blank" onClick={handleBlogShow} disabled={resetPassFrmShow || loginFrmShow || registerFrmShow}> Learn More...</a>

            </div>  */}
          </div>
        </div>

        <section className={styles.one} style={{ backgroundImage: `url(${backimg1})` }}  >
          <div className={styles.subOne}>
            <h2>Progressive Web Apps (PWA) Custom Development Services</h2>
            <span className={styles.onespan}> Imagine a solution that allows you to provide a great mobile user experience that is
              performant, cost-effective, and doesn’t require development across three different platforms.
              That’s what PWAs are all about. Picture it as a combination of the best sides of
              native mobile apps and websites.</span>
            <h3>PWA benefits for your company</h3>
            <span className={styles.onespan}>Independence from mobile types and systems 
              Release your product faster and sooner 
              Access to wider promotion methods 
              Able to access your app despite being offline 
              Push notifications 
              Native app experience </span>
          </div>
        </section>
        <section className={styles.two} style={{ backgroundImage: `url(${backimg2})` }}  >
          <h3> The Way Of Software Development Project in SofTesting</h3>
          <h4>A Transparent Way Of Working <br />
            Brief Consultations <br />
            project Scoping <br />
            UI/UX Design <br />
            App Development <br />
            Test & Support <br /> <br />
            We maintain a long-term collaboration with our clients </h4>
        </section>
        <section className={styles.three} style={{ backgroundImage: `url(${backimg3})` }} >
          <h3> The Way Of Software Testing Project in SofTesting</h3>
          <span>We offer a full range of on-demand QA software testing services. 
            Our services encompass many different software quality activities 
            such as quality assurance, functionality testing, mobile testing, 
            performance testing, browser and hardware compatibility testing,
            acceptance testing, and code reviews.  </span>

          <h4> Our testing labs can handle just about anything.</h4>
        </section>
        <section className={styles.four} style={{ backgroundImage: `url(${backimg4})` }}>
          <div className={styles.title}><h3> Partnership Models</h3> </div>
          <h4>Fixed Price Model</h4>
          <span>In this model, the project scope of work with its associated cost and timeline is defined before development or test starts. This is a preferred model for longer periods of engagement. Client always has peace of mind of knowing the project will remain on the same budget as agreed. This model suits best to clients who have a perfect vision of their requirement.</span>
          <h4>Hire Dedicated Model</h4>
          <span>This is very classic and simple way of engagement wherein clients pay for the number of hours the app developer or tester works on project. Clients easily start the project as they don&apos;t have to walk in with detailed specifications. This model also allows client to update new features any time and clients know exactly what they’re paying for. This drives a lot more trust and communication.</span>
          <h4>On Site Development/Test Model</h4>
          <span>This model is preferred when clients want additional temporary resources for on-site development. This contract type ensures the engagement is cost-effective and a face-to-face interactions with developers or testers. This model helps in achieving the deadline on time as there is continuous communication during the whole process.</span>
        </section>
        <section className={styles.logoSlider} >



          <LogoShow
            interval={9000}
            images={[
              angular, jira, jmeter, Joomla, pwa, nodejs, owasp
              , react, router, spring, selenium, android, woocommerce, wordpress, software
            ]}
          />

        </section>
        {/* style={{ backgroundImage: `url(${backimg5})` }} */}
        <section id={styles.six} className={styles.six} >
          {/* contactRef = {contactRef.current}   */}
          <ContactUs src="body" />
        </section>
        <section className={styles.cover} ></section>

        <section  className={styles.footer}>
                   <Footer/>
        </section>


      </MobileX>

     

    </div>
  )
}
export default withRouter(Body);