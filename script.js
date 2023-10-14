const btns=document. querySelectorAll(".button");
const input=document.getElementById("ans");
let string="";
Array.from(btns).forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        if(e.target.innerHTML==='=')
        {
            string=eval(string);//eval fn evaluates the string value and returns ans.
            input.value=string;
        }
        else if(e.target.innerHTML=='AC'){
            string="";
            input.value=string;
        }
        else{
            string=string+e.target.innerHTML;
            input.value=string;
        }
    })
})