const { parse } = require('json2csv');
const Advertisements = require('../Models/advertismentModel');
const calander = require('../Models/calanderModel');
const Grievance = require('../Models/grievanceModel');
const News = require('../Models/newsModel');
const schedule = require('../Models/scheduleModel');
const Suggestions = require('../Models/suggestionsModel');
const Transactions = require('../Models/transactionModel');
const walletCharge = require('../Models/walletchargeModel');

const year = new Date().getFullYear()

module.exports.archiveAdvertisements = async (req, res) => {
    Advertisements.find({}, {}, (err, data) => {

        const fields = ['_id', 'title', 'date', 'employee', '__v'];
        const opts = { fields };

        try {
            const csv = parse(data, opts);
            res.setHeader("Content-Type", "text/csv");
            res.setHeader("Content-Disposition", `attachment; filename=Advertisements${year}.csv`);
            res.status(200).end(csv);
        }
        catch(err) {
            console.log(err)
        }
    }).remove();
}

module.exports.archiveNews = async (req, res) => {
    News.find({}, {}, (err, data) => {

        const fields = ['_id', 'title', 'body', 'date', 'employee', '__v'];
        const opts = { fields };

        try {
            const csv = parse(data, opts);
            res.setHeader("Content-Type", "text/csv");
            res.setHeader("Content-Disposition", `attachment; filename=News${year}.csv`);
            res.status(200).end(csv);
        }
        catch(err) {
            console.log(err)
        }
    }).remove();
}

module.exports.archiveCalanders = async (req, res) => {
    calander.find({}, {}, (err, data) => {

        const fields = ['_id', 'year', 'createdAt', 'updatedAt', '__v'];
        const opts = { fields };

        const fieldsSem1 = ['_id', 'year', 'createdAt', 'updatedAt', '__v', 'date', 'hijridate', 'details', 'Id'];
        const optsSem = { fieldsSem1 };

        const arr = [
            {_id: data[0]._id, year: data[0].year, createdAt: data[0].createdAt, updatedAt: data[0].updatedAt, __v: data[0].__v}, 
            ...data[0].semester1, 
            ...data[0].semester2
        ]


        try {
            const csv = parse(arr, optsSem);
            res.setHeader("Content-Type", "text/csv");
            res.setHeader("Content-Disposition", `attachment; filename=Calanders${year}.csv`);
            res.status(200).end(csv);
        }
        catch(err) {
            console.log(err)
        }
    }).remove();
}

module.exports.archiveGrievances = async (req, res) => {
    Grievance.find({}, {}, (err, data) => {

        const fields = ['_id', 'username', 'name', 'department', 'level', 'date', 'subject', 'degree', 'reson', 'type', 'state', 'createdAt', 'updatedAt', '__v'];
        const opts = { fields };

        try {
            const csv = parse(data, opts);
            res.setHeader("Content-Type", "text/csv");
            res.setHeader("Content-Disposition", `attachment; filename=Grievances${year}.csv`);
            res.status(200).end(csv);
        }
        catch(err) {
            console.log(err)
        }
    }).remove();
}

module.exports.archiveSchedules = async (req, res) => {
    schedule.find({}, {}, (err, data) => {

        const fields = ['_id', 'department', 'level', 'semester', 'group1', 'group2', 'subject', 'prof', 'time_from', 'time_to', 'place', 'day', 'Id', "__v"];
        const opts = { fields };

        let arr = [];

        for (let i = 0; i < data.length; i++) {
            arr.push(
                {
                    _id: data[i]._id,
                    department: data[i].department,
                    level: data[i].level,
                    semester: data[i].semester,
                    group1: data[i].group1,
                    group2: data[i].group2,
                },
                ...data[i].subjects
            )
        }

        try {
            const csv = parse(arr, opts);
            res.setHeader("Content-Type", "text/csv");
            res.setHeader("Content-Disposition", `attachment; filename=Schedules${year}.csv`);
            res.status(200).end(csv);
        }
        catch(err) {
            console.log(err)
        }
    }).remove();
}

module.exports.archiveSuggestions = async (req, res) => {
    Suggestions.find({}, {}, (err, data) => {

        const fields = ['_id', 'username', 'name', 'department', 'level', 'type', 'body', '__v'];
        const opts = { fields };

        try {
            const csv = parse(data, opts);
            res.setHeader("Content-Type", "text/csv");
            res.setHeader("Content-Disposition", `attachment; filename=Suggestions${year}.csv`);
            res.status(200).end(csv);
        }
        catch(err) {
            console.log(err)
        }
    }).remove();
}

module.exports.archiveTransactions = async (req, res) => {
    Transactions.find({}, {}, (err, data) => {

        const fields = ['_id' ,'username', 'date', 'service', 'type', 'price', '__v'];
        const opts = { fields };

        try {
            const csv = parse(data, opts);
            res.setHeader("Content-Type", "text/csv");
            res.setHeader("Content-Disposition", `attachment; filename=Transactions${year}.csv`);
            res.status(200).end(csv);
        }
        catch(err) {
            console.log(err)
        }
    }).remove();
}

module.exports.archiveWalletcharges = async (req, res) => {
    walletCharge.find({}, {}, (err, data) => {

        const fields = ['_id', 'studentNo', 'studentName', 'checkNo', 'amount', 'type', 'date', 'createdAt', 'updatedAt', '__v'];
        const opts = { fields };

        try {
            const csv = parse(data, opts);
            res.setHeader("Content-Type", "text/csv");
            res.setHeader("Content-Disposition", `attachment; filename=Walletcharges${year}.csv`);
            res.status(200).end(csv);
        }
        catch(err) {
            console.log(err)
        }
    }).remove();
}