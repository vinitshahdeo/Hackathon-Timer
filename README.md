![hackathon](./hack.png)
<p align="center"><img src="./countdown.gif"/></p>

<p align="center">
<h1 align="center"> Hackathon Timer<br>
<a href="https://vinhack.hackerearth.com/">VinHack</a> - <a href="https://vinnovateit.com/">VinnovateIT</a></h1>
<h2 align="center"> A timer for Hackathon with <a href="http://githublookbook.com/VinHack/">GitHub Live Updates</a>.<br> Made this for <a href="https://vinhack.hackerearth.com/">VinHack</a> - a hackathon by <a href="https://vinnovateit.com/">VinnovateIT</a></h2>

<h3 align="center">About VinHack</h3>

<p align="justify"><a href="https://vinhack.hackerearth.com/">VinHack</a> was a hackathon ogranized by <a href="https://vinnovateit.com/">VinnovateIT</a> at <a href="http://www.vit.ac.in/">VIT Vellore</a>. The organizing team was led by <a href="https://github.com/ShreyaAnand">Shreya Anand</a>, President of <a href="https://vinnovateit.com/">VinnovateIT</a>. I had honour of being a member of <a href="https://vinhack.hackerearth.com/challenges/hackathon/vinhack/judges/#judges">judge</a> panel. That was great experience for me. 
  
My contribution includes :
  
  <strong>
  <ul>
    <li>Monitoring the development of <a href="https://vinnovateit.com/">website</a></li>
    <li>Developed <a href="https://vinnovateit.github.io/VinHack/">go to place</a> for the participants</li>
    <li>Created <a href="https://docs.google.com/presentation/d/1ewAEOn5QIVFbRP7Ap4JJst_PrfJu6nxCIn28AhWpoiU/edit?usp=sharing">quiz contest</a> for the participants</li>
    <li>Made <a href="https://drive.google.com/file/d/140W1UBMBeuhdIZoxHa3xjUVNwkaa1Yzr/view?usp=sharing">problem statements</a></li>
  </ul>
</p></strong>

This is basic timer which I've made for [VinHack](). It shows the notifications for the commits made on [VinnovateIT GitHub Organization](). This helps in boosting the energy of participants. If you're organizing a hackathon, you can use this! Just change the the url below with your organization's `url` and here you go!

### Check out the live demo [here](http://githublookbook.com/VinHack/)!

### Quick Start

[![GitHub API](https://img.shields.io/badge/GitHub-API-teal.svg?style=flat&logo=github)](https://developer.github.com/v3/)

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

> Learn more about [GitHub API](https://developer.github.com/v3/).

> Check out the offical [website](https://vinhack.vinnovateit.com/) of [VinHack](https://vinhack.hackerearth.com/).


### Node Server Webhook

You can set up an optional Webhook in GitHub, which, upon any event occuring on that repository, will invoke the Github endpoitn mentioned above to be polled for new changes.

For this functionality to work, you must:

1. run `npm install` on the command line where you intend to run the Webhook listener.
1. Set some env variables `HOST` and `PORT` for where the web page can be accessed from the public internet (eg, docker port forwards, router port forwards, etc).
1. run `npm start` to ensure the server correctly runs.
1. Update `index.html` to specify the accessible URL of the node server. `var socket = io('<your_server_address_here:port');`.
1. Optionally, comment out (or increase) the `setInterval(..., 8000)` to decrease/disable polling interval.
1. Once running, test it out by browsing to it's address in a browser.
1. You'll receive the URL you should provide to the GitHub Webhooks API on your repository.
1. Update the the repository URL with the Webhook address you copied. Ensure you set content-type to `application/json`, and ideally, send EVERYTHING. Secrets are not yet supported (requires separate ruby shared key setup *pull request welcome*).

> Checkout the [GitHub Webhook API](https://developer.github.com/webhooks/).


### Thanks!

```javascript


   ________          __   __                    
  / ____/ /___ _____/ /  / /_____               
 / / __/ / __ `/ __  /  / __/ __ \              
/ /_/ / / /_/ / /_/ /  / /_/ /_/ /              
\__________,_____,_/   \__/\____/               
  / ___/ _ \/ _ \                               
 (__  )  __/  __/        __                   __
/____/\__________  __   / /_  ___  ________  / /
  / / / / __ \/ / / /  / __ \/ _ \/ ___/ _ \/ / 
 / /_/ / /_/ / /_/ /  / / / /  __/ /  /  __/_/  
 \__, /\____/\__,_/  /_/ /_/\___/_/   \___(_)   
/____/                                          


```
