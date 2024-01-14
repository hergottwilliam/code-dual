import React, { useRef, useState } from "react";
import Editor from '@monaco-editor/react'
import Sidebar from './Sidebar'
import EditorHeader from "./EditorHeader";
import '../styles/DevelopmentEnvironment.css';

function DevelopmentEnvironment ({ collaborationSessionId, onEditorRefChange }) {

    const javaBoilerPlate =
    'public class Main {\n\tpublic static void main (String[] args) {\n\t\tSystem.out.println("Hello world");\n\t}\n}';
   
    const editorRef = useRef(null);

    const [selectedFileContent, setSelectedFileContent] = useState('');

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;

    }

    const handleFileSelect = (fileContent) => {
        setSelectedFileContent(fileContent);
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
                    // defaultValue={javaBoilerPlate}
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