// process is an even emitter

process.on('exit',(code)=>{
    // do one final synchronous operation
    //before the node process terminates

    console.log(`About to exit with code: ${code}`);
});

process.on('uncaughtException', (err)=>{
    // something went unhandled
    // do any clean up anyway

    console.error(err);  // Dont do just this

    // Force the process to exit
    process.exit(1);
});

// keep event loop busy
process.stdin.resume();

// trigger typeError exception
console.dog();