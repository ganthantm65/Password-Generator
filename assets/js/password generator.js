let btn1=document.querySelector(".btn-2");
let btn2=document.querySelector(".btn-1");
btn1.addEventListener("click",(event)=>{
    passwordGenerate();
    btn2.textContent==="Copied"?(btn2.textContent="Copy to clipboard"):(btn2.textContent="Copy to clipboard");
})
let range=document.querySelectorAll("input");
for(let i=0;i<range.length;i++){
    if(range[i].type=="range"){
        range[i].addEventListener("input",(event)=>{
            showLength();
        })
    }
}
btn2.addEventListener("click",(event)=>{
    copy();
});
function showLength() {
    let num=Math.round(Number(document.querySelector(".number").value)/10);
    let low=Math.round(Number(document.querySelector(".lower").value)/10);
    let upp=Math.round(Number(document.querySelector(".upper").value)/10);
    let char=Math.round(Number(document.querySelector(".character").value)/10);
    let max=num+low+upp+char;
    document.querySelector(".para-1").innerHTML=`Password length:${max}`;
    document.querySelector(".label-1").innerHTML=`Numericals:${num}`
    document.querySelector(".label-2").innerHTML=`Lower case:${low}`
    document.querySelector(".label-3").innerHTML=`Upper case:${upp}`
    document.querySelector(".label-4").innerHTML=`Characters:${char}`
}
function passwordGenerate() {
    let pword=""
    let str="abcdefghijklmnopqrstuvwxyz";
    let Str="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let Char="!@#$%^&*()!@#$%^&*()";
    let number="0123456789";
    let num=Math.round(Number(document.querySelector(".number").value)/10);
    let low=Math.round(Number(document.querySelector(".lower").value)/10);
    let upp=Math.round(Number(document.querySelector(".upper").value)/10);
    let char=Math.round(Number(document.querySelector(".character").value)/10);
    for (let i = 0; i <upp; i++) {
        a=Math.round(Math.random()*10)
        pword+=Str[a]
    }
    for (let i = 0; i <low; i++) {
        b=Math.round(Math.random()*10)
        pword+=str[b]
    }
    for (let i = 0; i <char; i++) {
        c=Math.round(Math.random()*10)
        if (c<Char.length) {
            pword+=Char[c] 
        }
    }
    for (let i = 0; i <num; i++) {
        d=Math.round(Math.random()*10);
        if(d<number.length){
            pword+=number[d];
        }
    }
    document.querySelector(".result").value=`${pword}`
}
function copy() {
    let a=document.querySelector(".result");
    if (a.value!="") {
        a.setSelectionRange(0,99999);
        navigator.clipboard.writeText(a.value);
        document.querySelector('.btn-1').textContent="Copied";
    }
}