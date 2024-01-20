import React, { useContext, useState, useEffect, useRef } from 'react';
import styles from '../styles/testArticle1.module.scss';

import { NavContext } from '../contexts/navContext';
import { VisibilityContext } from '../contexts/visibilityContext';
import { Desktop, Tablet, Mobile, MobileX } from '../contexts/breakPoints';

import ContactUs from '../pages/contactUs';
import ScrollToTop from '../components/scrollToTop';
import Footer from '../components/footer';

import img from "../assets/blog/wheel.jpg";
import icon1 from '../assets/Icon/16894229181556105318.svg'
import icon2 from "../assets/blog/footprint.png";
import icon3 from "../assets/blog/analytic.png";
///import useDocTitle from '../components/docTitle';


const TestArticle1 = (props) => {

     const { setOffMenu } = useContext(NavContext);
     const {  setBlogShow } = useContext(VisibilityContext);
     ///useDocTitle("SofTesting-Policy");
     document.title = 'SofTesting | Software Testing | Scale your testing capacity';

     const scrollToStep1 = () => {
          window && window.scrollTo({
              top: 1300,
              behavior: "smooth"
          });
      };
      const scrollToStep2 = () => {
          window && window.scrollTo({
              top: 3500,
              behavior: "smooth"
          });
      };
      const scrollToStep3 = () => {
          window && window.scrollTo({
              top: 4100,
              behavior: "smooth"
          });
      };
      const scrollToStep4 = () => {
          window && window.scrollTo({
              top: 5100,
              behavior: "smooth"
          });
      };
      const scrollToStep5 = () => {
          window && window.scrollTo({
              top: 5600,
              behavior: "smooth"
          });
      };

      const handleFrmLoad =() =>{
          setBlogShow();
      }

      useEffect(() => {
        handleFrmLoad();
      }, []);
      

     return (

          <div className ={styles.article} >

               <div className={styles.img} style={{ backgroundImage: `url(${img})` }}>

                    <h1>Scale your testing capacity</h1>
                    <h2>Software Testing</h2>

               </div>


               <div className={styles.article1}>

                    <p>In the last 10 years, testing has taken a central position in the software development lifecycle (SDLC). Testing once lived on the periphery, as the last last-minute, end of project activity. Now testing weaves throughout every stage of the development lifecycle.</p>

                    <p>  We’ve gone from testing as a siloed operation, to testing as a collaborative and continuous activity. As a result of this shift, testing functions and activities have also evolved. Naturally, testing teams also need to adapt their goals and processes. How do you meet your software testing goals in this new culture of testing and QA?</p>

                    <p> Here are 5 steps to take in order to set objectives for your team, and choose the right methodologies, strategies, and tools to meet your software testing goals.</p>
                    <div>
                         <img src={icon2} alt="software" />
                         <p>Table of contents </p>
                    </div>
               
                    <a  onClick={scrollToStep1}>Step 1: Define the objectives of the software testing team</a><br />
                    <a  onClick={scrollToStep2}>Step 2: Agile vs. Waterfall: Choose a methodology that works for you</a><br />
                    <a  onClick={scrollToStep3}>Step 3: Evolve with DevOps and CI/CD</a><br />
                    <a  onClick={scrollToStep4}>Step 4: Integrate Automation and Continuous Testing</a><br />
                    <a  onClick={scrollToStep5}>Step 5: Add Exploratory Testing to complete your strategy</a><br />
                 
               </div>
            
                  <ScrollToTop />
             
               <section className={styles.section1} style={{ backgroundImage: `url(${icon3})` }}>
                    <img src={icon1} alt="problem solution" /> 
                    <h3>Step 1: Define the objectives of the software testing team</h3>
                    <p>To begin, you must first understand and define the goals of your team and the QA function within your organization. You can choose to focus on just one objective or choose several to form a more comprehensive QA strategy. </p>
                    <p>Here are five objectives your team can focus on: </p>
                    <h3>Objective #1: Detecting bugs</h3>
                    <p>Being able to efficiently detect bugs is often the highest priority for teams and can be done using manual, automated, or exploratory testing. A mix of these three different approaches makes for a complete testing strategy and higher test coverage. Although quality should be the responsibility of all team members on the SDLC, testers will primarily guide these activities and focus on detecting bugs.</p>
                    <p>Of course, it’s ideal if bugs are caught before the product is live but these activities will also continue while it is in the hands of the customer. Keep in mind that according to a survey, the happiest customers have their bugs fixed within 1-8 hours.</p>
                    <h3>Objective #2: Preventing bugs</h3>
                    <p>The function of testers and QA is no longer solely to detect bugs - now they are expected to actively participate in preventing them. Preventing bugs increases customer satisfaction as they won’t meet buggy software. Delivering 100% bug-free software is not a reality. In truth, you should set an objective that works for your team depending on where you stand at the moment. A good metric is to aim for 90% bug-free software. You can track this statistic by counting the number of bugs that get to production. </p>
                    <h3>Objective #3: Delighting the user</h3>
                    <p>When it comes to testing and QA, ultimately your purpose is to deliver functional, easy to use, and bug-free products that delight your users.  Delighting users comes from ensuring that you test the product from their perspective. The best approach to testing from the user’s perspective is through exploratory testing (ET). During an exploratory testing session, you set a timer and explore a specific part of the system, going on a course that you believe the user will take. This will help you understand the experience your user will have with your product and help you mitigate any potential risks.</p>
                    <h3>Objective #4: Ensuring reliable and secure software </h3>
                    <p>Once software and products are released, it’s also the QA’s responsibility to ensure that the software is stable, reliable, and secure. This includes ensuring that the software is compatible with all specified environments, platforms, operating systems, and browsers. In SofTesting, you can create test executions in multiple environments and ensure that your product is working properly across a range of environments. </p>
                    <h3>Objective #5: Advocating for Quality</h3>
                    <p>We’re seeing a shift in the industry - quality is becoming the responsibility of the entire organization. For the QA team, that means that their role is taking on a more advocating function, where they set quality best practices, suggestions on how to improve quality and mentor other teams on how they can also become contributors to greater quality. This approach is effective because it puts the responsibility of testing and Quality into everyone’s hands and the result is higher quality outputs and lesser bugs. </p>
                    <h3>Objectives #6: Communicating with stakeholders</h3>
                    <p>Last but not least, the QA team is responsible for communicating with key stakeholders about the progress and status of testing. Often, stakeholders and clients need to know the status of a project and the QA team must be ready to provide an overview report on that status. With SofTesting, all team members can see the dashboards and gadgets that display key testing metrics including test coverage, test plan coverage, traceability, and time of test run execution. </p>
                    <p>Next, let’s see the best methodology that modern software testing teams use to deliver products faster and more efficiently. </p>
                    <h3>Step 2: Agile vs. Waterfall: Choose a methodology that works for you</h3>
                    <p>Based on a 2019 poll on TrustRadius, 81% of interviewees said that their organization uses the agile methodology. According to research done by HP, 54% of agile users say their largest motivator for using Agile over Waterfall is that it enhances collaboration and teamwork.</p>
                    <p>Waterfall testing was once the de facto methodology for all testing teams. This was when testing was seen as a linear approach that followed predetermined sequences and was almost always executed at the end of a development project. </p>
                    <p>In comparison, Agile is much more fluid, with short deadlines, more collaboration, and lots of flexibility. In Agile, the work of the team should be visible to all; in turn, this transparency leads to better collaboration.</p>
                    <p>Next, let&apos;s see how we can take Agile one step further with DevOps and CI/CD. </p>
                    <h3>Step 3: Evolve with DevOps and CI/CD</h3>
                    <p>Companies working in Agile or DevOps increased customer satisfaction by 52% and employee productivity by 50%.* With these statistics, we can’t argue that it’s worth considering adopting one of these methodologies. </p>
                    <p>Companies that adopted DevOps noted: </p>
                    <p> # significant increases of up to 52% in customer satisfaction</p>
                    <p> # improved customer satisfaction by an additional 29%</p>
                    <p> # 78% of users who paired agile and DevOps reported an increase in customer experience, versus only 58% of agile-only users</p>
                    <p>DevOps naturally evolved from the methodologies of Agile development and testing. DevOps principles favor communication, collaboration, and transparency. This nonlinear methodology for project development and management may have its roots in Agile, but also brings the role of continuous testing to the forefront. </p>
                    <p>DevOps and Continuous Integration/Continuous Deployment (CI/CD) help your team work faster, happier, and more effectively. That’s because DevOps and CI/CD create fast feedback loops between your teams as well as more collaboration internally. </p>
                    <p>CI/CD helps you reduce the number and impact of bugs since it automatically tests some or all of the product every time new code is deployed to production. With CI/CD, you should set up automated tests. These automated processes mean less room for human error, and when an error does get through, there is a way to solve it quickly. </p>
                    <p>Next, let&apos;s see why continuous testing is a philosophy of Agile and how it ensures that as code is added, it continuously passes through quality checks and tests. </p>
                    <h3>Step 4: Integrate automation and continuous testing</h3>
                    <p>Test automation is one of the main features of DevOps since you&apos;re asked to constantly test the new code. Based on a recent survey, 24% of respondents said they saw a return on their test automation investment immediately or within the first 6 months.</p>
                    <p>The main benefits of test automation are to eliminate repetitive testing and reduce human errors. Automating your testing also saves you time and effort which you can dedicate to uncovering product risks with other approaches. Switching to an automation-first approach requires multiple shifts in mindset, skill sets, and the tools and processes needed to be successful. When it comes to automation, there are many different approaches you can take, and generally, there are 6 common test automation frameworks. </p>
                    <p>Finally, let’s see how you can use exploratory testing to complete your testing strategy and meet even your most critical software testing goals</p>
                    <h3>Step 5: Add Exploratory Testing to complete your strategy</h3>
                    <p>Designing a robust testing strategy combines several testing approaches to ensure software meets the highest quality. In order to diversify your testing strategy, you can include methods like Exploratory Testing (ET), which tests software from the user’s perspective as well as helps discovered unexpected risks that often go undetected with manual or automated testing. </p>
                    <p>Exploratory Testing doesn’t follow a set of steps with predefined results as automation does. Instead, ET explores a part of the system using the skills and expertise of testers in order to find defects and provide feedback. </p>
                    <p>Exploratory Testing always has an objective and is timed. To be successful in this method, you should take notes and track the evidence of your findings. Of course, you’ll find that it’s useful to have a tool that tracks and collects your evidence. You can use tools like the SofTesting Exploraoty App to aid your testing sessions by easing the task of documentation while testing. </p>
                    <h3>You are ready to meet your software testing goals</h3>
                    <p>Have you made it this far? Great! You’re on your way to meeting your software testing goals. We’ve shared a lot of information about how to define your objectives, how to choose the right methodologies that will help you work faster and more efficiently, and finally the tools to support your team. </p>
                    <p>Now it’s up to you to work with your team and customize these approaches. Keep in mind that every team is different and through trial and error, you will find what works best. </p>
                    <a href="https://www.getxray.app/resources" target="_blank" rel="noreferrer" >Explore more resources about the key topics that we covered today.</a>
               </section>
               <section  className={styles.six}>
                    <ContactUs src="body" />
               </section>
               <section  className={styles.footer}>
                   <Footer/>
               </section>
          </div>

     );
}

export default TestArticle1;