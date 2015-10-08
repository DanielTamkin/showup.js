# showup.js
a simple jQuery plugin to compile img captions for markdown.

If your into that kind of thing, there's a [demo](http://danieltamkin.github.io/showup.js/) to walk you through using 
showup.js.

_requires jQuery_
```
<script>
  $("section.images-here").showup();
</script>
```

#### for html:

`<img alt="!showup//say whatever you want!//!a cat gif" src="cat.gif">`


#### for markdown:

`![!showup//say whatever you want!//!a cat gif](cat.gif)`

Compiled:

```
<div class="showup-parent">
  <img alt="a cat gif" src="cat.gif">
  <p>say whatever you want!</p>
</div>
```
_if no showup code is detected the image is skipped **like so**._
```
<img alt="a dog gif" src="dog.gif">
```
