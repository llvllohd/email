const inputfrom = document.querySelector('#from').value;
// const tagfrom = document.querySelector('#tagFrom');
const inputto = document.querySelector('#to');
const tagto = document.querySelector('#tagTo');
const inputsub = document.querySelector('#subject');
const inputbody = document.querySelector('#body');
const button = document.querySelector('#button');

inputto.addEventListener("keyup",function(e){

    if(e.which === 13){
        const span = document.createElement("span");
        span.textContent = ` ${e.target.value}`;
        tagto.append(span);
        tagto.style.display= "block";
        inputto.value ="";

//         let objectbox = document.querySelector('#msg pre');
// objectbox.textContent = '\n' + JSON.stringify(inputs,'\t',1);

    }
});


button.addEventListener('click',function(e){
    // e.preventDefault;
// console.log(e.target.value);
let data = [];
let inputs = {
    from: document.querySelector('#from').value,
    to: tagto.textContent,
    subject: document.querySelector('#subject').value,
    body: document.querySelector('#body').value
}
data.push(inputs);
// document.forms[0].reset;
let objectbox = document.querySelector('#msg pre');
objectbox.textContent = '\n' + JSON.stringify(inputs,'\t',1);
// console.log({data});


});
