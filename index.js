// const express = require('express');
import http from 'http';
import express from 'express';
// const express = require('express');
import passport from 'passport';
import fs from 'fs';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();

<<<<<<< HEAD
const sslOptions = {
  key: fs.readFileSync('./ssl/key.pem'),
  cert: fs.readFileSync('./ssl/cert.pem'),
=======
import dotenv from 'dotenv';
dotenv.config();

const sslOptions = {
  key: fs.readFileSync(process.env.SSL_KEY_PATH),
  cert: fs.readFileSync(process.env.SSL_CERT_PATH),
>>>>>>> c9ad3e7 (Initial commit)
};

const PORT = 5000;
// const solutionRoutes = require('./routes/solution.routes');
// import solutionRoutes from './routes/solution.routes.js'
// import { solutionRoutes } from './routes/solution.routes.js';
import solutionRoutes from './routes/solution.routes.js';
// app.use(cors());

app.use(cors({
  origin: process.env.ALLOWED_ORIGIN,
  credentials: true
}));
app.use(express.json());
app.use('/api/solutions', solutionRoutes);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());


http.createServer(sslOptions, app).listen(5000, () => {
  console.log(`✅ HTTPS server running at https://localhost:5000`);
});
// const samlStrategy = new SamlStrategy(
//   {
//     entryPoint: 'https://accounts.google.com/o/saml2/idp?idpid=C049rjawb',
//     issuer: 'https://localhost:5001/metadata',
//     callbackUrl: 'https://localhost:5001/sso/acs',
//     cert: `-----BEGIN CERTIFICATE-----
// MIIDdDCCAlygAwIBAgIGAZF+tVAqMA0GCSqGSIb3DQEBCwUAMHsxFDASBgNVBAoTC0dvb2dsZSBJ
// bmMuMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MQ8wDQYDVQQDEwZHb29nbGUxGDAWBgNVBAsTD0dv
// b2dsZSBGb3IgV29yazELMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWEwHhcNMjQwODIz
// MTAwODE2WhcNMjkwODIyMTAwODE2WjB7MRQwEgYDVQQKEwtHb29nbGUgSW5jLjEWMBQGA1UEBxMN
// TW91bnRhaW4gVmlldzEPMA0GA1UEAxMGR29vZ2xlMRgwFgYDVQQLEw9Hb29nbGUgRm9yIFdvcmsx
// CzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpDYWxpZm9ybmlhMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8A
// MIIBCgKCAQEA6EMD3tjR22V9M6054stMYjwDGDT+m+18R+yJKQ2QDRVUgbvgfgJvA2rOgtKO3blG
// pibJgIK2c3DelplHdzL+ITVzs6gL2LAX6uIjM11PsRruT5NQnOOiyHXy7GGZKugoF5fQZFIwCGQn
// PUExmet4fkVAAFM3xWE3MV5bIqoXFN2o5ZEPqIaO8aDZsbJ9qFf2D3glDYk3L+1682ZUHfxeMJ1k
// YrXFi7wp8BpBLvyNPBoePAQfxVdhozUYy2eJHBccO1WhuzEfNhN5ytxaBMlyv7v2f6rJ4LJejoQ0
// Q4dOQ7e/1smaKJPU01h1PKzacuRRfZtnYujlm5Tg+mNl1DbAOQIDAQAB
// -----END CERTIFICATE-----`,
//     identifierFormat: 'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress'
//   },
//   function(profile, done) {
//     return done(null, profile); // handle user profile
//   }
// );

// // register the strategy with passport
// passport.use(samlStrategy);
// app.get('/metadata', (req, res) => {
//   res.type('application/xml');
//   res.send(samlStrategy.generateServiceProviderMetadata(null, null));
// });



// const app = express();
