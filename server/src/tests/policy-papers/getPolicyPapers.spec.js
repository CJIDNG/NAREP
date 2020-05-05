import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';

chai.use(chaiHttp);

const { expect } = chai;
const server = () => chai.request(app);
const API_PREFIX = '/api/v1/policy-paper';
const slug = 'lorem-12939933';

describe('Get Policy Paper', () => {
  it('should get all policy Paper successfully', (done) => {
    server()
      .get(`${API_PREFIX}`)
      .end((err, res) => {
        expect(res.status).to.be.eql(200);
        expect(res.body).to.have.property('files');
        expect(res.body.files).to.be.to.a('object');
        expect(res.body.files).to.have.property('filesCount');
        expect(res.body.files).to.have.property('allFiles');
        expect(res.body.files.allFiles).to.be.to.an('array');
        done();
      });
  });
});
