const express = require('express')
const app = express()
const port = 3000

const { startJob, stopJob } = require('./job')

app.get('/startjob', (req, res) => {
    startJob().then((result) => {
        res.json({
            "api": "node-cron-jobs",
            "status": result
        })
    })
})

app.get('/ping', (req, res) => {
    res.json({
        "api": "node-cron-jobs",
        "status": "working"
    })
})

app.get('/stopjob', (req, res) => {
    stopJob().then((result) => {
        res.json({
            "api": "node-cron-jobs",
            "status": result
        })
    })
})

app.listen(port, () => {
    console.log(`API is listening at PORT: ${port}`)
})