//schema only
const { Schema, Types } = require('mongoose');
const {format_date} = require('../utils/formatDate')

//create Reaction schema
const reactionSchema = new Schema({
  reactionId: { type:Schema.Types.ObjectId, default:() => new Types.ObjectId()},
  reactionBody: { type:String, required:true, maxlength:280},
  username: {type:String, required:true},
  createdAt: { type: Date, default: Date.now, get: timestamp => format_date(timestamp) },
},
  {
    toJSON: {
       //use getters since there is get function in Schema ->createdAt
      //default is virtuals
      getters: true,
    },
    id: false,
  }
);


// //create virtual property for reactions count
// thoughtsSchema
//   .virtual('reactionCount')
//   .get(function () {
//     return this.reactions.length;
//   })


module.exports = reactionSchema;