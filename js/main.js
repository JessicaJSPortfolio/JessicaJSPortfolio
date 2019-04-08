$(function() {
  
	menu = $('nav ul');

  $('#openup').on('click', function(e) {
    e.preventDefault(); menu.slideToggle();
    document.getElementById('name').style.display = 'none';             
  });
  
  $(window).resize(function(){
    var w = $(this).width(); if(w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
      
    }
  });
  
  $('nav li').on('click', function(e) {   
    var w = $(window).width(); if(w < 480 ) {
    menu.slideToggle();
    document.getElementById('name').style.display = "block";
 
    }
  });
  $('.open-menu').height($(window).height());
  
});

$('.cf a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});

function animateMe(){
  const back = document.querySelectorAll(".meImg");
  back.forEach(b => {
   
    
  });
}

function animatedForm() {
  const arrows = document.querySelectorAll(".fa-arrow-down");

  arrows.forEach(arrow => {
    arrow.addEventListener('click', () => {
      const input = arrow.previousElementSibling;
      const parent = arrow.parentElement;
      const nextForm = parent.nextElementSibling;

      if(input.type === "email" && validateEmail(input)) {
        
        nextSlide(parent, nextForm);
      } else if(validateName(input) && input.type === "text") {
        
        nextSlide(parent, nextForm);
      } else {
        parent.style.animation = "shake 0.5s ease";
      }
      parent.addEventListener('animationend', () => {
        parent.style.animation = "";
      });
    });
  });
}

function nextSlide(parent, nextForm) {
  parent.classList.add('innactive');
  parent.classList.remove('active');
  nextForm.classList.add('active');
}

function validateName(name) {
  if(name.value.length > 0) {
    return true;
  }
}

function validateEmail(email) {
  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(validation.test(email.value)) {
    return true;
  }
}

function onClickVid() {
  const vids = document.querySelector('.video1'); 
  alert('Vid clicked');
    vids.style.width = '800';
}

animatedForm();
animateMe();