var t1 = new Date(1996, 7, 14, 0, 0, 0, 0);
var t2 = Date.now;
var dif = t1.getTime() - t2.getTime();

var Seconds_from_T1_to_T2 = dif / 1000;
var Seconds_Between_Dates = Math.abs(Seconds_from_T1_to_T2);

document.write(Seconds_Between_Dates);