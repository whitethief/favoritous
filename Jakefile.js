desc('Default Task: Printing README.md file');
task('default', [], function(params){
	console.log('++++++++++++++++++++++++');
	console.log('+ Printing README.md file');

	var fs = require('fs');

	fs.readFile('README.md', { encoding: 'utf-8' }, function(err, data){
		if(err){ throw err; }

		console.log(data);
	});
})
