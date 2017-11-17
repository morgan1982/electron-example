
const request = require('request');

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
    

    ind += 1;
    
    request('https://eodhistoricaldata.com/api/eod/AAPL.US?from=2017-01-05&to=2017-02-10&api_token=OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX&period=d&fmt=json', (err, res, body) => {
        if (err) {
            throw (err);
        }

        body = JSON.parse(body);
        // console.log(body);
        newPrice(body);
    })
}, 3000);


let lastPrice;
lastPrice = 100;


function newPrice(data) {
    currentPrice = data[data.length - 1].close;
    
    let history = document.getElementById("priceHistory");
    if (lastPrice < currentPrice) 
    {
        var newEltext = "▲";
        var wrap = document.createElement('span');
                        wrap.setAttribute = ("class", "up");
    }
    else 
    {
        var newEltext = "▼";
        var wrap = document.createElement('span');
        wrap.class = "down";
    }
    history.appendChild(wrap);
    let textNode = document.createTextNode(newEltext);
    history.appendChild(textNode);
    // console.log(currentPrice);
    document.getElementById('price').innerHTML = currentPrice;

}
