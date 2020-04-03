import React, {Component} from 'react';
import { ThemeProvider } from 'styled-components'

import Logon from '../../components/Logon';

import * as themes from '../../styles/themes';

import ThemeContext from '../../styles/themes/context';

export default class Login extends Component{

    state = {
        theme: themes.light,
    }

    toggleTheme = () =>{
       this.setState({theme: this.state.theme === themes.light ? themes.dark : themes.light});
    };

    render(){
        return (
            <div>
                <ThemeContext.Provider value={this.state}>
                    <ThemeContext.Consumer>
                        {theme => (
                            <ThemeProvider theme={theme}>
                                <Logon toggleTheme={this.toggleTheme}/>
                            </ThemeProvider>
                        )}  
                    </ThemeContext.Consumer>
                </ThemeContext.Provider>
            </div>
        )
    }
}