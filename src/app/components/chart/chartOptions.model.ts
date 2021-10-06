export let chartValues:any;

export function setChart(chartValues: any, chartType: any, sparkLine: any, chartHeight: any, chartStroke:any){
return {
        series: chartValues,
        chart: {
            width: "100%",
            height: chartHeight ? chartHeight : 350,
            type: chartType,
            sparkline: { enabled: sparkLine }
        },
        dataLabels: { enabled: false },
        stroke: { curve: chartStroke? chartStroke : 'stepline' },
        fill: { type: 'solid', opacity: [0.35, 1] },
        xaxis: {
            showDuplicates: false,
            // tickAmount: 10,
            tickPlacement: 'between',
            type:'datetime'
        }
    }
};