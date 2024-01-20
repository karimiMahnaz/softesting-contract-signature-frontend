import React, { useContext, useState, useRef } from "react";
import {  useHistory,  withRouter } from "react-router-dom";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMediaQuery } from "react-responsive";

import { VisibilityContext } from "../contexts/visibilityContext";
import { AuthContext } from "../contexts/authContext";
import styles from "../styles/dashboard.module.scss";
//import Profile from "../pages/profile";

import exitIcon from "../assets/dashboard/exit_icon.png";
import logoutIcon from "../assets/dashboard/logout_icon.png";
import profileIcon from "../assets/dashboard/profile_icon.png";
import tasksIcon from "../assets/dashboard/tasks_icon.png";
import downLoadAppIcon from "../assets/dashboard/download.png";
import contractIcon from "../assets/dashboard/contract.png";
import ticketIcon from "../assets/dashboard/support_ticket.png"

const Dashboard = () => {
 
   const [profile, setProfile] = useState(false);
   const [tasks, setTasks] = useState(false);
   const [tickets, setTickets] = useState(false);
   const [contract, setContract] =useState(false);
   const [show, setShow] = useState(true);
   const [minimize, setMinimize] = useState(false);

   const {  setProfileFrmShow, setContractFrmShow, setFormsHide, setTasksFrmShow, setTicketsFrmShow } = useContext(VisibilityContext);
   const { states, dispatch } = useContext(AuthContext);

  // let { path, url } = useRouteMatch();
   let history = useHistory();

   const appElement1 = useRef(null);
   //let deferredPrompt=null;

if (appElement1.current){
   appElement1.current.addEventListener("click",  ()=> {
   console.log("listenner 1 ");
   //    var userAnswer = prompt("Do you want to install SofTesting App?");
   //   if (deferredPrompt) {
   //     deferredPrompt.prompt();
   //     deferredPrompt.userChoice.then( (choice) => {
   //       console.log(choice);
   //       if (choice.outcome === "dismissed") {
   //         console.log("installation was cancelled");
   //       } else {
   //         console.log("User Added To Home Screen");
   //       }
   //     });
   //     deferredPrompt = null;
   //   }
   
   });
}
   
   window.addEventListener("beforeinstallprompt",  (event) => {
       console.log("listenner 2 ")
     console.log("beforeinstallprompt run .");
     event.preventDefault();
     window.deferredPrompt = event;
     return false;
   
   });
   
   if ("serviceWorker" in navigator) {
     window.addEventListener("load",  ()=> {
      console.log("listenner 3 ")
       navigator.serviceWorker
         .register("../sw.js")
         .then( ()=> {
           console.log("Service worker registered!");
         })
         .catch( (e)=> {
           console.error("SW Errors while registering!", e);
         });
     });
   } 
   

   const handleFrmClose = () => {
      history.push("/");
      setShow(false);
      setFormsHide();
      setProfile(false);
      setTasks(false);
      setTickets(false);
   }

   const handleLogout = () =>{

      dispatch({
         type: "SignOut"
       })
       setShow(false);
       setFormsHide();
       setProfile(false);
       setTasks(false);
       setTickets(false);
      history.push("/");  

   }

   const handleProfile = () => {
      history.push("/src/pages/profile");
      setProfileFrmShow();
      setProfile(true);
      setMinimize(true);
   }
   const handleTasks = () => {
      history.push("/src/pages/tasks");
      setTasksFrmShow();
      setTasks(true);
   }
   const handleTickets = () =>{
      history.push("/src/pages/tickets");
      setTicketsFrmShow();
      setTickets(true);
   }
   const handleContract = () =>{
      history.push("/src/pages/contract");
      setContractFrmShow();
      setContract(true);
      setMinimize(true);

   }
   const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
   console.log("isMobile",isMobile );
   const handleApp = (e) => {
      
      if (isMobile) { toast.info("please click 'add to home screen button'.") }
      else {
      var userAnswer = window.confirm("Do you want to install SofTesting App?");
      if (window.deferredPrompt) {
        window.deferredPrompt.prompt();
        window.deferredPrompt.userChoice.then( (choice) => {
          console.log(choice);
          if (choice.outcome === "dismissed") {
            console.log("installation was cancelled");

          } else {
            console.log("User Added To Home Screen");
          }
        });
        window.deferredPrompt = null;
      }
   }
   }

   const handleMinimize = () => {
      setMinimize(!minimize);
   }

   return (
      show &&  <div className={show ? minimize ? styles.minTabs : styles.tabs:null}>

         {/* <span id={styles.arrow} className={minimize ? styles.right : styles.left} onClick={handleMinimize}></span> */}
       
        {/*  <div id={styles.tooltip} className={styles.bottomon} >
            <div className={styles.tooltip_arrow}></div>
            <div className={styles.tooltip_label}>user profile</div>
         </div> */}
         <img className={styles.profileIcon} src={profileIcon} alt="profile"  onClick={handleProfile}/>
         <button className={styles.profile} onClick={handleProfile}> 
            Profile
         </button>

         <h1 className={styles.h1}>Software</h1>
         <img className={styles.tasksIcon} src={tasksIcon} alt="tasks"  onClick={handleTasks}/>
         <button className={styles.tasks} onClick={handleTasks}>
            Tasks
         </button>

         <img className={styles.ticketsIcon} src={ticketIcon} alt="tickets"  onClick={handleTickets}/>
         <button className={styles.tickets} onClick={handleTickets}>
            Tickets
         </button>

         <img className={styles.AppIcon} src={downLoadAppIcon} alt="download" onClick={handleApp}/>
         <button id={styles.fab} ref={appElement1} className={styles.App} onClick={handleApp} >   
            SofTesting App
         </button>

         <img className={styles.ContractIcon} src={contractIcon} alt="contract" onClick={handleContract}/>
         <button id={styles.Contract} className={styles.Contract} onClick={handleContract} >   
            Contracts
         </button>

         <img className={styles.logoutIcon} src={logoutIcon} alt="logout"  onClick={handleLogout}/>
         <button className={styles.logout} onClick={handleLogout}>
            Logout
         </button>

         <img className={styles.exitIcon} src={exitIcon} alt="exit" onClick={handleFrmClose}/>
         <button className={styles.exit} onClick={handleFrmClose}>
            Exit Dashboard
         </button>

      </div>

   );

}


export default withRouter(Dashboard);