export default interface IUser {
    _id: string;
    uid: string;
    name: string;
    email: string;
    picture?: string;
}

export const DEFAULT_USER: IUser = {
    _id: '',
    uid: '',
    name: '',
    email: '',
    picture: ''
};

export const DEFAULT_FIRE_TOKEN = '';
