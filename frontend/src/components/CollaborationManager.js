import React, { useState, useRef } from "react";
import axios from "axios";
import Editor from '@monaco-editor/react'
import * as Y from 'yjs'
import { WebrtcProvider } from "y-webrtc"
import { MonacoBinding } from "y-monaco"
import DevelopmentEnvironment from "./DevelopementEnvironment";

function CollaborationManager() {
    const [collaborationSessionId, setCollaborationSessionId] = useState('');
    const [editorRef, setEditorRef] = useState(null);


    const createRoomAndGenerateToken = async () => {
        // Called if user is creating new room only

        try {
            // use a placeholder token for development
            const roomToken = "place_holder_roomToken"; // delete this
            // const response = await axios.post('http://localhost:8080/generate-room-token'); // api call to backend to generate token
            // const roomToken = response.data.roomToken;

            console.log("New room successfully created, token: ", roomToken);

            setCollaborationSessionId(roomToken);
            collaborate(roomToken);
        } catch (error) {
            // if failed, indicate error to user
            console.error('Error generating token and creating room', error);
        }        
    }

    const collaborate = (token) => {
        
        // Once a user has a token, they will be put in that room

        
        const doc = new Y.Doc();

        const provider = new WebrtcProvider(token, doc);
        const type = doc.getText("monaco");

        const binding = new MonacoBinding(type, editorRef.current.getModel(), new Set([editorRef.current]), provider.awareness);
    }


    const terminateRoom = (token) => {
        // end send user back to landing page
        // tell node that this token is no longer being used

    }

    return (
        // Unique development environment with token
        <DevelopmentEnvironment />
    )
}