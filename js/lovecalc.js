function checkloveper() {
    var name = document.getElementById('name').value;
    var lovename = document.getElementById('lovename').value;

    if (name == "") {
        alert('Please enter your name');
    } else if (name.length <= 2) {
        alert('Min length is 3');
    } else if (!isNaN(name)) {
        alert('Numbers are not allowed')
    }
    else if (lovename == "") {
        alert('Please enter your lovename');
    } else if (lovename.length <= 2) {
        alert('Min length is 3');
    } else if (!isNaN(lovename)) {
        alert('Numbers are not allowed')
    } else {
        var lovedata = Math.random() * 100;
        lovedata = Math.floor(lovedata);
        document.getElementById('lovevalue').value = lovedata + "%";
    }
}