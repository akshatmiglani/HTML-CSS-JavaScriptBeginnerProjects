const comments= [
    {
        id:1,
        name:"Michael",
        img:"1.jpg",
        text:"The weather today is absolutely gorgeous!",
        
    },
    {
        id:2,
        name:"Susan",
        img:"2.jpg",
        text:"I just finished reading a captivating novel. Highly recommend it!",
        
    },
    {
        id:3,
        name:"Benny",
        img:"3.jpg",
        text:"I can't wait for the weekend. Time to relax and recharge.",
        
    },
    {
        id:4,
        name:"Tony",
        img:"4.jpg",
        text:"Spent the day exploring a new hiking trail. The views were breathtaking.",
        
    },
    {
        id:5,
        name:"Bella",
        img:"5.jpg",
        text:"Visited a museum today and learned so much about art history. Fascinating",
        
    }

]

const img=document.getElementById("img");
const author=document.getElementById("author");
const info=document.getElementById("info");


const prev=document.querySelector('.prev');

const next=document.querySelector('.next');


const rand=document.querySelector('.random');

let currentItem=0;
window.addEventListener('DOMContentLoaded',function(){
    show();    

});

function show(){
    console.log("LOADED");
    const i=comments[currentItem];
    img.src=i.img;
    author.textContent=i.name;
    info.textContent=i.text;

}

next.addEventListener('click',function(){
    currentItem++;
    if(currentItem>comments.length-1){
        currentItem=0;
    }
    show();
});

prev.addEventListener('click',function(){
    currentItem--;
    if(currentItem<0){
        currentItem=comments.length-1;
    }
    show();
});

rand.addEventListener('click',function(){
    currentItem = Math.floor(Math.random() * comments.length);
    show();
});
