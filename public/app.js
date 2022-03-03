var thisDay = new Date();
var weekDay = new Array();

weekDay[0] = "(일) 10:00 ~ 14:30";
weekDay[1] = "(월) 10:00 ~ 19:00";
weekDay[2] = "(화) 10:00 ~ 21:00 야간진료";
weekDay[3] = "(수) 10:00 ~ 19:00";
weekDay[4] = "(목) 10:00 ~ 21:00 야간진료";
weekDay[5] = "(금) 10:00 ~ 19:00";
weekDay[6] = "(토) 10:00 ~ 14:30";

var elems = document.getElementsByClassName("date");
for (var i = 0; i < elems.length; i++) {
  elems[i].innerHTML = "오늘의 진료시간 " + weekDay[thisDay.getDay()];
}
