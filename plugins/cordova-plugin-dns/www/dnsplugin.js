var dnsPlugin = {
    resolve: function(hostname, success, error) {
        cordova.exec(success, error, "DNSPlugin", "resolve", [hostname]);
    }
};

module.exports = dnsPlugin;
