import React, {Component, createContext} from 'react';


export const NavContext = createContext();

class NavContextProvider extends Component {
    state = { 
        deskTopShowMenu:false,
        showMenu:true,
        activeMenu1:true,
        activeMenu2:true,
        
     }

     setShowMenu = () => {
        this.setState({ showMenu: !this.state.showMenu } ) 
      }
      
      setActiveMenu1 = () => {
        this.setState({ activeMenu1: !this.state.activeMenu1 } ) 
      }

      setActiveMenu2 = () => {
        this.setState({ activeMenu2: !this.state.activeMenu2 } ) 
      }
      setOffMenu = () => {
        this.setState({ activeMenu2: false, activeMenu1: false } ) 
      }
    render() { 
        return ( 
            <NavContext.Provider value={{...this.state  , setShowMenu:this.setShowMenu ,
             setActiveMenu1:this.setActiveMenu1 , setActiveMenu2:this.setActiveMenu2 , 
             setOffMenu:this.setOffMenu}}>
                 {this.props.children}
            </NavContext.Provider>
         );
    }
}
 
export default NavContextProvider;