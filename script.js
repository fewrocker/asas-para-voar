$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const registerButtons = document.querySelectorAll(".register-button")

  registerButtons.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const email = btn.parentNode.querySelector(".input-email").value
      const option = btn.parentNode.querySelector(".select").value

      const params = { email, option }

      const response = await axios.post("https://smartmultas.com.br/client/rock_contacts", params);

      if (response.data.success)  {
        btn.parentNode.querySelector(".request-success").style.display = ''
        window.open('https://evoe.cc/volunteerweek-crea?timestamp=1601946356967', '_blank');
      } else {
        btn.parentNode.querySelector(".request-success").style.display = ''
      }
    })
  })
})
