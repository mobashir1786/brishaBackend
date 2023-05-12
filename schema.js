const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'please enter issue title']
    },
    desc: {
        type: String,
        required: [true, 'please enter issue detail'],
    },
    issue:{
        type:String,
        required:true,
        default:"generated"
    },
});

module.exports = issueSchema;