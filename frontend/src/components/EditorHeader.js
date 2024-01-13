import React from "react";
import '../styles/EditorHeader.css'

function EditorHeader () {
    return (
        <div className="headerMainContainer">
            <div className="downloadButtonContainer">
                <button>Download</button>
            </div>
            <div className="runButtonContainer">
                <button>Run</button>
            </div>
            
        </div>
    )
}

export default EditorHeader;