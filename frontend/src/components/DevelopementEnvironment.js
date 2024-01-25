import React, { useRef, useState } from "react";
import Editor from '@monaco-editor/react'
import Sidebar from './Sidebar'
import EditorHeader from "./EditorHeader";
import CodeFile from "./CodeFile";
import '../styles/DevelopmentEnvironment.css';

function DevelopmentEnvironment () {

    const editorRef = useRef(null);

    const javaBoilerPlate =
    'public class Main {\n\tpublic static void main (String[] args) {\n\t\tSystem.out.println("Hello world");\n\t}\n}';

    const DEFAULT_FILE = new CodeFile("Main.java", javaBoilerPlate, "java");

    const [selectedFile, setSelectedFile] = useState(DEFAULT_FILE);

    const [fileList, setFileList] = useState([DEFAULT_FILE]);

    

    const handleEditorDidMount = (editor, monaco) => {
        editorRef.current = editor;
    }

    const handleFileSelect = (file) => {
        setSelectedFile(file);
    }


    const handleFileContentChange = (value) => {
        updateSelectedFileContent(value);
        updateFileList(selectedFile);
    }

    const updateSelectedFileContent = (value) => {
        // Update the content of the selected file
        setSelectedFile((preSelectedFile) => ({
            ...preSelectedFile,
            content: value,
          }));


          console.log("Value of selectedFIle in DevEnvironment: ", selectedFile.content);
  
          // selected file value IS being updated everytime, but the content of these files is not being saved after clicking off...
    }

    const updateFileList = (newFile) => {
        setFileList((prevFileList) => {
          // Update the content of the selected file in the list
          const updatedFileList = prevFileList.map((file) =>
            file.name === selectedFile.name ? selectedFile : file
          );
      
          // If the selected file is not in the list, add it
          if (!prevFileList.find((file) => file.name === selectedFile.name)) {
            updatedFileList.push(selectedFile);
          }
      
          // Add the new file to the list
          updatedFileList.push(newFile);
      
          return updatedFileList;
        });
      };
    return (
        <div className="developmentEnvironmentMainContainer">
            <div className="sidebar">
                <Sidebar 
                    onSelectFile={handleFileSelect} 
                    selectedFile={selectedFile}
                    fileList={fileList}
                    onNewfileButtonClick={updateFileList}
                 />
            </div>
            <div className="editorContainer">
                <div className="editorHeader">
                    <EditorHeader />
                </div>
                <Editor
                    height="100vh"
                    width="100vw"
                    theme="vs-dark"
                    defaultLanguage={selectedFile.language}
                    value={selectedFile.content}
                    onChange={handleFileContentChange}
                    onMount={(editor, monaco) => handleEditorDidMount(editor, monaco)}
                />
            </div>

        </div>

    )
}

export default DevelopmentEnvironment;

  // Development Environment:
    // Build core functionalities:
      // Create a file of any language
      // Download or export a file
      // Execute a file
      // Display current environement id/token
      // Logout button and handle a user leaving the page as logout