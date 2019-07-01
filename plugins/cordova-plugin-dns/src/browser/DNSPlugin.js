
function resolve(success, failure) {
	failure("Not implemented for browsers");
}

module.exports = {
	resolve: resolve
};

require('cordova/exec/proxy').add("cordova.plugins.dns", module.exports);

