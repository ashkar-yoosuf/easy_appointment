var configValues = require('./config');

//Password encryption and decryption to be done

module.exports = {
    getDBConnectionString: function() {

        return 'mongodb+srv://' + configValues.uname + ':' + configValues.pwd + '@clusterntd-ok5vb.azure.mongodb.net/NodeTodo?ssl=true&replicaSet=clusterntd-shard-0&authSource=admin';
    
    }
}