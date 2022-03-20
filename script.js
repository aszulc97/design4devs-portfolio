let keyframes = [{ opacity: 0 }, { opacity: 1 }];

let fromLeft = [{ transform: "translateX(-300px)" }, { transform: "translateX(0)" }];

let element = document.querySelector("header");
element.animate(keyframes, 1000);

let logo = document.querySelector("nav > a");
logo.animate(fromLeft, 1000);
