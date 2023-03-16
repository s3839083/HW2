let eggroll = document.getElementById('run'),t,s=46;
with(eggroll.style){
    position='absolute';
    top='-1200px';
    left='1200px';
}
eggroll.onload=function(){
    t=setInterval(function(){
    eggroll.style.left=(parseInt(eggroll.style.left)-(s--))+'px';
    if(s==0)clearInterval(t)
    },10)
}

setTimeout("delay()",2000 );
let items_chocolate=document.getElementById('items_chocolate');
let single=document.getElementById('single');  
let gift=document.getElementById('gift');
let number=document.getElementById('number');   
let input_1=document.getElementById('input_1');   
let input_2=document.getElementById('input_2');   
let finish=document.getElementById('finish');   


function delay(){  
    items_chocolate.innerHTML="<div><p><b>經典巧克力蛋捲</b></p></div>";
    single.innerHTML="<div><p><b>單盒</b></p></div>";
    gift.innerHTML="<div><p><b>禮盒</b></p></div>";
    number.innerHTML="<div><p><b>數量</b></p></div>";
    input_1.innerHTML="<div></div>";
    input_2.innerHTML="<div></div>";
    finish.innerHTML="<div><p><b><a href='https://s3839083.github.io/HW2/first.html'>完成購物</a></b></p></div>";
}
let succeed = document.getElementById('succeed'), time, i=0;
finish.click=function(){
    succeed.style.backgroundImage="url('HW1/下單01.png')";
}
// let succeed = document.getElementById('succeed'), time, i=0;
// finish.click=function(){
//     t=setInterval(function(){
//         if(i/2 == 0){
//             succeed.style.backgroundImage="url('HW1/下單01.png')";
//             succeed.style.height='500px';
//             succeed.style.width='500px';
//             succeed.style.backgroundSize = "cover";
//             i++;
//         }
//         else if(i/2==1){
//             succeed.style.backgroundImage="url('HW1/下單01.png')";
//             succeed.style.height='500px';
//             succeed.style.width='500px';
//             succeed.style.backgroundSize = "cover";
//             i++;
//         }
//         else if(i == 7){
//             // location.href="https://s3839083.github.io/uidd2023/first.html";
//         }
//     },25)
// }
