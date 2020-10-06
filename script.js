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
