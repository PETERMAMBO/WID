import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

document.addEventListener("DOMContentLoaded", () => {
  const firebaseConfig = {
    apiKey: "AIzaSyBkawmpHjRNOkFsfuJpeHv6nT4RjdiIRME",
    authDomain: "wideintelligentdata.firebaseapp.com",
    projectId: "wideintelligentdata",
    storageBucket: "wideintelligentdata.appspot.com",
    messagingSenderId: "136116539851",
    appId: "1:136116539851:web:0321eeb18cdfb43481264e",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getDatabase(app);

  const footerEmailSubsribeButton =
    document.getElementById("footerSubsribeBtn");
  const footerEmailSubsribe = document.getElementById("footerInputEmail");
  const errorCheckDisplay = document.getElementById("Popup");
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  footerEmailSubsribeButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (footerEmailSubsribe.value === "") {
      errorCheckDisplay.style.display = "block";
      errorCheckDisplay.textContent = "The email field cannot be empty";
      setTimeout(() => {
        errorCheckDisplay.style.display = "none";
      }, 3000);
    } else if (!footerEmailSubsribe.value.match(emailPattern)) {
      errorCheckDisplay.style.display = "block";
      errorCheckDisplay.textContent = "Enter a valid email";
      setTimeout(() => {
        errorCheckDisplay.style.display = "none";
      }, 3000);
      footerEmailSubsribe.value = "";
    } else {
      set(ref(db, "user/" + footerEmailSubsribe.value.replace(".", ",")), {
        email: footerEmailSubsribe.value,
      })
        .then(() => {
          errorCheckDisplay.style.display = "block";
          errorCheckDisplay.innerHTML =
            "Thank you for subscribing to W.I.D News  , " +
            footerEmailSubsribe.value;
          setTimeout(() => {
            errorCheckDisplay.style.display = "none";
          }, 3000);

          footerEmailSubsribe.value = "";
        })
        .catch((error) => {
          console.error("Error saving to database:", error);
          errorCheckDisplay.style.display = "block";
          errorCheckDisplay.textContent =
            "An error occurred. Please try again.";
          setTimeout(() => {
            errorCheckDisplay.style.display = "none";
          }, 3000);
        });
    }
  });
});
