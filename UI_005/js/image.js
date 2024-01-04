const img_0001 = document.querySelector(".img_0001");
const img_0001_click_event = () => {
  // 현재 화면에 보이는 페이지를 01.html 페이지로 전환하라
  document.location.href = "./01.html";
};
img_0001.addEventListener("click", img_0001_click_event);

// 누구한테 click event 를 부착할 것인가
// click event 를 부착할 대상(selector) 찾아서(query)
// 있으면 그 친구를 img_0003 변수에 할당하라
const img_0002 = document.querySelector(".img_0002");
// click event 가 발생했을때 실행할 함수를 만들기
// event handler를 선언하기
const img_0002_click_event = () => {
  // 현재 화면을 03.html 파일로 바꿔라
  document.location.href = "./02.html";
};
// click event 가 발생하면 해야할일을 설정
// click event 가 발생하면 실행할 event handler 를 연결
img_0002.addEventListener("click", img_0002_click_event);

const img_0003 = document.querySelector(".img_0003");
const img_0003_click_event = () => {
  document.location.href = "./03.html";
};
img_0003.addEventListener("click", img_0003_click_event);

const img_0004 = document.querySelector(".img_0004");
const img_0004_click_event = () => {
  document.location.href = "./04.html";
};
img_0004.addEventListener("click", img_0004_click_event);

const img_0005 = document.querySelector(".img_0005");
const img_0005_click_event = () => {
  document.location.href = "./05.html";
};
img_0005.addEventListener("click", img_0005_click_event);

const img_0006 = document.querySelector(".img_0006");
const img_0006_click_event = () => {
  document.location.href = "./06.html";
};
img_0006.addEventListener("click", img_0006_click_event);
