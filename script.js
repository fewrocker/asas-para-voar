document.addEventListener("DOMContentLoaded", () => {
  const registerButtons = document.querySelectorAll(".register-button")

  registerButtons.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      const email = btn.parentNode.querySelector(".input-email").value
      const webinar_1 = btn.parentNode.querySelector("#webinar1").checked
      const webinar_2 = btn.parentNode.querySelector("#webinar2").checked
      const webinar_3 = btn.parentNode.querySelector("#webinar3").checked

      const params = {
        email: email,
        workshop_1: webinar_1,
        workshop_2: webinar_2,
        workshop_3: webinar_3,
      }

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
