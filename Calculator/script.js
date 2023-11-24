const display=document.querySelector(".display");
const lower=document.querySelector(".lower");
const fade=document.querySelector(".fade");
let result="";
let num1="";
let num2="";
let a="?";
let str="";
lower.addEventListener("click",(e)=>{

    //! BELOW CODE IS WRITTEN USING BUILT IN FUNCTION

    if(e.target.innerText==='=')
    {
        fade.innerHTML=str;   
        display.innerHTML=eval(str); //! this is built in funciton
    }
    else if(e.target.innerText==='C' || e.target.innerText==='CE')
    {
        display.innerHTML="0";
        fade.innerHTML="";
        str="";
    }
    else{
        if(e.target.innerHTML==="x")
        {
            str+="*";
            display.innerHTML=str;
        }
        else if(e.target.innerHTML==="÷")
        {
            str+="/";
            display.innerHTML=str;
        }
        else
        {
            str+=e.target.innerHTML;
            display.innerHTML=str;
        }        
    } 
})





//! BELOW COMMENTED CODE IS MY OWN LOGIC TO EVALUATE. IT DOESN'T RESPECT BODMAS RULE RIGHT NOW.
    // if(display.innerHTML==='0')
    //     display.innerHTML="";
    // if(e.target.innerHTML!=="=")
    //     display.innerHTML+=e.target.innerText;

    // if(e.target.innerText==='C' || e.target.innerText==='CE')
    // {
    //     display.innerHTML="";
    //     display.innerHTML=0;
    //     num1="";
    //     num2="";
    //     a="?";
    //     fade.innerHTML="";
    // }

    // if(e.target.innerText>=0 || e.target.innerText<=10 || e.target.innerText===".")
    // {
    //     if(a==="?")
    //         num1+=e.target.innerText;
    //     else
    //         num2+=e.target.innerText;

    // }
    // else{
    //     if(e.target.innerText==="=")
    //     {
    //         num2=Number(num2);   
    //         if(a==="÷")         
    //         {
    //             result=(num1/num2).toFixed(5);
    //             fade.innerHTML=display.innerHTML;
    //             display.innerHTML=result;
    //         }
    //         else if(a==="+")         
    //         {
    //             result=num1+num2;
    //             fade.innerHTML=display.innerHTML;
    //             display.innerHTML=result;
    //         }
    //         else if(a==="-")         
    //         {
    //             result=num1-num2;
    //             fade.innerHTML=display.innerHTML;
    //             display.innerHTML=result;
    //         }
    //         else      
    //         {
    //             result=num1*num2;
    //             fade.innerHTML=display.innerHTML;
    //             display.innerHTML=result;
    //         }
    //     }
    //     num1=Number(num1);

    //     if(e.target.innerText==="÷"){
    //         a="÷";
    //     }        
    //     else if(e.target.innerText==="x"){
    //         a="x";
    //     }        
    //     else if(e.target.innerText==="+"){
    //         a="+";
    //     }        
    //     else if(e.target.innerText==="-"){
    //         a="-";
    //     }        
    // }
