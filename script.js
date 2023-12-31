const usernameInput = document.getElementById("username");                               
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const formE1 = document.getElementById("form");
const submitInput = document.getElementById("btn-submit")
function showErrorMessage(input, message){
  const formControlE1 =  input.parentElement;
   const errorE1 = formControlE1.querySelector(".error");
   errorE1.classList.add('error-message');
   errorE1.innerText = message;
}
function showSuccessMessage(input){
  input.classList.add('input-success');
  const formControlE1 =  input.parentElement;
    const errorE1 = formControlE1.querySelector(".error");
   errorE1.classList.remove('error-message');
  }
formE1.addEventListener('submit', function (event) {
  event.preventDefault();
 
  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();
  if(username){
    showSuccessMessage(usernameInput);
  }else{
    showErrorMessage(usernameInput,'username is mandatory');
  }
  if(email){
    showSuccessMessage(emailInput);
  }else{
  showErrorMessage(emailInput,'Email is mandatory');
  }
  if(password){
    showSuccessMessage(passwordInput);
  }else{
    showErrorMessage(passwordInput, 'Password is mandatory');
  }
  if(confirmPassword){
    showSuccessMessage(confirmPasswordInput);
  }else{
    showErrorMessage(confirmPasswordInput, 'Confirm password is mandatory');
  }
});