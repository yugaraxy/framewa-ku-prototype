'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    FIRE_BASE: {
        API_KEY: '"AIzaSyC6uJu8YeKeUwxTeLiDQhax_S7HDOcqBw8"',
        AUTH_DOMAIN: '"wakuwaku-2eeac.firebaseapp.com"',
        DATABASE_URL: '"https://wakuwaku-2eeac.firebaseio.com"',
        PROJECT_ID: '"wakuwaku-2eeac"',
        STORAGE_BUCKET: '"wakuwaku-2eeac.appspot.com"',
        MESSAGING_SENDERID: '"95404604670"',
        APP_ID: '"1:95404604670:web:5f38319139d80d20c2f9af"',
        MEASUREMENT_ID: '"G-5JL87B2NFE"'
    }
  
})
