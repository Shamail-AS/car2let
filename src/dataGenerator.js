/**
 * Created by Shamail on 7/8/2015.
 */

function GetBasicAssumptions(Weeks,WeekRental,Sale,BasicData)
{
    //Basic data contains information about Investment,loan,period etc

    //PMT should be accurate to decimal points.
    var investment = BasicData.inv;
    var equityAmount = Math.floor(investment*BasicData.equityPerc/100);
    var debt = investment - equityAmount;
    var loanPeriod = BasicData.period;
    var interest = BasicData.rate;

    var relief = 0;
    if(BasicData.relief == "SEIS")
    {
        relief = investment*0.5;
    }
    else if(BasicData.relief == "EIS")
    {
        relief = investment*0.3;
    }


    var PMT = newPMT(interest,loanPeriod,debt);
    var totalLoanRepay  = PMT*loanPeriod;

    var rent = WeekRental*Weeks;
    var yearLease = PMT*12;

    var data = {
        //relief only comes in the first year
        "year1" :{
            "rentSale" : parseInt(rent + 0),
            "rentSaleRelief" : parseInt(rent + 0 + relief),
            "Lease" : parseInt(yearLease),
            "NetCashFlow" : parseInt(rent - yearLease),
            "NetCashFlowSEIS" : parseInt(rent - yearLease + relief)
        },
        "year2" :{
            "rentSale" : parseInt(rent + 0),
            "rentSaleRelief" : parseInt(rent + 0),
            "Lease" : parseInt(yearLease),
            "NetCashFlow" : parseInt(rent - yearLease),
            "NetCashFlowSEIS" : parseInt(rent - yearLease)
        },
        "year3" :{
            "rentSale" : parseInt(rent + Sale),
            "rentSaleRelief" : parseInt(rent + Sale),
            "Lease" : parseInt(totalLoanRepay - PMT*24),
            "NetCashFlow" : parseInt(rent + Sale - (totalLoanRepay - PMT*24)),
            "NetCashFlowSEIS" : parseInt(rent + Sale - (totalLoanRepay - PMT*24))
        }
    };

return data;
}