/**
 * Created by Shamail on 7/8/2015.
 */

function GetBasicAssumptions(Weeks,WeekRental,Sale,BasicData)
{
    //Basic data contains information about Investment,loan,period etc

    //PMT should be accurate to decimal points.
    var investment = BasicData.inv;
    var equityAmount = investment*BasicData.equityPerc;
    var debt = investment - equityAmount;
    var loanPeriod = BasicData.period;
    var interest = BasicData.rate;

    var PMT = pmt(interest/12,loanPeriod,debt);
    var totalLoanRepay  = PMT*loanPeriod;

    var relief = 0;
    if(BasicData.relief == "SEIS")
    {
        relief = investment*0.5;
    }
    else if(BasicData.relief == "EIS")
    {
        relief = investment*0.3;
    }

    var rent = WeekRental*Weeks;
    var yearLease = PMT*12;

    var data = {
        "year1" :{
            "rentSale" : rent + 0,
            "rentSaleRelief" : rent + 0 + relief,
            "Lease" : yearLease,
            "NetCashFlow" : rent - yearLease,
            "NetCashFlowSEIS" : rent - yearLease + relief
        },
        "year2" :{
            "rentSale" : rent + 0,
            "rentSaleRelief" : rent + 0,
            "Lease" : yearLease,
            "NetCashFlow" : rent - yearLease,
            "NetCashFlowSEIS" : rent - yearLease
        },
        "year3" :{
            "rentSale" : rent + Sale,
            "rentSaleRelief" : rent + Sale ,
            "Lease" : totalLoanRepay - PMT*24,
            "NetCashFlow" : rent + Sale - (totalLoanRepay - PMT*24),
            "NetCashFlowSEIS" : rent + Sale - (totalLoanRepay - PMT*24)
        }
    }





}