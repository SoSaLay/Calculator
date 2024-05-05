// Javascript will try to run before HTML content has fully loaded. 
// Messing up functionality of  code. Even when you put script tag 
// at the end of the body tag. For safe measures just nest your code within  DOMContentLoaded function

document.addEventListener('DOMContentLoaded', function(){ 
    
let anyError= false;   
const display= document.querySelector('.display');



// “All” is very important. If negated, DOM would've just chosen the first element 
// with num class. We want to manipulate all element with this class at once!

document.querySelectorAll('.num').forEach(button=>{
    button.addEventListener('click',function(){
        if(anyError){
            return;
            // This is commonly known as "early exit" or "guard clause".It prevents 
            // further execution of the code if a certain condition is true.
        }

            if(display.innerText==='0'){
                display.innerText=this.innerText;
            }else{
                display.innerText+=this.innerText;
        }

    })
})

//^^Look At LearnMore.txt to Learn




document.querySelectorAll('.operate').forEach(button=>{
button.addEventListener('click',function(){
    if(anyError){
        return;
    }
    let lastChar= display.innerText[display.innerText.length-1];
    // get the last character from current text displayed on the calculator

    ['+','-','*','/','%'].includes(lastChar)? display.innerText= display.innerText.slice(0,-1)+this.innerText : display.innerText += ''+ this.innerText + '';
    //includes()  checks if an element exists within an array or string
    // slice lets you copy and edit. Starting at 0 includes the entire string in the copy.
    // Ending at -1 excludes the last character, removing it from our new copy.
    // Then we append the new operator  with this.innerText on the button that was clicked

})

})


// ‘this’ b4 document isolates the element were targeting so it's 
// interactivity is limited to within itself and doesn’t impact 
// the functionality of other items. We know equal is going to
// have a unique function that acts like nothing else on the calculator

// eval() evaluates code as a string and returns its completion value
// // But using eval can be a security risk!!



this.documentElement.querySelector('.equal').addEventListener('click', function(){

if(anyError){
    return;
}

// a regular expression to check if the string in display  contains a division by zero. 
// .test() returns true if it finds this pattern, and false otherwise. 
// Helps prevent mathematical errors in calculations.

if(/\/0/.test(display.innerText)){
    display.innerText="Error";
    anyError= true;
}else{
display.innerText= eval(display.innerText);
}
})


//Reset to default and turns error back to false if it occurs
document.querySelector('.clear').addEventListener('click',function(){
display.innerText='0';
anyError=false;
})





})