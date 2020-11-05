Welcome to Node.js v12.14.0.
Type ".help" for more information.
> var a;
undefined
> typeof a;
'undefined'
> a = 10;
10
> typeof a;
'number'
> a = 'ojet'
'ojet'
> typeof a
'string'
> var x = 10;
undefined
> var y = 20;
undefined
> var z = x + y;
undefined
> console.log(z)
30
undefined
> z
30
>   

# ---------------------------------- Numbers 

> var s = 'RAm'
undefined
> s = 'Ram'
'Ram'
> var y = new String('Ram')
undefined
> s
'Ram'
> y
[String: 'Ram']
> s == y
true
> s === y
false
>
> s[0]
'R'
> s[0] = 'J'
'J'
> s
'Ram'
> // Strings are immutable
undefined
>
>
> var text = 'Mary had a little lamb'
undefined
> text.length
22
> text.indexOf('little')
11
> text.indexOf('little', 5)
11
> var t = text.concat(' ', 'little little lamb')
undefined
> t
'Mary had a little lamb little little lamb'
> text.indexOf('little')
11
> text.indexOf('little', 11)
11
> text.indexOf('little', 12)
-1
> t.indexOf('little', 12)
23
> t.indexOf('little', 11)
11
> t.indexOf('little', 12)
23
> t.indexOf('little', 24)
30
> t.lastIndexOf('little')
30
> t.slice(7, 13)
'd a li'
> t.slice(t.indexOf('little'), 8)
''
> t.slice(t.indexOf('little'),  t.indexOf('little') + 10)
'little lam'
> t.slice(t.indexOf('little'),  t.indexOf('little') + 11)
'little lamb'
> t.substring(7, 13)
'd a li'
> t.slice(-10, -5)
'ittle'
> t
'Mary had a little lamb little little lamb'
> t.substr(11, 10)
'little lam'
> t.replace('little', 'Big')
'Mary had a Big lamb little little lamb'
> t.replace(/little/g, 'Big')
'Mary had a Big lamb Big Big lamb'
> t.toUpperCase()
'MARY HAD A LITTLE LAMB LITTLE LITTLE LAMB'
> t.toLowerCase()
'mary had a little lamb little little lamb'
> var t2 = '   ojet '
undefined
> t2.trim()
'ojet'
> t.chatAt(0)
Thrown:
TypeError: t.chatAt is not a function
> t.charAt(0)
'M'
> t.charCodeAt(0)
77
> t.split()
[ 'Mary had a little lamb little little lamb' ]
> t.split(' ')
[
  'Mary',   'had',
  'a',      'little',
  'lamb',   'little',
  'little', 'lamb'
]
> t
'Mary had a little lamb little little lamb'
> t.split(' ')[1]
'had'
> t3 = t.split(' ')
[
  'Mary',   'had',
  'a',      'little',
  'lamb',   'little',
  'little', 'lamb'
]
> t3
[
  'Mary',   'had',
  'a',      'little',
  'lamb',   'little',
  'little', 'lamb'
]
> t3.join('-')
'Mary-had-a-little-lamb-little-little-lamb'
>                                           

// --------------------------------------------- Strings 

> var x = 10
undefined
> typeof x
'number'
> var y = new Number(11)
undefined
> y
[Number: 11]
> x + y
21
> var z = '10'
undefined
> x + y
21
> x + z
'1010'
> parseInt(z)
10
> x + parseInt(z)
20
> x
10
> x.toString()
'10'
>
> x.toExponential(2)
'1.00e+1'
> x.toFixed(0)
'10'
> var f = 1.234
undefined
> f.toFixed(0)
'1'
> f.toPrecision(2)
'1.2'
>
>
> x
10
> x.toString()
'10'
> x
10
> a = x.toString()
'10'
> a
'10'
> x
10
>
>
> var t = '100.78'
undefined
> f
1.234
> f = t * 1.8 + 32
213.404
> typeof t
'string'
> var t = '100.78C'
undefined
> f = t * 1.8 + 32
NaN
> var n = Number.MAX_VALUE
undefined
> n
1.7976931348623157e+308
> var n = Number.MIN_VALUE
undefined
> n
5e-324
>                          


// ------------------------------------------------------ Numbers

// Question: Lakshmi

> Math
Object [Math] {}
> Math.ceil(t)
101
> Math.floor(t)
100
>     

> var d = new Date()
undefined
> d
2020-10-08T07:53:45.369Z
> d.getDay()
4
> d.getHours()
13
> d.getMinutes()
23
> d.getSecond()
Thrown:
TypeError: d.getSecond is not a function
> d.getSeconds()
45
> d.getHours()
13

// Question by Reenu/Others

> String
[Function: String]
> Math
Object [Math] {}
> Number
[Function: Number]
> Date
[Function: Date]
> JSON
Object [JSON] {}
> RegEx
Thrown:
ReferenceError: RegEx is not defined
> RegExp
[Function: RegExp]
> typeof d.getHours()
'number'
>
>
>
> String
[Function: String]
> String()
''
> typeof String()
'string'
> s = new String('Twinkle')
[String: 'Twinkle']
> s.toUpperCase()
'TWINKLE'
> var person = {fname:"John"}
undefined
> person
{ fname: 'John' }
> typeof person
'object'
>
> function person(n){
... this.fname = n;
... }
undefined
> person
[Function: person]
>    
> p
person { fname: 'Ram' }
>                   


