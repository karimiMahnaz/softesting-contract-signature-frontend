import React, { useEffect, useState, useRef } from 'react';
import { useCookies } from 'react-cookie';
import Scroll from 'react-scroll';

import styles from '../styles/messages.module.scss';

const newDate = new Date();
///let currentDate = newDate.getDate();


function Messages({ socket }) {
    const [messages, setMessages] = useState({});
    const [cookies, setCookie] = useCookies(['name']);
    const scrollableGrid = useRef();
  //  var scroller = Scroll.scroller;
  //  var loginName = '';
  //  var scroll = Scroll.animateScroll;

  // const scrollToView = () => {
      ///  scroll.scrollToButtom();
       ///  scroll.scrollTo({
       //    scrollableGrid.current.scrollIntoView()  
      ///     behavior: "smooth"
       ///  });
     
   // };
  useEffect(() => {
    const messageListener = (message) => {
      setMessages((prevMessages) => {
        const newMessages = {...prevMessages};
        message.user.name = cookies.name? cookies.name:cookies.email;
        newMessages[message.id] = message;
        // loginName = cookies.name? cookies.name:cookies.email;
        // console.log(`${loginName}`);
     ////   window.addEventListener("scroll", scrollToView);
   /////      scrollableGrid.current.scrollIntoView  ();
   ////   window.scrollTo({ scrollableGrid.current.offsetTop, behavior: "smooth"})
        //  scroller.scrollTo('myScrollToElement', {
        //   duration: 1500,
        //   delay: 100,
        //   smooth: true,
         
        // })
        return newMessages;
      });
    };
  
    const deleteMessageListener = (messageID) => {
      setMessages((prevMessages) => {
        const newMessages = {...prevMessages};
        delete newMessages[messageID];
        return newMessages;
      });
    };
   

    socket.on('message', messageListener);
    socket.on('deleteMessage', deleteMessageListener);
    socket.emit('getMessages');
   // socket.emit('loginName', `${loginName}`);
    

    return () => {
      socket.off('message', messageListener);
      socket.off('deleteMessage', deleteMessageListener);
    };
  }, [socket]);

//   className={message.sender.name != cookies.name ? styles.message_reverse : null}>

  return (

    <div className={styles.message_list} > 
     {/*  scrollableGrid={true} > */}
       {/* <div className= {styles.endMessage} name="myScrollToElement" ref ={scrollableGrid}/> */}
      {[...Object.values(messages)]
        .sort((a, b) => a.time - b.time)
        .map((message) => (
          <div 
            key={message.id}
            className={styles.message_container}
            title={`Sent at ${new Date(message.time).toLocaleTimeString()}`}>
              
            <span className={styles.user}>{message.user.name}:</span>
            <span className={styles.date}>{new Date(message.time).toLocaleTimeString()}</span>
            <span className={styles.msg} >
                <p >{message.value}</p>
            </span>
         
          </div>
        ))
      }
    </div>

    // <div id={styles.container}>
    //     {[...Object.values(messages)]
    //     .sort((a, b) => a.time - b.time)
    //     .map((message) => {
    //      <>
    //      {/* message.sender.name == cookies.name ? user1 : */}
    //      {/* className={message.sender.name == cookies.name ? styles.message_reverse : null} */}
    //      {/* {message.sender.name} */}
    //      {/* {message.msg} */}
    //      {/* message.sender.name == cookies.name ? styles.outMessage :  */}
    //         <img src={ user2} id={styles.user_icon} />
    //         <div className={styles.name}>{message.user.name}</div>

    //         <span key={message.id} className={styles.inMessage}>
    //         {message.value}
    //         </span>
    //         <div className={styles.date}>{new Date(message.time).toLocaleTimeString()}</div>
    //      </>       
         
    //     })
    // }
    // </div>
  );
}

export default Messages;