const { readFile, writeFile } = require('fs');
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    } else {
        const first = result;
        readFile('./content/second.txt', 'utf-8', (err, result) => {
            if (err) {
                console.log(err);
                return;
            } else {
                const second = result;
                writeFile('./content/result-async.txt',
                    `Result of Async functions ${first} , ${second}`, { flag: 'a' }, (err) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log("done with tasks");
                        }
                    });
            }
        })
    }
})