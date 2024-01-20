import React, { useContext, useEffect } from 'react';
import styles from '../styles/developArticle1.module.scss';

import { NavContext } from '../contexts/navContext';
import { VisibilityContext } from '../contexts/visibilityContext';
///import { Desktop, Tablet, Mobile, MobileX } from '../contexts/breakPoints';

import ContactUs from '../pages/contactUs';
import ScrollToTop from '../components/scrollToTop';
import Footer from '../components/footer';

import img from "../assets/blog/mobile_developing.jpg";
import icon1 from '../assets/Icon/16894229181556105318.svg'
import icon2 from "../assets/blog/footprint.png";
import icon3 from "../assets/blog/app_development.png";
///import useDocTitle from '../components/docTitle';


const DevelopArticle1 = (props) => {

     const { setOffMenu } = useContext(NavContext);
     const { blogShow, setBlogShow, setFormsHide } = useContext(VisibilityContext);
     ///useDocTitle("SofTesting-Policy");
     document.title = 'SofTesting | Software Development | Mobile App Development';

     

      const handleFrmLoad =() =>{
          setBlogShow();
      }

      useEffect(() => {
          handleFrmLoad();
        }, []);

     return (

          <div className ={styles.article}  >

               <div className={styles.img} style={{ backgroundImage: `url(${img})` }}>

                    <h1>Mobile App Development</h1>
                    <h2>Software Design, Development</h2>

               </div>


               <div className={styles.article1}>

                  <h3>What is mobile application development?</h3>
                  <p>Mobile application development is the set of processes and procedures involved in writing software for small, wireless computing devices, such as smartphones and other hand-held devices.</p>
                  <p>Like web application development, mobile application development has its roots in more traditional software development. One critical difference, however, is that mobile apps are often written specifically to take advantage of the unique features of a particular mobile device. For example, a gaming app might be written to take advantage of the iPhone&apos;s accelerometer or a mobile health app might be written to take advantage of a smartwatch&apos;s temperature sensor.</p>
                  <p>Today, the two most prominent mobile platforms are iOS from Apple and Android from Google. Phones and tablets from Apple come preloaded with essential applications, including a full web browser and the Apple App Store. Android devices also come preloaded with similar apps and you can install more using the Google Play Store.</p>
                   <img src={icon2} alt="software" />
                        
               </div>
            
                  <ScrollToTop />
              
               <section className={styles.section1} style={{ backgroundImage: `url(${icon3})` }}>
                    <h3>Types of mobile applications</h3>
                    <img src={icon1} alt="problem solution" /> 
                    <p>In the early years of mobile apps, the only way to ensure an app could perform optimally on any device was to develop the app natively. This meant that new code had to be written specifically for each device&apos;s specific processor. Today, the majority of mobile applications developed are device-agnostic.</p>
                    <p>In the past, if an app needed to be cross-platform and run on multiple operating systems (OSes), there was little, if any, code that could be reused from the initial development project. Essentially, each device required its own mobile app development project with its own code base. Modern cross-platform tools use common languages such as C# and JavaScript to share code across projects; more importantly, they integrate well with application lifecycle management tools, such as Jenkins. This enables developers to use a single codebase for Apple iOS, Google Android and progressive web apps (PWAs). PWAs are built to take advantage of native mobile device features, without requiring the end user to visit an app store, make a purchase and download software locally. Instead, a PWA can be located with a search engine query and accessed immediately through a browser, thereby eliminating the need for e-commerce merchants to develop native apps for multiple mobile OSes.</p>
                    <p>Just like YouTube videos, PWA content is downloaded progressively, which provides the end user with a better user experience than a traditional website that uses responsive design. Progressive web apps may also be referred to as instant mobile apps.</p>
                    <p> Before developing an app, you need to determine which type you&apos;ll be creating. Here&apos;s a breakdown of several types of mobile app development technologies with information about each.</p>
                    <p><strong>Native applications.</strong> These applications are built using integrated development environments (IDEs) and languages for mobile OSes such as Apple iOS or Google Android. Native apps enable you to customize necessary features, but they can be more costly than other technologies.</p>
                    <p><strong>Hybrid apps.</strong> These are web apps that act like native apps. They are developed using technologies such as HTML, JavaScript and Cascading Style Sheets (CSS). Hybrid apps are more cost-effective to develop than native apps and can be created faster, but they aren&apos;t as feature-rich as native applications.</p>
                    <p><strong>Progressive web apps.</strong> A PWA is a website that looks and behaves as if it is a mobile app. These applications are developed with web technologies such as Facebook React.</p>
                    <p><strong>Encapsulated apps.</strong> An encapsulated app runs within a container app. Products such as the Microsoft Power App drag-and-drop app creation tool enable less experienced developers to build a mobile application rapidly. But the lack of isolation from the core OS, OS lock-in and the relative newness could pose problems.</p>
                    <p><strong>Frameworks and libraries. </strong>You can use this reusable code written by someone else to accelerate your development of a mobile app.</p>
                    <h3>Costs of developing a mobile app</h3>
                    <p>The cost of developing an app can range from almost nothing to millions of dollars -- it all depends on the type of app and its intended use. Following is a breakdown of the ranges you can expect to pay for building a mobile app:</p>
                    <p><strong>No-code app builders. </strong>A developer doesn&apos;t need to know how to code if the app has basic feature requirements. Free tools such as GoodBarber, Appery.io, Shoutem, Appy Pie and BuildFire offer the freedom to build apps without learning Swift or other programming languages. Although these tools are limited in their functionality and can&apos;t be used to create a game with no-code apps, the no-code approach will meet most organization&apos;s needs.</p>
                    <p><strong>Enterprise apps.</strong> The concept of Citizen Developer, where anyone can build a mobile app, is exploding with tools such as Amazon&apos;s HoneyCode, Mendix and Microsoft Power Suite. These devices offer drag-and-drop interfaces that can connect to data sources and manage content flow. The price is typically tied to a monthly subscription of less than $50.</p>
                    <p><strong>Mobile optimized website.</strong> Although it&apos;s most practical to build websites for both desktop and mobile devices, the website content management tool you&apos;re using will likely have plugins you can buy for less than $100 to optimize your website for mobile devices.</p>
                    <p><strong>Complex apps. </strong>An app that requires features, such as 3D, gaming or sophisticated artificial intelligence (AI), will likely need to be developed as a native app. The cost for a complex app can typically be $250,000 or more. The price is directly related to the scarcity of mobile developers.</p>
                    <h3>What is the mobile app development process?</h3>
                    <p>The following steps should help you develop the framework for building an app.</p>
                    <p> 1- Define your strategy based on the answers to these questions:</p>
                    <p className={styles.closerP}> - What is the objective of your app? What problems will it solve?</p>
                    <p className={styles.closerP}> - Are there existing apps that perform this function? If so, what do they do well? What are they lacking?</p>
                    <p className={styles.closerP}> - Who is the app designed for?</p>
                    <p className={styles.closerP}> - Will you be hiring developers or using an internal team?</p>
                    <p className={styles.closerP}> - What is your business model?</p>
                    <p className={styles.closerP}> - How much are you willing to invest in developing this app? Will you have investors?</p>
                    <p className={styles.closerP}> - How long will it take to build this application?</p>
                    <p className={styles.closerP}> - What is your marketing strategy? </p>
                    <p className={styles.closerP}> - Are you designing your app for one of the app stores? If so, do you have the necessary licensing agreements and design and testing criteria?</p>
                    <p> 2- Select your team. If you&apos;re creating this app on your own, do you need to hire a developer? A marketing person? If you&apos;re creating this app for your organization, will you have stakeholders from several departments participating in the process (i.e., C-level, marketing, sales, IT)?</p>
                    <p> 3- Brainstorm and sketch out how your mobile app will solve the problems you&apos;ve identified and what features and functions you&apos;ll include. Prototyping can be as simple as using a whiteboard or paper to sketch ideas, or tools such as InVision, Balsamiq or Adobe Experience Design. Keep user experience in mind when developing your vision. This includes such things as design, usability, security and performance.</p>
                    <p> 4- Develop your product roadmap using findings from the previous step. This will enable you to create a step-by-step process for assessing your priorities and deliverables.</p>
                    <p> 5- Select app development tools based on your requirements.</p>
                    <p> 6-  Begin app development. An agile process is best for building apps. Adopt a DevOps mindset when building the app. DevOps is a modern delivery methodology that uses key functions, such as:</p>
                    <p className={styles.closerP}> - applying automation where possible;</p>
                    <p className={styles.closerP}> - using cloud services;</p>
                    <p className={styles.closerP}> - working with open source tools;</p>
                    <p className={styles.closerP}> - frequently communicating with the team; </p>
                    <p className={styles.closerP}> - continuously testing the code.</p>
                    <p> 7- Create your prototype so you can share the app with your investors or other stakeholders. Use their feedback to refine app development and further testing. This includes testing for functionality, performance and ease of navigation.</p>
                    <p> 8- Once the app passes these tests, it&apos;s time to roll it out to users for official beta testing. This process includes multiple rounds of review and incorporating user fixes prior to creating a deployable version of your app.</p>
                    <p>Once your app has undergone the requisite testing and review, it&apos;s ready to deploy. At this point, create a channel for feedback from users and provide continuous support.</p>
                    <h3>Why Choose Progressive Web App Development?</h3>
                    <p>Progressive Web Applications (PWAs) are written in traditional web languages like Javascript, HTML5, CSS, and such. These apps are only accessible through the browser of your device. So, choose to develop a PWA if your user will have uninterrupted access to network connectivity, and they can solve their issues through the browser itself, without requiring any native capabilities of the device like camera, machine learning module, GPS, gyroscope, and such.</p>
                    <p>PWAs takes advantage of the huge web ecosystem this is inclusive of the plugins, and community and the relative ease of deploying and keeping a website contrary to a native application which is pretty difficult to develop. This means you can build a PWA quickly and easily.</p>
                    <p>With its popularity many companies have shifted into the product, I tend to believe that this is because of its ability to run on an android and iOS without much difference. Some good examples of top companies who have their products as PWAs include: Twitter, Pintrest, Uber, Tiktok, Spotify, Jumia (a leading e-commerce site in Africa) etc...</p>
                    <p>A common feature about this products is that they are all installable on your home screen, able to work offline from where you last left and offer a comparable experience and features to their native apps.</p>
                    <h3>Benefits of PWAs</h3>
                    <p>A lot of organizations both private and public are switching to PWAs not only because they are cheap to develop but also because they offer greater engagement.</p>
                     <p>Now let&apos;s look at a quick summary of the benefits of a PWA:</p>
                     <p className={styles.closerP}> - They are responsive and work with many different screen sizes.</p>
                     <p className={styles.closerP}> - They function just like normal Native Apps.</p>
                     <p className={styles.closerP}> - The updates are independent, you don&apos;t need to visit the play store for an update.</p>
                     <p className={styles.closerP}> - They&apos;re built with common web technologies.</p>
                     <p className={styles.closerP}> - They&apos;re fast and lightweight.</p>
                     <p className={styles.closerP}> - They work offline unlike other sites.</p>
                     <p className={styles.closerP}> - They are discoverable via search engine. </p>
                     <p className={styles.closerP}> - They are easily installable.</p>
                     <p className={styles.closerP}> - Low maintenance cost</p>
                     <p></p>
                    <a href="https://www.techtarget.com/searchapparchitecture" target="_blank" rel="noreferrer" >Explore more resources about the key topics that we covered today.</a>
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

export default DevelopArticle1;