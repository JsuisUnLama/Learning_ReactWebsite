import React from 'react'
import {Button} from '@material-ui/core'

//allows the use of css elements here
import {withStyles} from '@material-ui/core/styles'

//stylizing the button
const StyledButton = withStyles({

//classes
root: {
    //css
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "44px",
    padding: "0 25px",
    boxSizing: "border-box",
    borderRadius: 0,
    background: "#123a56",
    color: "#fff",
    transform: "none",
    boxShadow: "6px 6px 0 0 #d4d4d4",
    transition: "background .3s,border-color .3s,color .3s",
    "&: hover": {
        backgroundColor: "#123a56"
    },
 },
 label: {
     textTransform: 'capitalize',
 },
})(Button);

function CustomButton(props) { 
    return (
        /* old version
        //this creates the button; contained emboxes it graphically
        <Button variant="contained">Custom Button</Button>
        */

        <StyledButton variant="contained">{props.txt}</StyledButton>
    )
}

export default CustomButton
