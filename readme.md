# Project Positive

Helping people send others a compliment through social channels.

## Setup

* Install [GraphicsMagick](http://www.graphicsmagick.org/) locally.
* Clone this repo and `npm install`

## Status

Right now this repo only contains a [prototype](prototype/readme.md) for potential solutions to the clientside and serverside.

Read the next section to understand how the app intends to work.

## Application flow

A compliment is a composite image that's made up a background PNG image and a compliment PNG image chosen by the user. The compliment image starts as an SVG and is converted to a PNG with a transparent background. Each background, compliment, and compliment colour have IDs. A composite image is named according to these IDs in the following format: `backgroundID-complimentID-colourID.png`.

When a new background is uploaded, if it is an SVG, it is converted to a PNG and saved in the `assets/backgrounds` folder. When a new compliment is uploaded, the SVG is converted to a PNG with a transparent background and saved in the `assets/compliments` folder. When a new composite is created, the app should look to see if this composite already exists as a PNG in the `assets/composites` folder. If it does, it creates a new DB entry for this composite and returns the URL in the form of `/compliment/[db_id]`. The compliment endpoint streams the PNG file with and HTTP header of `Content-Type: image/png`.

## Miscellanea

If you need to convert some images locally at the command prompt:

```bash
gm convert -background none image.svg image.png
gm composite image.png background.png new.png
```


