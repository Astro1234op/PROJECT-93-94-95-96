function addUser() 
{
    user_name = document.getElementById("User_name").value;
    firebaseConfig.databaseURL().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}