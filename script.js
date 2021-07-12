function calcOfDays() {

    var one_day = 1000 * 60 * 60 * 24
    var input = document.getElementById('date').value;
    var flag = 0;
    if(input === "")
      document.getElementById("result").innerHTML = "Try again."
    else
    {
      var present_date = new Date();

      var b_day = new Date(input);
      b_day.setHours(0, 0);
      b_day.setFullYear(present_date.getFullYear());

      if (present_date.getMonth() > b_day.getMonth())
          b_day.setFullYear(b_day.getFullYear() + 1)
      else if(present_date.getMonth() === b_day.getMonth())
          {
            if (present_date.getDate() > b_day.getDate())
              b_day.setFullYear(b_day.getFullYear() + 1)
            else if(present_date.getDate() === b_day.getDate())
              flag = 1;
          }

      var days = Math.round(b_day.getTime() - present_date.getTime()) / (one_day);
      var hours = ((days - (Math.floor(days))) * 24) ;
      var min = ((hours - (Math.floor(hours))) * 60) ;
      var sec = ((min - (Math.floor(min))) * 60) ;

      if(flag === 1)
      {
        confetti();
        document.getElementById("result").innerHTML = "It's your B'Day !!"
      }
      else
      {
        document.getElementById("result").innerHTML = Math.floor(days) + " days " + Math.floor(hours) +" hrs " + Math.floor(min) + " min " + Math.floor(sec) + " sec" ;
        setTimeout(calcOfDays,1000);
      }

    }    
}
