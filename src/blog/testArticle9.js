import React, { useContext, useEffect} from 'react';
import styles from '../styles/testArticle9.module.scss';

import { NavContext } from '../contexts/navContext';
import { VisibilityContext } from '../contexts/visibilityContext';
///import { Desktop, Tablet, Mobile, MobileX } from '../contexts/breakPoints';

import ContactUs from '../pages/contactUs';
import ScrollToTop from '../components/scrollToTop';
import Footer from '../components/footer';

import img from "../assets/blog/security_testing.jpg";
import icon1 from '../assets/Icon/16894229181556105318.svg'
import icon2 from "../assets/blog/footprint.png";
import icon3 from "../assets/blog/research.png";
///import useDocTitle from '../components/docTitle';



const TestArticle9 = (props) => {

    const { setOffMenu } = useContext(NavContext);
    const { blogShow, setBlogShow, setFormsHide } = useContext(VisibilityContext);
    ///useDocTitle("SofTesting-Policy");
    document.title = 'SofTesting | Software Testing | Web Security Testing';



    const handleFrmLoad = () => {
        setBlogShow();
    }

    useEffect(() => {
        handleFrmLoad();
      }, []);


    return (

        <div className={styles.article} >

            <div className={styles.img} style={{ backgroundImage: `url(${img})` }}>

                <h1>Web Security Testing</h1>
                <h2>Software Testing</h2>

            </div>


            <div className={styles.article1}>
                <p><strong>Owing to the huge amount of data stored in web applications and an increase in the number of transactions on the web, proper Security Testing of Web Applications is becoming very important day-by-day.</strong></p>
                <p>Find and reduce risk in today’s ever-evolving web applications</p>
                <h3>What is Web Application Security Testing?</h3>
                <p>From web-based email to online shopping and banking, organizations are bringing their businesses directly to customers&apos; web browsers every day, circumventing the need for complex installations or update rollouts. Additionally, organizations are rolling out internal web applications for finance, marketing automation, and even internal communication that are often homegrown, or at least fine-tuned for their particular needs.</p>
                <p>While web applications offer convenience to businesses and customers alike, their ubiquity makes them a popular attack target for cybercriminals. As a result, web application security testing, or scanning and testing web applications for risk, is essential.</p>
                <p>As the <a href = "https://www.verizon.com/business/resources/reports/dbir/" target="_blank" rel="noreferrer">2018 Verizon Data Breach Report</a> shows, web applications are a popular attack target in confirmed data breaches, and in some industries up to 41% of data breaches are web application-related. The report also found that about half of web application-related breaches took several months or longer for security teams to discover. The longer an attacker has access to systems, the more damage they can cause. Attackers must be discovered and removed as quickly as possible, but that’s often easier said than done.</p>
                <p>As attackers increasingly target web applications, they are able to refine and battle-test their methods, increasing their sophistication. Even if a company follows best practices to protect itself against common web application attacks (like the <a href = "https://owasp.org/www-project-top-ten/" target="_blank" rel="noreferrer"> OWASP Top Ten</a>), this may not be enough. Breaking into web applications can be lucrative for criminals—they are motivated to use the latest and greatest in attack methods and tools, and they may have the resources of organized crime behind them. This kind of muscle can be hard for a business to combat alone. </p>
                <p>Web applications can also be so complex that they confuse systems designed to automatically detect an attacker&apos;s intrusion. That is why common tools like intrusion detection alone aren’t sufficient; web application security testing can fill the gaps.</p>
                <img src={icon2} alt="software testing" />
                <p>Every security team possesses unique goals and challenges. You might subscribe to DevSecOps and be seeking a way to integrate web application security testing into your Software Development Lifecycle (SDLC). You might be focused on securing just a few critical applications that drive your business. You might be looking for outside help to measure and manage your application security risk. Point is, navigating an ever-expanding application footprint can feel overwhelming; SofTesting can help you achieve success in your web application security testing program across all of your initiatives.</p>
                <p>Secure the application layer through testing, monitoring, and self-protection</p>
            </div>
        
                  <ScrollToTop />
              
            <section1   className={styles.section1} style={{ backgroundImage: `url(${icon3})` }}>
                 <h3>Some Key Terms Used in Security Testing</h3>
                 <img src={icon1} alt="problem solution" /> 
                 <p>Before we proceed further, it would be useful to familiarize ourselves with a few terms that are frequently used in web application Security Testing.</p>
                 <p><strong>What is “Vulnerability”?</strong>This is a weakness in the web application. The cause of such “weakness” can be due to the bugs in the application, an injection (SQL/ script code) or the presence of viruses.</p>
                 <p><strong>What is “URL Manipulation”?</strong> Some web applications communicate additional information between the client (browser) and the server in the URL. Changing some information in the URL may sometimes lead to unintended behavior by the server and this is termed as URL Manipulation.</p>
                 <p><strong>What is “SQL injection”?</strong>This is the process of inserting SQL statements through the web application user interface into some query that is then executed by the server.</p>
                 <p><strong>What is “XSS (Cross-Site Scripting)”?</strong>When a user inserts HTML/ client-side script in the user interface of a web application, this insertion is visible to other users and it is termed as XSS.</p>
                 <p><strong>What is “Spoofing”?</strong>Spoofing is the creation of hoax look-alike websites and emails.</p>
                 <p><strong></strong></p>
                 <h3>Types of Web Application Security Testing</h3>  
                <p><strong>Dynamic Application Security Testing (DAST):</strong> A DAST approach involves looking for vulnerabilities in a web app that an attacker could try to exploit. This testing method works to find which vulnerabilities an attacker could target and how they could break into the system from the outside. Dynamic application security testing tools don’t require access to the application&apos;s original source code, so testing with DAST can be done quickly and frequently.</p>
                <p><strong>Static Application Security Testing (SAST):</strong> SAST has a more inside-out approach, meaning that unlike DAST, it looks for vulnerabilities in the web application&apos;s source code. Since it requires access to the application&apos;s source code, SAST can offer a snapshot in real time of the web application&apos;s security.</p>
                <p><strong>Application Penetration Testing:</strong> Application penetration testing involves the human element. A security professional will try to imitate how an attacker might break into a web app using both their personal security know-how and a variety of penetration testing tools to find exploitable flaws. You can also outsource web application penetration testing services to a third party if you do not have the resources in-house. </p>
                <h3>3 Tips for Web Application Security Testing</h3>
                <p><strong>If a system is business-critical, it should be tested often:</strong> Any system that stores customer data—including credit card numbers, personally identifiable information (PII), or any other sensitive information—should be tested for security vulnerabilities; in fact, it&apos;s often a requirement of many government- or industry-mandated compliance guidelines. Keep this in mind when looking at the potential scope of web application security testing in your organization.</p>
                <p><strong>The earlier security is tested in software&apos;s design lifecycle, the better:</strong>  You do not want to leave security testing as a last step in software development—inevitably, vulnerabilities will be found and this can throw a big wrench into the development and maintenance processes. Bring security into the process early in the development lifecycle, preferably with the full involvement of your development operation (DevOps) team, to streamline response, minimize risk, and minimize any costs or time spent on remediation.</p>
                <p><strong>Keep development teams on track by prioritizing remediation and bug fixes: </strong> The output of web application security testing will often be a list of items that development will need to address at some point. Security calls them vulnerabilities, but development calls them bugs. The key is to not simply drop a list of these issues into a DevOps team’s lap; instead, be sure to prioritize the vulnerabilities and fully integrate with the bug tracking system in place, in order to maximize time to remediation.</p>
                <p>Web application security is more important than ever. By implementing a web application security scanner and following some basic best practices for both testing and remediation, businesses can significantly reduce their risk and help keep their systems safe from attackers. </p>
                <p><strong>Continue reading to learn more about SofTesting solutions for managing and responding to application risk.</strong></p>
                <p><strong>Testing Coverage and Accuracy</strong></p>
                <p>Applications are ever-evolving, a collection of highly complex, interconnected components of which no two are alike. Given how dynamic web development can be, shouldn’t your application security program be built on technology that can adapt and keep pace? Our Universal Translator provides all of our application security solutions with the unprecedented ability to scan and simulate attacks on your applications. By translating and normalizing all attackable inputs into a common universal format, the Universal Translator enables you to expand your application area coverage and add support for future web technologies and emerging attack types. Our solutions not only minimize false negatives, i.e. missed vulnerabilities, but also minimize false positives thanks to technology continuously improved and informed by data from real scans out in the wild.</p>
                <p><strong>Speed and Automation</strong></p>
                <p>DevSecOps, or the practice of integrating security into your DevOps processes, is quickly changing the application security landscape. Security teams want faster, automated testing—our APIs enable just that. Our application security solutions integrate seamlessly into your SDLC: Automate scans with your Continuous Integration (CI) solution, like Jenkins, to catch vulnerabilities before they hit production and notify developers of new issues automatically by integrating with ticketing systems like Jira. This cycle of collaboration and quality assurance enables you to build a more secure application layer.</p>
                <p><strong>Monitoring and Protection</strong></p>
                <p>Scanning for application vulnerabilities provides critical insight into your risk posture against both established and emerging attack types; that said, scanning alone isn’t always enough to ensure the security of your web apps in the face of impending threats—this is where application monitoring and protection comes in.</p>
                <p>Traditional web application firewalls (WAFs) stand between your web applications and the internet, helping to protect against various types of attacks such as SQL injection and cross-site scripting (XSS) by filtering suspicious web requests. But without visibility into the impact that attempted attacks have on your applications, traditional WAFs can often produce excessive false-positives, making it difficult for teams to know what to focus on. tCell by SofTesting takes application monitoring and protection a step further by incorporating runtime application self-protection (RASP) technology; this enables tCell to identify changes at the browser, web server, and app server levels and prevent applications from executing on malicious behaviors (including those incited by zero-days). RASP capabilities also provide greater visibility into the tangible impact of malicious activity on your web apps.</p>
                <p><strong>Proven Expertise</strong></p>
                <p>Web application security testing can be resource intensive; it requires not just security expertise, but also intimate knowledge of how the applications being tested are designed and built. For organizations looking to augment their team with experienced application security professionals, SofTesting has both the technology and the industry leadership to help you establish a world-class program. Our resident experts can run and tune scans, validate and prioritize vulnerability results, and deliver actionable reports with no false positives.</p>
                <p><strong>Conclusion</strong></p>
                <p>The purpose of a security test is to discover the vulnerabilities of the web application so that the developers can remove these vulnerabilities from the application and make the web application as well as data safe from any unauthorized action.</p>
                <p></p>
                <a href= "https://www.rapid7.com/fundamentals" target="_blank" rel="noreferrer">Explore more resources about the key topics that we covered today.</a>
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

export default TestArticle9;
