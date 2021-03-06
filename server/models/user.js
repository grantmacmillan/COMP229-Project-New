/*
Student IDs: 
  - 301129935
  - 301136902
  - 301180926
  - 301166198
  - 301134374
  - 301153049
WebApp name: Survey Site
Description: User Model - user.js
*/

//required modules for the User model
let mongoose = require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema(
    {
        username: 
        {
            type: String,
            default: "",
            trim: true,
            required: "username is required"
        },
       email:
       {
           type: String,
           default: "",
           trim: true,
           required: "email address is required"
       },
       displayName:
       {
           type: String,
           default: "",
           trim: true,
           required: "Display name is required"
       },
       created:
       {
           type: Date,
           default: Date.now,
       },
       update:
       {
           type: Date,
           default: Date.now,
       }
    },
    {
        collection: "users"
    }
);

// configure options for the user model
let options = ({missingPasswordError: 'Wrong / Missing Password'});
User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model("User", User)