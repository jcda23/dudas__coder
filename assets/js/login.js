const dataLogin = [];
let loginActive;
function login() {
  class LoginData {
    constructor(mail, pass) {
      this.mail = mail;
      this.pass = pass;
    }
  }
  let loginEmail = document.getElementById("mail").value;
  let loginPassword = document.getElementById("pass").value;
  let sesion = new LoginData(loginEmail, loginPassword);
  dataLogin.push(sesion);
  verificarSesion(sesion);
}

function verificarSesion(sesion) {
  let baseDatos = localStorage.getItem("addNewUser");
  let user = JSON.parse(baseDatos);
  if (baseDatos === null) {
    document
      .getElementById("formulario__mensaje2")
      .classList.add("formulario__mensaje-activo");
    setTimeout(() => {
      document
        .getElementById("formulario__mensaje2")
        .classList.remove("formulario__mensaje-activo");
    }, 2000);
  }
  let verificar = user.find((user) => {
    return user.email === sesion.mail && user.password === sesion.pass;
  });
  if (verificar) {
    localStorage.setItem("loginActive", verificar);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "BENVENIDO !!!",
      showConfirmButton: false,
      timer: 1500,
    });
    setTimeout(() => {
      window.location.href = "../../index.html";
    }, 5000);
  } else {
    localStorage.setItem("loginActive", verificar);
    document
      .getElementById("formulario__mensaje2")
      .classList.add("formulario__mensaje-activo");
    setTimeout(() => {
      document
        .getElementById("formulario__mensaje2")
        .classList.remove("formulario__mensaje-activo");
    }, 2000);
  }
}
