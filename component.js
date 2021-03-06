$(function() {
    var data = [
        ['java',1,'降','-0.01%'],
        ['C',2,'升','+2.44%'],
        ['Python',3,'升','+1.41%'],
        ['C++',4,'降','-2.58%'],
        ['C#',5,'升','+2.07%'],
        ['Visual Basic .NET',6,'降','-1.17%'],
        ['JavaScript',7,'降','-0.85%']
    ];
    var container = document.getElementById('handsontable');
    new Handsontable(container, {
        data: data,
        className: "htCenter htMiddle",
        width: 1000,
        height: 1000,
        rowHeights: 50,
        colWidths: 190,
        colHeaders: true,
        colHeaders: ['语言名称','排名','升或降','变化幅度'],

    });

    var echart = echarts.init(document.getElementById('echart'));

    var xData = [2000,2005,2010,2015,2020],
        yData = [0,2,4,6,8,10];

    var option = {
        title: {
            text: 'JavaScript语言排名变化'
        },
        tooltip: {},
        xAxis: {
            data: xData
        },
        yAxis: {
            data: yData
        },
        yAxis: {},
        series: [{
            name: '排名',
            type: 'line',
            data: [6,9,8,8,7],
        }]
    };

    echart.setOption(option);
    
});
