import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import PaletteMetaForm from './PaletteMetaForm';
import classNames from "classnames";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Button from '@material-ui/core/Button'
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CreateIcon from '@material-ui/icons/Create';
import styles from './styles/PaletteFormNavStyles';

class PaletteFormNav extends Component {

    state = {
        newPaletteName: '',
        formShowing: false
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    showForm = () => {
        this.setState({
            formShowing: true
        });
    }

    hideForm = () => {
        this.setState({
            formShowing: false
        });
    }

    render() {
        const { open, classes, palettes, handleSubmit } = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    color="default"
                    position="fixed"
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                            color="inherit"
                            aria-label="Open drawer"
                            onClick={this.props.handleDrawerOpen}
                            className={classNames(classes.menuButton, open && classes.hide)}
                        >
                            <CreateIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" noWrap>
                            Create A Palette
                        </Typography>
                    </Toolbar>
                    <div className={classes.navBtns}>
                        <Link to="/" className={classes.link}>
                            <Button
                                variant="contained"
                                color="secondary"
                                className={classes.button}
                            >
                                Go Back
                            </Button>
                        </Link>                        
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={this.showForm}
                            className={classes.button}
                        >
                            Save Palette
                        </Button>
                    </div>
                    { this.state.formShowing && 
                        <PaletteMetaForm palettes={palettes} handleSubmit={handleSubmit} hideForm={this.hideForm}/> 
                    } 
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(PaletteFormNav);
