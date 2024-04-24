let timeLeftElement= document.getElementById("daylefttoclass");
let timeLeftToClass = setInterval(function(){
    let ourNextClass = new Date("4,26,2024 11:00");
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
    console.log("Expired")
}
}
,1000)


function myTimer() {
    const date = new Date();
    let todayDate = date.getDate();
  
    let dayArr = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    let day = dayArr[date.getDay()];
  
    let months = [
      "January",
      "Feburary",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
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
  let countAfterBirth = document.getElementById("birthyear");
  let getBirthDate = prompt("Enter Your Date Of Birth in This Formats month-day-year 3 5 2006 , 03-5-2001 and 3,5,2006 Otherwise you will get NAN").toString();
  
  function calcuDays (birthDate) {
    let currDate = new Date();
    birthDate = new Date(birthDate);
    let currentYear = currDate.getFullYear();
    let birthYear = birthDate.getFullYear();
    let currtime = currDate.getTime();
    let birthTime = birthDate.getTime();
    let dif = currtime - birthTime;
    let secondAfter = dif / 1000 // for seconds.
    let minutesAfter = secondAfter / 60 // for minutes.
    let hoursAfter = minutesAfter / 60 // for hours.
    let daysAfter = hoursAfter / 24 // for days.
    let monthAfter = currDate.getMonth() - birthDate.getMonth() + (12 * (currDate.getFullYear() - birthDate.getFullYear()));
    let yearsafter = currDate.getFullYear() - birthDate.getFullYear() // calculate year
     countAfterBirth.innerHTML += " <h2> Current Year " + currentYear + "</h2>";
     countAfterBirth.innerHTML += " <h2>Your Birth Year " + birthYear + "</h2>";
     countAfterBirth.innerHTML += "<h2>Years : after your birth " + Math.floor(yearsafter) + "</h2>";
     countAfterBirth.innerHTML += "<h2>Month : after your birth " + Math.floor(monthAfter) + "</h2>";
     countAfterBirth.innerHTML += "<h2>Days : after your birth "  + Math.floor(daysAfter) + "</h2>";
     countAfterBirth.innerHTML += "<h2>Hours : after your birth " + Math.floor(hoursAfter) + "</h2>";
     countAfterBirth.innerHTML += "<h2>Minutes : after your birth " + Math.floor(minutesAfter) + "</h2>";
     countAfterBirth.innerHTML += "<h2>Seconds : after your birth " + Math.floor(secondAfter) + "</h2>";
}

calcuDays(getBirthDate);