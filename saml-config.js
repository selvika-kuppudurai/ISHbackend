const SamlStrategy = require('passport-saml').Strategy;

module.exports = new SamlStrategy(
  {
    // 🔐 From your IdP metadata
    entryPoint: 'https://accounts.google.com/o/saml2/idp?idpid=C049rjawb',  // SSO URL
    issuer: 'http://localhost5001/metadata', // Your SP Entity ID (can be a URL or identifier)

    callbackUrl: 'http://localhost5001/sso/acs', // Your ACS URL (handles SAML response)

    // 📌 You only need one of the IdP's signing certificates
    cert: `-----BEGIN CERTIFICATE-----
MIIDdDCCAlygAwIBAgIGAZF+tVAqMA0GCSqGSIb3DQEBCwUAMHsxFDASBgNVBAoTC0dvb2dsZSBJ
bmMuMRYwFAYDVQQHEw1Nb3VudGFpbiBWaWV3MQ8wDQYDVQQDEwZHb29nbGUxGDAWBgNVBAsTD0dv
b2dsZSBGb3IgV29yazELMAkGA1UEBhMCVVMxEzARBgNVBAgTCkNhbGlmb3JuaWEwHhcNMjQwODIz
MTAwODE2WhcNMjkwODIyMTAwODE2WjB7MRQwEgYDVQQKEwtHb29nbGUgSW5jLjEWMBQGA1UEBxMN
TW91bnRhaW4gVmlldzEPMA0GA1UEAxMGR29vZ2xlMRgwFgYDVQQLEw9Hb29nbGUgRm9yIFdvcmsx
CzAJBgNVBAYTAlVTMRMwEQYDVQQIEwpDYWxpZm9ybmlhMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8A
MIIBCgKCAQEA6EMD3tjR22V9M6054stMYjwDGDT+m+18R+yJKQ2QDRVUgbvgfgJvA2rOgtKO3blG
pibJgIK2c3DelplHdzL+ITVzs6gL2LAX6uIjM11PsRruT5NQnOOiyHXy7GGZKugoF5fQZFIwCGQn
PUExmet4fkVAAFM3xWE3MV5bIqoXFN2o5ZEPqIaO8aDZsbJ9qFf2D3glDYk3L+1682ZUHfxeMJ1k
YrXFi7wp8BpBLvyNPBoePAQfxVdhozUYy2eJHBccO1WhuzEfNhN5ytxaBMlyv7v2f6rJ4LJejoQ0
Q4dOQ7e/1smaKJPU01h1PKzacuRRfZtnYujlm5Tg+mNl1DbAOQIDAQABMA0GCSqGSIb3DQEBCwUA
A4IBAQCgkexOER8jfPwLBDDa0RgS7yQdK+FxOHsXpa9a662AOmqWkmV7s40SzKySKTtcOWNv5wIx
/kRTXsk9+h0WjQD6DK9bwRrdlQxZ8NVxsSGSQnV3xnXhdBXDASvzWzntwC5NDfZHx0Y8i1vhsctL
bwOWJWeSttN4Pj7zaR++wDCx/Ihjbv824zCBUiVSobgf1idMeFX6RKaHcQADQ4S2EPnby/5Y3BbO
l5EwotZ2Gg6ITd8wLvBslaulWVd6449OLFvXL8r4QMzYZMvE9QvKgfvsauqN74uv3r8P20+qnl7Y
XTagKDkLk1d5PvZoWZHYcSh/jKBt/NpksWvRXPvSJKgW
-----END CERTIFICATE-----`,

    // Optional (recommended)
    identifierFormat: 'urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress'
  },
  function(profile, done) {
    return done(null, profile); // Handle user info returned from IdP
  }
);
