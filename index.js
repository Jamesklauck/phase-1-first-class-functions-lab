// Code your solution in this file!
function returnFirstTwoDrivers(array){
   return array.slice(0,2);

}


function returnLastTwoDrivers(array){
return array.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(fareMultiplier) {
   return function(value) {
      return fareMultiplier * value;
   }
}
const fareDoubler = createFareMultiploier(2);
const fareTripler = createFareMultiplier(3);