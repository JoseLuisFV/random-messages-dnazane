const messages = [
    "Oscar",
    "Carolina",
    "Paulina", 
    "Ana",
    "Nicolay",
    "Yessica",
    "Diego",
    "Laura"
];

const randomMsg = () => {
    const newMessage = 
        messages[Math.floor(Math.random() 
        * messages.length)];
    
    console.log(newMessage);
}

module.exports = { randomMsg };