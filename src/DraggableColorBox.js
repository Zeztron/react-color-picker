import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';

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
        },
        "&:hover svg": {
            color: "#fff",
            transform: "scale(1.4)"
        }
    },
    boxContent: {
        position: "absolute",
        padding: "10px",
        width: "100%",
        left: "0px",
        bottom: "0px",
        color: "rgba(0, 0, 0, 0.5)",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: "flex",
    },
    deleteIcon: {
        transition: "all 0.3s ease-in-out"
    }
};

const DraggableColorBox = SortableElement((props) => {
    const { classes, handleClick, name, color } = props;

    return (
        <div className={classes.root} style={{
            backgroundColor: color
        }}>
            <div className={classes.boxContent}>
                <span>{name}</span>
                <DeleteIcon className={classes.deleteIcon} onClick={handleClick}/>
            </div>
        </div>
    )
})

export default withStyles(style)(DraggableColorBox);