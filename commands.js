var fs = require('fs');
var request = require('request');

var commands = {
	pwd: function (file, done){
		done(process.argv[1].split('/').slice(0,-1).join('/') + '\n');
		

	},
	date: function (file, done) {
		done(Date() + '\n');
	},
	ls: function(file, done){
		var fileList = '';
		fs.readdir('.', function(err, files){
			if (err) throw err;	
			files.forEach(function(file){
				fileList += file.toString() + "\n";
			});
			done(fileList);
		});
		
	},
	echo: function(inputArr, done){
		done(inputArr.slice(1).join(' ').trim() + '\n');
	},
	cat: function(filename, done, lines){

		fs.readFile(filename, "utf-8", function(err, data){
			if (err) throw err;
			if (lines){
				if (lines > 0) {
					data = data.split('\n').slice(0,lines).join('\n') + '\n';
				} else if (lines <= 0){
					data = data.split('\n').slice(lines).join('\n') + '\n';
				}	
			}
			done(data);
		});
	},
	head: function(filename, done){
		commands.cat(filename, done, 5);
	},
	tail: function(filename, done){
		commands.cat(filename, done, -5);
	},
	curl: function(string, done){
		console.log('string = ', string)
		request('http://' + string, function(err, response, data){
			if (err) throw err;
			// console.log('data = ', data)
			done(data + '\n');
		});
	}
};

module.exports = commands;

