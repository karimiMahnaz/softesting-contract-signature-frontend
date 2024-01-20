import React, { useContext, useEffect } from 'react';
import styles from '../styles/testArticle4.module.scss';

import { NavContext } from '../contexts/navContext';
import { VisibilityContext } from '../contexts/visibilityContext';
///mport { Desktop, Tablet, Mobile, MobileX } from '../contexts/breakPoints';

import ContactUs from '../pages/contactUs';
import ScrollToTop from '../components/scrollToTop';
import Footer from '../components/footer';

import img from "../assets/blog/mobile_app_test1.jpg";
import icon1 from '../assets/Icon/16894229181556105318.svg'
import icon2 from "../assets/blog/footprint.png";
import icon3 from "../assets/blog/analytic.png";
///import useDocTitle from '../components/docTitle';



const TestArticle4 = (props) => {

    const { setOffMenu } = useContext(NavContext);
    const { blogShow, setBlogShow, setFormsHide } = useContext(VisibilityContext);
    ///useDocTitle("SofTesting-Policy");
    document.title = 'SofTesting | Software Testing | Mobile Applications Testing';



    const handleFrmLoad = () => {
        setBlogShow();
    }

    useEffect(() => {
        handleFrmLoad();
      }, []);


    return (

        <div className={styles.article} >

            <div className={styles.img} style={{ backgroundImage: `url(${img})` }}>

                <h1>Mobile Applications Testing</h1>
                <h2>Software Testing</h2>

            </div>


            <div className={styles.article1}>
                <h3> What Is Mobile Device Testing?</h3>
                <h3>Strategies for Testing on devices</h3>
                <p>Mobile testing continues to increase in importance. And it’s important to have the right strategy and tools for each type of mobile testing. Here, you’ll learn what mobile testing is — and get the basics you need to conquer it.</p>
                <h3>What Is Mobile Testing?</h3>
                <p>Mobile device testing is the process by which mobile apps are tested for functionality, usability, and consistency. Testing app on mobile devices can be done manually or with automation.</p>
                <h3>Why Mobile Device Testing Is Important</h3>
                <p>Mobile testing is important for many reasons. Mobile apps are important for conducting business. And to make sure that mobile apps work properly, it’s critical to test them.</p>
                <p>In this blog, you’ll get an overview of testing mobile applications, including:</p>
                <img src={icon2} alt="software testing" />
                <p className = {styles.closerP}> - Types of mobile apps.</p>
                <p className = {styles.closerP}> - How mobile testing differs from web testing.</p>
                <p className = {styles.closerP}> - Types of mobile testing.</p>
                <p className = {styles.closerP}> - Mobile test automation frameworks.</p>
                <p className = {styles.closerP}> - How to create a mobile testing plan.</p>
                                
            </div>
        
                  <ScrollToTop />
              
            <section1   className={styles.section1} style={{ backgroundImage: `url(${icon3})` }}>
                 <h3>What Are the Types of Mobile Testing?</h3>
                 <p>There are three main types of mobile device testing.</p>
                 <img src={icon1} alt="problem solution" /> 
                 <p><strong>Functionality</strong></p>
                 <p>App functionality tests include:</p>
                 <p className = {styles.closerP}> - Business flows.</p>
                 <p className = {styles.closerP}> - UI testing (e.g., landscape/portrait, languages).</p>
                 <p className = {styles.closerP}> - Cross-platform coverage.</p>
                 <p><strong>Real Environment</strong></p>
                 <p>Real environment condition testing includes:</p>
                 <p className = {styles.closerP}> - Network conditions.</p>
                 <p className = {styles.closerP}> - Interruptions (e.g., calls, text messages).</p>
                 <p className = {styles.closerP}> - Background/foreground.</p>
                 <p className = {styles.closerP}> - Gestures (e.g., force touch).</p>
                 <p>For real environment condition testing, it’s especially important to test on real devices instead of simulators.</p>
                 <p><strong>Non-Functional</strong></p>
                 <p>Non-functional testing includes:</p>
                 <p className = {styles.closerP}> - Security.</p>
                 <p className = {styles.closerP}> - Accessibility.</p>
                 <p className = {styles.closerP}> - Performance and availability.</p>
                 <p className = {styles.closerP}> - API testing.</p>
                 <p> There are different approaches you can take to these mobile testing types. This includes manual testing, automated testing, and continuous testing.</p>
                 <h3>Device Testing: Which Ones? How Many?</h3>
                 <p>What combination of devices should you be testing against right now?  </p>
                 <p>It&apos;s a common question! The answer varies depending on your users, your location, and how risk averse you are. </p>
                 <p>Testing one one or two devices is not enough. Testing on all devices is too much. Here are three considerations for determining the right devices.</p>
                 <p><strong>Balance Data & Analysis</strong></p>
                 <p>Combine data in this free test coverage guide sharing the devices you should be testing (by country) with your own analysis and risk assessment to decide how many devices (how much test coverage) you need to address a majority of your target users.</p>
                 <p><strong>Map Coverage Against Your Pipeline</strong></p>
                 <p>Map coverage needs to your test pipeline or apply to your test pyramid. Consider virtual devices for earlier phases of testing. Use real devices in later phases.</p>
                 <p><strong>Optimize Your Lab Configuration</strong></p>
                 <p>Consider your test data parameters (like number of tests, test duration, and required execution time). You may need to add devices or test in parallel in order complete all your tests within your cycle. </p>
                 <h3>How Is Mobile Testing Different From Web Testing?</h3>
                 <p>Mobile testing is different from web testing in complexity.</p>
                 <p>Mobile apps usually have more users and need to work on a broader range of devices — with more communication. This increases testing complexity. While web apps are increasingly used on mobile devices, testing them is not quite as complex.</p>
                 <h3>4 Types of Mobile Apps</h3>
                 <p>There are four types of mobile apps that companies develop today. And your mobile testing approach might differ based on which type of app you’re building.</p>
                 <p><strong>Native (iOS/Android)</strong></p>
                 <p>Native apps are specific to iOS or Android. An iOS app is built into an IPA binary file, that can be then tested with Appium and/or XCUITest frameworks. And an Android app is built into an APK package that can be then tested using Appium and/or Espresso frameworks.</p>
                 <p><stron>Hybrid</stron></p>
                 <p>Hybrid apps include a native application wrapper that is independent of iOS or Android. So, a hybrid application can access all operating systems specific capabilities. A hybrid application can be installed from the Apple App Store or Google Play.</p>
                 <p>Hybrid applications are also supported by the Appium test framework.</p>
                 <p><stron>Web</stron></p>
                 <p>Web apps are accessed through mobile native browsers, such as Chrome, Safari, or Firefox. These are pure web applications. So, they are supported by the Selenium test framework.</p>
                 <p><strong>Progressive Web App (PWA)</strong></p>
                 <p>A progressive web app is an installable web link specific to iOS and Android. Instagram and Twitter are both examples of PWAs. You can create a shortcut to these apps and install them — without going to the App Store or Google Play.</p>
                 <p>SofTesting is ready to help you hit the ground running. Ensure defect-free apps with SofTesting&apos;s same-day access to new OS and device releases — like Android 12 and iOS 15. That way, your apps are ready for official releases — with no downtime or defects. Watch this session with Eran Kinsbruner, Chief Evangelist at SofTesting by Perforce, where he covers the latest in Apple and Android releases.</p>
                 <h3>Mobile Test Automation Frameworks For Different Apps</h3>
                 <p>There are several mobile test automation frameworks that you can use. Here are three of the most important ones.</p>
                 <p><strong>Appium</strong></p>
                 <p>Appium is a cross-platform mobile test automation framework. You can use it for Android and iOS apps.</p>
                 <p><strong>Espresso</strong></p>
                 <p>Espresso is a mobile test automation framework for Android. </p>
                 <p><strong>XCUITest</strong></p>
                 <p>XCUITest is a mobile test automation framework for iOS.</p>
                 <h3>Optimize Device Testing With SofTesting</h3>
                 <p>With SofTesting, you’ll get access to everything you need to build a successful mobile test plan:</p>
                 <p className = {styles.closerP}> - Test any type of app — native, hybrid, web, PWA.</p>
                 <p className = {styles.closerP}> - Accelerate every type of testing — functionality, real environment condition, non-functional.</p>
                 <p className = {styles.closerP}> - Do testing on real devices and emulators/simulators in the SofTesting Cloud. </p>
                 <p className = {styles.closerP}> - Leverage test automation frameworks, including Appium, XCUITest, and Espresso (which are integrated with SofTesting).</p>
                 <p> See for yourself how SofTesting will deliver zero maintenance testing, secure and scalable test cloud, and comprehensive test coverage.</p>

           
           
           
                <a href= "https://www.perfecto.io/blog" target="_blank" rel="noreferrer">Explore more resources about the key topics that we covered today.</a>
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

export default TestArticle4;
