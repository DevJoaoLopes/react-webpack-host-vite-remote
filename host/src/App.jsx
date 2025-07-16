import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { loadRemote } from '@module-federation/enhanced';

const RemoteButton = React.lazy(() =>
  loadRemote({
    url: 'http://localhost:3001/remoteEntry.js',
    scope: 'remote',
    module: './Button',
    remoteType: 'module',
  })
);

export default function App() {
  return (
    <div>
      <h1>Host Webpack</h1>
      <Suspense fallback="Carregando...">
        <RemoteButton />
      </Suspense>
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
