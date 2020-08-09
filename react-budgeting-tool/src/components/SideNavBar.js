import React from 'react';
import { withStyles } from '@material-ui/styles';
import Hidden from '@material-ui/core/Hidden';

const styles = {
    fixedDrawerDiv: {
        position: 'fixed', 
        height: '100%',
        boxShadow: '4px 5px 8px #888888',
    }
}

class SideNavBar extends React.Component {

    render() {

        const { classes,drawer } = this.props;

        return (
            <div className={classes.fixedDrawerDiv}>
                <Hidden smDown implementation='css'>
                    {drawer}
                </Hidden>
            </div>
        )
    }

}

export default withStyles(styles)(SideNavBar)