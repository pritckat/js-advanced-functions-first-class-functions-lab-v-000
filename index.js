// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(drivers.length -2, drivers.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (multiplier) {
  return function (fare) {
    return fare * multiplier
  }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(drivers, cb) {
  return cb(drivers)
<<<<<<< HEAD
}
=======
}
>>>>>>> e814acb81c03d1a0552e24f95593664a8515d684
