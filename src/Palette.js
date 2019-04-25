import React, { Component } from 'react';
import ColorBox from './ColorBox';
import { generatePalette } from './colorHelpers';

class Palette extends Component {
    
    render() {
        return (
            <div className="Palette">
            {/* Navbar goes here */}
                <div className="Palette-colors">
                    {this.props.colors.map(color => (
                        <ColorBox background={color.color} name={color.name}/>
                    ))}
                </div>
                {/* footer */}
            </div>
        )
    }
}

export default Palette;
