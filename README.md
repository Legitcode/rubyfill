#Rubyfill
##A collection of Ruby like polyfills
###Designed to make your javascript programming life happier

##Installation
```bash
npm install --save legit-rubyfill
```

#Polyfills

##Array
###compact

Removes all undefined, null, or empty strings from an array
```js
[1, 2, undefined, 3, "", null, 4].compact
-> [1, 2, 3, 4]
```