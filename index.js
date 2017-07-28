var columns = ["date", "callerid", "employeeid", "duration", "timeTalk", "status"];
const mostCommon = require('most-common');
var times = [];
var callers = [];
var relashin = [];

require("csv-to-array")({
   file: "./data.csv",
   columns: columns
}, function (err, array) {
      var count = 1, tempCount;
       var popular = array[0].callerid;
       var temp = 0;
    for( i=0 ; i< array.length -1 ; i ++){
       times.push(array[i].date[0] + array[i].date[1] + array[i].date[2] + array[i].date[3] + array[i].date[4] + array[i].date[5] + array[i].date[6] + array[i].date[8] + array[i].date[7] + array[i].date[8] + array[i].date[9] + array[i].date[10] + array[i].date[11] + array[i].date[12] + array[i].date[13] + array[i].date[14] + array[i].date[15]);
        relashin.push(array[i].callerid + array[i].employeeid);       
        callers.push(array[i].callerid);

              for (var s = 0; s < array.length - 1; s++) {
            temp = array[s].employeeid;
            tempCount = 0;
            for (var j = s+1; j < array.length; j++) {
                if (temp == array[j].employeeid && array[j].status == 'ANSWERED')
                    tempCount++;
            }
            if (tempCount < count) {
                popular = temp;
                count = tempCount;
            }
              }


        for (var s = 0; s < array.length - 1; s++) {
            temp = array[s].employeeid;
            tempCount = 0;
            for (var j = s+1; j < array.length; j++) {
                if (temp == array[j].employeeid && array[j].status == 'ANSWERED')
                    tempCount++;
            }
            if (tempCount > count) {
                popular = temp;
                count = tempCount;
            }
        }


    }
    console.log("least productive employee= ",popular)
    console.log("most productive employee= ",popular)
    console.log('the peak minute')
    console.log(mostCommon(times, 1));
    ///////
    console.log('the most frequent calls');
    console.log(mostCommon(callers, 1));
    ///////
    console.log('the relashin is between');
    console.log(mostCommon(relashin, 1));
    ///////
    
});


/*


	   var count = 1, tempCount;
       var popular = array[0].callerid;
       var temp = 0;
 
 
        //for (var i = 0; i < array.length; i++) {
        for (var s = 0; s < array.length - 1; s++) {
            temp = array[s].employeeid;
            tempCount = 0;
            for (var j = s+1; j < array.length; j++) {
                if (temp == array[j].employeeid && array[j].status == 'ANSWERED')
                    tempCount++;
            }
            if (tempCount < count) {
                popular = temp;
                count = tempCount;
            }
        }

//}
console.log("least productive employee= ",popular)

//most
for (var s = 0; s < array.length - 1; s++) {
            temp = array[s].employeeid;
            tempCount = 0;
            for (var j = s+1; j < array.length; j++) {
                if (temp == array[j].employeeid && array[j].status == 'ANSWERED')
                    tempCount++;
            }
            if (tempCount > count) {
                popular = temp;
                count = tempCount;
            }
        }

//}
console.log("most productive employee= ",popular)

});
*/



