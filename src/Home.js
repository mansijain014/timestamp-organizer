import React, { useEffect, useState } from "react";
import HomeSideBar from "./HomeSideBar";
import NotesList from "./NotesList";
import './NotesList.css'

const getLocalStorage = () => {
    const savedNotes = JSON.parse(localStorage.getItem('react-timestamp-app-data'));
        // console.log('SAVED NOTES',savedNotes)
        if(savedNotes) {
            return JSON.parse(localStorage.getItem('react-timestamp-app-data'));
        }else {
            return []
        }
    }

const Home = () => {

    const [notes, setNotes] = useState(getLocalStorage())

    useEffect(() => {
        // console.log('NOTES: ',notes)
        localStorage.setItem(
            'react-timestamp-app-data', 
            JSON.stringify(notes));
    }, [notes])
    
    const addNote = (formData) => {
        // console.log('FORM DATAAAA: ',formData)
        setNotes((prevState) => {return [
            ...prevState,
            formData
        ]})
    }

    return(
        <div>
            <HomeSideBar handleAddNote= {addNote}/>
            <div className="notes-list">
                <NotesList notes={notes}/>
            </div>
        </div>
    )
}

export default Home;