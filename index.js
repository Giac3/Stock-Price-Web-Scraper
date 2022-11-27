const PORT = 8080
const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();

const url = 'https://www.hl.co.uk/funds/fund-discounts,-prices--and--factsheets/search-results/f/fundsmith-equity-class-i-income'

axios(url)
    .then(response => {
        const html = response.data
        const $ = cheerio.load(html)
        const prices = [];
        $(`.security-price-box`, html).each(function() {
            const price = $(this).text()
            prices.push({price})
        });
        console.log(prices)
    }).catch(err => console.log(err))

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`));