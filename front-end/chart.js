import {
    select,
    csv,
    scaleLinear,
    scaleTime,
    extent,
    axisLeft,
    axisBottom,
    line,
    curveBasis
} from 'd3';

const svg = select('svg');

const width = +svg.attr('width');
const height = +svg.attr('height');

const render = data => {
    const title = 'A Week in San Francisco';

    const xValue = d => d.timestamp;
    const xAxisLabel = 'Time';

    const yValue = d => d.temperature;
    const circleRadius = 6;
    const yAxisLabel = 'Temperature';

    const margin = { top: 60, right: 40, bottom: 88, left: 105 };
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const xScale = scaleTime()
        .domain(extent(data, xValue))
        .range([0, innerWidth])
        .nice();

    const yScale = scaleLinear()
        .domain(extent(data, yValue))
        .range([innerHeight, 0])
        .nice();

    const g = svg.append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

    const xAxis = axisBottom(xScale)
        .tickSize(-innerHeight)
        .tickPadding(15);

    const yAxis = axisLeft(yScale)
        .tickSize(-innerWidth)
        .tickPadding(10);

    const yAxisG = g.append('g').call(yAxis);
    yAxisG.selectAll('.domain').remove();

    yAxisG.append('text')
        .attr('class', 'axis-label')
        .attr('y', -60)
        .attr('x', -innerHeight / 2)
        .attr('fill', 'black')
        .attr('transform', `rotate(-90)`)
        .attr('text-anchor', 'middle')
        .text(yAxisLabel);

    const xAxisG = g.append('g').call(xAxis)
        .attr('transform', `translate(0,${innerHeight})`);

    xAxisG.select('.domain').remove();

    xAxisG.append('text')
        .attr('class', 'axis-label')
        .attr('y', 80)
        .attr('x', innerWidth / 2)
        .attr('fill', 'black')
        .text(xAxisLabel);

    const lineGenerator = line()
        .x(d => xScale(xValue(d)))
        .y(d => yScale(yValue(d)))
        .curve(curveBasis);

    g.append('path')
        .attr('class', 'line-path')
        .attr('d', lineGenerator(data));

    g.append('text')
        .attr('class', 'title')
        .attr('y', -10)
        .text(title);
};

csv('https://gist.githubusercontent.com/abdennacerelmaalem/25df2c3c3f6c83f1aef58bbb72fd67e5/raw/53140fcb848b5519031c3a9330540f9c176244c1/legacy_price.csv')
    .then(data => {
        data.forEach(d => {
            if(d.product__id==2) {
                d.date.getFullYear(),d.date.getMonth(), d.date.getDate(), d.date.getHours(), d.date.getMinutes(), d.date.getSeconds();
                d.newPrice = +d.newPrice;
            }
        });
        render(data);
    });