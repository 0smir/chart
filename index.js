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

