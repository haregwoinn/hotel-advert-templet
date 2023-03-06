const form = document.getElementById("next");
const Fname = document.getElementById("First");
const Lname = document.getElementById("Last");
const emailInput = document.getElementById("email");
const password = document.getElementById("password");
Fname.addEventListener('input', (e) =>{
    const emailInputValue = e.currentTarget.value;
if( Fname.value.length > 20 || Fname.value.length < 4 ){
    Fname.style.border = "thin solid red";
}
else{
    Fname.style.border="thin solid #0000ff";
}
})
Lname.addEventListener('input', (e) => {
    const x=e.currentTarget.value;
    if( Lname.value.length > 20 || Lname.value.length < 4 ){
        Lname.style.border = "thin solid red";
    }
    else{
        Lname.style.border = "thin solid #0000ff";
    }
})
emailInput.addEventListener("input", (e) => {
    const emailInputValue = e.currentTarget.value;
    if( /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailInputValue) != true) {
        emailInput.style.border="thin solid red";
    }
    else{
        emailInput.style.border="thin solid #0000ff";
    }
})
password.addEventListener("input", (e) => {
    const emailInputValue = e.currentTarget.value;
    if( /[0-9]/.test(password) != true && password.value.length != 4){
        password.style.border="thin solid red";
    }
    else{
        password.style.border="thin solid #0000ff";
    }
})
form.addEventListener('submit', (e) =>{
    e.preventDefault();
})




form.addEventListener('submit', (e)=>{
   const errormassage =[];
    e.preventDefault();
    if(Fname.value.length > 20 || Fname.value.length < 4 ||  Fname.value ===''){
        errormassage.push('insert correctly');
        emailInput.style.border="thin solid red";
    }
    if( /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailInputValue) != true) {
        errormassage.push('insert correctly');
        emailInput.style.border="thin solid red";
    }
    if(password.value.length > 20 || password.value.length < 4 ||  password.value ===''){
        errormassage.push('insert correctly');
        emailInput.style.border="thin solid red";
    }
    if(errormassage.length > 0){
        echo""
    }
})