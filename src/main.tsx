import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
import '@patternfly/react-core/dist/styles/base.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);