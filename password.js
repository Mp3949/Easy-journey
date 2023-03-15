function checkPassword(){ 
    let password = document.getElementById("Password").value;
    let cnfrmpassword = document.getElementById("C-Password").value;
    console.log(password, cnfrmpassword);
    let message = document.getElementById("message");
    
    if(password.length != 0){
        if (password == cnfrmpassword ){
            message.textContent = "Passwords match";
            message.style.backgrounndColor = "#3ae374";
        }
        else{
            message.textContent = "Passwords don't match";
            message.style.backgrounndColor = "#ff4d4d";
        }
    }
    else{
        alert("Password can't be empty");
        
        message.textContent = "";
    }
}