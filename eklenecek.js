// Soru dizisindeki indeks için sayaç
let questionIndex = 0;

// Soruları görüntülemek için fonksiyon
function showQuestion() {
  // Soruları alın
  fetch('./questions/questionsHtml.json')
    .then(response => response.json())
    .then(data => {
      // Soru, cevap seçenekleri ve yanıt butonu için elementleri seçin
      let question = document.querySelector(".soru");
      let answerA = document.querySelector(".answerA"); 
      let answerB = document.querySelector(".answerB"); 
      let answerC = document.querySelector(".answerC"); 
      let answerD = document.querySelector(".answerD");
      let next = document.querySelector(".yanitla_buton");

      // İlk soruyu görüntüleyin
      question.innerHTML = data[questionIndex].question;
      answerA.innerHTML = data[questionIndex].a;
      answerB.innerHTML = data[questionIndex].b;
      answerC.innerHTML = data[questionIndex].c;
      answerD.innerHTML = data[questionIndex].d;
      questionIndex++;

      // Yanıt butonuna tıklandığında çalışacak olan kodu fonksiyon olarak tanımlayın
      function showNextQuestion() {
        if (questionIndex < data.length) { 
          question.innerHTML = data[questionIndex].question;
          answerA.innerHTML = data[questionIndex].a;
          answerB.innerHTML = data[questionIndex].b;
          answerC.innerHTML = data[questionIndex].c;
          answerD.innerHTML = data[questionIndex].d;
          questionIndex++;

          // Tüm inputlara erişin ve işaretlerini kaldırın
          document.querySelectorAll("input[type='radio']").forEach(input => {
            input.checked = false;
          });
        } else {
          question.innerHTML = "Sorular bitti, sonuçları görüntüleyin.";
          next.removeEventListener("click", showNextQuestion); // Yanıt butonunu devre dışı bırak
        }
      }

      // Yanıt butonuna tıklama olayını ekle
      next.addEventListener("click", showNextQuestion);
    });
}

// Sayfa yüklendiğinde soruları görüntüleyin bunlar eklenecek
window.onload = showQuestion;
