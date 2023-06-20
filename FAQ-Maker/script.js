const btn=document.querySelectorAll('.question-btn');
btn.forEach(function(i){
    i.addEventListener("click",function(e){
        const question=e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
    });
    
});