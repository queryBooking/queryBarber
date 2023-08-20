import google from 'googleapis';
import ClientOAuth2 from 'client-oauth2';

const CLIENT_ID =
  '367165157540-hmljmvrmjmsr81ap3aeaaotvnk2uqesr.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URL = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN =
  '1//048qV1Zb2gmN7CgYIARAAGAQSNwF-L9IrqWB_eZPQuyOdoy9hpXgyfmTO0COPHJby1r2d9dMhXGWV9SrxddNprHYHtZbQvix67eA';

const TOKEN_URI = 'https://oauth2.googleapis.com/token';
const AUTH_URI = 'https://accounts.google.com/o/oauth2/auth';

const ekoAuth = new ClientOAuth2({
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  accessTokenUri: TOKEN_URI,
  authorizationUri: AUTH_URI,
  redirectUri: REDIRECT_URL,
});
