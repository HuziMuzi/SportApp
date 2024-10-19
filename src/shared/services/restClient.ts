import {Gender, User} from 'src/shared/services/types.ts';
import {getStorageItem, setStorageItem} from 'src/shared/lib/utils/storage.ts';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {AsyncStorageKeys} from 'src/shared/lib/consts.ts';

type UserCredential = FirebaseAuthTypes.UserCredential;
type LocalSettings = {
  gender?: Gender | null;
};

export class RestClient {
  constructor() {}

  loginWithEmailAndPassword = async (
    email: string,
    password: string,
  ): Promise<UserCredential | undefined> => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(email, password);
      return userCredential;
    } catch (e) {
      console.error('Rest client [loginWithEmailAndPassword]', e);
    }
  };

  login = async (params: any): Promise<UserCredential | undefined> => {
    return await this.loginWithEmailAndPassword(params?.email, params?.password);
  };
  initUserDataFromStorage = async () => {
    return (await getStorageItem(AsyncStorageKeys.User)) || '{}';
  };

  saveInitUserData = async (data: User) => {
    await setStorageItem(AsyncStorageKeys.User, JSON.stringify(data));
    console.log(data);
  };
  getUserData = async () => {
    return await getStorageItem(AsyncStorageKeys.User);
  };
}
