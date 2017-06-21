(function () {
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'chart',
            // alignTicks: false,
            type: 'area',
            backgroundColor: {
                linearGradient: [100, 300, 100, 50],
                stops: [
                    [0, 'rgb(255, 255, 255)'],
                    [1, 'rgb(240, 240, 255)']
                ]
            },
            padding: 0
        },
        title: {
            text: 'Ololo'
        },
        subtitle: {
            text: 'Ololo2'
        },
        xAxis: {
            min: 1,
            max: 10,
            tickInterval: 1,
            tickWidth: 0,
            gridLineWidth: 1,
            floor: 0,
            offset: -25,

        },
        yAxis: {
            min: 1,
            endOnTick: false,
            gridLineDashStyle: 'ShortDash',
            opposite: true
        },
        series: [{
                name: 'Jane',
                data: [110, 235, 369, 640, 500, 720, 300, 0, 426, 660, 550, 480]
        },
            {
                name: 'Jane',
                data: [120, 150, 20, 426, 660, 550, 480, 210, 150, 20, 426, 660, 50]
            },
            {
                name: 'Jane',
                data: [20, 50, 180, 336, 460, 480, 400, 180, 336, 460, 480, 400]
            }
        ]

    });

}());

(function(){

    Highcharts.chart("graphik", {
        chart: {
            type: "areaspline",
            width: null,
            borderColor: "transparent",
            shadow: false,
            spacingTop: 70,
            spacingBottom: -65,
            spacingLeft: -71,
            spacingRight: 0,
            marginTop: 100, //!
            marginBottom: 30, //!
            backgroundColor: {
                linearGradient: [60, 0, 60, 150],
                stops: [
                    [0, '#FBF7E5'],
                    [0.6, '#F5E7E4'],
                    [1, '#Fff']
                ]
            }

        },
        credits: {
            text: ''
        },
        title: null,

        plotOptions: {
            zIndex: 1,
            areaspline: {
                fillOpacity: 0.7,
                marker: {
                    // enabled: false
                    radius: 0
                },
                lineColor: "#777",
                lineWidth: "1"
            }
        },
        xAxis: {
            zIndex: 1000,
            tickWidth: 20,
            tickColor: 'red',
            tickInterval: 5,
            overflow: true,
            // offset: -30,
            spacingLeft: 0,
            // allowDecimals: false,
            min: 1,
            max: 30,
            labels: {
                x: -20, //!
                // y: -30,//!
                enabled: true,
                align: 'right' //!
            }
        },
        yAxis: {
            // height: '70%',
            gridLineWidth: 1,
            gridLineColor: "forestgreen",
            gridZIndex: "10",
            tickInterval: '200',
            plotOptions: {//!
                series: {
                    states: {

                        hover: {
                            lineWidthPlus: 0
                        }
                    }
                }
            },
            plotBands: [{
                // color: 'red',
                zIndex: 10,
                from: 230,
                to: 230,
                label: {
                    zIndex: 10,
                    align: "right",
                    text: "$200",
                    x: -15,
                    y: 0,
                    style: {
                        color: '#505050',
                        fontFamily: 'Robodo, sans-serif',
                        fontSize: '13px',
                        fontWeight: 'normal'
                    }
                }
            },{
                from: 430,
                to: 430,
                label: {
                    zIndex: 10,
                    align: "right",
                    text: "$400",
                    x: -15,
                    y: 0, //!
                    style: {
                        color: '#505050',
                        fontFamily: 'Robodo, sans-serif',
                        fontSize: '13px',
                        fontWeight: 'normal'
                    }
                }
            },{
                from: 630,
                to: 630,
                label: {
                    zIndex: 12,
                    align: "right",
                    text: "$600",
                    x: -15,
                    y: 0,
                    style: {
                        color: '#505050',
                        fontFamily: 'Robodo, sans-serif',
                        fontSize: '13px',
                        fontWeight: 'normal'
                    }
                }
            },{
                from: 830,
                to: 830,
                label: {
                    align: "right",
                    text: "$800",
                    x: -15,
                    y: 0,
                    style: {
                        color: '#505050',
                        fontFamily: 'Robodo, sans-serif',
                        fontSize: '13px',
                        fontWeight: 'normal'
                    }
                }
            }]
        },
        series: [{
            lineWidth: 0, //!
            zIndex: 1,
            color: "#404969",
            data: [
                [1, 300],
                [2, 310],
                [3, 100],
                [4, 200],
                [5, 250],
                [6, 400],
                [7, 480],
                [8, 460],
                [9, 500],
                [10, 650],
                [11, 700],
                [12, 600],
                {x: 13, y: 550, marker: { symbol: "url(/img/down-circular-512.png)" }},
                [14, 600],
                [15, 650],
                [16, 600],
                [17.5, 800],
                {x: 20, y: 500, marker: { symbol: "url(/img/down-circular-512.png)" }},
                [22, 650],
                [22.5, 600],
                [24, 700],
                [25, 800],
                [26, 850],
                [30, 550]
            ]
        },{
            lineWidth: 0.5, //!
            zIndex: 2,
            color: "#fff",
            data: [
                [1, 200],
                [3, 400],
                [6, 100],
                [8, 150],
                {x: 9, y: 200, marker: "square"},
                [10, 200],
                {x: 12, y: 300, marker: { symbol: "url(/img/up-circular-512.png)" }},
                [15, 100],
                [16, 150],
                [18, 150],
                [20, 300],
                [21, 200],
                [23, 200],
                [25, 300],
                [26, 250],
                [30, 350]
            ]
        }]
    });
})();

