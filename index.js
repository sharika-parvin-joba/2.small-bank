//login page
document.getElementById('login-btn').addEventListener('click',function(){
    const email= document.getElementById('email')
    const emailValue=email.value;
    const password= document.getElementById('password')
    const passwordValue=password.value;
    if(emailValue==='sharikajoba@gmail.com' && passwordValue==="12345"){
        window.location.href='bank.html';
    }
    else{
        alert('invalid email or password')
    }
    //console.log(emailValue,passwordValue)
  })


//deposit

// document.getElementById('deposit-btn').addEventListener('click',()=>{
//     const depositField=document.getElementById('deposit-field');
//     const depositFieldValue=depositField.value;
//     const depositFieldValueFloat=parseFloat(depositFieldValue);

//     const deposit=document.getElementById('deposit');
//     const depositValue=deposit.innerText;
//     const depositValueFloat=parseFloat(depositValue);

//     const totalDeposit=depositValueFloat+depositFieldValueFloat;
//     deposit.innerText=totalDeposit
//     depositField.value=''
//    })