var
  fs = require('fs'),
  
fd = fs.openSync('./test.raw', 'w'),
 
 b  = new Buffer(1000),
  
i = 0;


while (i < b.length) {
  b[i] = i;
  i++;
}

var i, j, s, value;
var AMP=10 ;

for (i=0; i<10; i++) {

value = AMP * Math.sin(
    2*Math.PI*i/10
  );
  
value = Math.ceil(value);

  s='';
  
for (j = -10; j<value; j++) { s+= ' '; }
 
 s+='*';

  
console.log(s);
}



fs.writeSync(fd, b, 0, b.length);


fs.closeSync(fd);
