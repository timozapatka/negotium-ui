# Negotium UI (App fundation template)

[![Alarmhinweise](https://sonar.kdc-lab.io/api/project_badges/measure?project=com.lab.kdc.vue.negotium-ui&metric=alert_status)](https://sonar.kdc-lab.io/dashboard?id=com.lab.kdc.vue.negotium-ui) [![Security Rating](https://sonar.kdc-lab.io/api/project_badges/measure?project=com.lab.kdc.vue.negotium-ui&metric=security_rating)](https://sonar.kdc-lab.io/dashboard?id=com.lab.kdc.vue.negotium-ui) [![Vulnerabilities](https://sonar.kdc-lab.io/api/project_badges/measure?project=com.lab.kdc.vue.negotium-ui&metric=vulnerabilities)](https://sonar.kdc-lab.io/dashboard?id=com.lab.kdc.vue.negotium-ui) [![Bugs](https://sonar.kdc-lab.io/api/project_badges/measure?project=com.lab.kdc.vue.negotium-ui&metric=bugs)](https://sonar.kdc-lab.io/dashboard?id=com.lab.kdc.vue.negotium-ui)

Negotium UI is a fundamental template to create a professional web applications. It is intended to create a fundation to an application environment and functionalities such as user management etc.

**Demo Negotium UI**:
[https://kdc-lab.github.io/negotium-ui/](https://kdc-lab.github.io/negotium-ui/)

## Support us

If it helps you in any way, We would appreciate any support. A support can be an idea, an improvement or a pull request.

If you want to support us with money, you can do it in the form of [donations](https://paypal.me/kdclab) . We will use all donations to fund our assembly costs or donate it to other open source projects we use.

# Install Negotium UI

Download a release version or clone one of a main branch.
Install all dependencies

```zsh
yarn global add @quasar/cli
git clone https://github.com/kdc-lab/negotium-ui.git
cd negotium-ui
yarn
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
