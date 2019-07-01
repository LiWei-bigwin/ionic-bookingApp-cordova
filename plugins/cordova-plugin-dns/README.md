# Cordova DNS Plugin

A plugin for Apache Cordova that enables applications to manually resolve
hostnames into an underlying network address. This is mostly useful for
determining whether there is a problem with the device's DNS server
configuration.

## Usage

To install, simply add to your project as you would any other cordova plugin:

```
cordova plugin add cordova-plugin-dns
```

Once installed, you should be able to use the JavaScript function to resolve
host names:

```
var hostname = 'myhost.example.com';

function success(address) {
    console.log('Resolved ' + hostname + ' to ' + address);
}

function failure(error) {
    console.log('Failed to resolve ' + hostname + ': ' + error);
}

cordova.plugins.dns.resolve(hostname, success, failure);
```
