
const request = require('request');
const { randomNum } = require('../../utils/random_array');

let arr = [];
for (let i=0; i < 100; i++) {
    arr.push(i);
}
let ind = 0
let counter = document.getElementById('counter')


setInterval(() => {

    let d = document.createElement('span');
    counter.appendChild(d);
    counter.innerHTML = ind;

    let currentPrice = randomNum();
    let lastPrice = randomNum();

    console.log(currentPrice, lastPrice);

    ind += 1;
    
    request('https://eodhistoricaldata.com/api/eod/AAPL.US?from=2017-01-05&to=2017-02-10&api_token=OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX&period=d&fmt=json', (err, res, body) => {
        if (err) {
            throw (err);
        }

        body = JSON.parse(body);
        // console.log(body);
        newPrice(currentPrice, lastPrice);
    })
}, 3000);


let lastPrice;
lastPrice = 100;


function newPrice(cur, last) {
    // currentPrice = data[data.length - 1].close;
    
    let history = document.getElementById("priceHistory");
    if (last < cur) 
    {
        var newEltext = "▲";
        var wrap = document.createElement('span');
        wrap.className += ("up");
        
    }
    else 
    {
        var newEltext = "▼";
        var wrap = document.createElement('span');
        wrap.className += ("down");
    }
    let textNode = document.createTextNode(newEltext);
    wrap.appendChild(textNode)    
    history.appendChild(wrap);
    // history.appendChild(textNode);
    // console.log(currentPrice);
    document.getElementById('price').innerHTML = (cur, last);
}
