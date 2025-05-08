const readline = require('readline');

const ls = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const todo = [];

const showMenu = () => {
    console.log('\n==== Todo Menu ====');
    console.log('1. Add Task');
    console.log('2. Show Tasks');
    console.log('3. Exit');
    
    ls.question('Choose an option: ', handleInputs);
};

const handleInputs = (input) => {
    const option = parseInt(input);

    if (option === 1) {
        ls.question('Enter Task: ', (task) => {
            todo.push(task);
            console.log(`✅ Task added: "${task}"`);
            showMenu();
        });
    } else if (option === 2) {
        if (todo.length === 0) {
            console.log('📝 Your Todo List is empty.');
        } else {
            console.log('📝 Your Todo List:');
            todo.forEach((task, index) => {
                console.log(`  ${index + 1}. ${task}`);
            });
        }
        showMenu();
    } else if (option === 3) {
        console.log('👋 Goodbye!');
        ls.close();
    } else {
        console.log('❌ Invalid Option. Please Try Again.');
        showMenu();
    }
};

showMenu();
