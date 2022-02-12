window.addEventListener('load', () => {
  document.getElementById('signout').style.display = "none";
  document.getElementById('title').innerText = "Sign in";
})


function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  // document.getElementsByClassName('g-signin2').style.display = "none";
  // document.getElementById('signout').style.display = "block";
  document.getElementById("name").innerText = profile.getName();
  // document.getElementById('signout').addEventListener("click", signOut);
  document.getElementById('title').innerText = `Hello ${profile.getName()}`;
  // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  // console.log('Name: ' + profile.getName());
  // console.log('Image URL: ' + profile.getImageUrl());
  // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

};

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
    alert('User signed out.');
  });
  // document.getElementById('signout').style.display = "none";
  // document.getElementById('signout').removeEventListener("click", signOut);
  // document.getElementsByClassName('g-signin2').style.display = "block";
}