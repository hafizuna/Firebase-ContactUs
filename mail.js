const firebaseConfig = {
  apiKey: "AIzaSyCEfdmnW1cG5ZuO7RKQQ4echQiLMnHP6gA",
  authDomain: "contactform-aaf55.firebaseapp.com",
  databaseURL: "https://contactform-aaf55-default-rtdb.firebaseio.com",
  projectId: "contactform-aaf55",
  storageBucket: "contactform-aaf55.appspot.com",
  messagingSenderId: "152164953499",
  appId: "1:152164953499:web:7c3a559add8e904fc4853e",
};

firebase.initializeApp(firebaseConfig);

// Reference for database
var contactFormDB = firebase.database().ref("ContactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var emailId = document.getElementById("emailId").value;
  var msgContent = document.getElementById("msgContent").value;

  saveMessages(name, emailId, msgContent);

  document.querySelector(".alert").style.display = "block";

  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 4000);

  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailId, msgContent) => {
  var newContactForm = contactFormDB.push();
  newContactForm.set({
    name: name,
    emailId: emailId,
    msgContent: msgContent,
  });
};
