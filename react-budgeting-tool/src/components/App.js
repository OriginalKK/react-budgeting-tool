import React from 'react';
import NavBar from './NavBar';
import { ThemeProvider } from '@material-ui/core';
import lightTheme from '../themes/lightTheme';
import darkTheme from '../themes/darkTheme';
import ChartPage from '../pages/ChartPage';
import HomePage from '../pages/HomePage';
import { Switch, Router, Route } from 'react-router-dom';
import history from './history';

class App extends React.Component {

    state = {
        appTheme: darkTheme
    }

    darkModeToggle = (isDarkMode) => {
        if (isDarkMode) {
            this.setState({ appTheme:darkTheme });
        } else {
            this.setState({ appTheme:lightTheme });
        }
    }

    render() {

        const { appTheme } = this.state;

        return (
            <div className='mainDiv'>
                <ThemeProvider theme={appTheme}>
                    <Router history={history}>
                        <NavBar themeCallback={this.darkModeToggle} />
                        <Switch>
                            <Route exact path='/'><div className='mainContentDiv'><HomePage {...this.props} /></div></Route>
                            <Route exact path='/chart'><div className='mainContentDiv'><ChartPage {...this.props} /></div></Route>
                        </Switch>
                    </Router>
                </ThemeProvider>
            </div>
        )
    }

}

export default App;