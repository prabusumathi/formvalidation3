const mainform=document.querySelector('#mainform')
const fistname=document.querySelector('#fname')

const phoneNumber=document.querySelector("#number")
const email=document.querySelector("#email")
const password=document.querySelector("#password")
const cpassword=document.querySelector("#cpassword")


mainform.addEventListener('submit',(e)=>{
  
   if(! Validite()){
    e.preventDefault()
   }
   else{
   
        mainform.setAttribute('action', './signup.html');
        mainform.submit();
    }


})

function Validite(){
    const fistnameVal=fistname.value.trim() 
    
 const   phoneNumberVal=phoneNumber.value.trim() 
 const emailVal= email.value.trim() 
 const passwordVal=password.value.trim() 
 const conformPasssVal=cpassword.value.trim() 
let success=true



if(fistnameVal===" "){
    success=false
    setError(fistname,'fistname is error')
}
else{
    setSuccess(fistname)
}



if(phoneNumberVal===''){
    success=false
    setError(phoneNumber,"please enter your number")
}
else if(phoneNumberVal==Number){
    success=false
setError(phoneNumber,'please enter valid number')
}
else if(phoneNumberVal.length<10 ){
    success=false
    setError(phoneNumber,"please enter 10 digite  number")


}
else{
    setSuccess(phoneNumber)
}

if(emailVal===" "){
    success=false
    setError(email,"email is required")
}
else if(!validateEmail(emailVal) ){
    success=false
setError(email,"please enter a valid email")
}
else{
    setSuccess(email)

}
if(passwordVal===" "){
    success=false
    setError(password,"please enter a password")
}
else if(passwordVal.length<4){
    success=false
    setError(password,"please enter 4 digit password")
}
else{
    setSuccess(password)
}

if(conformPasssVal===" "){
    success=false
    setError(cpassword,"please enter a password")
}
else if(conformPasssVal !== passwordVal){
    success=false
    setError(cpassword,"please enter same password")
}

else{
    
    setSuccess(cpassword)
}
return success
}


function setError(element,msg){
const inputgroup=   element.parentElement;
const errorElement=inputgroup.querySelector('.error') 

errorElement.innerText=msg
inputgroup.classList.add('error')
inputgroup.classList.remove('success')
}

function setSuccess(element){
    const inputgroup=   element.parentElement;
    const errorElement=inputgroup.querySelector('.error') 
    
    errorElement.innerText=" "
    inputgroup.classList.add('success')
    inputgroup.classList.remove('error')
    }

    function validateEmail(email) {
     
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        return re.test(String(email).toLowerCase());
    }