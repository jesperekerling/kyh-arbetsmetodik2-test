import _ from 'lodash'


const birthYear = [1975, 1997, 2002, 1995, 1985]


//const ages = _.map(birthYear, (year) => 2023 - year)
//console.log(ages)

const driverLicense = _.map(birthYear, (licenseYear) => licenseYear + 18)

console.log(driverLicense);
