package com.zegeba.plugin;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;

import org.json.JSONObject;
import org.json.JSONArray;
import org.json.JSONException;

import java.net.InetAddress;
import java.net.UnknownHostException;

public class DNSPlugin extends CordovaPlugin {

    public static final String ACTION_DNS_LOOKUP = "resolve";

    public boolean execute(String action, JSONArray args, CallbackContext ctx) {

        if (ACTION_DNS_LOOKUP.equals(action)) {
            try {
                String hostname = args.getString(0);
                String addr = getHostAddress(hostname);
                ctx.success(addr);
                return true;
            } catch (UnknownHostException uhe) {
                ctx.error(uhe.getMessage());
            } catch (JSONException je) {
                ctx.error("Bad params: " + je.getMessage());
            }
        } else {
            ctx.error("Invalid action");
        }

        return false;
    }

    private String getHostAddress(String name) throws UnknownHostException {
        return InetAddress.getByName(name).getHostAddress();
    }
}
