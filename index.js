const config = require('./config.json');
const htmlToSvg = require('./svg-to-html.js');

config.svgs.forEach(function (svg) {
    htmlToSvg(svg.directory, svg.spriteName, svg.htmlName);
});
