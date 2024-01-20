import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import { themeContext } from '../contexts/themeContext';

class setting extends Component {
    state = {  }
    static theme = themeContext;
    render() { 

        const{handleChangeTheme} = this.theme;

        return ( 
            <Button onClick={handleChangeTheme}>
                   Change Theme
            </Button>
         );
    }
}
 
export default setting;