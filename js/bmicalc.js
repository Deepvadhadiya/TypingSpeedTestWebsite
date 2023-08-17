function getbmivalue() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    height = height * 12;
    height = height * 0.025;
    // var newbmivalue = weight / (height * height);
    var newbmivalue = weight / (Math.pow(height, 2));
    newbmivalue = Math.round(newbmivalue);
    document.getElementById('bmivalue').value = newbmivalue;
}