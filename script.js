const signBtn = document.getElementById('signbutton');
const logBtn = document.getElementById('logbutton');
const bookBtn = document.getElementById('bookbutton');

signBtn.addEventListener("click", function(){
    console.log("you have done it");
});


window.addEventListener('click', function(event){
    if(event.target === signBtn){
        let firstName=  window.prompt("Enter your first name");
        let lastName = window.prompt("Enter your last name")
        let email  = window.prompt("Enter your email");
        let password = window.prompt("Enter your password")
    }
});

window.addEventListener('click', function(event){
    if(event.target === logBtn){
        let email2  = window.prompt("Enter your email");
        let password2 = window.prompt("Enter your password");
    }
});

window.addEventListener('click', function(event){
    if(event.target === bookBtn){
        this.alert("thanks for booking")
    }
});