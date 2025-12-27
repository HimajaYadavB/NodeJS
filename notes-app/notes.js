const fs = require('fs')
const ch = require('chalk')

const getNotes = ()=>{
    return 'Your notes...'
}

const addNote = (title,body)=>{
    const notes = loadNotes()
    const duplicateNotes = notes.filter((note)=> note.title === title)
    const duplicateNote = notes.find((note)=> note.title === title)

    debugger

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)

        console.log(ch.green.inverse('New note added!'))
    }
    else{
        console.log(ch.red.inverse('Note title taken!'))
    }

    
}

const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
    
}

const removeNote = (title)=>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=> note.title !== title)
    // console.log(nonMatchingNotes)
    if(notes.length-notesToKeep.length > 0){
        saveNotes(notesToKeep)
        console.log(ch.green.inverse('Note Removed!'))
    }
    else{
        console.log(ch.red.inverse('No note found!'))
    }
    
    
    // console.log("Note to be removed: ", title)
}

const listNotes = ()=>{
    const allNotes = loadNotes()
    console.log(ch.inverse('Your Notes....'))
    allNotes.forEach((note) => {
        console.log(note.title)
    });
}

const readNote = (readN)=>{
    const notes = loadNotes()
    const note = notes.find((n)=>n.title === readN)
    if(note){
        console.log(ch.inverse.yellow.inverse("title: ",note.title))
        console.log("body: ", note.body)
    }
    else{
        console.log(ch.red.inverse("No note found!"))
    }
    
}

module.exports = {
    getNotes, addNote, removeNote, listNotes, readNote
}