// variables
let mistakes=0
const button=document.querySelectorAll('button') 


// functions
const mistakeHappend=()=>{
    mistakes++;
    document.querySelector("h3").innerText=(`mistakes:${mistakes} /3`)

}
   for(let i=0;i<button.length;i++){
    button[i].addEventListener('click',mistakeHappend)
   }
