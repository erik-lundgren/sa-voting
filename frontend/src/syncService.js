import io from 'socket.io-client';

console.log('foo');
const socket = io.connect('/');
socket.on('news', function(data) {
  console.log(data);
  socket.emit('my other event', { my: 'data' });
});
