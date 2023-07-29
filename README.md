# basic HTML/CSS/Javascript Projects



DEMO:-

https://akshatmiglani.github.io/HTML-CSS-JavaScriptBeginnerProjects/



#1 CSS SLIDESHOW

Preview-


![slider](https://github.com/akshatmiglani/HTML-CSS-JavaScriptBeginnerProjects/assets/120178102/7303c245-ba43-4e89-a8c8-0400da32689b)


Main CSS Usaage:-



    @keyframes slider {

        0% {
            background-image: url('1.jpg');
        }
    
        35%{
            background-image: url('2.jpg');
        }
    
        75%{
            background-image: url('3.jpg');
        }
    
    }


#2 Frequntly Asked Questions(Template)
Preview-

![faq](https://github.com/akshatmiglani/HTML-CSS-JavaScriptBeginnerProjects/assets/120178102/a0dcbcaa-f14f-45a0-a1e4-cf5270b6e8ae)

Main JS usage-
 
    btn.forEach(function(i){
        i.addEventListener("click",function(e){
            const question=e.currentTarget.parentElement.parentElement;
            question.classList.toggle("show-text");
        });
    
    });

#3 Comments Viewer
Preview:-

![comment](https://github.com/akshatmiglani/HTML-CSS-JavaScriptBeginnerProjects/assets/120178102/5438d202-d20b-494c-ab5a-bb34d30ea017)

Main JS Usage:-

    function show(){
        console.log("LOADED");
        const i=comments[currentItem];
        img.src=i.img;
        author.textContent=i.name;
        info.textContent=i.text;
    }
    
#4 Calculator


![calc](https://github.com/akshatmiglani/HTML-CSS-JavaScriptBeginnerProjects/assets/120178102/7500bb92-bd78-4e9f-ad9c-40ebe4ea8e5c)


#5 Sketch-Board


![sketch](https://github.com/akshatmiglani/HTML-CSS-JavaScriptBeginnerProjects/assets/120178102/a6e19a7b-ee01-4050-9849-bfa48a552605)

    
![Your Repository's Stats](https://github-readme-stats.vercel.app/api/top-langs/?username=akshatmiglani&theme=blue-green)

![GitHub Contributors Image](https://contrib.rocks/image?repo=akshatmiglani/HTML-CSS-JavaScriptBeginnerProjects)
