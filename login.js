

document.getElementById("btn").addEventListener("click", function(){

    let userdetails = {
        username : document.getElementById("Username").value,
        email : document.getElementById("Email").value,
        password : document.getElementById("Password").value,
    
    }
    let passwordregex = /(?=.*[0-9])(?=.*[A-Z])(?=.*\W)(?!.*\s)/g
    let usernameregex = /^[A-Za-z0-9]{3,}$/g
    let emailregex = /^[a-z0-9]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/gi
    class user{
        constructor(userdetails){
            this.Username = userdetails.username
            this.Email = userdetails.email
            this.Password = userdetails.password
        }

        login(){
            if(!usernameregex.test(this.Username) || !passwordregex.test(this.Password) || !emailregex.test(this.Email)){
                alert("invalid credentials")
                
            }else {
                alert("Login sucess")
            }
        }
    }

    let test = new user(userdetails)

  
    if(userdetails.username && userdetails.email && userdetails.password){
        alert("sucess")
        test.login()
    }else {
        alert("invalid credentials")
    }
})