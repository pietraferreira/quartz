---
cssclass: dashboard
---
<div style="display: flex; align-items: center;">
  <div style="margin-right: 20px;">
    <img src="https://giffiles.alphacoders.com/215/215911.gif" width="300">
  </div>
  <div>
    <p>A list of all the different modules I am taking during my third year.</p>
    <p>Year 3 is 2/3 of the final grade!</p>
  </div>
</div>

# CS3072 - Final Year Project
Lecturer: Fang Wang

- 👨‍👩‍👦 [Supervisor](notes/university/year3/cs3072/fyp-supervisor.md)
-  👥 Meetings
- 📚 Reading list

# CS3001 - Advanced Topics
Lecturer:

- 💼 Lecture notes
	- [[Cloud backup]]
- 🔬 Lab notes
	- [[Q1 2022]]
- 📚 Reading list
	- [[Sally Smith]]
# CS3003 - Software Engineering
Lecturer:

- 💼 Lecture notes
	- [[Cloud backup]]
- 🔬 Lab notes
	- [[Q1 2022]]
- 📚 Reading list
	- [[Sally Smith]]
# CS3609 - Cybersecurity
Lecturer:

- 💼 Lecture notes
	- [[Cloud backup]]
- 🔬 Lab notes
	- [[Q1 2022]]
- 📚 Reading list
	- [[Sally Smith]]
# CS3002 - Artificial Inteligence
Lecturer:

- 💼 Lecture notes
	- [[Cloud backup]]
- 🔬 Lab notes
	- [[Q1 2022]]
- 📚 Reading list
	- [[Sally Smith]]
# Vault Info
- 〽️ Stats
	-  File Count: `$=dv.pages().length`

```dataviewjs
var a = moment('2023-09-18');
var b = moment('2024-06-18');

var n = moment()
var t = moment().startOf('day');

let q =  b.diff(a, 'days');
let p =  b.diff(t, 'days');
let r =  t.diff(a, 'days');

let h = n.diff(a, 'hours');
let i = b.diff(a, 'hours');

let html = `**UNI YEAR**         <progress style="height:10px;width:20%" value="`+h+`" max="`+i+`"></progress>`

if (r>0 && r<q) {
	html +=  `    ** ` +(h/i*100).toFixed(0)+`%** | `
	html +=  +p+` days remaining, `+ (p/7).toFixed(1)+ ` weeks remaining`
} else if (r==0) {
	html += `    **YEAR : ` +(h/i*100).toFixed(0)+`%** | `+ p + ` days remaining`
} else if (r==q) {
	html += `   Ends today`
} else if (r>q) {
	html += `   Ended `+-p+` days ago`
}else {
	html +=  `   `+-r+` days remaining`
}
dv.paragraph(html)
```
