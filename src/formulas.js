/**
 * Created by Shamail on 7/3/2015.
 */


function raiseTo( number , power)
{
    if(power == 0)
        return 1;
    if(power == 1)
        return number;
    else
    {
        var y = 1;
        do{
            if(number % 2 == 0)
            {
                number = number * number;
                power = power/2;
            }
            else
            {
                y = number*y;
                number = number*number;
                power = (power-1)/2;
            }

        }while (power > 1);
        return number*y;
    }
}

function PMT(rate, period, PV)
{
    //doesn't work - basic java maths is imprecise
    console.log("***========= PMT ==========***");
    console.log("rate/1200 : "+rate/1200+ " period: "+period+" PV : "+PV);
    console.log("***========= PMT ==========***");
    var montRate = (rate/1200).toFixed(6);
    var a = (1+montRate);
    var b = a^period;
    var c = (1/b).toFixed(5);
    //var negInvRatePeriod = 1/((1+montRate)^period);
    var denom = (1-c)/montRate;

    var ans = (PV)/denom;
    return ans;
}

function pmt(rate_per_period, number_of_payments, present_value, future_value, type){
    if(rate_per_period != 0.0){
        // Interest rate exists
        var q = Math.pow(1 + rate_per_period, number_of_payments);
        var result = -(rate_per_period * (future_value + (q * present_value))) / ((-1 + q) * (1 + rate_per_period * (type)));
        return result;

    } else if(number_of_payments != 0.0){
        // No interest rate, but number of payments exists
        return -(future_value + present_value) / number_of_payments;
    }

    return 0;
}

function newPMT(rate_per_period, number_of_payments, present_value) {

//copied from http://www.onlineconversion.com/monthlypayment.htm

    var i = rate_per_period;
    if (i > 1.0) {
        i = i / 100.0;
        //rate_per_period = i;
    }
    i /= 12;

    var pow = 1;
    for (var j = 0; j < number_of_payments; j++){
        pow = pow * (1 + i);
    }

    var money = (present_value * pow * i) / (pow - 1);
    money = Math.round(100 * money) / 100;
    money = money + ""
    if (money.indexOf(".") == -1){
        money = money + ".00";
    }

    var dec = money.indexOf(".");
    var dollars = money.substring(0,dec);
    var cents = money.substring(dec+1,dec+3);
    cents = (cents.length < 2) ? cents + "0" : cents;
    money = dollars + "." + cents;

    return money;
}