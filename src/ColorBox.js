import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import './ColorBox.css';
import "./Palette.css";


export default class ColorBox extends Component {
    render() {
        const { name, background } = this.props;
        return (
            <CopyToClipboard text={ background }>
                <div style={{ background }}className="ColorBox">
                    <div className="copy-container">
                        <div className="box-content">
                            <span>{ name }</span>
                        </div>
                        <button className="copy-button">
                            Copy
                        </button>
                        <span className="see-more">More</span>
                    </div>
                </div>
            </CopyToClipboard>
        )
    }
}
