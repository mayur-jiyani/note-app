// const note = require('./notes');

// const validate = require('validator');
// console.log(validate.isEmail('mayur@gmail.com'));
// console.log(validate.isURL('mayur.com'));


const chalk = require('chalk');
// const { string } = require('yargs');
const yargs = require('yargs');
const notes = require('./notes');
// console.log(chalk.red.bold.inverse('Success'));

// console.log(process.argv);

// console.log(yargs.argv);


yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body section',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'title of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNotes(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List a notes',
    handler() {
        notes.listNotes()
        // console.log('Reading a note');
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.readNotes(argv.title)
        // console.log('Reading a note');
    }
})

yargs.parse();
// console.log(yargs.argv);