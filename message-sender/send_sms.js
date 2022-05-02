const accountSid = 'AC40f9b160c92657f252bff71bd544d43e';
const authToken = '56dee5fee0fc58fc10b286081f7890ea';
const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        body: 'Sample message from Twilio API',
        from: '+17438004483',
        to: '+919052534646'
    })
    .then(message => console.log("message sent"))
    .catch((err) => {
        console.log(err)
    })
