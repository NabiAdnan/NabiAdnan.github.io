function dispMessage() {
  // a=10
  // b=20
  // c=a+b
  //alert("Hello")
  // alert(document.getElementById("txtEmail").value)
  // lblMessage.innerHTML = document.getElementById("txtEmail").value + "-" + document.getElementById("txtPassword").value
  let email = document.getElementById("txtEmail").value;
  let password = document.getElementById("txtPassword").value
  if (email === "john@gmail.com" && password === "1234") {
    lblMessage.innerHTML = "Welcome";
  } else {
    lblMessage.innerHTML = "Access Denied";
  }
}

function showLoginForm(){
    let str = `
    <h3>Login Form</h3>
      <p><label id="lblMessage"></label></p>
      <p><input type="text" id="txtEmail" /></p>
      <p><input type="password" id="txtPassword" /></p>
      <p><button class="login-btn" onclick="dispMessage()">Log In</button></p>
      <hr>
      <p><button class="register-btn" onclick="showRegisterForm()">Create Account</button></p>
    `
    root.innerHTML = str
}

function showRegisterForm(){
    let str =  `
     <h3>Registration Form</h3>
    `
    root.innerHTML = str
}