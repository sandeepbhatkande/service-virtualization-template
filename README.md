service-virtualization with mountebank
=========================
## Dependency installation
```bash
yarn or npm install
```
## Property File Settings in AppProps.json file
```javascript
{
    "protocol": "#PROTOCOL#", // it can be http or https
    "url": "#URL#", // URL on which mountebank server will run
    "port": "#PORT#", // PORT number on which mountebank server will run
    "service_port": "#SERVICE_PORT#", // PORT for stubs URL
    "source": "#source#" //Virtualization server product scripts will be loaded according to this values. it can be se/sk/ease
}

```
## Server start
```bash
Use command yarn start or npm start
```
## Usefull Mountebank URLs
```bash
1) #PROTOCOL#://#URL#:#PORT#/imposters
 This will give all the list of stubs working on virtualization server
 
2) #PROTOCOL#://#URL#:#PORT#/config
 It will show all mountebank config given to servver

3) #PROTOCOL#://#URL#:#PORT#/logs
 It will give u mountebank server logs
 
4) #PROTOCOL#://#URL#:#PORT#
 It wil give all the mountebank lib docs, it can help u to write stubs
```
## Stub Scripts Writing
```bash
1. u will see 4 folders se/sk/ease/common
 Write your stub in respective folder
 
 NOTE: Stub file name shoule start with prefix of source like
 SE/SK/EASe
 
 if it is common then no need for prefix
 
 2. Import your stub in StubHelper and put it in respective array of stubs
 
 3. JSON required for response of stub should be stored in json file in data folder, no matter how small JSON size is.
 
```