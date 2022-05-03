
var firebaseConfig = {
    apiKey: "AIzaSyBRLiSU0qM6dQTZI4EyW2fb-grUHjDICQY",
    authDomain: "let-schatapp-51059.firebaseapp.com",
    databaseURL: "https://let-schatapp-51059-default-rtdb.firebaseio.com",
    projectId: "let-schatapp-51059",
    storageBucket: "let-schatapp-51059.appspot.com",
    messagingSenderId: "125588418638",
    appId: "1:125588418638:web:972474e43d971fae50531f",
    measurementId: "G-H2G1FFK69M"
  };



firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
   room_name = document.getElementById("room_name").value;
   firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
   });
   localStorage.setItem("room_name", room_name);
       window.location = "kwitter_page.html";_
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
  row = "<div class ='room_names' id ="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+ "</div><hr>";
  document.getElementById("output").innerHTML += row;
//End code
});});}
getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}
