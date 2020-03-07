# Server simulation
## Setup
1. Create the `config.json` file with all attributes of the `config.json.example` file.
2. Init the `Server` git submodule:
    - `git submodule add https://github.com/Viktoriaschule/Server.git src/Server`

## Usage
1. Check if the `Server` module is the newest version: `git pull`
2. Start the simulation server: `yarn start`
3. Start the viktoriaapp server (Not the submodule) with the `-s` or `--simulation` attribute and the keys of the features you want to simulate. Currently supported keys:
    - sp (Substitution plan)
3.1. An example is: `yarn start -s sp`


### Substitution plan
1. Go to `data.json`
2. There is an array `substitutionPlan`, this array contains all days for the request. Each day is the updated iso-date from the database substitution plan history
3. For all usual cases should loading history data enough, but when you need to load custom data, you have to add this data in the `data_substitution_plan` table