


//위로가기
const header = document.querySelector(".main_view")
const goTop = document.querySelector(".goTop")




//모바일 전용 메뉴바
document.querySelector('.open_btn').addEventListener('click', () => {
  document.querySelector('.menu_box').classList.add('active');
  document.querySelector('.menu_black').classList.add('active');
});

document.querySelector('.close_btn').addEventListener('click', () => {
  document.querySelector('.menu_box').classList.remove('active');
  document.querySelector('.menu_black').classList.remove('active');
});
