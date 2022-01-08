Install the required node modules by running npm install.

Attach the canusb4 to the computer and run node listpPorts.js which will identify all the serial ports node can access.

Edit the file config.json with the correct com port for the canusb4. The default server address is localhost and the standard port is 5550, it is advised that these are not changed. decimaleventparse can be set to 1 to display ops codes and certain events in decimal format, set to 0 for a lighter footprint.

The system can now be started using node cbusServer.js
