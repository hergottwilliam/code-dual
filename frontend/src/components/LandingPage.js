import React, { useState } from "react";
import {createOrJoinRoom, createRoomAndGenerateToken} from "./CollaborationManager";

function LandingPage() {

    const [formData, setFormData] = useState({
        joinRoomToken: ''
    });

    const handleInputChange = (event) => {
        const { token, value } = event.target;

        setFormData({
            ...formData,
            [token]: value,
        });
    };


    return ( 
        <div>
            <form onSubmit={createOrJoinRoom(formData.joinRoomToken)}>
                <input 
                type="text"
                name="userInputToken"
                value={formData.joinRoomToken}
                />
                <button type="submit">Join room</button>
            </form>

            <button onClick={createRoomAndGenerateToken}>Create room</button>
        </div>
    )
}