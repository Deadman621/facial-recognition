import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onPictureSubmit }) => {
    return (
        <div>
            <p className="f3">
                {'Insert an image link below'}
            </p>
            <div className="center">
                <div className="form blur-element brcr pattern center pa4 br shadow-1">
                    <input type="text" className="fa4 brcr shadow-0 space1 black bg-transparent pa2 br w-70 center" onChange={onInputChange}/>
                    <button className="w-30 br grow f4 link ph3 pv1 dib black bg-transparent shadow-0" onClick={onPictureSubmit}>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;