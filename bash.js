var com = require('./commands');

var prompt = function(){
	process.stdout.write('prompt > ');
};

prompt();

var done = function(string){
		process.stdout.write(string);
		prompt();
};

process.stdin.on('data', function(data){
	var inputArr = data.toString().trim().split(' ');
	var cmd = inputArr[0];

	if (cmd === 'pwd'){
		com.pwd(inputArr[1], done);
	}
	if (cmd === 'date'){
		com.date(inputArr[1], done);
	}
	if (cmd === 'ls'){
		com.ls(inputArr[1], done);
	}
	if (cmd === 'echo'){
		com.echo(inputArr, done);
	}
	if (cmd === 'cat'){
		com.cat(inputArr[1], done);
	}
	if (cmd === 'head'){
		com.head(inputArr[1], done);
	}
	if  (cmd === 'tail'){
		com.tail(inputArr[1], done);
	}
	if (cmd === 'curl'){
		com.curl(inputArr[1], done);
	}
});