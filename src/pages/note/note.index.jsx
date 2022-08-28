import * as React from "react";
import "./note.style.scss"
import {useState} from "react";
import NoteFormComponent from "./note.form/note.form.index.jsx";
import NoteListComponent from "./note.list/note.list.indes.jsx";


const NoteComponent = ({postNote, getNotes, noteList}) => {

    const [searchTag, setSearchTag] = useState('all');

    function checkTag(note) {
        return note.tag == searchTag
    }

    return (
        <div className={'loginContainer'}>
            <NoteFormComponent postNote={postNote}
                               setSearchTag={setSearchTag}
                               searchTag={searchTag}/>
            <NoteListComponent noteList={noteList}
                               getNotes={getNotes}
                               checkTag={checkTag}
                               searchTag={searchTag}/>
        </div>
    )
};
export default (NoteComponent)