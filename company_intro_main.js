const circle = document.querySelector("#circle");
const article = circle.querySelectorAll("article");

// article 전체 개수만큼 반복
for(let el of article){
	// article에 마우스를 올리면 정지
	el.addEventListener("mouseenter",e=>{
		circle.style.animationPlayState = "paused";
	});
	// article 에서 마우스가 떠나면 다시 회전
	el.addEventListener("mouseleave", e=>{
		circle.style.animationPlayState = "running";
	});
}	