const mongoose = require('mongoose');

const username = "username";//edit here
const password = "user password"; //edit here

mongoose.connect(`mongodb+srv://${username}:${password}@acme.rdqhpu0.mongodb.net/ACME`);

const userSchema = mongoose.Schema({
    username:
    {
        type: String,
        unique:true},
    password:String
})

const eventSchema = mongoose.Schema({
    title:String,
    sub_org:String,
    description:String,
    date:Date,
    completed:Boolean
})

const participantsSchema = mongoose.Schema({
    event:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'events'
    },
    username:String,
    rollnumber:String,
    year:Number,
    section:String
})

const winnersSchema = mongoose.Schema({
    first:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'participants'
    }],
    second:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'participants'
    }],
    third:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'participants'
    }],
    event:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'events'
    }
})

const users=mongoose.model('user',userSchema);
const events=mongoose.model('Events',eventSchema);
const participants=mongoose.model('Participants',participantsSchema);
const winners=mongoose.model('Winners',winnersSchema);

module.exports={
    users,
    events,
    participants,
    winners
}
