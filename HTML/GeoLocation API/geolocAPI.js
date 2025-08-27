// ***** Geolocation API *****
// const x = document.getElementById("demo");

// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(success, error);
//     } else {
//         x.innerHTML = "Geolocation is not supported by this browser.";
//     }
// }

// function success(position) {
//     x.innerHTML =
//         "Latitude: " +
//         position.coords.latitude +
//         "<br>Longitude: " +
//         position.coords.longitude;
// }

// function error(error) {
//     alert("Sorry, no position available.");
// }

// ***** Drag & Drop API *****

function dragstartHandler(ev) { // for the image
    ev.dataTransfer.setData("text", ev.target.id);
}

function dragoverHandler(ev) { // ondragOver 
    ev.preventDefault();
}

function dropHandler(ev) {  // ondropHandle
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
