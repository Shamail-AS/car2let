/**
 * Created by Shamail on 7/11/2015.
 */
var period = document.getElementById("period");
noUiSlider.create(period, {
    start: [12],
    connect: 'lower',
    range: {
        'min': 12,
        'max': 60
    },
    pips: {
        mode: 'values',
        values: [12, 20, 30, 40, 50,60],
        density: 4
    }
});

var rate = document.getElementById("rate");
noUiSlider.create(rate, {
    start: [5],
    connect: 'lower',
    range: {
        'min': 5,
        'max': 25
    },
    pips: {
        mode: 'values',
        values: [5, 10, 15, 20, 25],
        density: 4
    }
});

var inv = document.getElementById("investment");
noUiSlider.create(inv, {
    start: [500],
    connect: 'lower',
    range: {
        'min': 500,
        'max': 20000
    },
    pips: {
        mode: 'positions',
        values: [0, 20, 40, 60, 80, 100],
        density: 4
    }
});

var eq = document.getElementById("equity");
noUiSlider.create(eq, {
    start: [100],
    connect: 'lower',
    range: {
        'min': 0,
        'max': 100
    },
    pips: {
        mode: 'positions',
        values: [0, 20, 40, 60, 80, 100],
        density: 4
    }
});

var utilized = document.getElementById("utilized");
noUiSlider.create(utilized, {
    start: [5],
    connect: 'lower',
    range: {
        'min': 5,
        'max': 52
    },
    pips: {
        mode: 'positions',
        values: [0, 20, 40, 60, 80, 100],
        density: 4
    }
});

var rental = document.getElementById("rental");
noUiSlider.create(rental, {
    start: [50],
    connect: 'lower',
    range: {
        'min': 50,
        'max': 150
    },
    pips: {
        mode: 'positions',
        values: [0, 20, 40, 60, 80, 100],
        density: 4
    }
});

var disposal = document.getElementById("disposal");
noUiSlider.create(disposal, {
    start: [1000],
    connect: 'lower',
    range: {
        'min': 1000,
        'max': 5000
    },
    pips: {
        mode: 'positions',
        values: [0, 20, 40, 60, 80, 100],
        density: 4
    }
});

function getSliderValues()
{
    var data = {
        "loanPeriod" : period.noUiSlider.get(),
        "iRate" : rate.noUiSlider.get(),
        "investment" : inv.noUiSlider.get(),
        "eqPerc" : eq.noUiSlider.get(),
        "utilizedWeeks" : utilized.noUiSlider.get(),
        "rental" : rental.noUiSlider.get(),
        "disposalValue" : disposal.noUiSlider.get()
    };

    return data;
}



//===============================================================//
function ShowValues()
{
    var data = GetAllData();

    $("#lblinv").text(Math.floor(data.investment));
    $("#lblutilized").text(Math.floor(data.utilizedWeeks));
    $("#lblrental").text(Math.floor(data.rental));
    $("#lbldisposal").text(Math.floor(data.disposalValue));
    $("#lblequity").text(Math.floor(parseInt(data.eqPerc)));
    $("#lblrate").text(Math.floor(data.iRate));
    $("#lblperiod").text(Math.floor(parseInt(data.loanPeriod)));

    $("#tblLev").text(Math.floor(100- parseInt(data.eqPerc)) + " % LEVERAGE");


}

function GetAllData()
{
    var SEIS = $("#radSEIS").is(':checked');
    var EIS = $("#radEIS").is(':checked');
    var NA = $("#radNA").is(':checked');

    var loaned = document.getElementById("loan").checked;
    var relief = "";
    if(SEIS)
    {
        relief = "SEIS";
    }
    if(EIS)
    {
        relief = "EIS";
    }
    if(NA)
    {
        relief = "NA";
    }

    var data = getSliderValues();
    data.relief = relief;
    data.loan = loaned;



    return data;
}


