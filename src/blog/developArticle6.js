import React, { useContext, useState, useEffect, useRef } from 'react';
import styles from '../styles/developArticle6.module.scss';

import { NavContext } from '../contexts/navContext';
import { VisibilityContext } from '../contexts/visibilityContext';
///import { Desktop, Tablet, Mobile, MobileX } from '../contexts/breakPoints';

import ContactUs from '../pages/contactUs';
import ScrollToTop from '../components/scrollToTop';
import Footer from '../components/footer';

import img from "../assets/blog/maintenance.jpg";
import icon1 from '../assets/Icon/16894229181556105318.svg'
import icon2 from "../assets/blog/footprint.png";
import icon3 from "../assets/blog/problem-solve.png";
///import useDocTitle from '../components/docTitle';


const DevelopArticle6 = (props) => {

     const { setOffMenu } = useContext(NavContext);
     const { blogShow, setBlogShow, setFormsHide } = useContext(VisibilityContext);
     ///useDocTitle("SofTesting-Policy");
     document.title = 'SofTesting | Software Maintenance | Support after software launch';

     

      const handleFrmLoad =() =>{
          setBlogShow();
      }

      useEffect(() => {
          handleFrmLoad();
        }, []);

     return (

          <div className ={styles.article} >

               <div className={styles.img} style={{ backgroundImage: `url(${img})` }}>

                    <h1>Support after software launch</h1>
                    <h2>Software Maintenance</h2>

               </div>


               <div className={styles.article1}>

                    
                    <div>
                        <h3>The Essence of Software Maintenance and Support</h3>
                        <p>Software maintenance and support imply a set of activities aimed at ensuring software’s stable functioning, scalability, high performance, and security. </p>
                        <p>Software maintenance and support types:</p>
                        <p className={styles.closerP}><strong>Corrective:</strong> fixing problems discovered by users or identified during monitoring.</p>
                        <p className={styles.closerP}><strong>Adaptive:</strong>keeping software up-to-date by tuning it in line with the changing business needs.</p>
                        <p className={styles.closerP}><strong>Perfective:</strong>continuously improving software’s usability, performance, and reliability.</p>
                        <p className={styles.closerP}><strong>Preventive:</strong>detecting and correcting latent issues.</p>
                        <p><strong>Software maintenance and support setup plan steps:</strong> </p>
                        <img src={icon2} alt="software" />
                       
                    </div>
               
                   
               </div>
            
                  <ScrollToTop />
              
               <section className={styles.section1} style={{ backgroundImage: `url(${icon3})` }}>
                    <img src={icon1} alt="problem solution" /> 
                    <h3>Software Maintenance and Support Setup Plan</h3>
                    <p>The setup plan will differ depending on the specifics of the supported software and its underlying infrastructure, as well as the scope of the required support and maintenance activities.</p>
                  
                    <p><strong>Scope:</strong>estimation of the scope and required resources, maintenance and support process design, choosing a sourcing model, implementation, and launch.</p>         
                    <p><strong>Required team:</strong>Help desk specialists, application support engineers, software developers, QA and DevOps engineers.</p>
                    <p>SofTesting helps companies set up and run preventive maintenance and on-demand support of applications and their infrastructures.</p>
                    <h3>Step 1: Estimation of the maintenance and support scope and required resources</h3>
                    <p>Firstly, SofTesting analyzes the software’s related infrastructure, prospective new features and changes, as well as the current and planned user pool, to determine the scope of the support and maintenance activities. Then, we measure the projected scope against currently available in-house resources, such as dedicated IT specialists and maintenance tools. </p>
                    <h3>Step 2: Software maintenance and support process design</h3>
                    <p>Depending on the scope of the required support and maintenance activities, SofTesting&apos;s processes will comprise a combination of the following elements:</p>
                    <p>Depending on the activities included into the support and maintenance process, SofTesting defines KPIs to assess and optimize the process.</p>
                    <h3>Step 3: Choosing a sourcing model and implementation </h3>
                    <p><strong>Model 1: in-house software maintenance</strong></p>   
                    <p><strong>1. Hiring and training staff for software support and maintenance</strong></p>
                    <p><strong>2. Tool selection and customization</strong></p>
                    <p>SofTesting chooses relevant tools based on the type of software, the support and maintenance scope, the KPIs set, and other aspects. The toolset may include software for performance and security monitoring, backup software, DevOps, help desk, and other tools. </p>
                    <p><strong>Model 2: outsourced software maintenance</strong></p>
                    <p>Preparing and sending an RFP with software support and maintenance needs.</p>
                    <h3>Step 4: Software maintenance and support launch</h3>
                    <p>SofTesting sets the service timeframes (e.g., 8/5, 12/5, 24/5, 24/7). We also schedule regular maintenance windows for the preventive maintenance activities that can cause downtimes. These time intervals should always be available, even if not used each time.</p>
                    <h3>Consider Professional Software Maintenance Services</h3>
                    <p>Experienced in application support and IT service management (ITSM), SofTesting offers the following software maintenance and support service options:</p>
                    <p> - Software support and maintenance consulting</p>
                    <p> - Outsourced software support and maintenance</p>

                    <h3>Software Maintenance and Support Costs</h3>
                    <p>Usually, software maintenance and support costs are around 15-20% of the initial development costs (per year), and in total (during the entire software life cycle) they can be as high as 70% of the TCO. Additionally, the maintenance of 20-30 servers at 8/5 EST may cost $1,000-2,000 per month. In this case, maintenance covers proactive monitoring of software performance and security as well as detecting and fixing latent issues.</p>
                    <p><strong>Cost factors</strong></p>
                    <p>The support and maintenance costs vary a lot depending on the sourcing model. The key cost factors for in-house and outsourced software support maintenance respectively are:</p>
                    <p><strong>In-house software maintenance</strong></p>
                    <p> - The type and number of software and technologies used in it including legacy techs, integrations and customizations.</p>
                    <p> - Complexity of the organization’s digital infrastructure and its degree of automation.</p>
                    <p> - Licenses for tools used by the team: software monitoring, configuration, help desk, and more.</p>
                    <p> - Availability of complete and high-quality software documentation required for maintenance.</p>
                    
                    <p><strong>Outsourced software maintenance</strong></p>
                    <p> - The outsourced team’s size and competencies.</p>
                    <p> - The pricing model (per ticket, bucket of hours).</p>
                    <p> - Type of maintenance and support services (on-demand, continuous, both).</p>
                    
                   {/* <a href="https://www.codica.com/blog" target="_blank" rel="noreferrer" >Explore more resources about the key topics that we covered today.</a> */}
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

export default DevelopArticle6;