import React, { useRef, useState } from "react";
import Editor from '@monaco-editor/react'
import Sidebar from './Sidebar'
import EditorHeader from "./EditorHeader";
import '../styles/DevelopmentEnvironment.css';

function DevelopmentEnvironment ({ collaborationSessionId, onEditorRefChange }) {

    const editorRef = useRef(null);
    const [selectedFileContent, setSelectedFileContent] = useState('');
    const [selectedFileName, setSelectedFileName] = useState('');

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;

    }

    function handleFileSelect(fileContent, fileName) {
        setSelectedFileContent(fileContent);
        setSelectedFileName(fileName);
    }


    function handleFileContentChange(value) {
        setSelectedFileContent(value);

        // Save the changes to local storage
        localStorage.setItem(selectedFileName, value);
    }

    return (
        <div className="developmentEnvironmentMainContainer">
            <div className="sidebar">
                <Sidebar onSelectFile={handleFileSelect}/>
            </div>
            <div className="editorContainer">
                <div className="editorHeader">
                    <EditorHeader />
                </div>
                <Editor
                    height="100vh"
                    width="100vw"
                    theme="vs-dark"
                    defaultLanguage="java"
                    value={selectedFileContent}
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