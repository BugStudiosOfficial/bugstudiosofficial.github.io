function checkLogin(){
    var entEmail = document.getElementById('email').value;
    var entPwd = document.getElementById('pwd').value;

    var getEmail=localStorage.getItem('userEmail');
    var getPwd = localStorage.getItem('userPwd');

    if (entEmail == getEmail){
        if(entPwd == getPwd){
            alert("Sukces");
            window.location = "gcoin/panelzmmh.html";
            window.top.location = "gcoin/panelzmmh.html";
            return false;

        }
        else{
            alert("Hasło jest Źle wpisany");
        }
    }
    else{
        alert("Email jest Źle wpisane");
    }
}