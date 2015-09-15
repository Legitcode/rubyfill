#Rubyfill
##A collection of Ruby like polyfills
Designed to make your javascript programming life happier

##[View Documentation](https://github.com/Legitcode/rubyfill/wiki)

##Installation
```bash
npm install --save legit-rubyfill
```
###Including the library

~~~js
import 'rubyfill' //whole library
import 'rubyfill/array' //all array methods
import 'rubyfill/string'
import 'rubyfill/array/compact' //single method
~~~

##Example

Remove all undefined, null, or empty strings from an array
```js
[1, 2, undefined, 3, "", null, 4].compact
-> [1, 2, 3, 4]
```
