video.addEventListener("clik", function video(){
    alert("Ini video Coffeshop");
});

audio.addEventListener("click", function audio(){
    alert("Audio diputar");
});

gambar.addEventListener("click", function gambar(){
    alert("Ini gambar Coffe");
});

function updateTime() {
    var date = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = date.toLocaleDateString('en-US', options);
    var formattedTime = date.toLocaleTimeString('en-US');
    
    document.getElementById('date').textContent = formattedDate;
    document.getElementById('time').textContent = formattedTime;
  }
  
  // Panggil updateTime setiap detik (1000 milidetik)
  setInterval(updateTime, 1000);

  var carousel = document.querySelector(".carousel");

  function slideNext() {
    carousel.classList.add("slide");
    setTimeout(function() {
      carousel.appendChild(carousel.firstElementChild);
      carousel.classList.remove("slide");
    }, 500);
  }

  setInterval(slideNext, 3000);