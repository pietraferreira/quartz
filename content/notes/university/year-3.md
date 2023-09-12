---
title: Modules
tags:
  - university
created: 2023-09-11
type: hub
---
# Modules

<center><img src="https://giffiles.alphacoders.com/215/215911.gif" width="300"></center>

A list of all the different modules I am taking during my third year.

* Year 3 is **2/3** of the final grade!
### Semester Progress
```dataviewjs
var a = moment("2023-09-18");
var b = moment("2024-06-18");

var n = moment()
var t = moment().startOf('day');

let q =  b.diff(a, 'days');
let p =  b.diff(t, 'days');
let r =  t.diff(a, 'days');

let h = n.diff(a, 'hours');
let i = b.diff(a, 'hours');

let html = `<progress style="height:10px;width:80%" value="`+h+`" max="`+i+`"></progress>`

if (r>0 && r<q) {
	html += `\n#### `+p+` days left of `+q+` days\n`
	html += (h/i*100).toFixed(2)+`% complete`
} else if (r==0) {
	html += `\nstars today`
} else if (r==q) {
	html += `\nends today`
} else if (r>q) {
	html += `\nended `+-p+` days ago`
}else {
	html += `\n#### `+-r+` days to go`
}

dv.paragraph(html)
```
---
## [CS3072](notes/university/year3/cs3072/fyp-supervisor.md) - Final Year Project
---
## CS3001 - Advanced Topics
---
## CS3609 - Cybersecurity
---
## CS3003 - Software Engineering 
---
## CS3002 - Artificial Inteligence