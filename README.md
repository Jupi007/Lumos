<h1 align="center">Lumos</h1>

<p align="center">A lightweight lightbox in pure javscript with css animation.</p>

## Usage

Firstly include the script and the stylesheet (it is recommended to customize it) on your HTML page:

```html
<!DOCTYPE html>
<html>
  <head>
    ...
    <link rel="stylesheet" href="src/lumos.css">
    ...
  </head>
  <body>
    ...
    <script src="src/lumos.js"></script>
  </body>
```

Then add the lightbox template anywhere in the HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    ...
  </head>
  <body>
    ...
    <template id="lumos-template">
      <div id="lumos-container">
        <figure id="lumos-figure">
          <img src="" alt="" id="lumos-image">
          <figcaption id="lumos-caption"></figcaption> <!-- Optional if you don't want to use data-lumos-caption -->
        </figure>
      </div>
    </template>
    ...
  </body>
```

And finally active the Lumos lightbox by adding the `data-action="lumos"` attribute on any image:

```html
<img
  src="image.jpg"
  alt="Image alt"

  data-action="lumos"
/>
```

You can also provide another image to display into the lightbox (a bigger one by exemple), and also a caption with the `data-lumos-src` and `data-lumos-caption` attributes:

```html
<img
  src="image.small.jpg"
  alt="Image alt"

  data-action="lumos"
  data-lumos-src="image.large.jpg"
  data-lumos-caption="A caption which describes the image"
/>
```
