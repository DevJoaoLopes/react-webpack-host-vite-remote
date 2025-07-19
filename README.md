# React Webpack Host + Vite Remote

Example monorepo demonstrating Module Federation between a Webpack host and a Vite remote.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Running the Remote](#running-the-remote)
- [Running the Host](#running-the-host)
- [Contributing](#contributing)
- [License](#license)

## Features
- **Module Federation** across build tools (Webpack host & Vite remote)
- **Monorepo** managed with [pnpm](https://pnpm.io/)
- Shared React dependencies

## Project Structure
```text
./
├── host/                 # Webpack-based host application
│   ├── public/           # HTML template used by Webpack
│   ├── src/              # React source for the host
│   └── webpack.config.js # Webpack configuration
├── remote/               # Vite-based remote application
│   ├── src/              # React components exposed to the host
│   └── vite.config.ts    # Vite configuration with module federation
├── pnpm-workspace.yaml   # pnpm monorepo configuration
├── package.json          # root configuration
└── LICENSE
```

## Prerequisites
- [Node.js](https://nodejs.org/) 18 or higher
- [pnpm](https://pnpm.io/) 8+

## Getting Started
Install all dependencies from the project root:
```bash
pnpm install
```

## Running the Remote
Build and preview the Vite remote:
```bash
pnpm --filter remote build    # build the remote
pnpm --filter remote preview  # serve on http://localhost:3001
```

## Running the Host
Start the Webpack dev server:
```bash
pnpm --filter host start      # http://localhost:3000
```

Open `http://localhost:3000` after both services are running to see the host consuming the remote Button component.

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to improve this example.

## License
This project is licensed under the terms of the Apache 2.0 license. See the [LICENSE](LICENSE) file for details.
