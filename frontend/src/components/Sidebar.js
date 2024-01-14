import React, {useState} from "react";
import '../styles/Sidebar.css';

class CodeFile {
    constructor(name, content = "") {
        this.name = name;
        this.content = content;
    }
}

function Sidebar ({ onSelectFile }) {

    const [newFileInputValue, setNewFileInputValue] = useState('');
    const [fileList, setFileList] = useState([]);
    const [selectedFile, setSelectedFile] = useState(null);

    const handleNewFileButtonClick = () => {
        setNewFileInputValue(newFileInputValue); 

        if (newFileInputValue.trim() !== '') {
            const newFile = new CodeFile(newFileInputValue);
            setFileList([...fileList, newFile]) // add newFile to array of all users files
        }

        setNewFileInputValue(''); // reset newFileInput to blank
    }

    const handleFileClick = (file) => {
        setSelectedFile(file);
        onSelectFile(file.content);
    }


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