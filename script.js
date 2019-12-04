// Hires From Other Staffing Agencies
let initialHourlyWage = 20;
let minimumWage = 7.50
let hoursWorkedPerWeek = 20;
const maxAllowedPerDiem = 1190;
let payCheck;
let initialPerDiem = (875 / 40) * hoursWorkedPerWeek;

function calculateInitialPayRate(hoursWorkedPerWeek, initialPerDiem, initialHourlyWage) {
    // Sums up the hours worked per week, the starting per diem, and starting hourly rate for technicians as their paycheck
    payCheck = (initialHourlyWage * hoursWorkedPerWeek) + initialPerDiem;
    console.log(payRateAndPerDiemConverter(payCheck, `You have worked ${hoursWorkedPerWeek} hours this week. Your initial wage is $${initialHourlyWage} an hour. Your initial per diem is $${initialPerDiem} weekly.`));
}
calculateInitialPayRate(hoursWorkedPerWeek, initialPerDiem, initialHourlyWage);
 
function payRateAndPerDiemConverter(payCheck) {
    // Checks to see is the technicians paycheck is large enough to deduct an amount of $1,190 dollars because if it isn't we go negative.
    if (payCheck <= maxAllowedPerDiem) {
        // If paycheck is not large enough to deduct the maximum allowed per diem we capture the new wage based on the hours the technician worked that week and minumum wage hourly rates. (This can be dynamic based on state)
        let payBasedOnMinWages = (minimumWage * hoursWorkedPerWeek);
        // Retrieve new per diem value by subtracting the technicians pay based on minimum wage hours from the old paycheck value.
        let newPerDiem = payCheck - payBasedOnMinWages; 

        // We out put the new hourly pay based on minimum wage and their new per diem value
        return `Your hourly is $${minimumWage} and your per diem is $${newPerDiem}`;
    }

    else if (payCheck > (maxAllowedPerDiem)) {
        let payBasedOnMinWages = (minimumWage * hoursWorkedPerWeek); //300
        let newPerDiem = (payCheck - payBasedOnMinWages);
        // If after subtracting minimum wage values, the new per diem value is still greater than 1190 then...
        if (newPerDiem > 1190) {
            // Subtract the maximum allowed per diem from the new current per diem to get the difference so we can divide the remainder amongst (the number of hours worked)?
            let leftOverPerDiem = newPerDiem - maxAllowedPerDiem;
            let newHourly = leftOverPerDiem / hoursWorkedPerWeek;
            // Sum up the minimum wage hourly and the difference from dividing the new per diem value with the hours worked per week to get the final hourly rate
            let finalHourly = minimumWage + newHourly;
            return `Your hourly is ${finalHourly} and your per diem is ${maxAllowedPerDiem}`;
        } else {
            return `Your hourly ${minimumWage} and your per diem is ${newPerDiem}`;
        }
    }
}



