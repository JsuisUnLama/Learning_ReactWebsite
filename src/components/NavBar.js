import React from 'react'
import CustomButton from './CustomButton'
import logo from '../assets/logo.svg'
import logoMobile from '../assets/logoMobile.svg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from "@material-ui/core/styles";

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
        ['@media (max-width:780px)']: { 
           flexDirection: "column"
          }
    },
    logo: {
        width: "15%", 
        ['@media (max-width:780px)']: { 
           display: "none"
           }
    },
    logoMobile:{
        width: "100%", 
        display: "none", 
        ['@media (max-width:780px)']: { 
            display: "inline-block"
            }
    },
    menuItem: {
        cursor: "pointer", 
        flexGrow: 1,
        "&:hover": {
            color:  "#4f25c8"
        },
        ['@media (max-width:780px)']: { 
            paddingBottom: "1rem"    }
    }
})

function NavBar() {
    const classes = styles();
    return (
        <Toolbar position="sticky" color="rgba(0, 0, 0, 0.87)" className={classes.bar}>
            <img src={logo} className={classes.logo}/>
            <img src={logoMobile} className={classes.logoMobile}/>
            <Typography variant="h6" className={classes.menuItem}>
                e1
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                e2
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                e3
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                e4
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                e5
            </Typography>

            <CustomButton txt="convenient button"/>
        </Toolbar>
    )
}

export default NavBar
