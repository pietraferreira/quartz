---
title: "Year 3 - Modules"
cssclass: dashboard
tags:
- university 
type: hub
year: '3'
---
<div style="display: flex; align-items: center;">
  <div style="margin-right: 20px;">
    <img src="https://giffiles.alphacoders.com/215/215911.gif" width="200">
  </div>
  <div>
    <p>A list of all the different modules I am taking during my third year.</p>
    <p>Year 3 is 2/3 of the final grade!</p>
  </div>
</div>

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

```dataview
TABLE dateformat(file.mtime, "dd.MM.yyyy - HH:mm") AS "Last modified"
FROM ""
WHERE year = "3"
SORT file.mtime DESC
LIMIT 25
```

# CS3072 - Final Year Project
Lecturer: Fang Wang

- 👨‍👩‍👦 [Supervisor](notes/university/year3/cs3072/fyp-supervisor.md)
-  👥 Meetings
- 📚 Reading list

# [CS3001](notes/university/year3/cs3001/cs3001.md) - Advanced Topics
Lecturer:

- 💼 Lecture notes
	- [[Cloud backup]]
- 🔬 Lab notes
	- [[Q1 2022]]
- 📚 Reading list
	- [[Sally Smith]]
# [CS3003](notes/university/year3/cs3003/cs3003.md) - Software Engineering
Lecturer: Steve Counsell and Dr Giuseppe Destefanis.

- 💻 Course structure.
    - [Programme](notes/general/cs3003-programme.md).
- 💼 Lecture notes
	- [[Cloud backup]]
- 🔬 Lab notes
	- [[Q1 2022]]
- 📚 Reading list
    - [Ian Sommerville - Software Engineering, 10th Edition-Pearson (2016)](assets/university/year3/books/Ian%20Sommerville%20-%20Software%20Engineering,%2010th%20Edition-Pearson%20(2016).pdf).
- ❗Assessments
    - Deadlines:
        - Software metrics analysis: **05/12**.
# [CS3609](notes/university/year3/cs3609/cs3609.md) - Cybersecurity
Lecturer:

- 💼 Lecture notes
	- [[Cloud backup]]
- 🔬 Lab notes
	- [[Q1 2022]]
- 📚 Reading list
	- [[Sally Smith]]
# [CS3002](notes/university/year3/cs3002/cs3002.md) - Artificial Intelligence
Lecturer: Allan Tucker

- 💻 Course structure.
    - [Programme](notes/general/cs3002-programme.md)
- 💼 Lecture notes
	- [[Cloud backup]]
- 🔬 Lab notes
    - [Lab 0 - Introduction to R](notes/university/year3/cs3002/cs3002-lab0.md)
- 📚 Reading list
    - [Principles of Data Mining (MIT 2001)](assets/university/year3/books/Principles%20of%20Data%20Mining%20(MIT%202001).pdf)
        - Annotation.
    - [Michael Negnevitsky - Artificial Intelligence: A Guide to Intelligent Systems 3rd Edition](assets/university/year3/books/Michael%20Negnevitsky%20-%20Artificial%20Intelligence_%20A%20Guide%20to%20Intelligent%20Systems%203rd%20Edition-Addison%20Wesley%202011.pdf)
- ❗Assessments
    - Deadlines:
        - Lab 1 & 2: **06/11**.
        - Lab 3 & 4: **27/11**.
- 📈 Extra Reading
    - Unsupervised Learning in R
# Vault Info
- 〽️ Stats
	-  File Count: `$=dv.pages().length`