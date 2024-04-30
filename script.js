let timeLeftElement= document.getElementById("daylefttoclass");
setInterval(timeLeftToClass,1000)

function timeLeftToClass () {
    let ourNextClass = new Date("5,01,2024 11:00");
let currDate = new Date();
let currMilli = currDate.getTime();
let timeMilli = ourNextClass.getTime();
let timeLeft = (timeMilli - currMilli)

let daysLeft = Math.floor((timeLeft /  1000 / 60 / 60 / 24));
let hoursLeft = Math.floor(( timeLeft % (1000 * 60 * 60 * 24 ) / (1000 * 60 * 60)))
let minutesLeft =  Math.floor( timeLeft % ( 1000 * 60 * 60 ) / (1000 * 60));
let secondsLeft =  Math.floor( timeLeft % (1000 * 60) / 1000)

    timeLeftElement.innerHTML ="<h2> Calculate Our Next Class Time Left </h2>"  + "<h2>" +  daysLeft + " DAYS " + hoursLeft + " HOURS " + minutesLeft + " MINUTES " + secondsLeft + " SECONDS LEFT  </h2> ";


if (timeLeft < 0){
    clearInterval(timeLeftToClass);
    timeLeftElement.innerHTML ="<h2>Class Has Been Started Or Finished.</h2>"
}
}

function myTimer() {
    const date = new Date();
    let todayDate = date.getDate();
  
    let dayArr = [
      "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",
    ];
  
    let day = dayArr[date.getDay()];
  
    let months = [
      "January","Feburary","March","April","May","June","July","August","September","October","November","December",
    ];
  
    let month = months[date.getMonth()];
  
    let year = date.getFullYear();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let timePeriod ;
  
    if  (hours >= 12){
      timePeriod = "PM"
    }else{
      timePeriod = "AM"
    }
    if (hours >= 12){
      hours = hours % 12
    }else{
      hours = hours
    }
    if (hours === 0 ){
      hours = 12
    }else{
      hours = hours
    }
    if (minutes <= 9) {
      minutes = "0" + minutes;
    } else {
      minutes = minutes;
    }
    if (seconds <= 9) {
      seconds = "0" + seconds;
    } else {
      seconds = seconds;
    }
  
    document.getElementById("date").innerHTML =
      "<h2 class='date'> DATE : " +day +",  " +month +" " +todayDate +", " +year +"<br>TIME : " +hours +" : " +minutes +" : " +seconds + " " + timePeriod +"</h2>";
  }
  setInterval(myTimer, 1000);

  
//   let countAfterBirth = document.getElementById("birthyear");
//   let getBirthDate = prompt("Enter Your Date Of Birth With Seperate With Space or , - / . Otherwise you will get NAN").toString();
  
//   function calcuDays (birthDate) {
//     let currDate = new Date();
//     birthDate = new Date(birthDate);
//     let currentYear = currDate.getFullYear();
//     let birthYear = birthDate.getFullYear();
//     let currtime = currDate.getTime();
//     let birthTime = birthDate.getTime();
//     let dif = currtime - birthTime;
//     let secondAfter = dif / 1000 // for seconds.
//     let minutesAfter = secondAfter / 60 // for minutes.
//     let hoursAfter = minutesAfter / 60 // for hours.
//     let daysAfter = hoursAfter / 24 // for days.
//     let monthAfter = currDate.getMonth() - birthDate.getMonth() + (12 * (currDate.getFullYear() - birthDate.getFullYear()));
//     let yearsafter = currDate.getFullYear() - birthDate.getFullYear() // calculate year
//      countAfterBirth.innerHTML += " <h2> Current Year " + currentYear + "</h2>";
//      countAfterBirth.innerHTML += " <h2>Your Birth Year " + birthYear + "</h2>";
//      countAfterBirth.innerHTML += "<h2>Years : after your birth " + Math.floor(yearsafter) + "</h2>";
//      countAfterBirth.innerHTML += "<h2>Month : after your birth " + Math.floor(monthAfter) + "</h2>";
//      countAfterBirth.innerHTML += "<h2>Days : after your birth "  + Math.floor(daysAfter) + "</h2>";
//      countAfterBirth.innerHTML += "<h2>Hours : after your birth " + Math.floor(hoursAfter) + "</h2>";
//      countAfterBirth.innerHTML += "<h2>Minutes : after your birth " + Math.floor(minutesAfter) + "</h2>";
//      countAfterBirth.innerHTML += "<h2>Seconds : after your birth " + Math.floor(secondAfter) + "</h2>";
// }

