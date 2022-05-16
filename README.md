# PaintMix

## Description
PaintMix is a just-for-fun solo project created in roughly two days. Site visitors create paint buckets and add drops of paint. The resulting color is aggregated per bucket and across all created buckets.

## Installation and set-up
This project is not currently deployed, but you can access it locally via the following steps.

Pre-Requirements:
* Node.js
* MongoDB

After cloning this repo to your local machine, navigate to the project's root directory. Create a new file named `.env` and paste in this text: `DB_HOST=localhost:27017`. If your mongod process is running on a different port, amend this file accordingly.

Next, run the following terminal commands:
```
npm install
npm run build
npm start
```
Finally, visit http://localhost:3400 in your browser.
