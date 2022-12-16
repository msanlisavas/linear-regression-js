# linear-regression-js
Simple linear regression to calculate r^2, y intercept and slope

Provide the function x and y values as an array.
var xVals = [1,2,3,4,5,6,7,8,9,10]
var yVals = [25,55,43,44,56,78,90,19,100,30]

var result = linearRegression(xVals,yVals);
// result.rSquared r^2
// result.yIntercept y intercept
// result.slope is the slope

The equation of the regression line is y = ax + b

If you want to draw the regression line on chartjs below is an example.
We need to provide the starting point of the line and the end of the line
so that chartjs can draw it.
Both the starting and the end point requires x and y values.

var lowestX = Math.min(...xVals);
var highestX = Math.max(...xVals);

regressionData = [{ x: lowestX, y: result.yIntercept }, { x: highestX, y: result.slope * highestX + result.yIntercept }];
As you see the ending point mimics our formula where y = ax+b
x stands for highestX
a stands for slope
b stands for yIntercept

Under
data: { 
  datasets:
  [
    {
      label: 'Your data
      data: yourData
    },
    {
      label: 'Regression Line'
      data: regressionData
    }
  ]
}
It will draw a regression line on top of your current data.
