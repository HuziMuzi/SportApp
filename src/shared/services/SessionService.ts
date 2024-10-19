import {SessionServiceConstructorParams, SessionStatus, User} from 'src/shared/services/types.ts';
import {getStorageItem, setStorageItem} from 'src/shared/lib/utils/storage.ts';
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
      const userData = JSON.parse(await this.restClient.initUserDataFromStorage());
      console.log('userData in login', userData);
      this.currentUser$.next({name: 'Andrei', ...userData});
      this.changeStatus(SessionStatus.Authorized);
    } catch (e) {
      console.error('sessionService [login]', e);
    }
  };
  setUserData = async (data: User) => {
    await this.setUserDataStorage(data);
    const userData = this.getUserData();
    this.currentUser$.next({userData, ...data});
  };
  setUserDataStorage = async (data: User) => {
    const userData = (await this.getUserData()) || {};
    await setStorageItem('user', JSON.stringify({...userData, ...data}));
    console.log(data);
  };
  getUserData = async () => {
    return await getStorageItem('user');
  };
  getCurrentUser = () => {
    return this.currentUser$.getValue();
  };
}
