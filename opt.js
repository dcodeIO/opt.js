module.exports = (function() {
    function opt(argv) {
        argv = argv || process.argv;
        var remain=[], opt={}, arg, p;
        for (var i=2; i<argv.length; i++) (arg=argv[i]).charAt(0) == '-'
             ? ((p=(arg=arg.replace(/^[\-]+/,'')).indexOf("="))>0?opt[arg.substring(0,p)]=arg.substring(p+1):opt[arg]=true)
             : remain.push(arg);
        return { 'node': argv[0], 'script': argv[1], 'argv': remain, 'opt': opt };
    }
    return opt.opt = opt;
})();
