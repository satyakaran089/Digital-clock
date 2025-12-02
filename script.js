
      let hrs = document.getElementById("hours");
let min = document.getElementById("minutes");
let sec = document.getElementById("seconds");

setInterval(()=>{
    let currenttime = new Date();

    hrs.innerHTML=(currenttime.getHours()<10?"0":"") +currenttime.getHours();
    min.innerHTML=(currenttime.getMinutes()<10?"0":"") + currenttime.getMinutes();
    sec.innerHTML=(currenttime.getSeconds()<10?"0":"") + currenttime.getSeconds();
},1000)

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker registered', reg))
      .catch(err => console.log('SW registration failed', err));
  });
}
