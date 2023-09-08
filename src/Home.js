import React, { useState } from "react";
import NewNoteForm from "./NewNoteForm";

const Home = () => {

    return(
        <div>
            <h2>Timestamp Organizer</h2>
            <div>My Notes</div>
            <NewNoteForm/>
        </div>
    )
}

export default Home;