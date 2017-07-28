var columns = ["date", "callerid", "employeeid", "duration", "timeTalk", "status"];
const mostCommon = require('most-common');
var times = [];
var callers = [];
var relashin = [];
var mostP = [];
var leastP = [];
var callTimeCheck = [];

require("csv-to-array")({
   file: "./data.csv",
   columns: columns

}, function (err, array) {
        callTimeCheck[0] = {"employeeid": array[0].employeeid,
                            "time": array[0].timeTalk};
    for( i=0 ; i< array.length -1 ; i ++){
       times.push(array[i].date[0] + array[i].date[1] + array[i].date[2] + array[i].date[3] + array[i].date[4] + array[i].date[5] + array[i].date[6] + array[i].date[8] + array[i].date[7] + array[i].date[8] + array[i].date[9] + array[i].date[10] + array[i].date[11] + array[i].date[12] + array[i].date[13] + array[i].date[14] + array[i].date[15]);
        relashin.push(array[i].callerid + array[i].employeeid);       
        callers.push(array[i].callerid);
        if(array[i].status === "ANSWERED"){
            mostP.push(array[i].employeeid + array[i].status);            
        }else{
            leastP.push(array[i].employeeid + " didnt answerd");            
        }
    }
    console.log('the peak minute')
    console.log(mostCommon(times, 1));
    ///////
    console.log('the most frequent calls');
    console.log(mostCommon(callers, 1));
    ///////
    console.log('the relashin is between');
    console.log(mostCommon(relashin, 1));
    ///////
    console.log('the most productive employee');
    console.log(mostCommon(mostP, 1));
     //////
    console.log('the least productive employee');
    console.log(mostCommon(leastP, 1));
    ////////
  });