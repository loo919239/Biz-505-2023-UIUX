// DOM 객체변수에 할당하여 JS 코드에서 사용할 준비하기
const nav_list = document.querySelectorAll("li.main_nav");

nav_list.forEach((item) => {
  item.addEventListener("click", (event) => {
    const target = event.target;
    const nav_text = target.innerText;
    alert(nav_text + " 메뉴 클릭");
  });
});
