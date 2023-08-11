// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
  apiKey: "AIzaSyBHiU2RMCSqLf5ET7s375VExolxSt-SSTE",
  authDomain: "portfolio-a0a65.firebaseapp.com",
  databaseURL: "https://portfolio-a0a65-default-rtdb.firebaseio.com",
  projectId: "portfolio-a0a65",
  storageBucket: "portfolio-a0a65.appspot.com",
  messagingSenderId: "219141416237",
  appId: "1:219141416237:web:509e9c131a728615e91fa4"
};

firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, email, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset(); 
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    email:email,
    message:message
  });
}