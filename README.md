# Negotium UI (App fundation template)

Negotium UI is a fundamental template to create a professional web applications. It is intended to create a fundation to an application environment and functionalities such as user management etc.

**Demo Negotium UI**:
[https://negotium.kdc-lab.cloud/](https://negotium.kdc-lab.cloud)

## Support us

If it helps you in any way, We would appreciate any support. A support can be an idea, an improvement or a pull request.

If you want to support us with money, you can do it in the form of [donations](https://paypal.me/kdclab) . We will use all donations to fund our assembly costs or donate it to other open source projects we use.

# Install Negotium UI

Download a release version or clone one of a main branch.
Install all dependencies

```zsh
yarn global add @quasar/cli
cd <project path>
yarn install
```

# Develop with Negotium UI

## Start the app in development mode (hot-code reloading, error reporting, etc.)

```zsh
quasar dev
```

## Build the app for production

```zsh
quasar build
```

# Customize the configuration

Quasar offers a wide range of configuration options. Please refer to the [web pages](https://quasar.dev/quasar-cli/quasar-conf-js) of the Quasar Framework. The following settings only refer to the configuration of the Negotium UI.

## Development with TLS

The developments at IDP expect encrypted communication and our developments follow a security first approach, the configuration provides a TLS configuration for the development server.

```javascript
devServer: {
      https: {
        key: fs.readFileSync('.env/server.key'),
        cert: fs.readFileSync('.env/server.crt'),
        ca: fs.readFileSync('.env/ca_chain.crt'),
      },
      allowedHosts: ['idp.kdc.zone'],
      host: 'negotium.dev.kdc.zone',
      port: 8443,
      open: true, // opens browser window automatically
    },
```

## Identity management with Keycloak

Negotium UI uses [Keyloack](https://www.keycloak.org/) as default as identity provider and access management. Keycloak is integrated with [keycloak.js](https://www.npmjs.com/package/keycloak-js) as an Quasar boot file.

```javascript
module.exports = function (ctx) {
    return {
        ...
        build: {
            ...
            env: {
                KEYCLOAK_CLIENT: ctx.dev ? '<Dev Client ID></Dev>' : '<Prod Client ID>',
                KEYCLOAK_REALM: ctx.dev ? '<Dev Realm>' : '<Prod Realm>',
                KEYCLOAK_HOST: 'https://<idp fqdn>',
                KEYCLOAK_PORT: '<PORT>',
                KEYCLOAK_ONLOAD: 'check-sso',
                KEYCLOAK_LOGGING: ctx.dev ? true : false,
                KEYCLOAK_CHECK_IFRAME: false,
            },
            ...
        }
        ...
    }
}
```

# License

[MIT](http://opensource.org/licenses/MIT) License

Copyright (c) 2020 KDC LAB

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
