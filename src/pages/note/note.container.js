import {postLoading} from "../../store/actions/actions.post";
import NoteComponent from "./note.index.jsx";
import {connect} from "react-redux";
import {getLoading} from "../../store/actions/actions.get";


function mapStateToProps(state) {
    return{
        noteList: state.get.notes,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        postNote: (note) => {
            dispatch(postLoading(note))
        },
        getNotes: () => {
            dispatch(getLoading())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NoteComponent);