console.time("end time");
var columns = ["date", "callerid", "employeeid", "duration", "timeTalk", "status"];
const mostCommon = require('most-common');
const sortJsonArray = require('sort-json-array');
var times = [];
var callers = [];
var relashin = [];
var mostP = [];
var leastP = [];
var array2 = [];
var array3 =[];
require("csv-to-array")({
   file: "./data.csv",
   columns: columns
}, function (err, array) {
        array2 = array;
        sortJsonArray(array2, 'callerid', 'des');

        for( i=0 ; i< array.length -1 ; i ++){
            if(array2[i].callerid == array2[i+1].callerid){
                array2[i+1].timeTalk == parseInt(array2[i+1].timeTalk) + parseInt(array2[i].timeTalk);
            }
            times.push(array[i].date[0] + array[i].date[1] + array[i].date[2] + array[i].date[3] + array[i].date[4] + array[i].date[5] + array[i].date[6] + array[i].date[8] + array[i].date[7] + array[i].date[8] + array[i].date[9] + array[i].date[10] + array[i].date[11] + array[i].date[12] + array[i].date[13] + array[i].date[14] + array[i].date[15]);
            relashin.push(array[i].callerid + array[i].employeeid);
            callers.push(array[i].callerid);
            if(array[i].status === "ANSWERED"){
                mostP.push(array[i].employeeid + array[i].status);
            }else{
                leastP.push(array[i].employeeid + " didnt ANSWERE");
            }
            // let date = new Date(array[i].date);
            // seconds[i] = date.getTime() / 1000; //1440516958
            //
            // end[i] = seconds[i] + array[i].duration;
            // start[i] = end[i] - array[i].timeTalk;
            //

        }
        // let count =1;
        // for (var s = 0; s < array.length - 1; s++) {
        //             tempS = start[s];
        //             tempE = end[s];
        //             c = 0;
        //             for (var j = 0; j < array.length; j++) {
        //               if (end[J+1]<start[j]){
        //               // (start[s] > start[s+1] && start[s] < end[s+1] || start[s+1] > start[s] && start[s+1] < end[s]);
        //               //   if(true){
        //                   secondProb=[c++,start[j+a],end[s] ];
        //
        //                 }
        //               }
        //             if (secondProb[0] > count) {
        //               //  popular = temp; // max intersection
        //                 count = secondProb[0];
        //             }
        //             console.timeEnd("end time")
        //
        //         });
        // console.log(secondProb);

        // for( i=0 ; i< array2.length -1 ; i ++){
        //     if(array2[i].timeTalk != 0){
        //         array3.push(array2[i]);
        //     }
        // }

          sortJsonArray(array2, 'timeTalk', 'des')
        

    console.log('the peak minute');
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
    console.log('clint with longest talk time ');
    console.log(array2[0].callerid , array2[0].timeTalk);
    console.timeEnd("end time");


});
