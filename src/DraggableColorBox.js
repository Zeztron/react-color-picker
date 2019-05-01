import React from 'react';
import { withStyles } from '@material-ui/styles';

const style = {
    root: {
        width: "20%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "grab",
        marginBottom: "-3.5px",
        "&:hover button": {
            opacity: "1"
        }
    }
};

function DraggableColorBox(props) {
    return (
        <div className={props.classes.root} style={{
            backgroundColor: props.color
        }}>
            {props.color}
        </div>
    )
}

export default withStyles(style)(DraggableColorBox);