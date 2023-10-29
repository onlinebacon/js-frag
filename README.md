# js-frag

A library for a javascript equivalent of a GLSL fragment shader.

You start by specifying a function that inputs a two-dimensional coordinate and outputs a color. The Frag class will take care of rendering an image using the specified function for each pixel without locking the browser when are too many pixels to be rendered or when the specified function is too heavy.
