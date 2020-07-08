var schedule = require('node-schedule');

let job

const startJob = () => {
    return new Promise((resolve, reject) => {
        try {
            console.log(`${new Date().toLocaleString()}: job started`);

            job = schedule.scheduleJob('*/1 * * * *', function () {
                console.log(`${new Date().toLocaleString()}: job is working`);
            });
            resolve('job started')
        }
        catch (err) {
            reject(`failed: ${err}`)
        }
    })
}

const stopJob = () => {
    return new Promise((resolve, reject) => {
        try {
            if (job) {
                job.cancel()
                console.log(`${new Date().toLocaleString()}: job stopped`);
                resolve('job stopped')
            } else {
                resolve('first start job')
            }
        } catch (err) {
            reject(`failed: ${err}`)
        }
    })
}

module.exports = { startJob, stopJob }