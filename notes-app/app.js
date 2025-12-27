const ch = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

// console.log(process.argv);

yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title:{
            describe: 'Note title',
            demandOption: true,
            type:'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body);
        // console.log('Adding a new note with title:', argv.title);
        // console.log('Adding a new note with body:', argv.body);
    }
})

//create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
        
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler(){
        notes.listNotes()
        
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(args){
        notes.readNote(args.title)
        
    }
})

yargs.parse()

//add, remove, read, list
// console.log(yargs.argv);



// console.log(process.argv);

// const command = process.argv[2]

// if(command==='add'){
//     console.log("Adding note")
// }
// else if(command==='remove'){
//     console.log("Removing note")
// }
// console.log(ch.bold.yellow('Error!'));


// const notes = require('./notes.js')
// console.log(notes());

// const validator = require('validator')
// console.log(validator.isEmail('hexample.com'));

// const fs = require('fs')

// fs.writeFileSync('notes.txt','My name is Himaja.')  //text will be overwritten

// //challenge: append message to notes.txt using appendFileSync

// fs.appendFileSync('notes.txt',' Appended text')

// const utils = require('./utils.js')

// console.log(utils.name)
// console.log(utils.add('4','5'));
// console.log(utils.add(4,5));

