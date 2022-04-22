import '../styles/add-new-note.css'
export default ({removeNoteHandler , checkNoteHandler ,task  , checked}) => {
return <div className='note__container'>
    <input type="checkbox" className={checked ? 'note__check color-green' : 'note__check'} onClick={checkNoteHandler}/>
    <p className={checked ? "notes__task note__checked" :"notes__task" }>{task}</p>
    <button className='note__remove' onClick={removeNoteHandler}>X</button>
   
</div>
}