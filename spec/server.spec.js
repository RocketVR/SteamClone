import { expect, assert } from 'chai';
import axios from 'axios';
import {} from 'dotenv/config';
import 'babel-polyfill'; // for async/await compiling
import server from '../server/index';

describe('Express Server', () => {
  let response;
  const query = { params: { msg: 'this is a test' } };
  before((done) => {
    axios.get(`http://127.0.0.1:${process.env.PORT}`, query)
      .then(res => { response = res; })
      .then(() => done())
      .catch(err => done(err));
  });

  it('should respond to GET with 200 status', () => {
    expect(response.status).to.equal(200);
  });
});
