import socketIo from 'socket.io';

const PATH = '/listen-version-control';

var versionControlSocket = null;

export default (server) => {
    versionControlSocket = socketIo(server, {path: PATH});

    versionControlSocket.on('connection', (socket) => {
        console.log('new connection - ' + socket.id);
    });

	return versionControlSocket;
}
