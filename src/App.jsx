import { BrowserRouter } from 'react-router-dom';
import Router from './routes/AdminRouter';
import 'swiper/css';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import { Provider } from '@/components/ui/provider';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <Provider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </I18nextProvider>
  );
}

export default App;
