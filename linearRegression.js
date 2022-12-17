function linearRegression(xVals, yVals) {
    if(xVals.length != yVals.length)
    {
        // Input values should be with the same length
        return;
    }
    regression = {
        rSquared: 0,
        yIntercept: 0,
        slope: 0,

    }
    var sumOfX = 0;
    var sumOfY = 0;
    var sumOfXSq = 0;
    var sumOfYSq = 0;
    var sumCodeviates = 0;

    for (var i = 0; i < xVals.length; i++) {
        var x = xVals[i];
        var y = yVals[i];
        sumCodeviates += x * y;
        sumOfX += x;
        sumOfY += y;
        sumOfXSq += x * x;
        sumOfYSq += y * y;
    }
    var count = xVals.length;
    var ssX = sumOfXSq - ((sumOfX * sumOfX) / count);

    var rNumerator = (count * sumCodeviates) - (sumOfX * sumOfY);
    var rDenom = (count * sumOfXSq - (sumOfX * sumOfX)) * (count * sumOfYSq - (sumOfY * sumOfY));
    var sCo = sumCodeviates - ((sumOfX * sumOfY) / count);

    var meanX = sumOfX / count;
    var meanY = sumOfY / count;
    var dblR = rNumerator / Math.sqrt(rDenom);

    regression.rSquared = dblR * dblR;
    regression.yIntercept = meanY - ((sCo / ssX) * meanX);
    regression.slope = sCo / ssX;
    return regression;

}
