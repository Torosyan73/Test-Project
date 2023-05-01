/**
 * NodeList.prototype.forEach() polyfill
 * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
 */
 if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}


const ToggleBtn = document.querySelector('.toggle-btn');
const MenuIcon = document.querySelector('.menu-icon');
const ForSaleCardsFilter = document.querySelector('.for-sale__cards-filter');
ToggleBtn.addEventListener('click', function(){
    MenuIcon.classList.toggle('menu-icon-active');
    ForSaleCardsFilter.classList.toggle('for-sale__cards-filter--active');
})


const CardButtonShowMore = document.querySelector('.card__button-show-more');
const CardLinkHidden = document.querySelectorAll('.card-link--hidden');
CardButtonShowMore.addEventListener('click', function(){
    CardLinkHidden.forEach(function(item){
        item.classList.remove('card-link--hidden');
    })
});


const Widgets = document.querySelectorAll('.widget');
Widgets.forEach(function(widget){
    widget.addEventListener('click', function(e){
        if(e.target.classList.contains('widget__title')) {
            e.target.classList.toggle('widget__title--active');
            e.target.nextElementSibling.classList.toggle('widget__body--hidden');
        }
    });
});


const BtnlocationAny = document.querySelector('#location-5');
const Btnlocation = document.querySelectorAll('[data-location]');
BtnlocationAny.addEventListener('change', function(){
    if(BtnlocationAny.checked) {
        Btnlocation.forEach(function(item){
            item.checked = false
        });
    };
});
Btnlocation.forEach(function(item){
    item.addEventListener('change', function(){
        if(BtnlocationAny.checked) {
            BtnlocationAny.checked = false
        }
    });
});


const OptionsShowMoreBtn = document.querySelector('.options__show-more');
const OptionsHiddenCards = document.querySelector('.options__hidden');
OptionsShowMoreBtn.addEventListener('click', function(e){
    e.preventDefault();
    OptionsHiddenCards.classList.toggle('options__hidden--show');
    if(OptionsHiddenCards.classList.contains('options__hidden--show')) {
        OptionsShowMoreBtn.innerText = "Скрыть"
    } else {
        OptionsShowMoreBtn.innerText = "Показать ещё"
    }
});