// UC 1
const IS_ABSENT=0;
let empCheck=Math.floor(Math.random()*10)%2;
if(empCheck==IS_ABSENT)
{
    console.log("Employee is absent");
    return;
}
else
{
    console.log("Employee is present");
}

// UC 2
const IS_PART_TIME=1;
const IS_FULL_TIME=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOUR=20;
empHrs=0;
empCheck=Math.floor(Math.random()*10)%3;
switch (empCheck)
{
    case IS_PART_TIME:
        empHrs=PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs=FULL_TIME_HOURS;
        break;
    default:
        empHrs=0;
}
let empWage=empHrs*WAGE_PER_HOUR;
console.log("Employee wage: "+empWage);

// UC 3
function GetWorkingHours(empCheck)
{
    switch(empCheck)
    {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            break;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
            break;
        default:
            return 0;
    }
}
empHrs=GetWorkingHours(empCheck);
console.log("Employee Wage: "+empWage);

// UC 4
const NO_OF_WORKING_DAYS=20;
for(let day=0; day<NO_OF_WORKING_DAYS; day++)
{
    let empCheck=Math.floor(Math.random()*10)%3;
    empHrs+=GetWorkingHours(empCheck);
}
empWage=empHrs*WAGE_PER_HOUR;
console.log("Total Hrs: "+empHrs+" Employee Wage: "+empWage);

// UC 5
const MAX_HRS_IN_MONTH=100;
let totalEmpHrs=0;
let totalWorkingDays=0;
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NO_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    totalEmpHrs += GetWorkingHours(empCheck);
}
empWage=totalEmpHrs*WAGE_PER_HOUR;
console.log("UC 5- Total Days: "+totalWorkingDays+" Total Hrs: "+totalEmpHrs+ " Employee Wage: "+empWage);