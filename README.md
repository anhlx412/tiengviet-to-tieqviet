Bộ chuyển đổi tiếng việt phỏng theo nghiên cứu của PGS.TS Bùi Hiền (For fun :D). Module sử dụng Typescript

### Installation

```npm install --save tiengviet-to-tieqviet```

## Usage
### Nodejs
    ```nodejs
var tieqviet = require('tiengviet-to-tieqviet');
var boys = tieqviet.convert('Luật giáo dục');
```
    ```sh
Output should be 'Luật záo zụk'
```
### TypeScript
    ```typescript
import * as tieqviet from 'tiengviet-to-tieqviet';
console.log(tieqviet.convert('Luật giáo dục'))
```
    ```sh
Output should be 'Luật záo zụk'
```

## Test
    ```sh
npm run test
```
## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
    Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release