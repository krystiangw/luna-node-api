import { MarketApi, OrdersApi, Configuration } from './';
import * as dotenv from 'dotenv';


const publicKey = dotenv.config().parsed?.LUNO_PUBLIC as string;
const secretKey = dotenv.config().parsed?.LUNO_SECRET as string;

// PUBLIC API
async function getOrderbook() {
  const marketApi = new MarketApi();
  try {
    const results = await marketApi.getOrderBookFull({ pair: 'XBTUSDC' });
    console.log('getOrderBookFull response: ', results);
  } catch (err) {
    console.error(err);
  }
}

getOrderbook();


// API AUTH
async function getUserOrders() {
  const conf = new Configuration({
    headers: {
      Authorization: "Basic " + Buffer.from(publicKey + ":" + secretKey, 'utf8').toString('base64'),
    },
    // for Node < 18.0 needs to provide fetch API
    // fetchApi: fetch
  });

  const ordersApi = new OrdersApi(conf);
  try {
    const results = await ordersApi.listOrders();
    console.log('listOrders response: ', results);
  } catch (err) {
    console.error(err);
  }
}

getUserOrders();