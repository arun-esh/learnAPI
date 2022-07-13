'use strict';

// For NAV bar to be responsive on small screens

let title = document.getElementById('page-heading');

function myFunction() {
  var x = document.getElementById('myTopnav');
  if (x.className === 'topnav') {
    x.className += ' responsive';
  } else {
    x.className = 'topnav';
  }
}

let webUser = document.getElementById('username');
let WebPass = document.getElementById('password');
let submit = document.getElementById('submit');

if (window.localStorage) {
  console.log('Local Storage is supported');
  localStorage.setItem('user', 'admin');
  localStorage.setItem('pass', 'admin');

  let display = document.getElementById('display');

  submit.addEventListener('click', function () {
    if (
      webUser.value === localStorage.getItem('user') &&
      WebPass.value === localStorage.getItem('pass')
    ) {
      display.innerHTML = 'Welcome ' + username.value;
    } else {
      display.innerHTML = 'Invalid username or password';
      hint.innerHTML = 'Hint: try admin/admin';
    }
  });
} else {
  console.log('Local Storage is not supported');
}

// GEOLOCATION API
function userPosition() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      let userLocation = 'Position is (' + 'Latitude: ' + lat + ', ' + 'Longitude: ' + lon +')';
      document.getElementById('location').innerHTML = userLocation;
    });
  } else {
    alert('Sorry, your browser does not support HTML5 geolocation.');
  }
}
