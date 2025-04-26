var teksSekarang = 1;
const body = document.querySelector("body"); 
const audio = new Audio('' + linkmp3.src); 

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: false,
  },
  on: {
    slideChange: function () {
      var currentIndex = swiper.activeIndex;
      teksSekarang++;
      var teksScale = document.querySelector('#teks' + teksSekarang);
      var stikerScale = document.querySelector('#stiker' + teksSekarang);
      var Tombol = document.querySelector('#Tombol');

      setTimeout(function(){
        teksScale.classList.add("scale1");
        stikerScale.classList.add("scale1");

        if(teksSekarang == 2){
          katanimasi("teks3");
        } else if(teksSekarang == 3) {
          katanimasi("teks4");
        } else if(teksSekarang == 4) {
          katanimasi("teks5");
        }
      }, 50);
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Initialize text content variables
var varteks3 = document.getElementById('teks3').innerHTML; 
document.getElementById('teks3').innerHTML = "";
var varteks4 = document.getElementById('teks4').innerHTML; 
document.getElementById('teks4').innerHTML = "";
var varteks5 = document.getElementById('teks5').innerHTML; 
document.getElementById('teks5').innerHTML = "";

function katanimasi(elementId) {
  var targetElement = document.getElementById(elementId);
  var textContent = elementId === 'teks3' ? varteks3 : 
                   (elementId === 'teks4' ? varteks4 : varteks5);

  new TypeIt("#" + elementId, {
    strings: ["" + textContent], 
    startDelay: 250, 
    speed: 40, 
    cursor: true,
    afterComplete: function(){
      clearInterval(scrollInterval);
      targetElement.innerHTML = textContent;
      setInterval(berjatuhan, 200);
    }
  }).go();
}

window.addEventListener("load", (event) => {
  window.scrollTo(0, 0);
  var overlay = document.querySelector(".loading-message");
  overlay.style.display = "none";
  var tomlv = document.querySelector(".blocklove");
  tomlv.style.display = "flex";
});

// window.onload = function() {
//   alert("⚠️‼️DISCLAIMER‼️⚠️\n\nSebelum memencet tombol, manusia tsb harus mematuhi & menjalankan aturan sesuai dengan nomor instruksi yang tersedia. Tidak boleh membaca nomor yang tidak sesuai urutan, hargai ya wkwk. Oke? Paham? Janji?\n\nJIKA MELANGGAR AKAN MENDAPAT KURMA‼️ ");
// };

var sudahKlik = true;
document.getElementById('loveIn').innerHTML = '<style>.lovein svg{animation:none;stroke:#ff0000;stroke-width:1.3;fill:none;width:45px;height:35px}</style><label class="lovein"><svg viewBox="0 0 24 24"><g transform="translate(2.550170, 3.550158)"><path d="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z"></path></g></svg></label><p id="ket">Sentuh KADOnya!</p>';

document.getElementById("loveIn").onclick = function() {
  if (sudahKlik) {
    audio.play();
    document.querySelector(".overlay").style.display = "none";

    var stiker1 = document.querySelector('#stiker1');
    var teks1 = document.querySelector('#teks1');
    stiker1.classList.add("scale1");
    teks1.classList.add("scale1");
  } else {
    sudahKlik = true;
    document.getElementById('loveIn').innerHTML = '<style>.lovein svg{animation:none;stroke:#ff0000;stroke-width:1.3;fill:none;width:35px;height:35px}</style><label class="lovein"><svg class="line" xmlns="M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z"></path></g></svg></label><p id="ket">Sentuh KADOnya!</p>';
  }
}

function berjatuhan() {
  const heart = document.createElement("div");
  heart.innerHTML = "<svg class='line spin' style='opacity:.5;z-index:100' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><path d='M3 2.5a2.5 2.5 0 0 1 5 0 2.5 2.5 0 0 1 5 0v.006c0 .07 0 .27-.038.494H15a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 1 14.5V7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h2.038A3 3 0 0 1 3 2.506zm1.068.5H7v-.5a1.5 1.5 0 1 0-3 0c0 .085.002.274.045.43zM9 3h2.932l.023-.07c.043-.156.045-.345.045-.43a1.5 1.5 0 0 0-3 0zM1 4v2h6V4zm8 0v2h6V4zm5 3H9v8h4.5a.5.5 0 0 0 .5-.5zm-7 8V7H2v7.5a.5.5 0 0 0 .5.5z'></path></g></svg>";

  heart.className = "heart-icon";
  heart.style.left = (Math.random() * 95) + "vw";
  heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
  document.body.appendChild(heart);
}

setInterval(function() {
  var heartArr = document.querySelectorAll(".heart-icon");
  if (heartArr.length > 100) {
    heartArr[0].remove();
  }
}, 100);

const scrollContainer = document.getElementById("scroll-container");
const textContainer = document.getElementById("textsec2");
var scrollInterval;

function autoScroll() {
  scrollContainer.scrollTop += 20;
}

scrollInterval = setInterval(autoScroll, 100);