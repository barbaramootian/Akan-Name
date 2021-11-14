//Validation function
function incorrect(day, month) {
   if (day < 1 || day > 31 || month == 2 && day > 29) {
       alert("Please enter a valid day");
       day.focus();
       return false;
   } else if(month < 1 || month > 12 ) {
     alert("Please enter a valid month");
     month.focus();
     return false;
   }else{
     return true;
   }
 }

 // function to alert the Akan name depending on  user input
 function Akan() {
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var gender = document.querySelector('input[name="Gender"]:checked').value
if(incorrect(day , month)){
     var dayIndex = new Date (year, month -1, day).getDay();
     alert ("You Akan name is: " + getAkan(dayIndex, gender)  + "");
    }
}
function getAkan(dayIndex, gender){
    var gentleman = ["Kwasi"," Kwadwo", "Kwabena", "Kwaku", " Yaw", "Kofi","Kwame"];
    var lady = [" Akosua", "Adwoa", "Abenaa","Akua"," Yaa"," Afua" ,"Ama"]; 
    return gender === "Male" ? gentleman[dayIndex] : lady[dayIndex];         
}
var dateoftheweeks =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];