
const castle = document.getElementById("castle");

const hallway = document.getElementById("hallway");

const thunder = document.getElementById("thunder-audio");

const rumble = document.getElementById("thunder-rumble");

const shaggy = document.getElementById("shaggy-voice");

const music1 = document.getElementById("music1");

const daphne = document.getElementById("daphne");

const lamp = document.getElementById("lamp");

console.log("Lamp element is:", lamp);

const footprints = document.getElementById("footprints");

const cornerTag = document.getElementById("corner-tag");

const fullTag = document.getElementById("scooby-tag");

const btn = document.getElementById("check-btn");

const checker = document.getElementById("checker");

const startOverlay = document.getElementById("start-overlay");

startOverlay.addEventListener("click", () => {
  thunder.play().catch(() => {});
  rumble.play().catch(() => {});
  shaggy.play().catch(() => {});
  music1.play().catch(() => {});
  daphne.play().catch(() => {});

  thunder.pause();
  rumble.pause();
  shaggy.pause();
  music1.pause();
  daphne.pause();

  startOverlay.remove();

  setTimeout(() => thunder.play(), 1000);
  setTimeout(() => rumble.play(), 2900);
  setTimeout(() => shaggy.play(), 3700);
  setTimeout(() => music1.play(), 4500);
  setTimeout(() => daphne.play(), 15000);
});


function fadeToHallway() {
  castle.classList.remove("show");
   document.getElementById("scene-2").classList.add("show");
   hallway.classList.add("show");
}

setTimeout(() => {
  fadeToHallway();      
   
}, 7000);


function fadeInOverlay() {
  lamp.classList.add("visible");

}

setTimeout(fadeInOverlay, 9000);





let isLampOn = false;

let hasShownCornerTag = false;

lamp.addEventListener("click", () => {
  isLampOn = !isLampOn;

  if (isLampOn) {
    lamp.classList.add("on");
    footprints.classList.add("visible");
  } else {
    lamp.classList.remove("on");
    footprints.classList.remove("visible");
  }
  if (!hasShownCornerTag){
    cornerTag.classList.add("visible");
    hasShownCornerTag = true;

  }
  console.log("lamp clicked")
});

console.log("Lamp click listener attached");

let hasShownFullTag = false;

let hasShownChecker = false;

let hasShownBtn = false;

cornerTag.addEventListener("click", () => {
 if(!hasShownFullTag){ fullTag.classList.add("visible");
 hasShownFullTag = true;
checker.classList.add("visible");
hasShownChecker = true;
btn.classList.add("visible");
hasShownBtn = true;
document.getElementById("text-input").classList.add("visible");
 }
});

btn.addEventListener("click", () => {
  const text = document.getElementById("text-input").value.toLowerCase().replace(/[^a-z0-9]/g, "");
  
  const reversed = text.split("").reverse().join("");

  if (text && text === reversed) {
    alert("Jenkies! That IS a palindrome!");
  } else {
    alert("Ruh-roh! Not a palindrome!");
  }
});