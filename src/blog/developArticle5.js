import React, { useContext, useState, useEffect, useRef } from 'react';
import styles from '../styles/developArticle5.module.scss';

import { NavContext } from '../contexts/navContext';
import { VisibilityContext } from '../contexts/visibilityContext';
///import { Desktop, Tablet, Mobile, MobileX } from '../contexts/breakPoints';

import ContactUs from '../pages/contactUs';
import ScrollToTop from '../components/scrollToTop';
import Footer from '../components/footer';

import img from "../assets/blog/control.jpg";
import icon1 from '../assets/Icon/16894229181556105318.svg'
import icon2 from "../assets/blog/footprint.png";
import icon3 from "../assets/blog/problem-solve.png";
///import useDocTitle from '../components/docTitle';


const DevelopArticle5 = (props) => {

     const { setOffMenu } = useContext(NavContext);
     const { blogShow, setBlogShow, setFormsHide } = useContext(VisibilityContext);
     ///useDocTitle("SofTesting-Policy");
     document.title = 'SofTesting | Software Development | Full control over development';

     

      const handleFrmLoad =() =>{
          setBlogShow();
      }

      useEffect(() => {
          handleFrmLoad();
        }, []);

     return (

          <div className ={styles.article} >

               <div className={styles.img} style={{ backgroundImage: `url(${img})` }}>

                    <h1>Full control over development & testing</h1>
                    <h2>Software Design, Development & Testing</h2>

               </div>


               <div className={styles.article1}>

                    <h3>How Much Control Do You Have When You Outsource IT?</h3>
                    <p>Software development may just be one of the most lucrative areas of business. With an increasing number of people using smart devices of all kinds on a daily basis, the world keeps changing and new demands keep arising—demands that only new, innovative software can meet.</p>
                    <p>While there’s no shortage of experts ready to help you build the next big thing in software development, quality comes at a cost. Having an entire team of the finest talents in the industry might be a tempting prospect, but only so long as you don’t consider the total potential cost.</p>
                    <p>When you outsource software development, you commission a specific project or task to a workforce outside of your organization. You basically employ a team from a different company—or a freelance contractor—to do the job for you. This is meant to save you both time and money.</p>
               
                    <div>
                         <img src={icon2} alt="software" />                  
                         <p>The Key for Control Outsourcing can have a lot of benefits, such as giving a company access to expertise outside of their organization and reducing… </p>
                    </div>
               
                   
               </div>
            
                  <ScrollToTop />
              
               <section className={styles.section1} style={{ backgroundImage: `url(${icon3})` }}>
                    <img src={icon1} alt="problem solution" /> 
                    <h3>The Key for Control</h3>
                    <p>Outsourcing can have a lot of benefits, such as giving a company access to expertise outside of their organization and reducing costs. Some companies worry that outsourcing means losing control of certain aspects of their operations and worry about what effect it could have on internal processes or customer satisfaction. If working with a reliable partner, IT outsourcing can reduce financial or staffing strain on a company, move the business forward, and team leaders can still maintain control over projects.</p>
                    <p>Especially with a managed team model, companies can maintain much of the control over the project. Businesses can hire a complete team, including a project manager, who can take on tasks that consume a lot of time and resources.</p>
                    <h3>Hiring Comes First</h3>
                    <p>The most important part of maintaining control when outsourcing software is hiring a strategic partner. If you know you are comfortable with a certain level of control, it’s important to only work with outsourcing companies that can give you that. Remember, you’re not the first person to worry about control, so be sure to work with a partner that understands this.</p>
                    <p>Spend time with the contact person or the project manager to understand their methods and work structure. This does not mean in-person time but be sure to talk in-depth with this contact so you understand the workflow and what parts of the project you will have full-control over less control. If you want more control, seek out teams that use the managed team model, where you will have more of a say in the everyday work.</p>
                    <h3>Minimize Risks and Maximize Control</h3>
                    <p>Beyond hiring the right partner, there are certain steps a company can take to make sure they maintain control over their projects.</p>
                    <p className={styles.closerP}> - Be clear about expectations and stay involved in the process.</p>
                    <p className={styles.closerP}> - Be accessible to answer questions or review work as needed.</p>
                    <p className={styles.closerP}> - Ask the partner how they will handle any problems that arise.</p>
                    <p className={styles.closerP}> - Choose a contract that includes performance metrics or a regular review process.</p>
                    <p className={styles.closerP}> - Have a clear understanding of how partners will handle and secure financial information or sensitive data.</p>
                    <p className={styles.closerP}> - When outsourced IT operations are customer-facing, make sure that subcontractors are properly trained in their policies.</p>
                    <p > Furthermore, create performance metrics that you can measure regularly. These metrics can be time-based, such as the outsourcing team has to answer customer questions within an allotted time, or these metrics can be project-based. For example, specific technical elements should be at a certain stage by a specific date. Performance metrics will help you maintain the control you want but also allow the experts to complete the job without micromanagement.</p>
                    <p >Lastly, regular reviews with the project manager will help ensure control over the outsourcing process. Most likely, your outsourcing partner will suggest reviews, and you can use the performance metrics to drive the agenda. Open communication helps both sides of the partnership work well without getting bogged down by too many meetings and check-ins.</p>
                    <h3>Quality Over Control</h3>
                    <p>When outsourcing, a company can have just as much quality control as if they hired full-time employees to do the work using the managed team model. A company that has carefully considered their information technology outsourcing needs, taken great care to choose a high-quality service provider, and overseen the process of integrating outsourced IT work into their brand, will find they feel in control of the whole process without actually having to take on the burden of doing it themselves. </p>
               
               
                   <a href="https://www.bairesdev.com/blog" target="_blank" rel="noreferrer" >Explore more resources about the key topics that we covered today.</a>
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

export default DevelopArticle5;