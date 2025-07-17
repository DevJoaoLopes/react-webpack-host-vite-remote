import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';

const RemoteVite = React.lazy(() => import('remote/Button'));

export default function App() {
  return (
    <div>
      <h1>Host Webpack</h1>
      <Suspense fallback="Carregando...">
        <RemoteVite />
      </Suspense>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