// calcuDays(getBirthDate);

let months = [
  "January","Feburary","March","April","May","June","July","August","September","October","November","December",
];

const todayDate = new Date;
let getMonth = todayDate.getMonth();
document.write(( " <h2> Month is " + months[getMonth] + " </h2> "));


let dayArr = [
  "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",
];

let getDay = todayDate.getDay();
document.write(("<h2> Today is " + dayArr[getDay].slice(0,3))+ " </h2> ")


if (dayArr[getDay] === "Sunday" || dayArr[getDay] === "Saturday"){
  alert("Its Fun Day");
}

let getDate = todayDate.getDate();

if (getDate <= 15){
  document.write("<h2> Today Date is " + getDate + " Its First Fifteen Days of Month" +  "</h2>" )
}else{
  document.write("<h2> Today Date is " + getDate + " Its last Fifteen Days of Month" +  "</h2>" )

}

let starttimeOfJavascript = new Date().getTime();
let startminuteOfJavascript = Math.floor(starttimeOfJavascript / (1000 * 60)) ;
document.write(" <h2> Minutes Since 1 - jan - 1970 is " + startminuteOfJavascript + " </h2> ");
document.write(" <h2> Time Since jan-1-1970 is " + starttimeOfJavascript + " </h2> ");



let lastDayOfYear = new Date("12,31,2020")
document.write("<h2> The Last Day OF Year 2020 " + lastDayOfYear + "</h2>");

let firstDayOfRamzan = new Date("3,22,2024");
let calcuDays = todayDate.getTime() - firstDayOfRamzan.getTime()

document.write(" <h2> DAY AFTER RAMZAN 2024 " + Math.floor(calcuDays / 1000 / 60 / 60 / 24) + "</h2>");

let currentDate = new Date().getTime();
let beginingDate = new Date("1,1,2024").getTime();

let calcuDayAfter = Math.floor((currentDate - beginingDate) / 1000 ) ;

document.write(" <h2>  Calculate seconds gone from 1 jan 2024 to today date " + calcuDayAfter + "</h2>")
let newDate = new Date();
let currentHour = todayDate.getHours();
todayDate.setHours(currentHour - 1)

console.log(todayDate);

document.write("<h2> current Date Time is " + newDate +  " 1 Hour ago it was " + todayDate + " </h2>");

let currentYearCheck = todayDate.getFullYear(); 

todayDate.setFullYear(currentYearCheck - 100);

document.write("<h2> today date is " + newDate + "Before 100 Year it was" +  todayDate + " </h2> ")
console.log(todayDate.getFullYear() - 100);


let customerName = "Umair"
let numberOfUnit = 200;
let chargesPerUnit = 50;
let afterDueDateCharges = 200
let withInDueDate = numberOfUnit * chargesPerUnit;
let paymentAfterDueDate = withInDueDate + 200;
document.writeln("<h2> K-Electric Bill <br> Customer Name : " + customerName + "<br> Month : " + months[todayDate.getMonth()] + "<br> Numbers Of Units : " + numberOfUnit  + "<br> Charges Per Unit : " + chargesPerUnit + "<br> Net Amount Payable WithIn Due Date : " + withInDueDate + "<br> Late Payment Charges : " + afterDueDateCharges + "<br> Amount Payable After Due Date : " + paymentAfterDueDate + " </h2>  " )