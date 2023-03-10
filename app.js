
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
  sinav_ekrani = document.querySelector(".sinav_ekrani");
  sinav_baslat_btn = document.querySelector(".sinav_baslat");

  sinav_baslat_btn.addEventListener("click", ()=> {
    start_ekran.style.display = "none";
    loading.style.display ="flex";
    setTimeout(function() {
      loading.style.display = 'none';
    }, 2000);
    setTimeout(function() {
          sinav_ekrani.style.display = "block";
          
        }, 2000);
  });
  

  // window.addEventListener('load', function() {
  //   setTimeout(function() {
  //     loading.style.display = 'none';
  //   }, 2000);
  // });

  // Soru dizisindeki indeks i??in saya??
let questionIndex = 0;

// Sorular?? g??r??nt??lemek i??in fonksiyon
function showQuestion() {
  // Sorular?? al??n
  fetch('./questions/questionsHtml.json')
    .then(response => response.json())
    .then(data => {
      // Soru, cevap se??enekleri ve yan??t butonu i??in elementleri se??in
      let question = document.querySelector(".soru");
      let answerA = document.querySelector(".answerA"); 
      let answerB = document.querySelector(".answerB"); 
      let answerC = document.querySelector(".answerC"); 
      let answerD = document.querySelector(".answerD");
      let next = document.querySelector(".yanitla_buton");

      // ??lk soruyu g??r??nt??leyin
      question.innerHTML = data[questionIndex].question;
      answerA.innerHTML = data[questionIndex].a;
      answerB.innerHTML = data[questionIndex].b;
      answerC.innerHTML = data[questionIndex].c;
      answerD.innerHTML = data[questionIndex].d;
      questionIndex++;

      // Yan??t butonuna t??kland??????nda ??al????acak olan kodu fonksiyon olarak tan??mlay??n
      function showNextQuestion() {
        if (questionIndex < data.length) { 
          question.innerHTML = data[questionIndex].question;
          answerA.innerHTML = data[questionIndex].a;
          answerB.innerHTML = data[questionIndex].b;
          answerC.innerHTML = data[questionIndex].c;
          answerD.innerHTML = data[questionIndex].d;
          questionIndex++;

          // T??m inputlara eri??in ve i??aretlerini kald??r??n
          document.querySelectorAll("input[type='radio']").forEach(input => {
            input.checked = false;
          });
        } else {
          question.innerHTML = "Sorular bitti, sonu??lar?? g??r??nt??leyin.";
          next.removeEventListener("click", showNextQuestion); // Yan??t butonunu devre d?????? b??rak
        }
      }

      // Yan??t butonuna t??klama olay??n?? ekle
      next.addEventListener("click", showNextQuestion);
    });
}

// Sayfa y??klendi??inde sorular?? g??r??nt??leyin bunlar eklenecek
window.onload = showQuestion;




