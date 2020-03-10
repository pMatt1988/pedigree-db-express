var express = require('express');
var mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

var Dog = new mongoose.Schema ({
    name: {type: String, required: true},
    sire: {type: ObjectId, ref: 'Dog'}, 
    dam: {type: ObjectId, ref: 'Dog'} 
});

module.exports = mongoose.model('Dog', Dog);