/*global module, require*/

var logger = require('./logger');

module.exports = {

  /**
   * Before connection (just for faye)
   * @param {client} client connection
   */
  beforeConnect : function (client) {
    // Your logic
    // By example
    // client.setHeader('Authorization', 'OAuth abcd-1234');
    // client.disable('websocket');
  },

  /**
   * on socket io connect
   * @param {client} client connection
   * @param {done}   callback function(err) {}
   */
  onConnect : function (client, done) {
    // Your logic
    // client.subscribe('/test', function() {});
    client.on('msgreceive', function(data){
    });
    done();
  },

  /**
   * send a message
   * @param {client} client connection
   * @param {done}   callback function(err) {}
   */
  sendMessage : function (client, done) {
    // Your logic
    //client.emit('test', { hello: 'world' });
    //client.publish('/test', { hello: 'world' });
    client.emit('msgsend',{
      f_uid: client.uuid,
      msg: 'hello, i am ' + client.uuid
    });
    console.log()
    done();
  }
};
