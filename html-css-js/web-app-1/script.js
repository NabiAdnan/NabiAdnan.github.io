const users=[];

function dispMessage() {
  let email = document.getElementById("txtEmail").value;
  let password = document.getElementById("txtPassword").value;
  let found= users.find(
    (element) => element.email === email && element.password === password
  );
  if(found){
    document.getElementById("lblMessage").innerHTML = "Welcome"+" "+found.name;
  }else{
    document.getElementById("lblMessage").innerHTML = "Access Denied";
  }
}

function addUSer(){
    let name=document.getElementById("txtName").value
    let email=document.getElementById("txtEmail").value
    let password=document.getElementById("txtPassword").value
    const user={
        name:name,
        email:email,
        password:password
    }
    
    users.push(user)
    showLoginForm()
    console.log(users)
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
      <p><input type="text" id="txtName" placeholder="Enter Name"/></p>
      <p><input type="text" id="txtEmail" placeholder="Enter Email"/></p>
      <p><input type="password" id="txtPassword" placeholder="Enter Password"/></p>
      <p><button class="register-btn" onclick="addUSer()">Register</button></p>
      <p>Already have an account? <a href="#" onclick="showLoginForm()">Log In</a></p>
    `
    root.innerHTML = str
}