// Code your solutions in this file

function countDown(number){
    for (var number = 0; number < 11; number++){
        console.log(number);
    }
}




function writeCards(Name, event){
    const message = [];
    for (let i=0; i<Name.length; i++){
        message.push(`Thank you, ${Name[[i]]}, for the wonderful ${event} gift!`)
        }
    return message;

}



