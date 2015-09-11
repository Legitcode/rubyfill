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

###select

Returns a new array of all values for which the predicate returns true
```js
[1, 2, 3, 4, 5].select(value => value === 2);

-> [2, 4]
```
