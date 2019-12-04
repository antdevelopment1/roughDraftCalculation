// Hires From Other Staffing Agencies
let initialHourlyWage = 20;
let minimumWage = 7.50
let hoursWorkedPerWeek = 40;
const maxAllowedPerDiem = 1190;
let payCheck;
let initialPerDiem = (875 / 40) * hoursWorkedPerWeek;

function calculateInitialPayRate(hoursWorkedPerWeek, initialPerDiem, initialHourlyWage) {
    payCheck = (initialHourlyWage * hoursWorkedPerWeek) + initialPerDiem;
    console.log(payRateAndPerDiemConverter(payCheck, `You have worked ${hoursWorkedPerWeek} hours this week. Your initial wage is $${initialHourlyWage} an hour. Your initial per diem is $${initialPerDiem} weekly.`));
}
calculateInitialPayRate(hoursWorkedPerWeek, initialPerDiem, initialHourlyWage);
 
function payRateAndPerDiemConverter(payCheck) {
    if (payCheck <= maxAllowedPerDiem) {
        let payBasedOnMinWages = (minimumWage * hoursWorkedPerWeek);
        let newPerDiem = payCheck - payBasedOnMinWages; 

        return `Your hourly is $${minimumWage} and your per diem is $${newPerDiem}`;
    }

    else if (payCheck > (maxAllowedPerDiem)) {
        let payBasedOnMinWages = (minimumWage * hoursWorkedPerWeek); //300
        let newPerDiem = (payCheck - payBasedOnMinWages);
        if (newPerDiem > 1190) {
            let leftOverPerDiem = newPerDiem - maxAllowedPerDiem;
            let newHourly = leftOverPerDiem / hoursWorkedPerWeek;
            let finalHourly = minimumWage + newHourly;
            return `Your hourly is ${finalHourly} and your per diem is ${maxAllowedPerDiem}`;
        } else {
            return `Your hourly ${minimumWage} and your per diem is ${newPerDiem}`;
        }
    }
}
