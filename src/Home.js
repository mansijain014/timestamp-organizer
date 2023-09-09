import React, { useState } from "react";
import NewNoteForm from "./NewNoteForm";
// import './home.css'
import { Grid } from "semantic-ui-react";
import HomeSideBar from "./HomeSideBar";
import NotesList from "./NotesList";
import './NotesList.css'
const Home = () => {

    const [notes, setNotes] = useState(
        [{
            noteName: 'React JS Course',
            videoUrl: 'https://react.com',
            timestampName: 'States and Props',
            hour: '00',
            minute: '01',
            seconds: '50',
        },
        {
            noteName: 'React JS Course1',
            videoUrl: 'https://react1.com',
            timestampName: 'States and Props1',
            hour: '00',
            minute: '11',
            seconds: '50',
        },
        {
            noteName: 'React JS Course',
            videoUrl: 'https://react.com',
            timestampName: 'States and Props',
            hour: '00',
            minute: '01',
            seconds: '50',
        },
        {
            noteName: 'React JS Course',
            videoUrl: 'https://react.com',
            timestampName: 'States and Props',
            hour: '00',
            minute: '01',
            seconds: '50',
        },
        {
            noteName: 'React JS Course',
            videoUrl: 'https://react.com',
            timestampName: 'States and Props',
            hour: '00',
            minute: '01',
            seconds: '50',
        },
        {
            noteName: 'React JS Course',
            videoUrl: 'https://react.com',
            timestampName: 'States and Props',
            hour: '00',
            minute: '01',
            seconds: '50',
        }]
    )
    
    return(
        <div>
            <HomeSideBar />
            <div className="notes-list">
                <NotesList notes={notes}/>
            </div>
        {/* //     <h1>Timestamp Organizer</h1> */}
        {/* // <div class='mynotes'>My Notes</div>
        //     <NewNoteForm/> */}
        </div>
    )
}

export default Home;