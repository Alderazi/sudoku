// variables
let mistakes=0
const cell=document.querySelectorAll('.smallBox') 
let numberExist=true
const soulution=[
     [5,3,6,1,7,2,8,9,4],
     [8,2,7,9,6,4,1,5,3],
     [9,4,1,3,5,8,2,6,7],
     [7,1,5,6,4,3,9,2,8],
     [3,4,9,7,8,2,5,1,6],
     [8,2,6,1,9,5,7,3,4],
     [4,8,1,3,6,9,2,5,7],
     [2,9,5,4,7,1,6,3,8],
     [6,7,3,5,8,2,4,1,9]

]
const generated=   
    [['','',6,'',7,'',8,'',''],
     ['','','','',6,'',1,'',3],
     ['','',1,'',5,'',2,'',''],
     ['','',5,'',4,'','','',8],
     ['',4,'',7,'',2,'',1,''],
     [8,'','','',9,'',7,'',''],
     ['','',1,'',6,'',2,'',''],
     [2,'',5,'',7,'','','',''],
     ['','',3,'',8,'',4,'','']]


// functions

const thereIsNumber=(event)=>{
    const Num=event.target.innerText
    if(Num===''){
        numberExist=false
        
    }
    else{
        numberExist=true
    }
slecting(event)
}


const slecting=(cell)=>{
    if(numberExist){
    cell.target.style.cursor = 'auto';


    }

}
const isSelcted=(event)=>{
    if(!numberExist){
        event.target.style.boxSizing = "border-box";
        event.target.style.backgroundColor = "orange";
    }
}
const addNumber=()=>{

}
const generate=()=>{
for (let i = 0; i < generated.length; i++) {
    for (let j = 0; j < generated[i].length; j++) {
        let index = i * 9 + j;  
        cell[index].innerText = generated[i][j]; 
    }
}

}
const mistakeHappend=()=>{
    mistakes++;
    document.querySelector("h3").innerText=(`mistakes:${mistakes} /3`)
    
    
    isLose()

}
const isLose=()=>{
    if (mistakes===3){

setTimeout(function() {
  alert("game over you lost");
}, 10);   
 }

}
   for(let i=0;i<cell.length;i++){
    cell[i].addEventListener('click',isSelcted)
    cell[i].addEventListener('mouseover',thereIsNumber)
   }
generate()