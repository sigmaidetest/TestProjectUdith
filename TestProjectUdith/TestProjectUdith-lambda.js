let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function(event, context, callback) {

sns.publish({
            Message: 'My test message',
            MessageAttributes: {'AWS.SNS.SMS.SMSType': {
                    DataType: 'String',
                    StringValue: 'Promotional'
                },
},
            PhoneNumber: '+94779460639'
        }).promise()
            .then(data => {
                // your code goes here
            })
            .catch(err => {
                // error handling goes here
            });

	callback(null,'Successfully executed');
}