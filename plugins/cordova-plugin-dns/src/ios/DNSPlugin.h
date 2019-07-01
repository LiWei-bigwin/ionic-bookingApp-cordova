#import <Cordova/CDV.h>

@interface DNSPlugin : CDVPlugin

- (void)resolve:(CDVInvokedUrlCommand*)command;

@end
