document.getElementById("myform").addEventListener("submit", function (hi) {
  hi.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const content = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  
  emailjs.sendForm("service_sxc6du8", "template_mazscql", this).then(function () {
      document.querySelector(".sent-message").style.display = "block";
      document.querySelector(".error-message").innerHTML = "";
      document.getElementById("myform").reset();
    })
    .catch(function (error) {
      document.querySelector(".error-message").innerHTML =
        "Failed to send message!";
      console.error(error);
    });
});
