import React, { Component } from 'react';
import Button from '@material-ui/core/Button'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';

class ColorPickerForm extends Component {

    state = {
        currentColor: 'teal',
        newColorName: ''
    }

    componentDidMount() {
        ValidatorForm.addValidationRule("isColorNameUnique", value =>
            this.props.colors.every(
                ({ name }) => name.toLowerCase() !== value.toLowerCase()
            )
        );
        ValidatorForm.addValidationRule("isColorUnique", value =>
            this.props.colors.every(
                ({ color }) => color !== this.state.currentColor
            )
        );
    }

    updateCurrentColor = (newColor) => {
        this.setState({
            currentColor: newColor.hex
        });
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = () => {
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName
        }

        this.props.addNewColor(newColor);
        this.setState({
            newColorName: ''
        })
    }


    render() {
        const { paletteIsFull } = this.props;
        const { currentColor, newColorName } = this.state;

        return (
            <div>
                <ChromePicker
                    color={currentColor}
                    onChangeComplete={newColor => this.updateCurrentColor(newColor)}
                />
                <ValidatorForm onSubmit={this.handleSubmit}>
                    <TextValidator
                        value={newColorName}
                        name="newColorName"
                        onChange={this.handleChange}
                        validators={["required", "isColorNameUnique", "isColorUnique"]}
                        errorMessages={["This field is required", "Color name must be unique", "Color already used!"]}
                    />
                    <Button
                        variant="contained"
                        color="secondary"
                        type="submit"
                        disabled={paletteIsFull}
                        style={{ 
                            backgroundColor: paletteIsFull ? 'grey' : currentColor 
                        }}
                    >
                        {paletteIsFull ? 'Palette Full' : 'Add Color'}
                    </Button>
                </ValidatorForm>
            </div>
        )
    }
}

export default ColorPickerForm;