// this script convert corel.svg to visual html page
var fs = require('fs');
var parseString = require('xml2js').parseString;

const svgToHtml = function(directory, spriteName, htmlName) {
    var shell = require('shelljs');
    shell.exec(`mkdir ./${directory}/opt`);
    shell.exec(`svgo ./${directory}/raw/**/*.svg -o ./${directory}/opt --config=svgo.yml`);
    // shell.exec(`find . -name "*.svg" -exec svgo  {}  -o ./${directory}/opt --config=svgo.yml \\; ` );
    shell.exec(`spritesh --input ${directory}/opt --output ${directory}/${spriteName}`)

    fs.readFile(`${directory}/${spriteName}`, 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }

        data = data.slice(data.indexOf('>') + 1);
        data = '<div class="svg-wrapper">' + data;
        data = data.replace(/svg/g, 'div');

        var document = parseString(data, function (err, data2) {
            for( var i=0; i < data2.div.symbol.length; i++ ){
                data = data.replace(/[<]symbol/, '<div class="svg-item"><span>#' + data2.div.symbol[i].$.id.toUpperCase() + '</span>' + '<svg');
                data = data.replace(/[<][/]symbol/, '</svg></div');
            }
        });

        data += '<link rel="stylesheet" type="text/css" href="../svg-grid-style/svg-html-grid.css">';

        //console.log(data);
        fs.writeFile(`${directory}/${htmlName}`, data, 'utf8', function (err) {
            if (err){ return console.log(err) }
            else { console.log('Done!')}
        });
    });
};

module.exports = svgToHtml;
