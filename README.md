Bộ chuyển đổi tiếng việt phỏng theo nghiên cứu của PGS.TS Bùi Hiền (For fun :D). Module sử dụng Typescript

### Installation
```bash 
npm install --save tiengviet-to-tieqviet
```

## Usage
### Nodejs
```bash
var tieqviet = require('tiengviet-to-tieqviet');
var boys = tieqviet.convert('Luật giáo dục');
Output should be 'Luật záo zụk'
```

### TypeScript
```bash
import * as tieqviet from 'tiengviet-to-tieqviet';
console.log(tieqviet.convert('Luật giáo dục'));
Output should be 'Luật záo zụk'
```

## Test
```bash 
npm run test
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
    Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release