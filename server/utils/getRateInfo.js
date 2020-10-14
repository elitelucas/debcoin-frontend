'use strict';

const validator = require('validator');
const fetch = require('node-fetch');
const getRateInfo=async ()=>{     
    const res=await fetch("https://api.blockchain.com/v3/exchange/tickers/BTC-USD");
    const market_prices=await res.json();
    console.log(market_prices);
    return market_prices;
};
module.exports = getRateInfo;