import React, { useRef, useState } from "react";
import Editor from '@monaco-editor/react'


function DevelopmentEnvironment ({ collaborationSessionId, onEditorRefChange }) {

    const javaBoilerPlate =
    'public class Main {\n\tpublic static void main (String[] args) {\n\t\tSystem.out.println("Hello world");\n\t}\n}';
   
    const editorRef = useRef(null);

    function handleEditorDidMount(editor, monaco) {
        editorRef.current = editor;

        onEditorRefChange(editorRef);

    }

    return (
        <div>
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