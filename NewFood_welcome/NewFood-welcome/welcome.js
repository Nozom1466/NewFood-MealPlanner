//装填日期
let myweek = document.querySelector(".hero--date-week");
let mydate = document.querySelector(".hero--date-year");
let todaydate = new Date();
let mydatearray = todaydate.toDateString().split(" ");
let dates = todaydate.getDate();
myweek.innerText = mydatearray[0].toUpperCase() + ".";
mydate.innerText =
  mydatearray[1] +
  " " +
  dates +
  (dates % 10 == 1
    ? "st"
    : dates % 10 == 2
    ? "nd"
    : dates % 10 == 3
    ? "rd"
    : "st");

//阻止文本选中
document.addEventListener("selectstart", function (e) {
  e.preventDefault();
});
