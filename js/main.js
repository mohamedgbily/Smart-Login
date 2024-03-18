
//----------------------------[Global Variables]----------------------------------------
var userNameInput = document.querySelector('.userName');
var userEmailInput = document.querySelector('.userEmail');
var userPassInput = document.querySelector('.userPass');
var signupBtnIput = document.querySelector('.signupBtn');
var successRegistration = document.querySelector('.successRegistration');
var faildRegistration = document.querySelector('.faildRegistration');
var signup = document.querySelector('.signup');
var signin = document.querySelector('.signin');
var loginPage =document.querySelector('.login');
var registerPage = document.querySelector('.register')
var emptyIputs =document.querySelector('.emptyIputs')
var allUsersData = [];
if( localStorage.getItem('allUsersData') != null ){                   
 allUsersData = JSON.parse(localStorage.getItem('allUsersData'));
}

//-----------------------[event in ancor to change from signin to signup vs]----------------
signup.addEventListener('click' , function(){
    loginPage.classList.add('d-none');
    registerPage.classList.remove('d-none');
    
})
signin.addEventListener( 'click' , function(){
    registerPage.classList.add('d-none');
    loginPage.classList.remove('d-none');
    
    
} )


//------------------------------[event in sign-up button]---------------------------------
signupBtnIput.addEventListener( 'click' , function(){

 



    if(allUsersData.length == 0){
        getUsersData();
        // successRegistration.classList.remove('d-none')
        // faildRegistration.classList.add('d-none')
        console.log(allUsersData);
    }
else{
     if(isEmailExist() == false){
        faildRegistration.classList.remove('d-none')
        successRegistration.classList.add('d-none')
        console.log('exsist');
        console.log(allUsersData);
     }
     else{
        getUsersData();
        // successRegistration.classList.remove('d-none')
        // faildRegistration.classList.add('d-none')
        console.log(allUsersData);
     }
}

   
})


//----------------------------------[functiion to registration new user]----------------
function getUsersData(){
        
    if( validateName() && validateEmail() && validatePass() ){

     emptyIputs.classList.add('d-none')
     successRegistration.classList.remove('d-none');
     faildRegistration.classList.add('d-none');
    var usersData = {

        name: userNameInput.value,
        email: userEmailInput.value,
        password: userPassInput.value,
    };
    allUsersData.push(usersData);  
    localStorage.setItem( 'allUsersData' , JSON.stringify(allUsersData) ) ;
    clearUsersData();
    // console.log(allUsersData);
}
    else{
        emptyIputs.classList.remove('d-none');
        successRegistration.classList.add('d-none');
        faildRegistration.classList.add('d-none');
    }
}
//---------------------------------[function to clear user data from input fields]----------
function clearUsersData(){
    // userNameInput.value = '';
    // userEmailInput.value = '';
    userPassInput.value = '';
}
//-----------------------------------------[is mail exsist]------------------
function isEmailExist() {
    for (var i = 0; i < allUsersData.length; i++) {
        if (allUsersData[i].email == userEmailInput.value) {
            return false
        }
    }
      
}
 

//---------------------------------[is input empty]----------------------
function isEmptyIputs() {

    if (userNameInput.value == "" || userEmailInput.value == "" || userPassInput.value == "") {
        return false
    } else {
        return true
    }
}



//---------------------[validation inputs]-------------------
function validateName(){
    var nameRegex = /^([a-z]|[A-Z]){3,9}$/;
    nameRegex.test(userNameInput.value);
    return nameRegex.test(userNameInput.value);
}
function validateEmail(){
    var nameRegex = /^([a-z]|[A-Z]){3,9}$/;
    nameRegex.test(userEmailInput.value);
    return nameRegex.test(userEmailInput.value);
}
function validatePass(){
    var nameRegex = /^[0-9]{3,6}$/;
    nameRegex.test(userPassInput.value);
    return nameRegex.test(userPassInput.value);
}




//-------------------------------------[login validatin]----------------
var loginMail = document.querySelector('.val-mail');
var loginPassword = document.querySelector('.val-password');
var loginBtn = document.querySelector('.val-btn');
var linkHomePage = document.querySelector('.ancor-home');
var notvalidMessage = document.querySelector('.notvalid-message');
var reqMessage  = document.querySelector('.req-message');


//------------------------------------
loginBtn.addEventListener('click' , function(){
    if (loginMail.value == '' || loginPassword.value == '' ) {
        reqMessage.classList.remove('d-none')
    }
   else {

   if( isMailAndPassRegister() == false) {
    
    //-----------
    linkHomePage.setAttribute('href' , './index.html');
    console.log('goo...');
    notvalidMessage.classList.add('d-none');
    reqMessage.classList.add('d-none')
    
   }
   else{
    linkHomePage.setAttribute('href' , '#');
    notvalidMessage.classList.remove('d-none');
    reqMessage.classList.add('d-none')
    console.log('email error');
  

   }
}
})

function isMailAndPassRegister(){
  
    

    for (var i = 0 ; i < allUsersData.length ; i++) {
        if (allUsersData[i].email == loginMail.value && allUsersData[i].password == loginPassword.value) {
            localStorage.setItem('welcomeUsername' , allUsersData[i].name) ;
        
        
            return false;
        }
    }
    }

    //---------------------[welcome message in home page]---------------
 
var username = localStorage.getItem('welcomeUsername');
console.log(username);

 document.getElementById('username').innerHTML = 'Welcome' + ' ' + username;
     console.log(document.querySelector('#username'));

 
    //---------------------[loginout]----------------

  var logoutBtn = document.querySelector('.logout');
  console.log(loginBtn);

  logoutBtn.addEventListener('click' , function() {
    // location.replace('file:///E:/Route-Front-End%20Diploma/Assements/w10-js/Ass-10-JS/signup.html')
    location.replace( location.hostname + './signup.html')
   
    
  })
