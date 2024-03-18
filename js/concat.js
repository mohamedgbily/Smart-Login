
var username = localStorage.getItem('welcomeUsername')
if (username == null) {
    

    // location.replace('file:///E:/Route-Front-End%20Diploma/Assements/w10-js/Ass-10/signup.html')
    location.replace('https://' + location.hostname + '/signup.html')
}