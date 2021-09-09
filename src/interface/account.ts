export default interface IAccount {
  _id: string;
  uid: string;
  name: string;
  email: string;
}

export const DEFAULT_USER: IAccount = {
  _id: "",
  uid: "",
  name: "",
  email: "",
};

export const DEFAULT_FIRE_TOKEN = "";
