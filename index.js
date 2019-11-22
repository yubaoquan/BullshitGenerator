const path = require('path');
const fs = require('fs');
const data = JSON.parse(fs.readFileSync(path.join(__dirname, "./data.json"), "utf-8"));
function   choice(a){
let arr=data[a];
  return arr[ (Math.random() *arr.length) | 0];
}
function generator(title="无标题", length = 1000) {
    let body = "";
    while (body.length < length) {
        let num = Math.random() * 100 | 0;
        switch (true) {
            case num < 10:
                body += "\r\n";
                break;
            case num < 20:
                    body += choice("famous").
                    replace('a',choice("before")).
                    replace('b',choice('after'));

                break;
           default:
                body += choice("bosh");
                body = body.replace("x", title);
        }
    }
    return body;
}
module.exports=generator;