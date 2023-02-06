## [Luno](https://www.luno.com/) Node API library

![NPM Downloads](https://img.shields.io/npm/dw/luno-node-api)

Generated using [@openapitools/openapi-generator-cli](https://www.npmjs.com/package/@openapitools/openapi-generator-cli)
and schema file [luno-schema](luno-schema.json)

# Install

From NPM [https://www.npmjs.com/package/luno-node-api](https://www.npmjs.com/package/luno-node-api)

```npm install luno-node-api```

For Node < 18.0 needs to provide fetch API as part of configuration

# Example

```
import { MarketApi } from 'luno-node-api';

const marketApi = new MarketApi();
const results = await marketApi.getOrderBookFull({ pair: 'XBTUSDC' });
```

See [full example](src/example.ts)

# Run example
```
git clone https://github.com/krystiangw/luno-node-api.git
cd luno-node-api
npm install

## provide .env file
touch .env
echo "LUNO_PUBLIC="YOUR_PUBLIC_LUNO_KEY"" > .env
echo "LUNO_SECRET="YOUR_SECRET_LUNO_KEY"" > .env

npm run example
```