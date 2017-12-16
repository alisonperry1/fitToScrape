var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var headlineSchema = new Schema({
headline: {
type: String,
required: true,
unique: true
},
summary: {
type: String,
required: true
},
url: {
type: String,
required: true
},
date: String,
saved: {
type: Boolean,
default: false
}
});
var headline = mongoose.model("headline", headlineSchema);
module.exports = headline;