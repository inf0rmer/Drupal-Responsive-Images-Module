A Drupal 7 module which exposes a text filter to convert regular HTML
image tags to "responsive" tags.

What does this mean?
--------------------
The plugin takes a regularly formed <img> tag:
    <img alt="An image" src="http://example.com/image.jpg"
And transforms it into:
    <img alt="An image" data-src-480="http://example.com/480/image.jpg"
data-src-768="http://example.com/768/image.jpg"
data-src-992="http://example.com/992/image.jpg"
data-src-1382="http://example.com/1382/image.jpg" />

And what is the point of all this?
----------------------------------
The module includes a small jQuery plugin that leverages these
data attributes. The idea is that someone accessing your site from a
mobile device only has to download content which is appropriate for
their screen resolution.

Depending on the browser size, the jQuery plugin then adds the
corresponding src attribute (duplicating it from one of the data-src
attributes).
