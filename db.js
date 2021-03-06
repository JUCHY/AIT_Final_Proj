// db.js

// is the environment variable, NODE_ENV, set to PRODUCTION? 
let dbconf;
const fs = require('fs');

if (process.env.NODE_ENV === 'PRODUCTION') {
 // if we're in PRODUCTION mode, then read the configration from a file
 // use blocking file io to do this...
 const path = require('path');
 const fn = path.join(__dirname, 'config.json');
 const data = fs.readFileSync(fn);

 // our configuration file will be in json, so parse it and set the
 // conenction string appropriately!
 const conf = JSON.parse(data);
 dbconf = conf.dbconf;
} else {
 // if we're not in PRODUCTION mode, then use
 dbconf = 'mongodb://localhost/final_project_db';
}



const mongoose = require('mongoose') ;
URLSlugs = require('mongoose-url-slugs');
console.log(dbconf);

mongoose.connect(dbconf);