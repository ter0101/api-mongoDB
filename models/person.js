const mongodb = require("mongoose");
const Schema = mongodb.Schema;

//create geo schema(geojson)
const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
});

//create schema & models
const PersonSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name filed"]
  },
  age: {
    type: Number,
    required: [true, "Age filed"]
  },
  avalible: {
    type: Boolean,
    default: false
  },
  //add geo location
  geomatry:GeoSchema
});

const person = mongodb.model("person", PersonSchema);
module.exports = person;
