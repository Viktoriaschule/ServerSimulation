# Server simulation
## Setup
1. Create the `config.json` file with all attributes of the `config.json.example` file.
2. Init the `Server` git submodule:
    - `git submodule add https://github.com/Viktoriaschule/Server.git src/Server`
3. Create the `config.json` file in the `Server` submodule
3. Set in the `config.json` file of the `Server` module the host and port of this simulation server

## Usage
1. Check if the `Server` module is the newest version: `git pull`
2. Start the simulation server: `yarn start`
3. Start the server project with the `--dev` attribute to user this simulation server instead of the real school servers