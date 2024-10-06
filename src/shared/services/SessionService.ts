import {SessionServiceConstructorParams, SessionStatus, User} from 'src/shared/services/types.ts';
import {clearStorageItem, getStorageItem, setStorageItem} from 'src/shared/lib/utils/storage.ts';
import {RestClient} from 'src/shared/services/restClient.ts';
import {BehaviorSubject} from 'rxjs';

export class SessionService {
  private restClient: RestClient;

  status$ = new BehaviorSubject<SessionStatus>(SessionStatus.NotAuthorized);
  currentUser$ = new BehaviorSubject<any>(null);

  constructor(params: SessionServiceConstructorParams) {
    this.restClient = params.restClient;
  }

  subscribeStatus = (cb: (status: SessionStatus) => void) => {
    return this.status$.subscribe(cb);
  };
  changeStatus = (status: SessionStatus) => {
    return this.status$.next(status);
  };

  login = async (params: any) => {
    try {
      // const user = await this.restClient.login(params);
      // console.log('user >>', user);
      console.log('local setting', await this.restClient.initLocalSettings());
      await clearStorageItem('user');
      this.currentUser$.next({name: 'Andrei'});
      this.changeStatus(SessionStatus.Authorized);
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
  isFirstSignIn = async () => {};
}
