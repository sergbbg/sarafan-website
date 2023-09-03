window.addEventListener('DOMContentLoaded', function() {

const header = this.document.querySelector('.header');
const navBurger = document.querySelector('.nav-burger');
const headerModal = document.querySelector('.header-modal');
const headerModalHeader = document.querySelectorAll('.header-modal-shop-text');


//переменная созданна для слежением нажатия бургер меню//
let burger = true;

//слушаем события при клики на бургер меню//

navBurger.addEventListener('click', ()=>{

   if(burger){
      // меням позицию линий бургер меню
   document.querySelector('.burger-item-first').style.transform = "rotate(45deg) translateY(-6px) translateX(5px)";
   document.querySelector('.burger-item-third').style.transform = "rotate(-45deg) translateX(-12px) translateY(0px)";
   document.querySelector('.burger-item-second').style.opacity = "0";

   // при клики открываем модальное окно
   headerModal.classList.add('show');
   

   burger= !burger;
   }else if(!burger){
      document.querySelector('.burger-item-first').style.transform = "none";
      document.querySelector('.burger-item-third').style.transform = "none";
      document.querySelector('.burger-item-second').style.opacity = "1";

      // при клики закрываем модальное окно
      headerModal.classList.remove('show');

      burger = !burger;
   }

})


let headerWidth = header.offsetWidth;
if(headerWidth   < 1350){
  headerModalHeader.forEach(el => {
   el.addEventListener('click', ()=>{
      let childrenContainer = event.target.parentElement.querySelectorAll('.header-modal-nav-items');
      
      childrenContainer.forEach(el=>{
         el.classList.toggle("show")
      })
      
   })
}); 
}


})



