import React, {useState} from "react";
import '../styles/Sidebar.css';
import CodeFile from "./CodeFile";


function Sidebar ({ onSelectFile, selectedFile, fileList, onNewfileButtonClick}) {

    const [newFileInputValue, setNewFileInputValue] = useState('');

    const fileExtensionMap = new Map();
    fileExtensionMap.set("java", "java");
    fileExtensionMap.set("py", "python");
    fileExtensionMap.set("html", "html");
    fileExtensionMap.set("js", "javascript");
    // TODO: add more language, any you add here must be added to download functionality as well
    

    // Adds new file to filelist and resets input to blank
    const handleNewFileButtonClick = () => {

        // TODO: handle invalid input; message to user
        // TODO: handle existing file

        setNewFileInputValue(newFileInputValue); // update state

        if (newFileInputValue.trim() !== '') { // if user input is not empty

            const cleanedInput = newFileInputValue.trim().replace(/\s/g, ""); // trim edges, and remove all spaces (" ")
            const lastDotIndex = cleanedInput.lastIndexOf("."); // find index of "."
        
                if (lastDotIndex !== -1 && lastDotIndex !== 0) { // if "." is not the first or last char
                    let fileExtension = cleanedInput.slice(lastDotIndex + 1).toLowerCase(); // seperate file extension 

                    if (fileExtensionMap.has(fileExtension)) { // if the file extension is a supported language (see fileExtensionMap)
                        const newFile = new CodeFile(cleanedInput,"", fileExtensionMap.get(fileExtension)); // build new file
                        onNewfileButtonClick(newFile); // add the file to fileList in parent
                        console.log("New file created:", newFile); // TODO: can delete this
                    }
                }    
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