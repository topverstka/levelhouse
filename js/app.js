document.addEventListener("DOMContentLoaded", function() {

	var d = document;

	// Мобильное меню

	var menuBurger = d.querySelector('.header__burger');
	menuBurger.addEventListener('click', function(e){
		e.preventDefault();
		if(this.classList.contains('header__burger--active')){
			this.classList.remove('header__burger--active');
			d.querySelector('.header__nav').classList.remove('header__nav--active');
			d.querySelector('body').classList.remove('stop');
		}else{
			this.classList.add('header__burger--active');
			d.querySelector('.header__nav').classList.add('header__nav--active');
			d.querySelector('body').classList.add('stop');
		}
	})


	var nighSwitcher = d.querySelector('.night-switcher');
	nighSwitcher.addEventListener('click', function(e){
		e.preventDefault();
		if(this.classList.contains('night-moder')){
			nighSwitcher.classList.remove('night-moder');
			d.querySelector('.header').classList.remove('night-mode')

			d.querySelector('.header').classList.remove('night-mode');
			d.querySelector('.first-screen').classList.remove('night-mode');
			d.querySelector('.relax').classList.remove('night-mode');
			d.querySelector('.house').classList.remove('night-mode');

			// d.querySelector('.first-screen__decoration--1').style.display = 'block';
			// d.querySelector('.first-screen__decoration--2').style.display = 'block';
			// d.querySelector('.first-screen__hero-picture').style.display = 'block';
			
		}else{
			this.classList.add('night-moder');
			d.querySelector('.header').classList.add('night-mode');
			d.querySelector('.first-screen').classList.add('night-mode');
			d.querySelector('.relax').classList.add('night-mode');
			d.querySelector('.house').classList.add('night-mode');

			// d.querySelector('.first-screen__decoration--1').style.display = 'none';
			// d.querySelector('.first-screen__decoration--2').style.display = 'none';
			// d.querySelector('.first-screen__hero-picture').style.display = 'none';
		}
	})


	// Скрытие мобильного меню и модалок

	function findCloseBtns(){
		let closeBtns = document.querySelectorAll('.close');
		
		for (let i = 0; i < closeBtns.length; i++) {
			setUpClose(closeBtns[i]);
		}
	}

	function setUpClose(closeBtn) {
		closeBtn.addEventListener('click', function(e){
			e.preventDefault();
			menuBurger.classList.remove('header__burger--active');
			d.querySelector('.header__nav').classList.remove('header__nav--active');
			d.querySelector('body').classList.remove('stop');
			d.querySelector('.modal').classList.remove('modal--active');
		})
	}
	
	findCloseBtns();



	// Модальные окна скрипт открытия
	function findBtnModal(){
		let btnsModal = document.querySelectorAll('.btn--modal');
		
		for (let i = 0; i < btnsModal.length; i++) {
			setUpBtnModal(btnsModal[i]);
		}
	}

	function setUpBtnModal(btnModal) {
		btnModal.addEventListener('click', function(e){
			e.preventDefault();
			d.querySelector('.modal').classList.add('modal--active');
			d.querySelector('body').classList.add('stop');
		})
	}
	
	findBtnModal();


	// Вызов модалки с заказом
	function findBtnModalOrder(){
		let btnsModal = document.querySelectorAll('.btn--modal-order');
		for (let i = 0; i < btnsModal.length; i++) {
			setUpBtnModalOrder(btnsModal[i]);
		}
	}

	function setUpBtnModalOrder(btnModal) {
		btnModal.addEventListener('click', function(e){
			e.preventDefault();
			d.querySelector('.modal .modal-window--order').classList.add('modal-window--active');
		})
	}
	
	findBtnModalOrder();

	// Вызов с политикой конфиденциальности
	function findBtnModalPrivacy(){
		let btnsModal = document.querySelectorAll('.btn--modal-privacy');
		for (let i = 0; i < btnsModal.length; i++) {
			setUpBtnModalPrivacy(btnsModal[i]);
		}
	}

	function setUpBtnModalPrivacy(btnModal) {
		btnModal.addEventListener('click', function(e){
			e.preventDefault();
			d.querySelector('.modal .modal-window--privacy').classList.add('modal-window--active');
		})
	}
	
	findBtnModalPrivacy();



	// Скрытие модалки при клике на оверлей
	d.querySelector('.modal-overlay').addEventListener('click', function(e){
		e.preventDefault();
		d.querySelector('body').classList.remove('stop');
		d.querySelector('.modal').classList.remove('modal--active');
		d.querySelector('.modal-window--active').classList.remove('modal-window--active');
	});
	


	// Ленивая загрузка изображений

	[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
	  img.setAttribute('src', img.getAttribute('data-src'));
	  img.onload = function() {
	 img.removeAttribute('data-src');
	  };
	});




	// Куки
	function setCookie(c_name,value,exdays){
        var exdate=new Date();
           	exdate.setDate(exdate.getDate() + exdays);
        var c_value = escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString()) + "; path=/";
        document.cookie=c_name + "=" + c_value;
   	}

    function getMyCookie(name) {
        var c = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
            if (c) return c[2];
            else return "";
    }

  

		

	// Слайдер с контрольными точками
	  var swiper = new Swiper('.testimonials-swiper-container', {
		slidesPerView: 1,
		spaceBetween: 10,
		loop: false,
		// init: false,
		pagination: {
		  el: '.testimonials-swiper-pagination',
		  clickable: true,
		},
		navigation: {
			nextEl: '.testimonials-swiper-next',
			prevEl: '.testimonials-swiper-prev',
		},

		breakpoints: {
		  670: {
			slidesPerView: 2,
			spaceBetween: 20,
		  },
		  992: {
			slidesPerView: 3,
			spaceBetween: 20,
		  },
		  1300: {
			slidesPerView: 4,
			spaceBetween: 20,
		  },
		}
	  });


	  //Projects
	  let projectsTabs = d.querySelectorAll('.projects-slide__tab');

	  for( let i = 0; i < projectsTabs.length; i++){
		projectsTabs[i].addEventListener('click', function(){
			let numberImg = this.dataset.slide;
			this.closest('.projects-slide__tabs').querySelector('.active').classList.remove('active');
			this.classList.add('active');

			this.closest('.projects-slide').querySelector('.projects-slide__img-slide.active').classList.remove('active');
			this.closest('.projects-slide').querySelector('.projects-slide__img-slide[data-slide="'+numberImg+'"]').classList.add('active');

		});
	  }

	  // LightGallary (Плагин типо FacnyBox только без JQ)
	  lightGallery(document.querySelector('.lightgallery'));
	  lightGallery(document.querySelector('.lightgallery2'));
	  lightGallery(document.querySelector('.lightgallery3'));
	  lightGallery(document.querySelector('.lightgallery4'));
	  lightGallery(document.querySelector('.lightgallery5'));


		// Инициализациия AOS анимаций
		AOS.init();

});
