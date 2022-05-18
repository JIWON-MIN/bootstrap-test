// modal이 열릴 때 input 요소가 focus 되도록

const emailInputEl = document.querySelector('#exampleInputEmail1');
const modalEl = document.querySelector('#exampleModal');

modalEl.addEventListener('shown.bs.modal', function(){
  emailInputEl.focus();
})