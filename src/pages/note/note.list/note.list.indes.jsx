import * as React from "react";
import "../note.style.scss"
import {useEffect, useState} from "react";


const NoteListComponent = ({getNotes, noteList, checkTag, searchTag}) => {

    const [notes, setNotes] = useState([]);

    useEffect(()=>{
        getNotes()
    },[]);
    useEffect(()=>{
        setNotes(noteList)
    },[noteList]);

    let noteArray = []
    for (let i = 0; i < notes.length; i++) {
        noteArray[i] = notes[i].note
    }
    let noteItems;
    if (searchTag == 'all'){
        noteItems = noteArray.map((note, index) =>
            <div key={index} className={'noteBox'}>
                <div className={`tag ${note.tag}`}>{note.tag}</div>
                <div>{note.note}</div>
            </div>
        );
    }else {
        noteItems = noteArray.filter(checkTag).map((note, index) =>
            <div key={index} className={'noteBox'}>
                <div className={`tag ${note.tag}`}>{note.tag}</div>
                <div>{note.note}</div>
            </div>
        );
    }
    return (
        <div>{noteItems}</div>
    )
};
export default (NoteListComponent)