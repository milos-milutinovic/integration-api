import { Router } from 'express';
import versionControlSocket from '../../sockets/versionControl.socket';
import pushPayload from './models/push.model';

export default (server) => {
    const router = Router();
    const ioVC = versionControlSocket(server);

	router.post('/push', (req, res) => {

        console.log('/push called');
    
        ioVC.emit('vc_push', pushPayload(req.body));
    
        res.json({ok: true});
    
    });

	return router;
}