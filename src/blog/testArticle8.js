import React, { useContext, useEffect } from 'react';
import styles from '../styles/testArticle8.module.scss';

import { NavContext } from '../contexts/navContext';
import { VisibilityContext } from '../contexts/visibilityContext';
///import { Desktop, Tablet, Mobile, MobileX } from '../contexts/breakPoints';

import ContactUs from '../pages/contactUs';
import ScrollToTop from '../components/scrollToTop';
import Footer from '../components/footer';

import img from "../assets/blog/automated_testing.jpg";
import icon1 from '../assets/Icon/16894229181556105318.svg'
import icon2 from "../assets/blog/footprint.png";
import icon3 from "../assets/blog/testing_min.png";
///import useDocTitle from '../components/docTitle';



const TestArticle8 = (props) => {

    const { setOffMenu } = useContext(NavContext);
    const { blogShow, setBlogShow, setFormsHide } = useContext(VisibilityContext);
    ///useDocTitle("SofTesting-Policy");
    document.title = 'SofTesting | Software Testing | Automated Testing';



    const handleFrmLoad = () => {
        setBlogShow();
    }

    useEffect(() => {
        handleFrmLoad();
      }, []);

    return (

        <div className={styles.article} >

            <div className={styles.img} style={{ backgroundImage: `url(${img})` }}>

                <h1>Automated software testing</h1>
                <h2>Software Testing</h2>

            </div>


            <div className={styles.article1}>
                <h3>Automated software testing</h3>
                <p><strong>Understand the differences between automated and manual software testing and learn how to plan an automated testing solution for your team.</strong></p>
                <h3>What is automated testing?</h3>
                <p>Automated testing is the application of software tools to automate a human-driven manual process of reviewing and validating a software product. Most modern agile and DevOps software projects now include automated testing from inception. To fully appreciate the value of automated testing, however, it helps to understand what life was like before it was widely adopted.</p>
                <p>Back when manual testing was the norm, it was common practice for software companies to employ a full time QA team. This team would develop a collection of ‘test plans,’ or step by step checklists that assert a feature of a software project behaves as expected. The QA team would then manually execute these checklists every time a new update or change was pushed to the software project, then return the results of the test plans to the engineering team for review and any further development to address issues. </p>
                <p>This process was slow, expensive, and error-prone. Automated testing brings huge gains for team efficiency and ROI of quality assurance teams.</p>
                <p>Automated testing puts ownership responsibilities in the hands of the engineering team. The test plans are developed alongside regular roadmap feature development then executed automatically by software continuous integration tools. Automated testing promotes lean QA team size and enables the QA team to focus on more sensitive features.</p>
                <img src={icon2} alt="software testing" />
                                
            </div>
        
                  <ScrollToTop />
              
            <section1   className={styles.section1} style={{ backgroundImage: `url(${icon3})` }}>
                <p>Continuous delivery (CD) is all about delivering new code releases as fast as possible to customers. Automated testing is critical to that goal. There’s no way to automate delivery to users if there is a manual, time-consuming step within the delivery process. </p>
                <p>CD is a part of a greater deployment pipeline. CD is a successor to and also dependant on continuous integration (CI). CI is fully responsible for running automated tests against any new code changes and verifying that those changes don’t break established features or introduce any new bugs. CD is triggered once the continuous integration step passes the automated test plan.</p>
                <p>This relationship between automated testing, CI, and CD produces many benefits for a high velocity software team. Automated testing ensures quality at every stage of development by ensuring new commits do not introduce any bugs,so the software remains deployment ready at all times.</p>
                <h3>What kinds of software tests should be automated first?</h3>
           
                <img src={icon1} alt="problem solution" /> 
                <p><strong>End-to-End tests</strong></p>
                <p>Arguably the most valuable tests to implement are end to end (E2E) tests. E2E tests simulate a user level experience across the full stack of a software product. E2E tests plans generally cover user level stories like: “a user can login” “a user can make a deposit” “user can change email settings”. These tests are highly valuable to implement as they offer assurance that real users are having a smooth bug free experience, even when new commits are pushed.</p>
                <p>E2E testing tools capture and replay user actions, so E2E test plans then become recordings of key user experience flows. If a software product is lacking any kind of automated testing coverage, it will get the most value by implementing E2E tests of the most critical business flows. E2E tests can be expensive up front to capture and record the user flow sequence. If the software product is not doing rapid daily releases it can be more economical to have a human team manually execute through the E2E test plans.</p>
                <p><strong>Unit tests</strong></p>
                <p>As the name implies, unit tests cover individual units of code. Units of code are best measured in function definitions. A unit test will cover an individual function. Unit tests will assert that expected input to a function matches expected output. Code that has sensitive calculations (as it may pertain to finance, health care, or aerospace) is best covered by unit tests. Unit tests are inexpensive and quick to implement and provide a high return on investment.</p>
                <p><strong>Integration tests</strong></p>
                <p>Often times a unit of code will make an external call to a 3rd party service. The primary codebase being tested will not have access to the code of this 3rd party utility. Integration tests deal with mocking these 3rd party dependencies and asserting the code interfacing with them behaves as expected. </p>
                <p>Integration tests are similar to unit tests in the way they are written and in their tooling. Integration tests can be an inexpensive alternative to E2E tests however, the return on investment is debatable when combination of unit tests and E2E are already inplace.</p>
                <p><strong>Performance tests</strong></p>
                <p>When used in the context of software development ‘performance’ is used to describe the speed and responsiveness at which a software project reacts. Some examples of performance metrics are: ‘time to page load’, ‘time to first render’, ‘search results response time’. Performance tests create measurements and assertions for these example cases. Automated performance tests will run test cases across these metrics and then alert the team to any regressions or loss of speed.</p>
                <h3>What kinds of software tests should be done manually?</h3>
                <p>It is arguable that any tests that can be automated should be automated. It is a huge gain in productivity and human time cost. With that said, there are times when the ROI of developing an automated test suite is not worth it when compared to executing a manual test.</p>
                <p><strong>Exploratory testing</strong></p>
                <p>Automated tests are scripted and follow a sequence of steps to validate behavior. Exploratory testing is more random and tries unscripted sequences to find bugs or unexpected behavior. While there are software tools to establish a software exploratory testing suite, they are not fully mature and widely adopted yet.  It can be much more efficient to assign a manual QA tester and use human creativity to explore how to break a software product.</p>
                <p><strong>Visual regression testing</strong></p>
                 <p>A visual regression happens when a visual design flaw is introduced to software UI. This could be mispositioned UI elements, wrong font, wrong colors or more. As with exploratory testing there are tools out there to write automated tests to catch these regressions. These tools capture screenshots from various states of a software product and then use OCR to compare them to expected results. These tests are expensive to develop and the tools are not widely adopted. It can be much more effective to have a human look at something and see if there are any visual issues.</p>
                 <p><strong>Building a test automation framework for your DevOps team</strong></p>
                 <p>There is no all-encompassing solution for automated testing. When planning an automated testing solution for your team, there are a few key considerations to make.</p>
                 <p><strong>Frequency of release</strong></p>
                <p>Software products that release on fixed intervals, such as monthly or weekly, may find manual testing is a better fit. Software products that release more rapidly will greatly benefit from automated testing since CI and CD are dependant on automated testing. </p>
                <p><strong>Available tools and ecosystem</strong></p>
                <p>Each programming language has its own ecosystem of complementary tools and utilities. Each type of automated test pattern has its own set of tools that may or may not be available in a particular programming languages ecosystem. Successful implementation of an automated testing pattern will require an intersection of the language and tool support.</p>
                <p><strong>Product market fit and code base maturity</strong></p>
                <p>If your team is working on building a new product which has not yet proven a target audience or business model, it may not make sense to invest in automated tests. Automated tests act as an insurance mechanism to restrict unexpected code regressions. If your team is moving at a high velocity it can be frustratingly expensive to have to update and maintain automated tests when the code is dramatically and rapidly changing</p>
                <p><strong>Make automated testing part of your CD pipeline</strong></p>
                <p>Automated testing is a standard modern software development practice. The best teams and companies use automated tests. CI/CD is dependant on automated tests and critical to helping the best teams ship reliable and robust software to their customers. Start exploring CI/CD solutions today. </p>
                <h3>What are the benefits of automation testing?</h3>
                <p>Software testing has many benefits, which is why SaaS businesses across the globe are utilizing automation technology. Here are some of the biggest benefits of using automation testing for software development:</p>
                <p><strong>Detailed reporting capabilities:</strong>Automation testing uses well-crafted test cases for various scenarios. These scripted sequences can be incredibly in-depth, and provide detailed reports that simply wouldn’t be possible when done by a human. Not to mention providing them in a shorter amount of time.</p>
                <p><strong>Improved bug detection: </strong>One of the main reasons to test a product is to detect bugs and other defects. Automation testing makes this process an easier one. It’s also able to analyze a wider test coverage than humans may be able to.</p>
                <p><strong>Simplifies testing:</strong>Testing is a routine part of the operations of most SaaS and tech companies. Making it as simple as possible is key. Using automation is extremely beneficial. When automating test tools, the test scripts can be reused. Manual testing, meanwhile, calls for a single code line to be written for the same test case, each time it needs to be run</p>
                <p><strong>Speeds up the testing process:</strong>Machines and automated technology work faster than humans. Along with improved accuracy, this is why we use them. In turn, this shortens your software development cycles.</p>
                <p><strong>Reduces human intervention:</strong>Tests can be run at any time of day, even overnight, without needing humans to oversee it. Plus, when it’s conducted automatically, this can also reduce the risk of human error.</p>
                <p><strong>Saves time and money:</strong>Testing can be time-consuming. Though automation may require an initial investment, it can save money in the long run to become more cost-effective. Team members use their time in other areas and are no longer required to carry out manual testing in many situations. This improves their workflow.</p>


                <a href= "https://www.globalapptesting.com/blog" target="_blank" rel="noreferrer">Explore more resources about the key topics that we covered today.</a>
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

export default TestArticle8;
