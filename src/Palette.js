import React, { Component } from 'react';
import Slider from 'rc-slider';
import "rc-slider/assets/index.css";
import ColorBox from './ColorBox';
import "./Palette.css";
class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500
        }
        this.changeLevel = this.changeLevel.bind(this);
    }

    changeLevel = (newLevel) => {
        this.setState({
            level: newLevel
        })
    }
    
    render() {
        const { colors } = this.props.palette;
        const { level } = this.state;
        return (
            <div className="Palette">
                <Slider defaultValue={ level } min={100} max={900} onAfterChange={this.changeLevel} step={100}/>
            {/* Navbar goes here */}
                <div className="Palette-colors">
                    {colors[level].map(color => (
                        <ColorBox key={color.id} background={color.hex} name={color.name}/>
                    ))}
                </div>
                {/* footer */}
            </div>
        )
    }
}

export default Palette;
