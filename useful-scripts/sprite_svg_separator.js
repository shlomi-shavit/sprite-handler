// This script will take your sprite.svg and separate all icons into a folder.

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
var fs = require('fs')

const { parse }  =  require('node-html-parser');

// sprite.svg path to separate
fs.readFile("/Users/Ant_user/workspace/cms_content/cms_content/sprite-handler/all-svg/coral.svg", "utf8", function(err, data) {
    const dom = new JSDOM(data);

    const root = parse(data);
    var sdf = root.querySelectorAll('symbol');
    for (var i = 0; i < sdf.length; i++) {
        sdf[i].rawAttrs += ' xmlns="http://www.w3.org/2000/svg"';
        sdf[i].tagName = 'svg';
        //console.log(sdf[i]);

        // folder path for separated SVGs
        fs.writeFile("/Users/Ant_user/workspace/cms_content/cms_content/sprite-handler/all-svg/svg-list/" + sdf[i].id + ".svg", sdf[i], function(err) {
            if(err) {
                return console.log(err);
            }
            console.log("The file was saved!");
        });
    }
});