const openbtn=document.getElementById('openbtn');
const subbtn=document.getElementById('subbtn');
const closebtn=document.getElementById('closebtn');
const popup=document.getElementById('popup');
const overlay=document.getElementById('overlay');
openbtn.addEventListener('click',function(){
    popup.style.display='block';
    overlay.style.display='block';
})
closebtn.addEventListener('click',function(){
    popup.style.display='none';
    overlay.style.display='none';
})
subbtn.addEventListener('click',function(){
    alert('提交成功')
})