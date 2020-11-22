const http = require('http');
http
.Server((req, res) => {
	if (req.url === '/result4/' && req.method ===
		'POST') {
		const CORS = {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Method': 'GET,POST,PUT,DELETE,OPTIONS',
			'Access-Control-Allow-Headers':'x-test, Content-Type,Accept, Access-Control-Allow-Headers' 
		};
		const result = {
			message: 'arina_sp',
			'x-result': req.headers['x-test']
		};
		let body = '';
		req.on('data', ch => (body += ch))
		req.on('end', () => {
			result['x-body'] = body;
			res.writeHead(200, {... CORS, 'Content-Type':'application/json'});
			res.end(JSON.stringify(result));
		});
	}
})
.listen(4321, () => console.log('OK'));
