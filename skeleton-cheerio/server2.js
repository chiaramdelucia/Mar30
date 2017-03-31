/*Dependencies*/

const request = require('request');
const cheerio = require('cheerio');


request('https://www.nrk.no/', function(error, response, html){

	const $ = cheerio.load(html);

	const result = [];


	$('div.article-content > h3').each(function(i,element){
		


		var link = $(element).find("a").attr('href');
		var title = $(element).text()


		result.push({
			title: title,
			link: link,
		});


	})
	console.log(result);



})