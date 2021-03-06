import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../server';
import { adminSignin, newPost, updateExistingPost } from '../mockdata/mockdata';

chai.use(chaiHttp);

const { expect } = chai;
const server = () => chai.request(app);
const API_PREFIX = '/api/v1';
let authorizedUser;
let postSlug;

describe('Create a new post', () => {
  before((done) => {
    chai
      .request(app)
      .post(`${API_PREFIX}/auth/signin`)
      .send(adminSignin)
      .end((err, res) => {
        const { user: { token } } = res.body;
        authorizedUser = token;
        done();
      });
  });

  it('should create new post successfully', (done) => {
    server()
      .post(`${API_PREFIX}/posts`)
      .set('Authorization', `Bearer ${authorizedUser}`)
      .send(newPost)
      .end((err, res) => {

        expect(res.status).to.be.eql(201);
        expect(res.body).to.have.property('post');
        expect(res.body.post).to.be.to.a('object');
        expect(res.body.post).to.have.property('message');
        expect(res.body.post).to.have.property('createdPost');
        expect(res.body.post.createdPost).to.be.to.a('object');
        const { createdPost: { slug } } = res.body.post;
        postSlug = slug;
        done();
      });
  });
});

describe('Get Posts', () => {
  it('should get all posts successfully', (done) => {
    server()
      .get(`${API_PREFIX}/posts/`)
      .end((err, res) => {
        expect(res.status).to.be.eql(200);
        expect(res.body).to.have.property('posts');
        expect(res.body.posts).to.be.to.a('object');
        expect(res.body.posts).to.have.property('postsCount');
        expect(res.body.posts).to.have.property('allPosts');
        expect(res.body.posts.allPosts).to.be.to.an('array');
        done();
      });
  });
  it('should get single post successfully', (done) => {
    server()
      .get(`${API_PREFIX}/posts/${postSlug}`)
      .end((err, res) => {
        expect(res.status).to.be.eql(200);
        expect(res.body).to.have.property('post');
        expect(res.body.post).to.be.to.a('object');
        expect(res.body.post).to.have.property('id');
        done();
      });
  });
});
