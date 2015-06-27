# showup.js
img caption compiler for markdown.

_requires jQuery_

for html:
`<img alt="!showup//say whatever you want!//!a cat gif" src="cat.gif">`


for markdown: `![!showup//say whatever you want!//!a cat gif](cat.gif)`

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
