C:\Users\Purushotham>node
Welcome to Node.js v12.14.0.
Type ".help" for more information.
> var L = ['red', 'green', 'blue']
undefined
> L
[ 'red', 'green', 'blue' ]
> typeof L
'object'
> L[0]
'red'
> L[0] = 'golden'
'golden'
> L
[ 'golden', 'green', 'blue' ]
> // The array object is mutable in nature
undefined
> // Access the elements using the subscripts
undefined
>
> L[1] = ['white', 'grey', 'black']
[ 'white', 'grey', 'black' ]
> L
[ 'golden', [ 'white', 'grey', 'black' ], 'blue' ]
> L[1]
[ 'white', 'grey', 'black' ]
> L[1][1]
'grey'
> L[1][1][1]
'r'
> L[1][1] = 'superwhite'
'superwhite'
> L
[ 'golden', [ 'white', 'superwhite', 'black' ], 'blue' ]
> L[1][2][1] = 'k'
'k'
> L
[ 'golden', [ 'white', 'superwhite', 'black' ], 'blue' ]
>
> // Array is mutable
undefined
> // The elements in the array need not be mutable
undefined
>
> L
[ 'golden', [ 'white', 'superwhite', 'black' ], 'blue' ]
>
> L = ['red','green','blue']
[ 'red', 'green', 'blue' ]
> L
[ 'red', 'green', 'blue' ]
>
>
> // -------------- Adding elements
undefined
> L
[ 'red', 'green', 'blue' ]
> L.push('white')
4
> L
[ 'red', 'green', 'blue', 'white' ]
> L.unshift('golden')
5
> L
[ 'golden', 'red', 'green', 'blue', 'white' ]
>
> L.splice(2, 0, 'yellow')
[]
> L
[ 'golden', 'red', 'yellow', 'green', 'blue', 'white' ]
>
> // ------------------- Removing elements
undefined
>
> L
[ 'golden', 'red', 'yellow', 'green', 'blue', 'white' ]
> L.pop()
'white'
> L
[ 'golden', 'red', 'yellow', 'green', 'blue' ]
> L.shift()
'golden'
> L
[ 'red', 'yellow', 'green', 'blue' ]
> L.splice(1, 1)
[ 'yellow' ]
> L
[ 'red', 'green', 'blue' ]
>
> L.splice(1, 2, ['white', 'black', 'grey'])
[ 'green', 'blue' ]
> L
[ 'red', [ 'white', 'black', 'grey' ] ]
> L.splice(1, 1, 'green', 'blue','yellow', 'oragne', 'golden')
[ [ 'white', 'black', 'grey' ] ]
> L
[ 'red', 'green', 'blue', 'yellow', 'oragne', 'golden' ]
>
> // ----------------------------- Searching for elements
undefined
>
> L
[ 'red', 'green', 'blue', 'yellow', 'oragne', 'golden' ]
> var x = L.filter(e => e == 'blue')
undefined
> x
[ 'blue' ]
> var x = L.find(e => e == 'blue')
undefined
> x
'blue'
> var x = L.findIndex(e => e == 'blue')
undefined
> x
2
> L.includes('blue')
true
> L.indexOf('blue')
2
> L.push('blue')
7
> L
[
  'red',    'green',
  'blue',   'yellow',
  'oragne', 'golden',
  'blue'
]
> var x = L.filter(e => e == 'blue').length
undefined
> x
2
> // ---------------------------------- Reoraganizing arrays
undefined
>
> L
[
  'red',    'green',
  'blue',   'yellow',
  'oragne', 'golden',
  'blue'
]
> L.sort()
[
  'blue',   'blue',
  'golden', 'green',
  'oragne', 'red',
  'yellow'
]
> L.reverse()
[
  'yellow', 'red',
  'oragne', 'green',
  'golden', 'blue',
  'blue'
]
> N = [40, 100, 1, 5, 25, 10]
[ 40, 100, 1, 5, 25, 10 ]
> N.sort()
[ 1, 10, 100, 25, 40, 5 ]
> N.sort(function(a,b) {return a - b});
[ 1, 5, 10, 25, 40, 100 ]
> N.sort(function(a,b) {return b - a});
[ 100, 40, 25, 10, 5, 1 ]
> N.sort((a,b) => (a-b))
[ 1, 5, 10, 25, 40, 100 ]
>
> // -------------------------------------- iteration on arrays
undefined
>
> for(x in L) { console.log(x); }
0
1
2
3
4
5
6
undefined
> for(x of L) { console.log(x); }
yellow
red
oragne
green
golden
blue
blue
undefined
> for(i = 0; i < L.length; i++) { console.log(L[i]); }
yellow
red
oragne
green
golden
blue
blue
undefined
>                  