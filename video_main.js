const items = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = aside.querySelector("span");

// items의 개수만큼 반복
for(let el of items){     
    // 마우스를 올리면   
    el.addEventListener("mouseenter", e=>{
        // 비디오 재생
        e.currentTarget.querySelector("video").play();  
    });
    // 마우스가 떠나면
    el.addEventListener("mouseleave", e=>{
        // 비디오 정지
        e.currentTarget.querySelector("video").pause();
    });

    // 마우스를 클릭하면
    el.addEventListener("click", e=>{  
        // 각각의 태그 안의 값 > 변수 > aside 태그 안의 값으로 저장  
        let tit = e.currentTarget.querySelector("h2").innerText;
        let txt = e.currentTarget.querySelector("p").innerText;
        let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");
        
        aside.querySelector("h1").innerText = tit;
        aside.querySelector("p").innerText = txt;
        aside.querySelector("video").setAttribute("src", vidSrc); // src 속성에 vidSrc 값 저장

        aside.querySelector("video").play(); // 비디오 재생 
        aside.classList.add("on"); // aside에 on 붙이고 그에 따라 opacity(불투명도) 0에서 1로 바뀜
    });
    // CLOSE 클릭 시 
    close.addEventListener("click", ()=>{
        aside.classList.remove("on"); // aside에 on 제거
        aside.querySelector("video").pause(); // 비디오 중지
    });
}        