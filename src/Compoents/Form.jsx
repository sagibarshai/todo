import React, { useState } from "react";
import {Howl} from 'howler'
import AddNewNote from "./AddNewNote";
import checkSound from '../sounds/checkSound.mp3'
import classes from '../styles/layout/form.module.css';
export default () => {
    const [notesIsUpdate , setNotesIsUpdate] = useState(false)
    let [formData , setFormData] = useState([])
   
    const submitFormHandler = (event) => {
        event.preventDefault()
        if(event.target[0].value ==="") return 
        let note =  {   
            task:event.target[0].value , 
            checked:false
        }
        setFormData([...formData , note])
        event.target[0].value = "" 
            }  
            const callCheckSound = (src) => {
                const sound = new Howl({
                    src ,
                    html5:true
                })
                sound.play()
            }
          
    return <React.Fragment>

    {formData.map((note,indx)=> { 
        return <AddNewNote key={indx}
                task={note.task} 
                checked = {note.checked}
                removeNoteHandler={()=> {
                    formData = formData.filter((note , index)=> {return index!==indx})
                setFormData(()=>formData)
            }}
            checkNoteHandler = {()=>{
                note.checked =!note.checked
                setNotesIsUpdate(!notesIsUpdate)
                if(note.checked === true) callCheckSound(checkSound)
            }}
            />})}
                <form className={classes["form"]} onSubmit={submitFormHandler}>
        <input className={classes["form__new-task"]} type="text" placeholder="Write a new todo..." id="task"/>
        <button className={classes["form__submit"]} type="submit"> <span className={classes["form__submit-text"]}> Add  </span> </button>
            </form>
    </React.Fragment> 
}
