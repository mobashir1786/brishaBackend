const express = require("express");
const IssueRoute = express.Router();
const mongoose = require('mongoose');
const issueschema = require('./schema');


mongoose.connect("mongodb+srv://mobashir:mobashir123@cluster0.sv5dvda.mongodb.net/Grocery?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("connected with mongodb");
    })
    .catch((err) => {
        console.log(err);
    });
const issueModel = new mongoose.model("issuedata", issueschema);

IssueRoute.post("/createissue", async (req, res) => {
    const bodyData = req.body;
    const title = bodyData.title;
    const desc = bodyData.desc;

    const output = await issueModel.create({
        title, desc
    });
    res.status(200).json({
        success: true,
        output
    })
})

// get all product 
IssueRoute.get("/getissue", async (req, res) => {

    const output = await issueModel.find();
    res.status(200).json({
        success: true,
        output
    })
})

IssueRoute.post('/updateissue', async (req, res) => {
    const bodyData = req.body;
    const id = bodyData._id;
    const output = await issueModel.updateOne({ _id: id }, { $set: { "issue": "resolved" } });
    res.status(200).json({
        success: true,
        output
    });
});

module.exports = IssueRoute;