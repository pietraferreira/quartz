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
-  👥 Meetings
- 👨‍👩‍👦 [Supervisor](notes/university/year3/cs3072/cs3072.md)
- 📚 Reading list

# CS3001 - Advanced Topics
- 💼 Lecture notes
	- [[Cloud backup]]
	- [[Firewall upgrades]]
	- [[IT Cybersecurity training]]
- 🔬 Lab notes
	- [[Q1 2022]]
	- [[Q2 2022]]
	- [[Q3 2022]]
	- [[Q4 2022]]
- 📚 Reading list
	- [[Sally Smith]]
	- [[Bill Hansen]]
	- [[Brad Jefferson]]
	- [[Olga Olson]]

# Vault Info
- 🗄️ Recent file updates
 `$=dv.list(dv.pages('').sort(f=>f.file.mtime.ts,"desc").limit(4).file.link)`
- 🔖 Tagged:  favorite 
 `$=dv.list(dv.pages('#cs').sort(f=>f.file.name,"desc").limit(4).file.link)`
- 〽️ Stats
	-  File Count: `$=dv.pages().length`
 
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