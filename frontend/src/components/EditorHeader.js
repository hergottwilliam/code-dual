import React from "react";
import '../styles/EditorHeader.css'

function EditorHeader ({ selectedFile }) {

    const handleFileDownload = () => {
        const mimeType = getMimeType(selectedFile.language);

        const blob = new Blob([selectedFile.content], {type: mimeType});

        const blobUrl = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = selectedFile.name;

        document.body.appendChild(a);

        a.click();

        document.body.removeChild(a);

        URL.revokeObjectURL(blobUrl);
    }

    const getMimeType = (fileLanguage) => { // TODO: can I change this to hashmap?
        if (fileLanguage === 'python'){
            return 'text/x-python';
        } else if (fileLanguage === 'java') {
            return 'text/x-java-source';
        } else if (fileLanguage === 'html') {
            return 'text/html';
        } else if (fileLanguage === 'javascript') {
            return 'application/javascript';
        }
    }

    return (
        <div className="headerMainContainer">
            <div className="downloadButtonContainer">
                <button onClick={handleFileDownload}>Download</button>
            </div>
            <div className="runButtonContainer">
                <button>Run</button>
            </div>
            
        </div>
    )
}

export default EditorHeader;