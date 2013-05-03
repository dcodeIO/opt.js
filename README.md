![opt.js](https://raw.github.com/dcodeIO/opt.js/master/opt.png)
======
Probably the tiniest command line option parser you can <del>npm install optjs</del> Ctrl+C, Ctrl+V. Proof:

```js
function opt(argv) {
    argv = argv || process.argv;
    var remain = [], opt = {}, arg, p;
    for (var i=2; i<argv.length; i++) (arg = argv[i]).charAt(0) == '-'
         ? ((p=(arg=arg.replace(/^[\-]+/,'')).indexOf("="))>0?opt[arg.substring(0,p)]=arg.substring(p+1):opt[arg]=true)
         : remain.push(arg);
    return { 'node': argv[0], 'script': argv[1], 'argv': remain, 'opt': opt };
}
```

Usage
-----
```js
var opt = require("optjs")();
console.log(opt.node);   // Path to node executable
console.log(opt.script); // Path to the current script
console.log(opt.opt);    // Command line options as a hash
console.log(opt.argv);   // Remaining non-option arguments
```

Example
-------
`node somescript.js foo -a=1 -b --c="hello world" bar ----d`

```js
// Result
opt.node   == "/path/to/node[.exe]"
opt.script == "/path/to/somescript.js"
opt.opt    == { a: 1, b: true, c: "hello world", d: true }
opt.argv   == ["foo", "bar"]
```

License
-------
NASA Open Source Agreement v1.3
