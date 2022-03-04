function ValidateForm(){
    let arr = document.forms["Registration_Form"];
    let x = arr["password"].value;
    let y = arr["re-enter_password"].value;
    if(x == y){
        document.write("Successfully Registered");
    }
    else{
        //alert("Password and Re-enter Password should be same");
        document.getElementById('msg').style.color = "red";
        document.getElementById('msg').innerHTML = "not matching";
        return false;
    }
}