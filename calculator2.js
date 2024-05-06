let clearbtn = document.querySelector('.button-c');
let equalbtn = document.querySelector('.button-eq');
function appendToInput(value) {
document.querySelector('.top-field').value += value;
document.querySelector('.in-field').value += value;
}
clearbtn.addEventListener('click',()=> {
    document.querySelector(".top-field").value ='';
    document.querySelector(".in-field").value ='';
})

function calculate(){
    let inputs = document.querySelector('.top-field').value;
    try{
        let result = eval(inputs);
        document.querySelector('.top-field').value = result;
    }
    catch(error){
        document.querySelector('.top-field').value = 'Error';
        document.querySelector('.in-field').value = 'Error';
    }
}
