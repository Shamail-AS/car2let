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
        return -(rate_per_period * (future_value + (q * present_value))) / ((-1 + q) * (1 + rate_per_period * (type)));

    } else if(number_of_payments != 0.0){
        // No interest rate, but number of payments exists
        return -(future_value + present_value) / number_of_payments;
    }

    return 0;
}