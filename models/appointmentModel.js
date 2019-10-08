//defining the schema here

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var appointmentSchema = new Schema({
    'username': String,
    'appointment': String,
    'isDone': Boolean,
    'hasAttachment': Boolean
})

var Appointments = mongoose.model('Appointments', appointmentSchema);

module.exports = Appointments;