/**
 * Created by Shamail on 7/11/2015.
 */
var chart = AmCharts.makeChart("noSEISnoDEBT",
    {
        "type": "serial",
        "categoryField": "category",
        "startDuration": 1,
        "categoryAxis": {
            "gridPosition": "start"
        },
        "trendLines": [],
        "graphs": [
            {
                "balloonText": "[[title]] of [[category]]:[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-1",
                "title": "Total Earnings",
                "type": "column",
                "valueField": "Earning"
            },
            {
                "balloonText": "[[title]] of [[category]]:[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-2",
                "title": "Lease repayment",
                "type": "column",
                "valueField": "Lease"
            },
            {
                "balloonText": "[[title]] of [[category]]:[[value]]",
                "fillAlphas": 1,
                "id": "AmGraph-3",
                "title": "Net cash flow",
                "type": "column",
                "valueField": "Net"
            }
        ],
        "guides": [],
        "valueAxes": [
            {
                "id": "ValueAxis-1",
                "title": "Amount (£)"
            }
        ],
        "allLabels": [],
        "balloon": {},
        "legend": {
            "useGraphSettings": true
        },
        "titles": [
            {
                "id": "Title-1",
                "size": 15,
                "text": "Illustrative Cash Flows"
            }
        ]
    }
);

function updateChartData(data)
{
    chart.dataProvider = data;
    chart.validateData();
    chart.animateAgain();
}