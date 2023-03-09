//add your code above this line
var maxPoints = 120;
var passingPoints = 70;
var samPoints = 84;
var alexPoints = 45;
var jessiePoints = 99;
var didAlexPass = false;
const listItemArray = document.querySelectorAll("li");
listItemArray[0].innerHTML = "Raw Points:";
listItemArray[4].innerHTML = "Percentages:";
listItemArray[8].innerHTML = "Missed Points:";
listItemArray[12].innerHTML = "Final Notes:";
var samPointsDisplay = "Sam earned " + samPoints + " points out of " +
    maxPoints;
console.log(samPointsDisplay);
var alexPointsDisplay = "Alex earned " + alexPoints + " points out of " +
    maxPoints;
console.log(alexPointsDisplay);
var jessiePointsDisplay = "Jessie earned " + jessiePoints + " points out of " +
    maxPoints;
console.log(jessiePointsDisplay);
var samPercentage = (samPoints / maxPoints) * 100;
var samPercentDisplay = "Sam scored " + samPercentage + "%.";
console.log(samPercentDisplay);
var alexPercentage = (alexPoints / maxPoints) * 100;
var alexPercentDisplay = "Alex scored " + alexPercentage + "%.";
console.log(alexPercentDisplay);
var jessiePercentage = (jessiePoints / maxPoints) * 100;
var jessiePercentDisplay = "Jessie scored " + jessiePercentage + "%.";
console.log(jessiePercentDisplay);
var samMissedPoints = maxPoints - samPoints;
var samMissedPointsDisplay = "Sam missed " + samMissedPoints + "point(s).";
console.log(samMissedPointsDisplay);
var alexMissedPoints = maxPoints - alexPoints;
var alexMissedPointsDisplay = "Alex missed " + alexMissedPoints + "point(s).";
console.log(alexMissedPointsDisplay);
var jessieMissedPoints = maxPoints - jessiePoints;
var jessieMissedPointsDisplay = "Jessie missed " + jessieMissedPoints + "point(s).";
console.log(jessieMissedPointsDisplay);
var classAveragePoints = (samPoints + alexPoints + jessiePoints) / 3;
var classAveragePercent = (classAveragePoints / maxPoints) * 100;
var classAvgDisplay = "The class average was " + classAveragePoints + " points or " + classAveragePercent + "%.";
console.log(classAvgDisplay);
alexPoints = 75;
didAlexPass = !didAlexPass;
var alexPointsUpdated = "Alex failed initially but did extra credit. Their new score is " + alexPoints + " out of " + maxPoints;
console.log(alexPointsUpdated);
listItemArray[1].innerHTML = samPointsDisplay;
listItemArray[2].innerHTML = alexPointsDisplay;
listItemArray[3].innerHTML = jessiePointsDisplay;

listItemArray[5].innerHTML = samPercentDisplay;
listItemArray[6].innerHTML = alexPercentDisplay;
listItemArray[7].innerHTML = jessiePercentDisplay;

listItemArray[9].innerHTML = samMissedPointsDisplay;
listItemArray[10].innerHTML = alexMissedPointsDisplay;
listItemArray[11].innerHTML = jessieMissedPointsDisplay;

listItemArray[13].innerHTML = classAvgDisplay;
listItemArray[14].innerHTML = alexPointsUpdated;
