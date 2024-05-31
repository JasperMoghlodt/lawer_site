window.onload = function() {
  fnBurger();
  fnSpoiler();
}; 

function fnSpoiler(){ 
  const $arBox  = document.querySelectorAll('[ data-spoiler]');
  if ($arBox.length > 0){
      $arBox.forEach(($box) => {
          $box.addEventListener("click",(e)=>{
            if (e.target.closest("[data-btn]") ){
              $box.classList.toggle('_js-active');
            }
          });
      }); 
  }
}

function fnBurger() {
  const htmlCss ='_js-burger-open';
  const $html = document.documentElement;
  const $fieldBurger = document.querySelector('[data-field-burger]');
  if ($fieldBurger){
    const $arLink = $fieldBurger.querySelectorAll('a');
    $arLink.forEach(($elm) => { 
				$elm.setAttribute('data-burger', 'header');
    });
  }
  const $arBurger = document.querySelectorAll('[data-burger="header"]');
	if ($arBurger.length > 0){
    $arBurger.forEach(($elm) => {
      $elm.addEventListener("click", function (e) {
				 $html.classList.toggle(htmlCss);
			});
    });
  }
}

const linkElement = document.querySelector('link[rel="stylesheet"]');
const buttonElement = document.querySelector('btn-theme');
let isDarkTheme = false;
function toggleTheme() {
    isDarkTheme = !isDarkTheme;
    const newTheme = isDarkTheme ? 'css/style_dark.css' : 'css/style.css';
    linkElement.href = newTheme;
}
buttonElement.addEventListener("click", toggleTheme);