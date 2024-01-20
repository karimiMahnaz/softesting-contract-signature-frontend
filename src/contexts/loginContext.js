import React, { Component ,createContext} from 'react';

export const LoginContext = createContext();

class LoginContextProvider extends Component {
    state = { 
        userId:'',
        userName:'',
        userEmail:'',
        isLoading : false ,
        authorized : false,
        token:''

     }

     setUserId = () => {
        this.setState({ userId: this.state.userId } ) 
      }
      setUserName = () => {
        this.setState({ userName: this.state.userName } ) 
      }
      setUserEmail = () => {
        this.setState({ userEmail: this.state.userEmail } ) 
      }
      setAuthorized = () => {
        this.setState({ authorized: this.state.authorized } ) 
      }
      setToken = () => {
        this.setState({ token: this.state.token } ) 
      }
    render() { 
        return ( 
            <LoginContext.Provider value={{...this.state, setUserId: this.setUserId, setUserName:this.setUserName,
                              setUserEmail:this.setUserEmail, setAuthorized: this.setAuthorized, setToken:this.setToken}}>
                 {this.props.children}
            </LoginContext.Provider>
         );
    }
}
 
export default LoginContextProvider;