
 // Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyC1dOVd8S66YHT4aycqCBt4TNS0vy0RvpY",
  authDomain: "puffy-2b0c1.firebaseapp.com",
  databaseURL: "https://puffy-2b0c1-default-rtdb.firebaseio.com",
  projectId: "puffy-2b0c1",
  storageBucket: "puffy-2b0c1.appspot.com",
  messagingSenderId: "812987241099",
  appId: "1:812987241099:web:678cb61b050f3f2c763a8e",
  measurementId: "G-1FVYR9PDCL"
};
firebase.initializeApp(firebaseConfig);
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

    function getData()
     {
       firebase.database().ref("/").on('value', function(snapshot) 
       {
         document.getElementById("output").innerHTML = "";
         snapshot.forEach(function(childSnapshot)
        {
          childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });
    
    });
  
  }
getData();
function redirectToRoomName(name) 
{ 
  console.log(name); 
  localStorage.setItem("room_name", name); 
  window.location = "kwitter_page.html"; 
}

function logout()
 { 
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html"; 
}
