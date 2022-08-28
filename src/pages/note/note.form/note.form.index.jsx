import * as React from "react";
import "../note.style.scss"
import {useState} from "react";


const NoteFormComponent = ({postNote, setSearchTag, searchTag}) => {

    const [initialNote, setInitialNote] = useState('');
    const [initialTag, setInitialTag] = useState('diaries');
    const options = ['diaries', 'work', 'todoList', 'other',]

    function addNote() {
        const dataToPost = {note: initialNote, tag: initialTag};
        postNote(dataToPost);
        setInitialNote('');
        setInitialTag('diaries');
    }

    function changeInitialNote(e) {
        setInitialNote(e.target.value)
    }
    function changeInitialTag(e) {
        setInitialTag(e.target.value)
    }
    function changeSearchTag(e) {
        setSearchTag(e.target.value)
    }
    return (
        <form>
            <div className={'formItem'}>
                <label>tag: </label>
                <select name="tags"
                        id="tags"
                        value={initialTag}
                        onChange={(e)=>changeInitialTag(e)}>
                    {options.map((option, index)=>
                        <option value={option} key={index}>{option}</option>
                    )}
                </select>
            </div>
            <div className={'formItem'}>
                <label>note: </label>
                <input name={'initialNote'}
                       value={initialNote}
                       onChange={(e)=>changeInitialNote(e)}
                />
            </div>
            <div className={'formItem button'}>
                <button onClick={addNote}>add</button>
            </div>
            <div className={'formItem'}>
                <label>search: </label>
                <select name="search"
                        id="search"
                        value={searchTag}
                        onChange={(e)=>changeSearchTag(e)}>
                    {/*TODO : dorostesh kon*/}
                    <option value="all">all</option>
                    {options.map((option, index)=>
                        <option value={option} key={index}>{option}</option>
                    )}
                </select>
            </div>
        </form>
    )
};
export default (NoteFormComponent)