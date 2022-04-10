import React, { useState,useEffect } from "react";
import {Howl} from 'howler'
import AddNewNote from "./AddNewNote";
import checkSound from '../sounds/checkSound.mp3'
import '../styles/layout/form.css';
const Form = () => {
    const [notesIsUpdate , setNotesIsUpdate] = useState(false)
    let [formData , setFormData] = useState([])
    const randomId = () => {
        return Math.random()
    }
    const submitFormHandler = (event) => {
        event.preventDefault()
        if(event.target[0].value ==="") return 
        let note =  {
            id:randomId(),    
            task:event.target[0].value , 
            date:event.target[2].value , 
            time: event.target[3].value,
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
    <form onSubmit={submitFormHandler} className="form__container">
        <input className="form__new-task" type="text" placeholder="Add a task" id="task"/>
        <input className="form__submit" type="submit" value="+"/>
        <input className="form__date" type="date" id="date" />
        <input className="form__time" type="time" id="date" />
    </form>
    {formData.map((note,indx)=> { 
        return <AddNewNote key={indx}
                task={note.task} 
                date={note.date} 
                time={note.time}
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
    </React.Fragment> 
}
export default Form;