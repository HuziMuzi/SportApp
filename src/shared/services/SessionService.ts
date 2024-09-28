import {User} from 'src/shared/services/types.ts';
import {getStorageItem, setStorageItem} from 'src/shared/lib/utils/storage.ts';
import {RestClient} from 'src/shared/services/restClient.ts';
import {BehaviorSubject} from 'rxjs';

type SessionServiceConstructorParams = {
  restClient: RestClient;
};

export class SessionService {
  private restClient: RestClient;

  currentUser$ = new BehaviorSubject<any>(null);

  constructor(params: SessionServiceConstructorParams) {
    this.restClient = params.restClient;
  }

  login = async (params: any) => {
    try {
      const user = await this.restClient.login(params);
      console.log('user >>', user);
      this.currentUser$.next({user});
    } catch (e) {
      console.error('sessionService [login]', e);
    }
  };

  saveInitUserData = async (data: User) => {
    await setStorageItem('user', JSON.stringify(data));
    console.log(data);
  };
  getUserData = async () => {
    return await getStorageItem('user');
  };
  getCurrentUser = () => {
    return this.currentUser$.getValue();
  };
}
