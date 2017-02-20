const fs = require('fs');

fs.readFile('aTextFile.txt', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log("\n Regular reading of file:\n", data.toString());
        console.log("\n Backwards reading of file:\n", reverse(data.toString()));
    }
});

function reverse(string) {
    var backwards = "";
    for (var i = 0; i < string.length; i++) {
        backwards += string.substring(string.length - i - 1, string.length - i);
    }
    return backwards;
}