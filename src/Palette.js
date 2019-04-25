import React, { Component } from 'react';
import Navbar from './Navbar';
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
                <Navbar level={level} changeLevel={this.changeLevel}/>
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
