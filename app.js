
//* index_html

//? text-slide
// var slideIndex = 1;
//     showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("dot");
//     if (n > slides.length) {slideIndex = 1}    
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";  
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";  
//     dots[slideIndex-1].className += " active";
// }

// var btn = $('.btn');


// btn.on('click', function() {
//     $(this).toggleClass('active not-active');
// });

// const form = document.getElementById("myForm");
//   const resimYukle = document.getElementById("resimYukle");
//   const gorsel = document.getElementById("gorsel");
//   const gonderBtn = document.getElementById("gonderBtn");

//   form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     const dosya = resimYukle.files[0];
//     if (dosya) {
//       const okuyucu = new FileReader();
//       okuyucu.readAsDataURL(dosya);
//       okuyucu.onload = function() {
//         gorsel.innerHTML = `<img src="${this.result}">`;
//       }
//     }
//   });


  loading = document.querySelector(".loading");
  start_ekran = document.querySelector(".start_ekran");
  sinav_baslat_btn = document.querySelector(".sinav_baslat");

  sinav_baslat_btn.addEventListener("click", ()=> {
    start_ekran.style.display = "none";
    setTimeout(function() {
          loading.style.display = 'none';
        }, 2000);
  });
  

  // window.addEventListener('load', function() {
  //   setTimeout(function() {
  //     loading.style.display = 'none';
  //   }, 2000);
  // });
