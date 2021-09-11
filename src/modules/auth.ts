import axios from 'axios';
import config from '../config/config';
import logging from '../config/logging';
import IUser from '../interface/user';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Authenticate = async (uid: string, name: string, email: string | null, fire_token: string, callback: (error: string | null, user: IUser | null) => void) => {
    try {
        const response = await axios({
            method: 'POST',
            url: `${config.server.url}/users/login`,
            data: {
                uid,
                name,
                email
            },
            headers: { Authorization: `Bearer ${fire_token}` }
        });

        if (response.status === 200 || response.status === 201 || response.status === 304) {
            logging.info('Successfully authenticated.');
            callback(null, response.data.user);
        } else {
            logging.warn('Unable to authenticate.');
            callback('Unable to authenticate.', null);
        }
    } catch (error) {
        logging.error(error);
        callback('Unable to authenticate.', null);
    }
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const CreateAccount = async (uid: string, name: string, email: string | null, fire_token: string, callback: (error: string | null, user: IUser | null) => void) => {
    try {
        const response = await axios({
            method: 'POST',
            url: `${config.server.url}/users/register`,
            data: {
                uid,
                name,
                email
            },
            headers: { Authorization: `Bearer ${fire_token}` }
        });

        if (response.status === 200 || response.status === 201 || response.status === 304) {
            logging.info('Successfully authenticated.');
            callback(null, response.data.user);
        } else {
            logging.warn('Unable to authenticate.');
            callback('Unable to authenticate.', null);
        }
    } catch (error) {
        logging.error(error);
        callback('Unable to authenticate.', null);
    }
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const Validate = async (fire_token: string, callback: (error: string | null, user: IUser | null) => void) => {
    try {
        const response = await axios({
            method: 'GET',
            url: `${config.server.url}/users/validate`,
            headers: { Authorization: `Bearer ${fire_token}` }
        });

        if (response.status === 200 || response.status === 304) {
            logging.info('Successfully validated.');
            callback(null, response.data.user);
        } else {
            logging.warn(response);
            callback('Unable to validate.', null);
        }
    } catch (error) {
        logging.error(error);
        callback('Unable to validate.', null);
    }
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const UpdateUser = async (fire_token: string, id: string, picture: string, name: string, email: string, callback: (error: string | null, user: IUser | null) => void) => {
    try {
        const response = await axios({
            method: 'GET',
            url: `${config.server.url}/users/update/${id}`,
            headers: { Authorization: `Bearer ${fire_token}` },
            data: {
                id,
                email,
                name,
                picture
            }
        });

        if (response.status === 200 || response.status === 304) {
            logging.info('Successfully validated.');
            callback(null, response.data.user);
        } else {
            logging.warn(response);
            callback('Unable to validate.', null);
        }
    } catch (error) {
        logging.error(error);
        callback('Unable to validate.', null);
    }
};
