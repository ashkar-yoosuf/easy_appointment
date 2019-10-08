var Appointment = require('../models/appointmentModel');

module.exports = function(app) {

    app.get('/api/setupAppointments', function(req, res) {
        
        var starterAppointment = [
            {
                username: 'user',
                appointment: 'doctor1',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'user',
                appointment: 'doctor3',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'user',
                appointment: 'doctor3',
                isDone: false,
                hasAttachment: false
            }
        ];

        Appointment.create(starterAppointment, function(err, results) {
            res.send(results);
        });

    })

}