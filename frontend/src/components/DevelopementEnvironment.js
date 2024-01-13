import React, { useRef, useState } from "react";
import Editor from '@monaco-editor/react'
import Sidebar from './Sidebar'
import EditorHeader from "./EditorHeader";

function DevelopmentEnvironment ({ collaborationSessionId, onEditorRefChange }) {

    const javaBoilerPlate =
    'public class Main {\n\tpublic static void main (String[] args) {\n\t\tSystem.out.println("Hello world");\n\t}\n}';
   
    const editorRef = useRef(null);

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;

    }

    return (
        <div>
            <Sidebar />
            <EditorHeader />
            <Editor
                height="100vh"
                width="100vw"
                theme="vs-dark"
                defaultLanguage="java"
                // defaultValue={javaBoilerPlate}
                onMount={(editor, monaco) => handleEditorDidMount(editor, monaco)}
            />
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