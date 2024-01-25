import React, {useState} from "react";
import '../styles/Sidebar.css';
import CodeFile from "./CodeFile";


function Sidebar ({ onSelectFile, selectedFile, fileList, onNewfileButtonClick}) {

    const [newFileInputValue, setNewFileInputValue] = useState('');
    

    // Adds new file to filelist and resets input to blank
    const handleNewFileButtonClick = () => {
        setNewFileInputValue(newFileInputValue); 

        if (newFileInputValue.trim() !== '') {
            const newFile = new CodeFile(newFileInputValue,"", "java"); // TOCHANGE: make everyfile a java file until we handle creating specific files
            onNewfileButtonClick(newFile);
            
        }

        setNewFileInputValue(''); // reset newFileInput to blank
    }

    const handleFileClick = (file) => {
        onSelectFile(file);
    };


    return (
        <div className="mainContainer">
            <h2>Code Dual</h2>
            <button>Invite</button>
            <div className="newFileContainer">
                <input
                    className="newFileInputBox"
                    type="text"
                    placeholder="Create new file"
                    value={newFileInputValue}
                    onChange={(e) => setNewFileInputValue(e.target.value)}
                />
                <button
                    className="newFileButton"
                    onClick={handleNewFileButtonClick}
                >
                 Create</button>

            </div>
            <div className="fileExplorerContainer">
                    {fileList.map((file, index) => (
                        <div key={index} onClick={() => handleFileClick(file)} className={selectedFile === file ? 'selectedFile' : ''}>
                            {file.name}
                        </div>
                    ))}
                </div>
        </div>
    );
}

export default Sidebar;