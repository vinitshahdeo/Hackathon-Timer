![hackathon](./hack.png)
<p align="center"><img src="./countdown.gif"/></p>

<p align="center">
<h1 align="center"> Hackathon Timer<br>
<a href="">VinHack</a> - <a href="">VinnovateIT</a></h1>
<h2 align="center"> A timer for Hackathon with <a href="">GitHub Live Updates</a>.<br> Made this for <a href="">VinHack</a> - a hackathon by <a href="">VinnovateIT</a></h2>

<h3 align="center">About VinHack</h3>

<p align="justify"><a href="">VinHack</a> was a hackathon ogranized by <a href="">VinnovateIT</a> at <a href="">VIT Vellore</a>. The organizing team was led by <a href="">Shreya Anand</a>, President of <a href="">VinnovateIT</a>. I had honour of being a member of <a href="">judge</a> panel. That was great experience for me. 
  
My contribution includes :
  
  <strong>
  <ul>
    <li>Monitoring the development of <a href="">website</a></li>
    <li>Developed <a href="">go to place</a> for the participants</li>
    <li>Created <a href="">quiz contest</a> for the participants</li>
    <li>Made <a href="">problem statements</a></li>
  </ul>
</p></strong>

This is basic timer which I've made for [VinHack](). It shows the notifications for the commits made on [VinnovateIT GitHub Organization](). This helps in boosting the energy of participants. If you're organizing a hackathon, you can use this! Just change the the url below with your organization's `url` and here you go!

### Quick Start

Do the following changes in `index.html`

```javascript

var settings = {
         "async": true,
         "crossDomain": true,
         // replace your org username below
         "url": "https://api.github.com/orgs/vinnovateit/events",
         "method": "GET",
         "headers": {
             "Authorization": "XXXXXXXXXXXXXXXXXXX" // replace this with your token
          }

```

and here you go!
