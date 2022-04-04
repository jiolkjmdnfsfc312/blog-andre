// Your web app's Firebase configuration ENTER YOUR FIREBASE DETAILS HERE

var firebaseConfig = {
    apiKey: "AIzaSyDI7QMe0VaA8fZkq12abBhyxkFCGSTCxaE",
    authDomain: "blogandre-id.firebaseapp.com",
    databaseURL: "https://blogandre-id-default-rtdb.firebaseio.com",
    projectId: "blogandre-id",
    storageBucket: "blogandre-id.appspot.com",
    messagingSenderId: "807458840141",
    appId: "1:807458840141:web:5d8f62ab1ac2ad781ac604",
    measurementId: "G-YSM5L1QHSN"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var form = document.querySelector('#loginForm');
var otp_form = document.querySelector('#otpForm');
var message = document.querySelector('#messageDiv');
var sign_out = document.querySelector("#signOut");
var message_value = document.querySelector('.message');


// check if user is logged in or not
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        if(window.location.pathname != '/../M/Project/'){
            window.location = '../index.html';
        }
    } else {
        if(window.location.pathname === '/../M/Project/'){
            window.location = 'index.html';
        }
    }
});

if(window.location.pathname != '/../M/Project/'){
    // verification captcha setting 
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
        'size': 'invisible',
        'callback': (response) => {
            console.log('captcha verified');
        }
    });
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().settings.appVerificationDisabledForTesting = true; // turn this off in production stage
    
    // show error message function 

function showErrorMessage(erro_message){

    message.style.display = 'block';
    message_value.innerText = erro_message;
    console.log(erro_message);
    setTimeout(function(){
        message.style.display = 'none';
    }, 3000);
}

    // user login
    if(form){
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            let phone_number = form.phone.value;
        
            // setup invisible recaptcha 
            firebase.auth().signInWithPhoneNumber(phone_number, appVerifier)
            .then((confirmationResult) => {
                console.log("OTP SEND", confirmationResult);
                form.style.display = 'none';
                otp_form.style.display = 'block';
                window.confirmationResult = confirmationResult;
            }).catch((error) => {
                showErrorMessage(error.message);
            });
            
        })
    }

    // verify otp 
    if(otp_form){
        otp_form.addEventListener('submit', function(e) {
            e.preventDefault();
            let otp_number = otp_form.otp_value.value;
            confirmationResult.confirm(otp_number).then((result) => {
                // User signed in successfully.
                const user = result.user;
                window.location = '../index.html';
            }).catch((error) => {
                showErrorMessage(error.message);
            });
        })
    }

}



// sign out  
if(sign_out){
    sign_out.addEventListener('click', function(e) {
        firebase.auth().signOut().then(() => {
            window.location = 'index.html';
        }).catch((error) => {
        // An error happened.
        });
    })
}