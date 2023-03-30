let allTag=document.querySelectorAll("p");
let Tag=document.querySelectorAll("pre");
for(let i=0;i<allTag.length;i++){
    let isclicked=false
allTag[i].addEventListener("click",function(a){
    if(a.detail==3){allTag[i].style.backgroundColor="";
console.log(a.detail);}
    if(a.detail==2){allTag[i].style.backgroundColor="green";}
    if(a.detail==1){allTag[i].style.backgroundColor="blue";}
     
})
}