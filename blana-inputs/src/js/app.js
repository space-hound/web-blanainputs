import "./../scss/temp.scss";

console.log("It works!");

import BlanaText from "./Blana/BlanaText/blana-text";
import BlanaNumeric from "./Blana/BlanaNumeric/blana-numeric";
import BlanaInterval from "./Blana/blanaInterval/blana-interval";
import BlanaCarousel from "./Blana/BlanaCarousel/blana-carousel";
import BlanaSelect from "./Blana/BlanaSelect/blana-select";

document.addEventListener("DOMContentLoaded", function() {
    let blanaText = BlanaText(document.querySelector(".temp-blana-text"));
    let blanaNumeric = BlanaNumeric(document.querySelector(".temp-blana-numeric"));
    let blanaInterval = BlanaInterval(document.querySelector(".temp-blana-interval"));
    let blanaCarousel = BlanaCarousel(document.querySelector(".temp-blana-carousel"));
    let blanaSelect = BlanaSelect(document.querySelector(".temp-blana-select"));

    console.log(blanaCarousel);
    console.log(blanaSelect);
})