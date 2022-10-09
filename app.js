
const form=document.getElementById("form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const password1=document.getElementById("password1");

form.addEventListener('submit', e =>{
    
    e.preventDefault();
    checkInput();
});

function checkInput(){
    const usernameValue=username.value.trim();
    const emailValue=email.value.trim();
    const passwordValue=password.value.trim();
    const password1Value=password1.value.trim();

    if(usernameValue === ''){
        setError(username, 'Username Cannot Be Blank');
    }
    else{
        setSuccess(username);
    };

    if(emailValue === ''){
        setError(email, 'Email Cannot Be Blank');
    }
    else if(!isEmail(emailValue)){
        setError(email, 'Not a Valid Email');
    }
    else{
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password, 'Password Cannot Be Blank');
    }
    else{
        setSuccess(password);
    }

    if(password1Value === ''){
        setError(password1, 'Password Cannot Be Blank')
    }
    else if(passwordValue !== password1Value){
        setError(password1, 'Password Does not Match')
    }
    else{
        setSuccess(password1);
    }

}
    function setError(input, message){
        const formfill = input.parentElement;
        const small = formfill.querySelector('small');
        formfill.className = 'form-fill error';
        small.innerText = message;
    }

    function setSuccess(input){
        const formfill = input.parentElement;
        formfill.className = 'form-fill success';
    }




function isEmail(email){
    return  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}