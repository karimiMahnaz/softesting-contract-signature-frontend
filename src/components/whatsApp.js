import React, { useContext, useEffect } from 'react';
import {  useHistory} from 'react-router-dom';
///import WhatsAppWidget from 'react-whatsapp-widget';
///import 'react-whatsapp-widget/dist/index.css';

import styles from '../styles/whatsApp.module.scss';
import { VisibilityContext } from '../contexts/visibilityContext';
import { NavContext } from '../contexts/navContext';

import img from '../assets/abstract-blue.jpg'
import whatsApp from '../assets/Icon/whatsapp-48.svg';

const WhatsApp = () => {

  const { setOffMenu } = useContext(NavContext);
  const { whatsAppFrmShow,  setFormsHide } = useContext(VisibilityContext);

  
  let history = useHistory();

  const handleFrmClose = () => {
    history.push("/");
    setFormsHide(); 
  }

  const handleFrmLoad = () =>{
    return setOffMenu;
  }
  
  useEffect(() => {
    handleFrmLoad();
  }, []);


  return (
    <div className={whatsAppFrmShow ? styles.modal : styles.inactive}  style={{ backgroundImage: `url(${img})` }}>
       <div className={styles.container}>
      <span id={styles.closeBtn} onClick={handleFrmClose} className={styles.closeBtn}  >
        <svg id={styles.svg}>
          <line id={styles.line1} x1="0" y1="0" x2="20" y2="20" />
          <line id={styles.line2} x1="20" y1="0" x2="0" y2="20" />
        </svg>
      </span>
      <img src= {whatsApp} />
      <p id={styles.p1}> (+98) 09123256458 </p>
      <p id={styles.p2}> +1 (204) 557-2334 </p>
      {/* <WhatsAppWidget phoneNumber="09809123256458" message="Can I help you? (●'◡'●)"  companyName = "SofTesting"/> */}
      </div>
    </div>
  )
}

export default WhatsApp;