import { version } from '../../package.json';
import { Router } from 'express';
import facets from './facets';
import { bitbucket } from '../config.json';
import https from 'https';
import repositoryRouter from './repository/repository';

export default ({ server, config, db }) => {
	let api = Router();

	api.use('/repository', repositoryRouter(server));

	return api;
}
