import React from 'react';
import { Drawer } from '@material-ui/core';
import { withStyles } from '@material-ui/styles';

const styles = {
    drawer: {
        width: 160,
        flexShrink: 0
    },
    drawerPaper: {
        width: 160,
        top: '64px',
        backgroundImage: 'linear-gradient(to bottom right, #c2c2c2, #ffffff)'
    },
    drawerCollapseContainer: {
        position:'absolute',
        height:'100%',
        left:160,
        width:'20px',
        backgroundColor:'red'
    },
    budgetContainer: {
        width: '200px'
    }
}

class ChartPage extends React.Component {

    render() {

        const { classes } = this.props;

        return(
            <div style={{height:'100%',width:'100%'}}>
                <div className={classes.budgetContainer}>
                    <Drawer
                        className={classes.drawer}
                        variant='permanent'
                        anchor='left'
                        classes={{
                            paper: classes.drawerPaper
                        }}
                    >
                        <div></div>
                    </Drawer>
                    <div className={classes.drawerCollapseContainer}>

                    </div>
                </div>
                <div>
                    I AM TESTING THIS IF IT WORKS
                </div>
            </div>
        )
        
    }

}

export default withStyles(styles)(ChartPage);