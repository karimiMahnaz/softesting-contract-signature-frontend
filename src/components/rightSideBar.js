import React, { Component, createContext } from 'react';
import { Button, Image, Card } from 'react-bootstrap';
import '../styles/_sideBar.scss';

import { LoginContext } from '../contexts/loginContext';
import img from "../assets/app_image.png";


class RightSideBar extends Component {
    state = {

    }

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


                    <div className="rightSideBar">

                     
                              <Card.Body  style={{ left:'0px' ,  top:'0px' , width:'270px'}}>
                               
                               <h6 >Manual and Functional<br /> Testing Services</h6>
                               <Card.Text>
                               Testing applications   <br />
                               from the end-users’   <br />
                               perspective significantly <br />
                               improves the software’s  <br />
                               experience, usability, <br />
                               and critical defects.
                               </Card.Text>
                           </Card.Body>

                            <Card.Body  style={{ left:'0px' ,  top:'290px' , width:'270px'}}>
                               
                                <h6 >Performance Testing Services</h6>
                                <Card.Text>
                                Achieve optimum stability,  <br />
                                responsiveness, and scalability  <br />
                                in your applications with <br />
                                our Full-cycle performance <br />
                                testing services.
                                </Card.Text>
                            </Card.Body>
             

                            <Card className="bg-dark text-white card-slidBar" style={{ left:'0px' ,  top:'550px' }}>
                            <Card.Img src={img} alt="Card image" /> <br/>
                            <h6>Five Stages of a Software Development Life Cycle</h6>
                             <p>(SDLC)</p>
                            
                        </Card>


                    </div>

                )}
            </LoginContext.Consumer>



        );

    }


}

export default RightSideBar;
