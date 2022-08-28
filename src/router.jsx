import * as React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NoteContainer from "./pages/note/note.container";

const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NoteContainer />} />
            </Routes>
        </BrowserRouter>
    )
};
export default (Router)
