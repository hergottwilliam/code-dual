import React from "react";
import Editor from '@monaco-editor/react'

const javaBoilerPlate =
 'public class Main {\n\tpublic static void main (String[] args) {\n\t\tSystem.out.println("Hello world");\n\t}\n}';

function Home() {
    return (
        <Editor
            height="100vh"
            theme="vs-dark"
            defaultLanguage="java"
            defaultValue= {javaBoilerPlate}
        ></Editor>
    )
}

export default Home;