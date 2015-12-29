# Prototype

This prototype aims to provide potential solutions for how to approach some of the parts of the Project Positive solution. Both of these prototypes use the files in the `assets` folder and its subfolders.

## Serverside

This illustrates a way image composition how could work on the server using the `gm` NPM module. This is just a small script that uses the Node REPL to convert an SVG image to PNG and compose 2 PNG images together. 

* First, have a look at `server.js` to make sure it is going to operate on the files you intend to use.
* At the command prompt, run `node server.js` to run the script.
* Look in the `assets\compliments` and `assets\composites` folders to see the results.

The final solution should create a DB record for each composite created by users and redirect to the composite image the user defines. The composite should only be created if it hasn't already been created.

## Clientside

This illustrates a way to load and change the colour of SVG images in the browser while they are superimposed over the background image.

* Navigate to the `prototype` folder.
* Run `python -m SimpleHTTPServer` to start a simple web server.
* Open http://localhost:8000/client.html in your browser

The final solution should probably have caching in place so we don't download the SVG files each time the user selects a new one.

