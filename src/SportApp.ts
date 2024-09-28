import {SessionService} from 'src/shared/services/SessionService.ts';
import {RestClient} from 'src/shared/services/restClient.ts';

class SportApp {
  constructor() {
    console.log('Starting SportApp');
  }
  restClient = new RestClient();
  sessionService = new SessionService({restClient: this.restClient});
}

export default new SportApp();
