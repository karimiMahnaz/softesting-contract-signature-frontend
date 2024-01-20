import React, { useContext, useEffect} from 'react';
import styles from '../styles/testArticle5.module.scss';

import { NavContext } from '../contexts/navContext';
import { VisibilityContext } from '../contexts/visibilityContext';
///import { Desktop, Tablet, Mobile, MobileX } from '../contexts/breakPoints';

import ContactUs from '../pages/contactUs';
import ScrollToTop from '../components/scrollToTop';
import Footer from '../components/footer';

import img from "../assets/blog/web_testing.jpg";
import icon1 from '../assets/Icon/16894229181556105318.svg'
import icon2 from "../assets/blog/footprint.png";
import icon3 from "../assets/blog/Blog_TestManagement.png";
///import useDocTitle from '../components/docTitle';



const TestArticle5 = (props) => {

    const { setOffMenu } = useContext(NavContext);
    const { blogShow, setBlogShow, setFormsHide } = useContext(VisibilityContext);
    ///useDocTitle("SofTesting-Policy");
    document.title = 'SofTesting | Software Testing | Web Applications Testing';



    const handleFrmLoad = () => {
        setBlogShow();
    }

    useEffect(() => {
        handleFrmLoad();
      }, []);

    return (

        <div className={styles.article} >

            <div className={styles.img} style={{ backgroundImage: `url(${img})` }}>

                <h1>Web Applications Testing</h1>
                <h2>Software Testing</h2>

            </div>


            <div className={styles.article1}>
                <h3>The Basics of Web App Testing</h3>
                <p>As more traditional front and back-office applications are migrating from desktop to web-based interfaces, testing web applications has become highly critical. For that reason, learning what and how to automate is a crucial component of successful web app testing.</p>
                <p>f you want to deliver a great end-user experience, web applications and websites must work across multiple browsers, browser versions, operating systems, and devices, including mobile.</p>
                <p>The <a href = "https://www.isixsigma.com/industries/software-it/defect-prevention-reducing-costs-and-enhancing-quality/"  target="_blank" rel="noreferrer">Systems Sciences Institute</a> at IBM found that “the cost to fix an error found after product release was 4 to 5 times more than one uncovered during design, and up to 100 times more than one identified in the maintenance phase”.</p>
                <p>Creating a top-notch web application requires a lot of testing which, if performed manually, can be tedious and time-consuming. For this reason, many QA teams rely on automation to create fast, efficient, and reliable test cases for their web applications. </p> 
                <p>Test automation offloads these routine and repetitive testing tasks from humans to machines. The tests compare actual outcomes with predicted outcomes. This approach can help find bugs in specific operations and simple-use cases (e.g. logging in, creating a new account, doing password resets). </p> 
                <p>These numbers highlight the importance of finding bugs as early as possible and to thoroughly test an application before it is released.</p>
                <p>That is where web application testing comes in. Web application testing usually consists of multiple steps that ensure that an application is fully functional and runs smoothly and securely. It is an essential part of web development and ensures that an app is running properly before its release.</p>
                <p>We put together a 6-step guide, which should give you an overview of what kind of tests to run to test your app.</p>
                <img src={icon2} alt="software testing" />
                                               
            </div>
        
                  <ScrollToTop />
              
            <section1   className={styles.section1} style={{ backgroundImage: `url(${icon3})` }}>
                     
                <h3>Step 1: Functional Testing</h3>
                <img src={icon1} alt="problem solution" />
                <p>The first step of web testing ensures that the functions of a system are tested. On Wikipedia, Functional Testing is described as follows:</p>
                <p>Functional testing is a quality assurance (QA) process and a type of black-box testing that bases its test cases on the specifications of the software component under test. Functions are tested by feeding them input and examining the output, and internal program structure is rarely considered (unlike white-box testing).</p>
                <p>Functional testing happens in the source code, where the system is tested against functional requirements and specifications.</p>
                <p>Typically, functional testing includes:</p>
                <p className= {styles.closerP}> - the identification of functions that software is supposed to do</p>
                <p className= {styles.closerP}> - data input and entry</p>
                <p className= {styles.closerP}> - the execution of the test case</p>
                <p className= {styles.closerP}> - an analysis of the actual results</p>
                <p>During functional testing, actual system usage is simulated. The idea is to come as close as possible to real system usage and create test conditions that are related to user requirements.</p>
                <h3>Step 2: Usability Testing</h3>
                <p>Usability goes beyond functionality testing and combines testing for functionality as well as overall user experience.</p>
                <p>Usability testing should not be mixed up with User Acceptance Testing. Even though both are essential to the success of a web application. They each have a very different focus and are executed at different stages of the software development life cycle.</p>
                <p>This can be done internally or by getting external testers that fit your potential user base. To find external testers, you can use services such as Apple’s TestFlight for applications designed for the app store.</p>
                <p>Usability testing involves the following steps:</p>
                <p className= {styles.closerP}> - Develop a testing strategy that ensures all functions of your application will be examined. These include navigation and content. </p>
                <p className= {styles.closerP}> - Recruit test participants, either internally or externally.</p>
                <p className= {styles.closerP}> - Run the test under the observation of experts.</p>
                <p className= {styles.closerP}> - Analyze the results and improve your application accordingly.</p>
                <h3>Step 3: Interface Testing</h3>
                <p>Interface testing ensures that all interactions between the web server and application server interfaces are running smoothly. This includes checking the communication processes as well as making sure that error messages are displayed correctly. Further things to test are that interruptions by the user as well as by the server are handled correctly.</p>
                <h3>Step 4: Compatibility Testing</h3>
                <p>Ensuring your application is compatible with all browsers and devices is a key step in web application testing. Here are the different elements of compatibility testing:</p>
                <p><strong>Browser compatibility</strong></p>
                <p>Make sure that your application is functioning correctly across the different browsers. This includes checking that JavaScript, AJAX, WebSockets, browser notifications, and authentication requests are working as designed. </p>
                <p>For browser compatibility testing we would recommend trying <a href = "https://www.lambdatest.com/" target="_blank" rel="noreferrer">LambdaTest</a>, a cross browser testing cloud. Using the Lambda tool, users can test their website on 2000+ real browsers & OS devices. </p>
                <p>Besides checking that your application runs in all the browsers (yes, even Internet Explorer!), you should also check it for different versions of the browsers, to see if any updates affect its functionality.</p>
                <p><strong>Operating system compatibility</strong></p>
                <p>Just like with different browsers, your web application might run into problems on some operating systems. Check that it runs smoothly on Windows, macOS, Linux, and Unixes.</p>
                <p><strong>Mobile compatibility</strong></p>
                <p>These days, mobile compatibility is a given. Ensuring that your application runs on different devices and functions just as well on Android than it does on iOS is an essential part of web testing.</p>
                <h3>Step 5: Performance Testing</h3>
                <p>After ensuring that your application’s functionality is working properly and responsively on all browsers and devices, it is time to take a look at how it performs under heavy load. This includes testing the application under different internet speeds and how it behaves under normal and peak loads (load testing). To determine the breaking point of your application, it is put under increasing amounts of stress until it ceases to function (stress testing).</p>
                <p>Testing for resiliency is a crucial activity to find out how your application behaves under stress before your users do. Make sure you test the functionality under different scenarios and hardware configurations, and that your application recovers from crashes in the best way possible.</p>
                <h3>Step 6: Security Testing</h3>
                <p>The final step of web application testing makes sure that your application is protected against unauthorized access and harmful actions through viruses or other malicious software.</p>
                <p>Security testing for web applications involves the following activities:</p>
                 <p className= {styles.closerP}> - Test whether secure pages can be accessed without authorization</p>
                 <p className= {styles.closerP}> - Check that open session are closed after ongoing user inactivity</p>
                 <p className= {styles.closerP}> - Verify the application’s SSL</p>
                 <p className= {styles.closerP}> - Make sure that restricted files cannot be downloaded without proper authorization</p>
                 <p>Overall, a security testing checklist comes in handy at this stage, as it helps you to structure and organize your testing efforts. Such a checklist should include tasks in the following areas:</p>
                 <p className= {styles.closerP}> - Secure Transmission</p>
                 <p className= {styles.closerP}> - Authentication</p>
                 <p className= {styles.closerP}> - Session Management</p>
                 <p className= {styles.closerP}> - Authorization</p>
                 <p className= {styles.closerP}> - Cryptography</p>
                 <p className= {styles.closerP}> - Data Validation</p>
                 <p className= {styles.closerP}> - Denial of Service</p>
                 <p className= {styles.closerP}> - Specific Functionality Tests</p>
                 <p className= {styles.closerP}> - Error Handling</p>
                 <h3>Wrapping it up.</h3>
                 <p>These are six steps of web application testing. If you follow these steps thoroughly before rolling out your application, it should go a long way in finding any bugs and errors and enable you to fix them before it’s too late.</p>
                 <h3>Bonus tip: Testing with SofTesting</h3>
                 <p><a href= "https://Softestingca.com">SofTesting</a> is a great bug tracking & testing tool for development teams, you can capture screenshots and annotate on-screen. Metadata are automatically included in the ticket. It saves time, ensures accuracy and boosts developer productivity. Used by startups, as well as companies like Facebook, Google, and Microsoft. </p>
                <p></p>
                <p></p>
                <p></p>
                <a href= "https://usersnap.com/blog" target="_blank" rel="noreferrer">Explore more resources about the key topics that we covered today.</a>
             </section1>

            <section className={styles.six}>
                <ContactUs src="body" />
            </section>
            <section className={styles.footer}>
                <Footer />
            </section>

        </div >

    );
}

export default TestArticle5;
