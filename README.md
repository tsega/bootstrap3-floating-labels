bootstrap3-floating-labels
======================

Bootstrap 3 Floating Labels from travislaynewilson, http://bootsnipp.com/snippets/featured/float-label-pattern-forms, packaged for Meteor.js

To install
----------

```sh
$ meteor add tsega:bootstrap3-floating-labels
```

Basic Use
---------

For basic usage, set up your markup as a normal bootstrap `from-group` with the additional `float-label-control` class

```html
<template name="tempName">
...
  <div class="form-group float-label-control">
        <label for="">Username</label>
        <input type="email" class="form-control" placeholder="Username">
  </div>
...
</template>
```


Bottom Labels
-------------

To place the labels at the bottom of the controls add the `label-bottom` class to the `form-group` `div`.

```html
<template name="tempName">
...
  <div class="form-group float-label-control label-bottom">
        <label for="">Username</label>
        <input type="email" class="form-control" placeholder="Username">
  </div>
...
</template>
```


