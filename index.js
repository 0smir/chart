(function () {
    chart = new Highcharts.Chart({
        chart: {
            renderTo: 'chart',
            type: 'area',
            backgroundColor: {
                linearGradient: [100, 300, 100, 50],
                stops: [
                    [0, 'rgb(255, 255, 255)'],
                    [1, 'rgb(240, 240, 255)']
                ]
            },
            padding: 0,
            lang: ["January" , "February" , "March" , "April" , "May" , "June" , "July" , "August" , "September" , "October" , "November" , "December"]
        },
        title: {
            text: 'Ololo'
        },
        subtitle: {
            text: 'Ololo2'
        },
        xAxis: {
            tickWidth: 0

        },
        yAxis: {},
        series: [{
                name: 'Jane',
                data: [110, 235, 369, 640, 500, 720, 300]
        },
            {
                name: 'Jane',
                data: [120, 150, 20, 426, 660, 550, 480]
            },
            {
                name: 'Jane',
                data: [20, 50, 180, 336, 460, 480, 400]
            }
        ]

    });

}());

