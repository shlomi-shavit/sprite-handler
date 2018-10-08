// this script convert all svg's id to upper case letters and create new sprite.
var fs = require('fs');
var parseString = require('xml2js').parseString;

var file = '/Users/Ant_user/workspace/cms_content/cms_content/sprite-handler/all-svg/coral.svg';
var saveTo = '/Users/Ant_user/workspace/cms_content/cms_content/sprite-handler/all-svg/coral2.svg';

fs.readFile(file, 'utf8', function (err, data) {
    if (err) {
        return console.log(err);
    }

    var document = parseString(data, function (err, data2) {
        for (var i = 0; i < data2.svg.symbol.length; i++) {
            data = data.replace(data2.svg.symbol[i].$.id, data2.svg.symbol[i].$.id.toUpperCase());
        }
        console.log(data2);
    });

    //console.log(data);
    fs.writeFile(saveTo, data, 'utf8', function (err) {
        if (err) {
            return console.log(err)
        }
        else {
            console.log('Done!')
        }
    });
});

