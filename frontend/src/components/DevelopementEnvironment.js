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
  
          //  TODO: selected file value IS being updated everytime, but is missing the newest char
    }

    const updateFileList = (newFile) => {
        // Check if the file already exists in the list
        const fileExists = fileList.some((file) => file.name === newFile.name);
      
        if (fileExists) {
          // Update the existing file in the list
          setFileList((prevFileList) =>
            prevFileList.map((file) =>
              file.name === newFile.name ? { ...file, content: newFile.content } : file
            )
          );
        } else {
          // Add the new file to the list
          setFileList((prevFileList) => [...prevFileList, newFile]);
        }
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