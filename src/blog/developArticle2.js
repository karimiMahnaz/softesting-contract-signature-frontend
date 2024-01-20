import React, { useContext, useEffect } from 'react';
import styles from '../styles/developArticle2.module.scss';

import { NavContext } from '../contexts/navContext';
import { VisibilityContext } from '../contexts/visibilityContext';
///import { Desktop, Tablet, Mobile, MobileX } from '../contexts/breakPoints';

import ContactUs from '../pages/contactUs';
import ScrollToTop from '../components/scrollToTop';
import Footer from '../components/footer';

import img from "../assets/blog/pwa.jpg";
import icon1 from '../assets/Icon/16894229181556105318.svg'
import icon2 from "../assets/blog/footprint.png";
import icon3 from "../assets/blog/visualization.png";
///import useDocTitle from '../components/docTitle';


const DevelopArticle2 = (props) => {

     const { setOffMenu } = useContext(NavContext);
     const { blogShow, setBlogShow, setFormsHide } = useContext(VisibilityContext);
     ///useDocTitle("SofTesting-Policy");
     document.title = 'SofTesting | Software Development | Web Design & Development';

     

      const handleFrmLoad =() =>{
          setBlogShow();
      }

      useEffect(() => {
          handleFrmLoad();
        }, []);


     return (

          <div className ={styles.article}  >

               <div className={styles.img} style={{ backgroundImage: `url(${img})` }}>

                    <h1>Web Design & Development</h1>
                    <h2>Software Design, Development</h2>

               </div>


               <div className={styles.article1}>
                  <p>What is the difference between a web designer and a web developer? In the early days of the web, the answer to that question was simple: designers design and developers code. Today that question requires a little more nuance—you&apos;d be hard pressed to find a web designer who didn&apos;t know at least a little HTML and CSS, and you won&apos;t have to look far for a front-end web developer who can whip up a storyboard. If you&apos;re strictly speaking about the general concepts of web design vs. web development, however, the distinction is a little more clear. Let&apos;s take a look at these two concepts and the roles they play in building the functioning websites and apps we know and love.</p>
                  <h3>What is web design?</h3>
                  <p>Web design governs everything involved with the visual aesthetics and usability of a website—color scheme, layout, information flow, and everything else related to the visual aspects of the UI/UX (user interface and user experience). Some common skills and tools that distinguish the web designer from the web developer are:</p>
                  <img src={icon2} alt="software" />
                  <p className={styles.closerP}> - Adobe Creative Suite (e.g., Photoshop, Illustrator) or other design software</p>
                  <p className={styles.closerP}> - Graphic design</p>
                  <p className={styles.closerP}> - UI design</p>
                  <p className={styles.closerP}> - UX design</p>
                  <p className={styles.closerP}> - Logo design</p>
                  <p className={styles.closerP}> - Layout/format</p>
                  <p className={styles.closerP}> - Placing call-to-action buttons</p>
                  <p className={styles.closerP}> - Branding</p>
                  <p className={styles.closerP}> - Wireframes, mock-ups, and storyboards</p>
                  <p className={styles.closerP}> - Color palettes</p>
                  <p className={styles.closerP}> - Typography</p>
                  <p>Web design is concerned with what the user actually sees on their computer screen or mobile device, and less so about the mechanisms beneath the surface that make it all work. Through the use of color, images, typography and layout, they bring a digital experience to life.</p>
                  <p>That said, many web designers are also familiar with HTML, CSS, and JavaScript—it helps to be able to create living mock-ups of a web app when trying to pitch an idea to the team or fine-tune the UI/UX of an app. Web designers also often work with templating services like WordPress or Joomla!, which allow you to create websites using themes and widgets without writing a single line of code.</p>
               </div>
            
                  <ScrollToTop />
              
               <section className={styles.section1} style={{ backgroundImage: `url(${icon3})` }}>
                    <h3>What is web development?</h3>
                    <img src={icon1} alt="problem solution" /> 
                   <p>Web development governs all the code that makes a website tick. It can be split into two categories—front-end and back-end. The front-end or client-side of an application is the code responsible for determining how the website will actually display the designs mocked up by a designer. The back-end or server-side of an application is responsible for managing data within the database and serving that data to the front-end to be displayed. As you may have guessed, it’s the front-end developer’s job that tends to share the most overlap with the web designer. Some common skills and tools traditionally viewed as unique to the front-end developer are listed below:</p>
                   <p className={styles.closerP}> - HTML/CSS/JavaScript</p>
                   <p className={styles.closerP}> - CSS preprocessors (i.e., LESS or Sass)</p>
                   <p className={styles.closerP}> - Frameworks (i.e., AngularJS, ReactJS, Ember)</p>
                   <p className={styles.closerP}> - Web template design</p>
                   <p className={styles.closerP}> - Libraries (i.e., jQuery)</p>
                   <p className={styles.closerP}> - Git and GitHub</p>
                   <p className={styles.closerP}> - On-site search engine optimization (SEO)</p>
                   <p><strong>Front-end web developers </strong>don’t usually create mock-ups, select typography, or pick color palettes—these are usually provided by the designer. It’s the developer’s job to bring those mock-ups to life. That said, understanding what the designer wants requires some knowledge of best practices in UI/UX design so that the developer is able to choose the right technology to deliver the desired look and feel and experience in the final product.</p>
                   <p><strong>Back-end developers</strong> handle the business logic and data management on the back-end of an application. They write the APIs and routing that allow data to flow between the front and back end of an application. Programming languages and tools unique to back-end developers are listed below:</p>
                    <p className={styles.closerP}> - Server-side programming languages (e.g., PHP, Python, Java, C#)</p>
                    <p className={styles.closerP}> - Server-side web development frameworks (e.g., Ruby on Rails, Symfony, .NET)</p>
                    <p className={styles.closerP}> - Database management systems (e.g., MySQL, MongoDB, PostgreSQL)</p>
                    <p className={styles.closerP}> - RESTful APIs</p>
                    <p className={styles.closerP}> - Authentication and security (e.g., OAuth, PassportJS)</p>
                    <p className={styles.closerP}> - Servers (e.g., Linux, Apache, Express)</p>
                    <p>Web developers who possess a working knowledge across the frontend and backend of a technology stack are called full-stack developers.</p>
                   <h3>Web designers vs. web developers—major differences at a glance</h3>
                   <p>Now that we’ve established that web design and web development are two distinct disciplines, let’s take a look at the major differences between web designers and web developer</p>
                   <p><strong>Most web designers do not code</strong></p>
                   <p>Web designers are responsible for the general look and feel of a website. They might use a visual editor like Photoshop to create images or an app prototyping and animation tool such as  InVision Studio to design layouts and generate high-fidelity mockups. But none of these main responsibilities require coding.</p>
                   <p>Beyond their traditional role as visual designers, the proliferation of content management systems (CMS) such as WordPress and no-code website builders like Wix mean there are web designers who can apply their visual talents to building your website without having to know how to code.</p>
                   <p><strong>Web developers do not create assets</strong></p>
                   <p>Web developers are the programmers with the coding skills needed to add functionality to a website. They translate the designer’s wireframes and mockups into code using HTML, CSS, and JavaScript. Web developers don’t usually have to create the visual assets themselves such as the images behind buttons, color schemes, and fonts. They just need to use code to implement them into the page.</p>
                   <p><strong>Web developers are generally more expensive than web designers</strong></p>
                   <p>he cost of hiring a web developer tends to be higher than the cost of hiring a web designer. According to ZipRecruiter, the average rate of web developers is $36/hr while the average rate of web designers is $29/hour. The primary reason for this discrepancy is likely supply and demand—there are more designers than developers, and coding in general is a highly sought after skill. As coding becomes more ubiquitous among the talent pool the discrepancy between rates decreases. When it comes to expertise, whether hiring developers or designers you are paying for experience.</p>
                   <h3>Progressive Web App Development Tools</h3>
                   <p>For your project to succeed, your progressive web app developers have to have several specialized tools in their toolbox. React and Angular are among the most popular PWA development tools. React’s reusable components simplifies deploying a PWA across devices and operating systems. Alternatively, Angular is a complete framework and better suited for complex projects.</p>
                   <p>SofTesting developers leverage their knowledge of these JavaScript frameworks to deliver customized projects on time and on budget. Our team will work within the parameters of your site to provide a PWA that helps your business grow.</p>
                   <h3>Save Money and Time with a Progressive Web App Developer</h3>
                   <p>In most cases, Native mobile app development and deployment require a significantly larger investment than progressive web apps. Working with a progressive web app developer to create an engaging web interface can save your organization money and time. With a PWA, you won’t need a license to distribute your app within the Google Play Store or Apple App Store. Since PWAs run through the mobile browser or the home screen, store licenses are not necessary, and you can deploy your apps quickly. In addition, PWAs are not subject to the 30% platform fees Google and Apple apply to native mobile app purchases and in-app purchases. These cost savings allow you to reallocate that funding to improve the functionality and quality of future app iterations.</p>
                   <p>Since PWAs typically cost less to build than native apps, a progressive web app developer like SofTesting has greater flexibility to build an experience that creates a seamless customer experience.</p>
                   <h3>Improve User Experience with PWA Development</h3>
                   <p>As progressive web app developers, we build solutions that enable your organization to increase brand awareness and better connect with users. PWAs improve user experience since your customers no longer need to download an application to their mobile devices. Progressive web apps work within the mobile browser, delivering a seamless app-like experience. Companies who use PWAs to promote their business see higher usage rates, as web browsing often uses less mobile data than traditional apps. Plus, if your customers want to, they can download your PWA to their home screen and launch the app even when they’re not online.</p>
                   <p>We want to help you maximize the ROI you receive by reaching the largest audience possible within your target demographics. A successful PWA will lead to higher adoption rates from your customers, eventually empowering you to set higher goals and see additional revenue.</p>
                   <h3>Build with a Progressive Web App Developer</h3>
                   <p>If you’re considering developing a progressive web app, partner with a progressive web app developer. We will expedite the process and help you deploy a customized solution that amplifies engagement through first-class user experiences. You’ll have a greater chance for success if you choose a progressive web app developer willing to meet your needs, rather than one that uses a “one size fits all” approach.</p>
                   <p>SofTesting is a progressive web app developer committed to delivering unique solutions that meet our customers’ objectives. Schedule a call with our team today and learn how your business can use progressive web apps to stay ahead of the curve.</p>
                  
                   <p><strong></strong></p>
                   <a href="https://www.upwork.com/resources" target="_blank" rel="noreferrer" >Explore more resources about the key topics that we covered today.</a>
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

export default DevelopArticle2;