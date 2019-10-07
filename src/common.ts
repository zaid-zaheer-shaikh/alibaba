export function codeGenerate(n) {
    let add = 1, max = 12 - add;
    if ( n > max ) {
        return codeGenerate(max) + codeGenerate(n - max);
    }
    max = Math.pow(10, n + add);
    const min    = max / 10;
    let number = Math.floor( Math.random() * (max - min + 1) ) + min;
    return ('' + number).substring(add);
}

interface sendMessageInput {
    body: string;
    to: string;
}
export function sendMessageClient(input: sendMessageInput) {
    const accountSid = 'AC8d2355c54cdebb4bf2f4b9639b7a49b7';
    const authToken = '7d199e6628919c701800946778fecc6f';
    const client = require('twilio')(accountSid, authToken);
    client.messages
      .create({
         body: input.body,
         from: +12053031920,
         to: input.to,
       })
      .then(message => console.log(message.sid))
      .catch(message => console.log(message.error));
}
