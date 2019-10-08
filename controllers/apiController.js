var Appointments = require('../models/appointmentModel');
var bodyParser = require('body-parser');

module.exports = function(app) {

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/appointments/:uname', function(req, res) {

        Appointments.find({ username: req.params.uname },
            function(err, appointments) {
                if (err) throw err;
                res.send(appointments)
            });

    });

    app.get('/api/appointments/:id', function(req, res) {

        Appointments.findById({ _id: req.params.id },
            function(err, appointments) {
                if (err) throw err;
                res.send(appointments);
            });

    });

    app.post('/api/appointments', function(req, res) {

        if (req.body.id) {
            Appointments.findByIdAndUpdate(req.body.id, {
                appointment: req.body.appointments, 
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment },
                function(err, Appointments) {
                    if (err) throw err;
                    res.send('Success');
                });

        }

        else {
            var newAppointment = Appointments({
                username: 'user',
                appointment: req.body.appointments,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            });
            newAppointment.save(
                function(err) {
                    res.send('Success');
                }
            );
        }

    });

    app.delete('/api/appointment', function(req, res) {

        Appointments.findByIdAndRemove(req.body.id,
            function(err) {
                if (err) throw err;
                res.send('Success');
            });
    });

}