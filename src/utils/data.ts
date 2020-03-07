import path from 'path';
import fs from 'fs';

const getData = () => {
    return JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'data.json')).toString());
}

export default getData;