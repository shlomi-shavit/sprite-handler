
Sprite tool

This sprite tool make use in spritesh & SVGO npm library that optimizes and handles svgs icons and turning them into a sprites.
It improves the workflow by removing the need to use Illustrator to manage sprites.
In order to use this sprite tool you must to separate all the icons into the “raw” directory.
npm tooling is used for optimization, processing icons from “raw” directory, creating “opt” directory with the optimized icons.
In addition, an index of the sprite will be produced, making it easier to see the icons, as well as their IDs.
Config file (config.json) is available in order to match different environments needs.

Advantages:
1) Removing the need to use Illustrator to manage sprites.
2) Removing automatically unnecessary tags, attributes, metadata, comments, hidden elements, default or non-optimal values and other stuff that can be safely removed without affecting the SVG rendering result, which also of course reduces the weight of the file.
3) Prevents duplicates SVG’s.
4) Build automatically sprite with the optimized svgs.
5) Add new SVG in a few minutes.

Instructions: 
- use node version 6.11.3
- run “npm install”

- configure config.json (included in the repo) according to your needs

1)
This tool enables handling of any number of sprites.
Coral, for example, has 2 sprite files:
	1. coral.svg (main sprite).
	2. coralfooter.svg (icons that appear only in the footer).

2)
	1. Open config.js file In sprite-handler folder.
	2. “svgs” array has 3 keys:
		1. directory - icons directory name.
		2. spriteName - desired sprite name.
		3. htmlName - desired name of html grid index.

	Example:
	{
    	"svgs": [
       	 	{
            	"directory": "global-svg",
            	"spriteName": "coral.svg",
            	"htmlName": "global-index.html"
	     }
   	   ]
	}

	3. In order to add another sprite, add another object to “svgs” array.
	In addition, create a sibling directory (in our example, we create “footer-svg” directory as a sibling of “global-svg” directory) with a name that matches your sprite, as seen in the example:
	Example:
	{
    	"svgs": [
       	 	{
            	"directory": "global-svg",
            	"spriteName": "coral.svg",
            	"htmlName": "global-index.html"
	     }, {
            	"directory": "footer-svg",
            	“spriteName": "coralfooter.svg",
            	"htmlName": "footer-index.html"
	     }
   	   ]
	}

3)
After the icons are present in “raw” directory and the config.json is configured correctly, run “npm start”.
If no errors occurred, you should see:
	1. “Opt” directory created as a sibling or your “raw” directory”
	2. Sprite created
	3. HTML index file created

————————————————————————————————————————————

useful scripts (before using the tool)
You can use these scripts, or do it manually.
You can change all SVG’s ID’s to uppercase.

sprite svg separator ( sprite_svg_separator.js ):
This script will take your sprite.svg and separate all icons into a folder.

1. Paste your sprite path here:
	fs.readFile("/Users/Ant_user/workspace/cms_content/cms_content/sprite-handler/all-svg/coral.svg"…

2. Paste your separated SVG’s folder path here:
	fs.writeFile("/Users/Ant_user/workspace/cms_content/cms_content/sprite-handler/global-svg/" 

npm install node-html-parser
npm install jsdom
node sprite_svg_separator.js
 
————————————————————————————————————————————

sprite svg’s id’s to uppercase ( svg-to-uppercase.js ):
This script convert all svg's id to upper case letters and create new sprite.

1. Paste your sprite path here:
	var file = '/Users/Ant_user/workspace/cms_content/cms_content/sprite-handler/all-svg/sprite.svg';
2. Paste your uppercased sprite path here:
var saveTo = '/Users/Ant_user/workspace/cms_content/cms_content/sprite-handler/all-svg/sprite2.svg';

npm install xml2js
node svg-to-uppercase.js
 
————————————————————————————————————————————

Html grid style
In order to change style design edit this file:   svg-grid-style /svg-html-grid.css

————————————————————————————————————————————

In some cases you may use this:

Html grid separator ( html_grid_to_separatored-icons.js ):
This script will take your index html grid and separate all icons into a folder.

1. Paste your sprite path here:
	fs.readFile("/Users/Ant_user/workspace/cms_content/cms_content/sprite-handler/all-svg/coral-grid.html"…

2. Paste your separated SVG’s folder path here:
	fs.writeFile("/Users/Ant_user/workspace/cms_content/cms_content/sprite-handler/all-svg// 

npm install node-html-parser
npm install jsdom
node html_grid_to_separatored-icons.js

————————————————————————————————————————————

More info about these tools:

SVGO:
https://github.com/svg/svgo/blob/master/README.md

Spritesh:
https://www.npmjs.com/package/spritesh
