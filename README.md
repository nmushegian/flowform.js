`flowform.js` is a small wrapper around the `purestate` library by Victor Taelin.

It provides a simple ontology of `form`s and `flow`s. A `form` is basically a functional reactive object,
you use the `form` function to help assemble reactive objects without needing to use the purestate constructor everywhere.

Right now `flow` does a simply step of the `_flow` function on an object,
but this is subject to change to guide the user to a more controlled use of a global event bus.

It is strongly recommended to first read through the documentation for that library, it is very short.
Then read the test file. Then if you still have questions, wait for more examples.