var x = document.querySelector("#myText");
var y = document.querySelector("#myFm");
var a = document.querySelector("#Id");
var b = document.querySelector("#Ages");
var DOLLAR_UZS = document.querySelector("#Uzs");
var elBtn = document.querySelector("#btns");

var elDemo = document.querySelector("#demo");
var elFm = document.querySelector("#Fm");
var elIde = document.querySelector("#Ide");
var elAges = document.querySelector("#Age");
var eluzs = document.querySelector("#Sum");

elBtn.addEventListener("click", function () {

    var SUMMA_UZS = 11000;
    
    var elName = x.value;
    var elFamil = y.value;
    var elIdraqam = a.value;
    var elAgeval = b.value;
    var dollarvalue = DOLLAR_UZS.value;
    
    var euro = dollarvalue * SUMMA_UZS;
    
    elDemo.textContent = elName;
    elFm.textContent = elFamil;
    elIde.textContent = elIdraqam;
    elAges.textContent = elAgeval;
    eluzs.textContent = euro;
    
    
    x.value = "";
    y.value = "";
    a.value = "";
    b.value = "";
    // DOLLAR_UZS.value = "";
    
})


