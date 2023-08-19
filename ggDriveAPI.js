import { google } from 'googleapis';
import { OAuth2Client } from 'oauth2-client-js';
const CLIENT_ID =
  '367165157540-hmljmvrmjmsr81ap3aeaaotvnk2uqesr.apps.googleusercontent.com';
const CLIENT_SECRET = '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';
const REDIRECT_URL = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN =
  '1//048qV1Zb2gmN7CgYIARAAGAQSNwF-L9IrqWB_eZPQuyOdoy9hpXgyfmTO0COPHJby1r2d9dMhXGWV9SrxddNprHYHtZbQvix67eA';
const oauth2 = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
