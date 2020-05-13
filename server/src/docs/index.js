import swagger from './swagger.json';

import signup from './auth/signup.json';
import signin from './auth/signin.json';

import uploadFiles from './files/uploadFiles.json';
import getFiles from './files/getFiles.json';
import downloadFiles from './files/downloadFiles.json';
import FileBySlug from './files/FileBySlug.json';

import uploadPolicyPaper from './policy-papers/uploadPolicyPaper.json';
import PolicyPaperBySlug from './policy-papers/PolicyPaperBySlug.json';
import downloadPolicyPaper from './policy-papers/downloadPolicyPaper.json';
import getPolicyPapers from './policy-papers/getPolicyPapers.json';

import Posts from './post/getPosts.json';
import getSinglePost from './post/getSinglePost.json';
import getTags from './post/getTags.json';


swagger.paths['/auth/signup'] = signup;
swagger.paths['/auth/signin'] = signin;

swagger.paths['/files/{slug}'] = FileBySlug;
swagger.paths['/files/uploads'] = uploadFiles;
swagger.paths['/files'] = getFiles;
swagger.paths['/files/downloads'] = downloadFiles;

swagger.paths['/policy-paper/uploads'] = uploadPolicyPaper;
swagger.paths['/policy-paper/{slug}'] = PolicyPaperBySlug;
swagger.paths['/policy-paper/downloads'] = downloadPolicyPaper;
swagger.paths['/policy-paper'] = getPolicyPapers;

swagger.paths['/posts'] = Posts;
swagger.paths['/posts/{slug}'] = getSinglePost;
swagger.paths['/posts/tags'] = getTags;
export default swagger;
