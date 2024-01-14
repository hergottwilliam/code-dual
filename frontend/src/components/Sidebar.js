import React, {useState, useEffect} from "react";
import '../styles/Sidebar.css';

class CodeFile {
    constructor(name, content = "") {
        this.name = name;
        this.content = content;
    }
}

function Sidebar ({ onSelectFile }) {

    const [newFileInputValue, setNewFileInputValue] = useState('');

    const javaBoilerPlate =
    'public class Main {\n\tpublic static void main (String[] args) {\n\t\tSystem.out.println("Hello world");\n\t}\n}';

    const DEFAULT_FILE = new CodeFile("Main.java", javaBoilerPlate);
    const [fileList, setFileList] = useState([DEFAULT_FILE]);
    const [selectedFile, setSelectedFile] = useState(DEFAULT_FILE);

    useEffect(() => {
        onSelectFile(selectedFile.content);
        // Store the selected file content in local storage
        localStorage.setItem(selectedFile.name, selectedFile.content);
    }, [selectedFile, onSelectFile]);


    const handleNewFileButtonClick = () => {
        setNewFileInputValue(newFileInputValue); 

        if (newFileInputValue.trim() !== '') {
            const newFile = new CodeFile(newFileInputValue);
            setFileList([...fileList, newFile]) // add newFile to array of all users files
        }

        setNewFileInputValue(''); // reset newFileInput to blank
    }

    const handleFileClick = (file) => {
        // Retrieve the content from local storage if it exists
        const storedContent = localStorage.getItem(file.name);
    

    
        setSelectedFile(file);
        onSelectFile(storedContent || file.content, file.name);
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