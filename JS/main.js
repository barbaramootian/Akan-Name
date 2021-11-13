 function incorrect(day,month) {
   if (day < 1 || day > 31 || month == 2 && day > 29){
       alert ("Please enter a valid day")
       day.focus();
       return false;
   }  
 }
 function Akan() {
    var dateofbirth = parseInt(document.getElementById("day").value);
    var monthofbirth = parseInt(document.getElementById("month").value);
    var yearofbirth = parseInt(document.getElementById("year").value);
    var gender = document.querySelector('input[name="Gender"]:checked').value

    var nameofmale = ["Kwasi"," Kwadwo", "Kwabena", "Kwaku", " Yaw", "Kofi","Kwame"];
    var nameoffemale = [" Akosua", "Adwoa", "Abenaa","Akua"," Yaa"," Afua" ,"Ama"];
    var dateoftheweeks =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];               
 }
 