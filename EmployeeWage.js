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

// UC 6
function CalculateDailyWage(empHrs)
{
    return empHrs*WAGE_PER_HOUR;
}
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
while(totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NO_OF_WORKING_DAYS)
{
    totalWorkingDays++;
    empHrs = GetWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyWageArr.push(CalculateDailyWage(empHrs));
    empDailyHrsMap.set(totalWorkingDays, empHrs);
    empDailyWageMap.set(totalWorkingDays, CalculateDailyWage(empHrs));
}
empWage = CalculateDailyWage(totalEmpHrs);
console.log("UC-6 Total Days: "+totalWorkingDays+" Total Hrs: "+totalEmpHrs+" Employee wage: "+empWage);

// UC 7
// UC 7A
let totalEmpWage = 0;
function sum(dailyWage)
{
    totalEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC-7 Total Days: "+totalWorkingDays+" Total Hrs: "+totalEmpHrs+" Emp Wage: "+totalEmpWage);
function TotalWages(totalWage, dailyWage)
{
    return totalWage + dailyWage;
}
console.log("UC-7 Employee wage with reduce: "+empDailyWageArr.reduce(TotalWages,0));
// UC 7B
let dailyCounter = 0;
function MapDayWithWage(dailyWage)
{
    dailyCounter++;
    return dailyCounter+" = "+dailyWage;
}
let mapDayWithWageArr = empDailyWageArr.map(MapDayWithWage);
console.log("UC-7B Daily wage map");
console.log(mapDayWithWageArr);
// UC 7C
function FullTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(FullTimeWage);
console.log("UC-7C Daily wage filter when fulltime wage earned");
console.log(fullDayWageArr);
// UC 7D
function FindFullTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC-7D First time full time wage was earned on day: "+mapDayWithWageArr.find(FindFullTimeWage));
// UC 7E
function IsAllFullTimeWage(dailyWage)
{
    return dailyWage.includes("160");
}
console.log("UC-7E Check all element have full time wage: "+fullDayWageArr.every(IsAllFullTimeWage));
// UC 7F
function IsAnyPartTimeWage(dailyWage)
{
    return dailyWage.includes("80");
}
console.log("UC-7F Check if any part time wage: "+mapDayWithWageArr.some(IsAnyPartTimeWage));
// UC 7G
function TotalDaysWorked(noOfDays,dailyWage)
{
    if(dailyWage > 0)
    return noOfDays+1;
    return noOfDays;
}
console.log("UC-7G Number of days employee worked: "+empDailyWageArr.reduce(TotalDaysWorked,0));

//UC 8 
console.log("UC 8 Contents of the map:")
console.log(empDailyWageMap);
//console.log("Total wage using emp wage map: "+Array.from(empDailyWageMap.values()).reduce(totalWages));

// UC 9
const findTotal = (totalVal,dailyVal) =>
{
    return totalVal+dailyVal;
}
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal, 0);
console.log("UC 9 Employee Wage with arrow: "+"Total Hours: "+totalHours+" Total Wages: "+totalSalary);
let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
empDailyHrsMap.forEach((value, key, map) =>
{
    if (value == 8)
    {
        fullWorkingDays.push(key);
    }
    else if(value == 4)
    {
        partWorkingDays.push(key);
    }
    else 
    {
        nonWorkingDays.push(key);
    }
});
console.log("Full Working Days: "+fullWorkingDays);
console.log("Part Working Days: "+partWorkingDays);
console.log("Non Working Days: "+nonWorkingDays);
