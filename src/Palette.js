import React, { Component } from 'react';
import Navbar from './Navbar';
import ColorBox from './ColorBox';
import "./Palette.css";
class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500,
            format: 'hex'
        }
        this.changeLevel = this.changeLevel.bind(this);
        this.changeFormat = this.changeFormat.bind(this);
    }

    changeLevel = (newLevel) => {
        this.setState({
            level: newLevel
        })
    }

    changeFormat = (val) => {
        this.setState({ format: val });
    }
    
    render() {
        const { colors } = this.props.palette;
        const { level, format } = this.state;

        return (
            <div className="Palette">
                <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat}/>
            {/* Navbar goes here */}
                <div className="Palette-colors">
                    {colors[level].map(color => (
                        <ColorBox key={color.id} background={color[format]} name={color.name}/>
                    ))}
                </div>
                {/* footer */}
            </div>
        )
    }
}

export default Palette;
