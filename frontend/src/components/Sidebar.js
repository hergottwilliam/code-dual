import React, {useState} from "react";
import '../styles/Sidebar.css';

class CodeFile {
    constructor(name) {
        this.name = name;
        this.content = "";
    }
}

function Sidebar () {

    const [newFileInputValue, setNewFileInputValue] = useState('');
    const [fileList, setFileList] = useState([]);

    const handleNewFileButtonClick = () => {
        setNewFileInputValue(newFileInputValue); 

        if (newFileInputValue.trim() !== '') {
            const newFile = new CodeFile(newFileInputValue);
            setFileList([...fileList, newFile]) // add newFile to array of all users files
        }

        setNewFileInputValue(''); // reset newFileInput to blank
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
                />
                <button
                    className="newFileButton"
                    onClick={handleNewFileButtonClick}
                > Create</button>
                <div className="fileExplorerContainer">
                    {fileList.map((file, index) => (
                        <div key={index}>{file.name}</div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;