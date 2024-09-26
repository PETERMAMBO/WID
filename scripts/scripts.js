document.addEventListener("DOMContentLoaded", () => {
  const SendMessageButton = document.getElementById("SendMessageButton");
  const FullName = document.getElementById("Fullname");
  const EmailContact = document.getElementById("EmailContact");
  const ProjectType = document.getElementById("ProjectType");
  const ContactTel = document.getElementById("ContactTel");
  const MessageContact = document.getElementById("messageContact");
  const successMessage = document.getElementById("errorDisplay");

  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  SendMessageButton.addEventListener("click", () => {
    if (EmailContact.value === "") {
      successMessage.style.display = "block";
      successMessage.textContent = "The email field cannot be empty";
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 2000);
    } else if (!EmailContact.value.match(emailPattern)) {
      successMessage.style.display = "block";
      EmailContact.value = "";
      console.log(EmailContact);
      successMessage.textContent = "Enter a valid email";
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 2000);
    } else if (ProjectType.value === "") {
      successMessage.style.display = "block";
      ProjectType.value = "";
      console.log(ProjectType);
      successMessage.textContent = "The project type field cannot be empty";
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 2000);
    } else if (ContactTel.value === "") {
      successMessage.style.display = "block";
      ContactTel.value = "";
      console.log(ContactTel);
      successMessage.textContent = "The Phone number field cannot be empty";
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 2000);
    } else {
      var params = {
        username: document.getElementById("Fullname").value,
        email_id: document.getElementById("EmailContact").value,
        project_id: document.getElementById("ProjectType").value,
        phonenumber_id: document.getElementById("ContactTel").value,
        message: document.getElementById("messageContact").value,
      };

      emailjs.send("service_xhsu8do", "template_hsx4pyr", params).then(() => {
        successMessage.style.display = "block";
        successMessage.innerHTML =
          "Message has been successfully sent &#128512;";
        setTimeout(() => {
          successMessage.style.display = "none";
        }, 2000);
      });

      FullName.value = "";
      ContactTel.value = "";
      EmailContact.value = "";
      ProjectType.value = "";
      MessageContact.value = "";
    }
  });
});
