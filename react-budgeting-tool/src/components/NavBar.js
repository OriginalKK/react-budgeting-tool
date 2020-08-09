import React from 'react';
import { withStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import HomeIcon from '@material-ui/icons/Home';
import { Link, Router } from 'react-router-dom';
import history from './history';

const styles = {
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: 2,
    },
    title: {
        flexGrow: 1,
    },
    drawer: {
        width: 160,
        flexShrink: 0
    },
    drawerPaper: {
        width: 160
    }
}

class NavBar extends React.Component {

    state = {
        darkMode: false,
        drawerOpen: false
    }
            
    handleThemeChange = () => {
        this.props.themeCallback(this.state.darkMode);

        this.setState(prevState => ({
            darkMode:!prevState.darkMode
        }));
    }

    handleDrawerToggle = () => {
        this.setState(prevState => ({
            drawerOpen:!prevState.drawerOpen
        }));
    }
    
    render() {

        const { classes } = this.props;
        const { darkMode,drawerOpen } = this.state;

        return (
            <div className={classes.root}>
                <AppBar position='fixed'>
                    <Toolbar>
                        {/* <Hidden mdUp> */}
                            <IconButton
                                color='inherit'
                                aria-label='open-drawer'
                                edge='start' 
                                onClick={this.handleDrawerToggle}
                                className={classes.menuButton} 
                            >
                                <MenuIcon />
                            </IconButton>
                        {/* </Hidden> */}
                        <Typography variant='h6' className={classes.title}>
                            Better Budget
                        </Typography>
                        <Button color='inherit'>Login</Button>
                        <Switch color='secondary'
                            checked={darkMode}
                            onChange={this.handleThemeChange}
                            value='darkMode'
                            inputProps={{ 'aria-label': 'theme checkbox' }}
                        />
                    </Toolbar>
                </AppBar>
                <nav className={classes.drawer} aria-label='nav-links'>
                    {/* <Hidden smUp implementation='css'> */}
                        <Drawer
                            anchor='left'
                            open={drawerOpen}
                            onClose={this.handleDrawerToggle}
                            classes={{
                                paper: classes.drawerPaper
                            }}
                            ModalProps={{
                                keepMounted: true
                            }}
                        >
                            <div>
                                <div />
                                <Divider />
                                <Router history={history}>
                                    <Link to={'/'} className='nav-bar-link'>
                                        <ListItem button key='Home'>
                                            <ListItemIcon><HomeIcon color='primary'/></ListItemIcon>
                                            <ListItemText primary='Home' />
                                        </ListItem>
                                    </Link>
                                    <Link to={'/chart'} className='nav-bar-link'>
                                        <ListItem button key='Chart'>
                                            <ListItemIcon><ShowChartIcon color='primary'/></ListItemIcon>
                                            <ListItemText primary='Chart' />
                                        </ListItem>
                                    </Link>
                                </Router>
                            </div>
                        </Drawer>
                    {/* </Hidden> */}
                </nav>
            </div>
        )
    }

}

export default withStyles(styles)(NavBar);