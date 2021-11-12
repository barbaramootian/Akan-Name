const name0fAkan = () =>{
    var dateofbirth = document.getElementById("dateofbirth").value;
    var gender = document.getElementById(gender).value;
    var nameofmale = ["Kwasi"," Kwadwo", "Kwabena", "Kwaku", " Yaw", "Kofi","Kwame"];
    var nameoffemale = [" Akosua", "Adwoa", "Abenaa","Akua"," Yaa"," Afua" ,"Ama"];
    var dateoftheweeks =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
                         
   if (dateofbirth.trim()=== "" || gender.trim() === ""){
      document.getElementById("form").innerHTML = "Sorry, Please fill the form to know your Akan Name"
      return false;
   }else{
       if(gender == "male"){
           document.getElementById("name").innerHTML = ("Your Akan Name is" + " " +  nameofmale [day] );
           document.getElementById("day").innerHTML = ("The day you are born is" + " " +  dateoftheweeks[day] );
            return false;
       }else{
            document.getElementById("name").innerHTML = ("Your Akan Name is" + " " +  nameoffemale [day] );
            document.getElementById("day").innerHTML = ("The day you are born is" + " " +  dateoftheweeks[day] );
            return false;
        }
        return false;
   }
}
