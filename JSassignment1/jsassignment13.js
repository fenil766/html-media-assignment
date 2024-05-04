// seitchcase
const day="Tuesday";

let daysUntilwikeekend;
switch (day) {
    case "Monday":
        console.log("There are 5 days until weekend ");
        break;

    case "Tuesday":    
        console.log("There are 4 days until weekend ");
        break;

    case "Wednesday":
        console.log("There are 3 days until weekend ");
        break;

    case "Thursday":
        console.log("There are 2 days until weekend ");
        break;
    
    case  "Friday":
        console.log("There are 1 days until weekend ");
        break;

    case "Saturday":
    case "Sunday":
        console.log("There are 0 days until weekend ");
        break;

    default:
        daysUntilwikeekend="INVALID INPUT"
}