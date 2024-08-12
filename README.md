### 1. What is this?
------------
[Lightweight Charts](https://www.tradingview.com/lightweight-charts/ "Lightweight Charts") by TradingView is ~~one of~~ the best open source charting software out there. It's dynamic, its's interactive, it's too good, however, there is one small problem, it does not allow you to plot sequential data i.e., the x-axis has to be timeseries so you can only plot data with timestamps (unix timestamps or yyyy-mm-dd 00:00:00 format). If you wanted to plot x-axis with values `[1,2,3,...]`, it does not allow you to do that. 
This branch of Lightweight Charts does exactly that, it allows you to plot data with sequential data `[1, 2, 3 ,..]` or `[..., -3, -2, -1, 0, 1, ...]`.

### 2. Limitations
------------
- Does not yet support `float` on the x-axis, the feature will be added soon.
- Does not yet support `Bar (addBarSeries)` type graphs, other types work fine, this bug will also be handled soon.
- x-axis values will be equidistant, let's say you have x-axis values like this [1,3,5,10,100],
you would expect, on the graph, the distance between 3&5 and 10&100 to be different, but LightWeight Charts will plot equidistant connecting lines. 

### 3. !TODO
------------
- Need to add two params to the `setData` function, the target column and x-axis column should be taken as input, right now it follows the default expected `value` and `time` for the target and x-axis column respectively. Will be added soon. 
- Need to add support for `float` type on the x-axis
- Need to add support for `Bar (addBarSeries)` graph
- Need to integrate with the [Python version of LightWeight Charts](https://github.com/louisnw01/lightweight-charts-python "Python version of LightWeight Charts")

### 4. Usage 
------------
- CDN:  https://cdn.jsdelivr.net/gh/0vatsa/cdn@main/lightweight_charts_for_sequential_data/lightweight-charts.standalone.development.js
- Or follow the Guide below, modify and run the code locally
- You can find some examples here !to do

### 5. Guide 
------------
This section describes exactly what changes you'll need to make to the codebase to make it sequential-data compatible.
#### 5.1 The Idea
We are just going to change two pieces  of front end, that's it, we won't touch anything else in the codebase. Every feature mentioned in the documentation will work as expected. 
![](images/idea.png)

#### 5.2 Steps 
First, we will just build from the source, the [instructions](https://github.com/tradingview/lightweight-charts/blob/master/BUILDING.md "instructions") are same as provided by LightWeight Charts themselves. 
- `git clone https://github.com/tradingview/lightweight-charts`
- `cd  lightweight-charts`
- `npm install `
- `cd website`
- `npm install`
- `cd ..`

Install typescript if you don't already have it 
- `npm install -g typescript`

Compiling 
- `npm run tsc `

Building
- `npm run rollup`
- `npm run build`

------------
After this in the `./dist/` folder you should have a `lightweight-charts.standalone.development.js` file, this is the file we will be making all the changes to.  
All line numbers mentioned here are for the version `4.2.1`, in other versions the line number may vary.

- Locate the function `defaultTickMarkFormatter`, in the version I am using this is at `line 8125`, now in the last line of the function,  
replace:  
`return localDateFromUtc.toLocaleString(locale, formatOptions);`  
with:  
`return String(timePoint['_internal_timestamp']);`

- Locate the class `TimeAxisViewRenderer`, in the version I am using this is at `line 1297`, in the class locate the function `_internal_setData`, this is at `line 1301`, add th following lines of code inside the function:

```javascript
const __dateString = data['_internal_text'];

if ( (typeof __dateString == 'string') && (__dateString != '') ){
	data['_internal_text'] = convertToUnixTimestamp(__dateString);
}
```
- After this, we will just define the function `convertToUnixTimestamp` at the beginning of the file, go to about `line  8`, right after the `use strict` line, add the following lines:

```javascript
const months = {Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,  Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11};
					  
function convertToUnixTimestamp(dateString) {

	const [day, month, year, time] = dateString.split(/[\s']+/);

	const date = new Date(Date.UTC(1900 + parseInt(year), months[month], parseInt(day), ...time.split(':').map(Number)));

	return Math.floor(date.getTime() / 1000);
}
```
That's it, those were the only modifications that had to be made.




