import React, { Component, createContext } from 'react';
import { Button, Image, Card } from 'react-bootstrap';
import '../styles/_sideBar.scss';

import { LoginContext } from '../contexts/loginContext';
import img from "../assets/app_image.png";


class LeftSideBar extends Component {
    
    handleClick = (event) => {
        // this.setState({
        //     setLoading: event.target.value
        // })
    }

    handleUserIdChange = (event) => {
        // this.setState({
        //     userId: event.target.value
        // })
    }



    handleSignInClick = (event) => {
        <signIn />

    }

    handleSignUpClick = (event) => {
        <signUp />
    }

    render() {
        const { isLoading } = LoginContext;
        return (


            <LoginContext.Consumer>

                {(loginContext) => (


                    <div className="leftSideBar">

                        {/* <Card className="bg-dark text-white card-slidBar"  >
                         
                            <Card.Img src={img} alt="Card image" className = "card-Image" />
                            <Card.ImgOverlay>
                                <Card.Title></Card.Title>
                                <Card.Text>

                                </Card.Text>
                                <Card.Text></Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                        <br /> */}
                        <div  style={{ left:'0px' ,  top:'0px'  }}>
                            <Card.Body>
                            <h6 left ="0px">Automation Testing <br/>Services</h6>
                              <p >
                                Agile automated testing <br/>  
                                using tools like Jenkins,<br/> 
                                Selenium, and Appium   <br/>
                                so that customers can  <br/>
                                minimize maintenance effort <br/>
                                and costs.
                                   
                                </p>
                            </Card.Body>
                        </div>
                        <br />
                                          
                            <Card.Body style={{ left:'0px' ,  top:'260px' }}>
                           
                            <h6 color="blue" left ="0px">Software Security <br/>Testing Services </h6>
                              
                                <Card.Text color="blue">
                                Identify and resolve<br/>  
                                security vulnerabilities <br/> 
                                in your system.<br/>
                                We make sure that the<br/>
                                 system’s data is protected.
                                   
                                </Card.Text>
                            </Card.Body>
                     

                       
                    </div>

                )}
            </LoginContext.Consumer>



        );

    }


}

export default LeftSideBar;
