import '../styles/addNewNote.css'
const AddNewNote = ({removeNoteHandler , checkNoteHandler ,task ,date,time , checked}) => {
return <div className='note__container'>
    <p className={checked ? "notes__task note__checked" :"notes__task" }>{task}</p>
    <p>{date}</p>
    <p>{time}</p>
    <button className='note__remove' onClick={removeNoteHandler}>&#128465;</button>
    <button className={checked ? 'note__check color-green' : 'note__check'} onClick={checkNoteHandler}>&#10003;</button>
</div>
}
export default AddNewNote;