#import "DNSPlugin.h"
#include <arpa/inet.h>

@implementation DNSPlugin

- (void)resolve:(CDVInvokedUrlCommand*)command {

    CDVPluginResult *result;
    NSString *hostname = [command.arguments objectAtIndex:0];
    CFHostRef hostref = CFHostCreateWithName(kCFAllocatorDefault, (__bridge CFStringRef)hostname);
    if (hostref) {
        Boolean lookupResult = CFHostStartInfoResolution(hostref, kCFHostAddresses, NULL);
        if (lookupResult == TRUE) {
            CFArrayRef addresses = CFHostGetAddressing(hostref, &lookupResult);
            if (lookupResult == TRUE && CFArrayGetCount(addresses) > 0) {
                CFDataRef address = (CFDataRef)CFArrayGetValueAtIndex(addresses, 0);
                struct sockaddr_in *sockaddr = (struct sockaddr_in*)CFDataGetBytePtr(address);
                if (sockaddr != NULL) {
                    NSString *addrstr = [NSString stringWithCString:inet_ntoa(sockaddr->sin_addr)
                                                  encoding:NSASCIIStringEncoding];
                    result = [CDVPluginResult resultWithStatus:CDVCommandStatus_OK messageAsString:addrstr];
                }
            }
        }
    }

    if (result == NULL) {
        result = [CDVPluginResult resultWithStatus:CDVCommandStatus_ERROR messageAsString:@"Not resolved"];
    }

    [self.commandDelegate sendPluginResult:result callbackId:command.callbackId];
}

@end
