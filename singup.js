const mainform=document.querySelector('#mainform')
const password=document.querySelector("#password")
const email=document.querySelector("#email")

mainform.addEventListener('submit',(e)=>{
  
    if(!Validite()){
     e.preventDefault()
    }
    else{
     mainform.setAttribute('action','./todo.html');
         mainform.submit();
     }
 
 
 })

 function Validite(){
    const emailVal= email.value.trim() 
    const passwordVal=password.value.trim() 
    let success=true
    
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