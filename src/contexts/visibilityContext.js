import React, { Component, createContext, useEffect } from 'react';


export const VisibilityContext = createContext();

class VisibilityContextProvider extends Component {
  state = {
    loginFrmShow: false,
    contactFrmShow: false,
    registerFrmShow: false,
    resetPassFrmShow: false,
    changePassFrmShow:true,
    aboutUsFrmShow: false,
    policyFrmShow: false,
    sitemapFrmShow: false,
    bodyFrmShow: true,
    footerShow: true,
    notFoundFrmShow:true,
    onLineChatFrmShow:false,
    onLineChatLoginFrmShow:false,
    dashboardFrmShow:false,
    profileFrmShow:false,
    contractFrmShow:false,
    tasksFrmShow:false,
    ticketsFrmShow:false,
    blogShow:true,
    whatsAppFrmShow:false,
    linkedinKey:false,
  }


   scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  //       handleBackClick = () => {
  //       useEffect(() => {
  //     window.history.pushState(null, null, window.location.pathname);//or//
  //    /// history.pushState(null, null, location.href);

  //         window.addEventListener('popstate' , (event) => { if (!bodyFrmShow) {setBodyFrmShow} })
  //         }, []);
  //       return null // component does not render anything
  // }

  setLoginFrmShow = () => {

    
        this.setState({ loginFrmShow: true })
        this.setState({ registerFrmShow: false })
        this.setState({ resetPassFrmShow: false })
        this.setState({ contactFrmShow: false })
        this.setState({ changePassFrmShow: false })
        if (this.state.aboutFrmShow) { this.setState({ bodyFrmShow: false }) }
        else {this.setState({ bodyFrmShow: true})}
        if (this.state.policyFrmShow) { this.setState({ bodyFrmShow: false }) } 
        else {this.setState({ bodyFrmShow: true})}
     
    }
    setContactFrmShow = () => {

         this.setState({ contactFrmShow: !this.state.contactFrmShow })
         this.setState({ resetPassFrmShow: false })
         this.setState({ registerFrmShow: false })
         this.setState({ loginFrmShow: false })

        if (this.state.aboutFrmShow) { this.setState({ bodyFrmShow: false }) }
        else {this.setState({ bodyFrmShow: true})}
        if (this.state.policyFrmShow) { this.setState({ bodyFrmShow: false }) }
        else {this.setState({ bodyFrmShow: true})}
       
      
    }
    setRegisterFrmShow = () => {

      
        this.setState({ registerFrmShow: true })
       // this.setState({ loginFrmShow: false })
        this.setState({ resetPassFrmShow: false })

        if (this.state.aboutFrmShow) { this.setState({ bodyFrmShow: false }) }
      else {this.setState({ bodyFrmShow: true})}
       if (this.state.policyFrmShow) { this.setState({ bodyFrmShow: false }) }
       else {this.setState({ bodyFrmShow: true})}
       
   
    }
    setResetPassFrmShow = () => {
      
       this.setState({ resetPassFrmShow: true })

     //  this.setState({ loginFrmShow: false })
       this.setState({ registerFrmShow: false })

        if (this.state.aboutFrmShow) { this.setState({ bodyFrmShow: false }) }
        else {this.setState({ bodyFrmShow: true})}
        if (this.state.policyFrmShow) { this.setState({ bodyFrmShow: false }) }
        else {this.setState({ bodyFrmShow: true})}

   
    }
    setAboutUsFrmShow = () => {
    //  this.setState({ policyFrmShow: false })
      this.setState({ aboutUsFrmShow: true })

    }
    setPolicyFrmShow = () => {
   //   this.setState({ bodyFrmShow: false }) 
   //   this.setState({ aboutUsFrmShow: false }) 
      this.setState({ policyFrmShow: true })
      // this.setState({ loginFrmShow: false })
      // this.setState({ contactFrmShow: false })
      // this.setState({ registerFrmShow: false })
      // this.setState({ resetPassFrmShow: false })
      // this.setState({ changePassFrmShow: false })
        
    }
    
    setSitemapFrmShow = () => {
      this.setState({ sitemapFrmShow: !this.state.sitemapFrmShow })
    }

    setBodyFrmShow = () => {
      this.setState({ bodyFrmShow: true })
      this.setState({ footerShow: true })
      this.setState({ aboutUsFrmShow: false })
      this.setState({ policyFrmShow: false })
      this.setState({ loginFrmShow: false })
      this.setState({ contactFrmShow: false })
      this.setState({ registerFrmShow: false })
      this.setState({ resetPassFrmShow: false })
      this.setState({ changePassFrmShow: false })

    }

