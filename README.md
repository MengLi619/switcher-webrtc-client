## Overview
A example project to create a browser-based switcher application.

## Architecture
![architecture.png](architecture.png)

## Run the project
1. Run depended services
    ```shell script
    cd docker-compose && docker-compose up -d && cd ..
    ```
   
2. Run client
    ```shell script
    npm start
    ```
   
3. Clean up
    ```shell script
    cd docker-compose && docker-compose down && cd ..
    ``` 
   
## ScreenCut
![sceencut.gif](sceencut.gif)
    
## Future improvement
Support webrtc output in obs-headless, to continue reduce the latency.
