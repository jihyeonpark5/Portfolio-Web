const frame = document.querySelector("section");
const el = frame.querySelector("article");

// 재생, 정지, 반복 버튼을 변수에 저장
let play = el.querySelector(".play");
let pause = el.querySelector(".pause");
let load = el.querySelector(".load");

// 재생 버튼 클릭 시,
play.addEventListener("click", e=>{
    // 현재 이벤트 처리기가 연결된 개체 li에서 가장 가까운 article의 .pic을 찾아냄
    e.currentTarget.closest("article").querySelector(".pic").classList.add("on"); // 클래스 on 추가
    e.currentTarget.closest("article").querySelector("audio").play();           
});
// 정지 버튼 클릭 시
pause.addEventListener("click", e=>{
    e.currentTarget.closest("article").querySelector(".pic").classList.remove("on"); // 클래스 on 제거
    e.currentTarget.closest("article").querySelector("audio").pause();           
});
// 반복 버튼 클릭 시
load.addEventListener("click", e=>{
    e.currentTarget.closest("article").querySelector(".pic").classList.add("on");
    e.currentTarget.closest("article").querySelector("audio").load(); // 다시 로드  
    e.currentTarget.closest("article").querySelector("audio").play();        
});