    setFormsHide = () => {
      this.setState({ loginFrmShow: false })
      this.setState({ contactFrmShow: false })
      this.setState({ registerFrmShow: false })
      this.setState({ resetPassFrmShow: false })
      // this.setState({ policyFrmShow:false})
      //  this.setState({ aboutUsFrmShow:false})
      this.setState({ sitemapFrmShow: false })
      this.setState({ notFoundFrmShow: false })
      this.setState({ changePassFrmShow: false })
      this.setState({ dashboardFrmShow: false })
      this.setState({ whatsAppFrmShow: false}) ;

    }
    setAllFormsHide = () => {
      this.setState({ loginFrmShow: false })
      this.setState({ contactFrmShow: false })
      this.setState({ registerFrmShow: false })
      this.setState({ resetPassFrmShow: false })
      this.setState({ aboutUsFrmShow: false })
      this.setState({ policyFrmShow: false })
      this.setState({ sitemapFrmShow: false })
      this.setState({ bodyFrmShow: false })
      this.setState({ dashboardFrmShow: false })


    }
    setOnLineChatFrmShow = () =>{
      
      if (!this.onLineChatFrmShow) this.setState({ onLineChatFrmShow: true })
      else  this.setState({ onLineChatFrmShow: false })
      this.setState({ onLineChatLoginFrmShow: false })
           
    }
    setOffOnLineChatFrmShow = () =>{
     
      this.setState({ onLineChatFrmShow: false })
      this.setState({onLineChatLoginFrmShow:false })
    }

    setOnLineChatLoginFrmShow =() =>{
      this.setState({ onLineChatLoginFrmShow: true })
      
    }

    setNotFoundFrmShow = ()=>{
      this.setState({ notFoundFrmShow: true })
    }

    setChangePassFrmShow =()=>{
       this.setState({ bodyFrmShow: true })
       this.setState({ changePassFrmShow: true })
    }

    setDashboardFrmShow =()=>{
      this.setState({ dashboardFrmShow: true })
      this.setState({ bodyFrmShow: true })
      this.setState({ onLineChatFrmShow: false })
      this.setState({ onLineChatLoginFrmShow:false })
      this.setState({ loginFrmShow: false })
      this.setState({ contactFrmShow: false })
      this.setState({ registerFrmShow: false })
      this.setState({ resetPassFrmShow: false })
      this.setState({ aboutUsFrmShow: false })
      this.setState({ policyFrmShow: false })
      this.setState({ sitemapFrmShow: false })

    }

    setProfileFrmShow=()=>{
      this.setState({ profileFrmShow: true}) ;
      this.setState({ dashboardFrmShow: true}) ;
    }

    setContractFrmShow = () =>{
      this.setState({ contractFrmShow: true}) ;
      this.setState({ dashboardFrmShow: true}) ;
    }    
    setTasksFrmShow = () =>{
      this.setState({ tasksFrmShow: true}) ;
      this.setState({ dashboardFrmShow: true}) ;
    }    
    setTicketsFrmShow = () =>{
      this.setState({ ticketsFrmShow: true}) ;
      this.setState({ dashboardFrmShow: true}) ;
    }    
    setBlogShow=()=>{
     this.setState({ blogShow: true}) ;
    }
    
    setWhatsAppFrmShow=()=> {
      this.setState({ whatsAppFrmShow: true}) ;
    }

    setOffWhatsAppFrmShow=()=> {
      this.setState({ whatsAppFrmShow: false}) ;
    }
    setOnLinkedin=()=>{this.setState({ linkedinKey: true}); }
    setOffLinkedin=()=>{this.setState({ linkedinKey: false}) ; }

    render() {
      return (
        <VisibilityContext.Provider value={{
          ...this.state, setLoginFrmShow: this.setLoginFrmShow, setContactFrmShow: this.setContactFrmShow,
          setRegisterFrmShow: this.setRegisterFrmShow, setAboutUsFrmShow: this.setAboutUsFrmShow, setResetPassFrmShow: this.setResetPassFrmShow,
          setPolicyFrmShow: this.setPolicyFrmShow, setSitemapFrmShow: this.setSitemapFrmShow, setBodyFrmShow: this.setBodyFrmShow,
          setFormsHide: this.setFormsHide, setNotFoundFrmShow: this.setNotFoundFrmShow, scrollToTop:this.scrollToTop, 
          setOnLineChatFrmShow:this.setOnLineChatFrmShow, setOffOnLineChatFrmShow:this.setOffOnLineChatFrmShow,
          setOnLineChatLoginFrmShow:this.setOnLineChatLoginFrmShow, setChangePassFrmShow:this.setChangePassFrmShow,
          setDashboardFrmShow:this.setDashboardFrmShow, setBlogShow:this.setBlogShow, setProfileFrmShow:this.setProfileFrmShow
          , setContractFrmShow:this.setContractFrmShow, setWhatsAppFrmShow:this.setWhatsAppFrmShow, setOffWhatsAppFrmShow:this.setOffWhatsAppFrmShow,
          setOffLinkedin:this.setOffLinkedin, setOnLinkedin:this.setOnLinkedin, setTasksFrmShow:this.setTasksFrmShow, 
          setTicketsFrmShow:this.setTicketsFrmShow
        }}>

          {this.props.children}
        </VisibilityContext.Provider>
      );
    }
  }

export default VisibilityContextProvider;