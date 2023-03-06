
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
  

  window.addEventListener('load', function() {
    setTimeout(function() {
      loading.style.display = 'none';
    }, 2000);
  });


// Soru dizisindeki indeks için sayaç
let questionIndex = 0;

// Soruları görüntülemek için fonksiyon
function showQuestion() {
  // Soruları json aldım
  fetch('./questions/questionsHtml.json')
    .then(response => response.json())
    .then(data => {
      // Soru, cevap seçenekleri ve yanıt butonu için elementleri seçtim
      let question = document.querySelector(".soru");
      let answerA = document.querySelector(".answerA"); 
      let answerB = document.querySelector(".answerB"); 
      let answerC = document.querySelector(".answerC"); 
      let answerD = document.querySelector(".answerD");
      let next = document.querySelector(".yanitla_buton");

      // İlk soruyu otomatik getirdim
      question.innerHTML = data[questionIndex].question;
      answerA.innerHTML = data[questionIndex].a;
      answerB.innerHTML = data[questionIndex].b;
      answerC.innerHTML = data[questionIndex].c;
      answerD.innerHTML = data[questionIndex].d;
      questionIndex++;

      // Diğer sorular butona tıklayınca gelecek
      function showNextQuestion() {
        if (questionIndex < data.length) { 
          question.innerHTML = data[questionIndex].question;
          answerA.innerHTML = data[questionIndex].a;
          answerB.innerHTML = data[questionIndex].b;
          answerC.innerHTML = data[questionIndex].c;
          answerD.innerHTML = data[questionIndex].d;
          questionIndex++;

          // Tüm inputlardan işaretleri kaldırdım
          document.querySelectorAll("input[type='radio']").forEach(input => {
            input.checked = false;
          });
        } else {
          question.innerHTML = "Sorular bitti, sonuçları görüntüleyin.";
          next.removeEventListener("click", showNextQuestion); // Yanıt butonunu devre dışı bıraktım
        }
      }

      // Yanıt butonu
      next.addEventListener("click", showNextQuestion);
    });
}

// Sayfa yüklendiğinde soruları görüntülecek
window.onload = showQuestion;



