const firebaseConfig = {
      apiKey: "AIzaSyD3Z07swSMBGv4UPPqL6MQ9R93Z8LxKnD4",
      authDomain: "kwitter-d6701.firebaseapp.com",
      databaseURL: "https://kwitter-d6701-default-rtdb.firebaseio.com",
      projectId: "kwitter-d6701",
      storageBucket: "kwitter-d6701.appspot.com",
      messagingSenderId: "184188300890",
      appId: "1:184188300890:web:fb4818adaae6a54ce1b263",
      measurementId: "G-E4N503YGJ9"
    };
    
    
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
