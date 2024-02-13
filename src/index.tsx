import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from '@/app/providers/StoreProvider';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { ErrorBoundary } from '@/app/providers/ErrorBoundary';
import App from '@/app/App';
import '@/app/styles/index.scss';
import './shared/config/i18n/i18n';
import { ForceUpdateProvider } from './shared/lib/render/forceUpdate';

const container = document.getElementById('root');

if (!container) {
    throw new Error('Контейнер root не найден');
}

const root = createRoot(container);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ThemeProvider>
                <ForceUpdateProvider>
                    <ErrorBoundary>
                        <App />
                    </ErrorBoundary>
                </ForceUpdateProvider>
            </ThemeProvider>
        </StoreProvider>
    </BrowserRouter>,
);
export { Theme } from '@/shared/const/theme';
