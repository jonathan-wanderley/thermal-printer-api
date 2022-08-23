import App from './infra/App';
import ENV from './infra/config/env';

const app = new App();

app.setup(ENV.PORT);
