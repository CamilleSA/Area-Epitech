### Api Reference
#### About

* get :
    * get infos (``/about.json``) :
        * request :
            empty
        * response :
            * 200 : success
            ```json
            {
                "client": {
                    "host": "<host>"
                },
                "server": {
                    "current_time": "<current_time>",
                    "services": [{
                        "name": "<name>",
                        "actions": [{
                            "name": "<name>",
                            "description": "<description>"
                        }, {
                            ...
                        }],
                        "reactions": [{
                            "name": "<name>",
                            "description": "<description>"
                        }, {
                            ...
                        }]
                    }, {
                        ...
                    }]
                }
            }
            ```

#### Authentication

* post :
    * register (``/auth``) :
        * email :
            * request :
            ```json
            {
                "action": "register",
                "connectionMethod": "email",
                "username": "<username>",
                "email": "<email>",
                "password": "<password>"
            }
            ```
            * response :
                * 200 : success
                * 470 : username already exist
                * 471 : email already exist
                * 490 : general sql error
        * facebook :
            * request :
            ```json
            {
                "action": "register",
                "connectionMethod": "facebook",
                "username": "<username>",
                "facebookId": "<facebookId>"
            }
            ```
            * response :
                * 200 : success
                * 470 : username already exist
                * 472 : id already exist
                * 490 : general sql error
        * google :
            * request :
            ```json
            {
                "action": "register",
                "connectionMethod": "google",
                "username": "<username>",
                "googleId": "<googleId>"
            }
            ```
            * response :
                * 200 : success
                * 470 : username already exist
                * 472 : id already exist
                * 490 : general sql error
        * other registration method :
            * response :
                * 461 : wrong method
    * connect (``/auth``) :
        * email :
            * request :
            ```json
            {
                "action": "connect",
                "connectionMethod": "email",
                "email": "<email>",
                "password": "<password>"
            }
            ```
            * response :
                * 200 : success
                ```json
                {
                    "username": "<username>"
                }
                ```
                * 475 : email does not exist
                * 480 : wrong password
                * 490 : general sql error
        * username :
            * request :
            ```json
            {
                "action": "connect",
                "connectionMethod": "username",
                "username": "<username>",
                "password": "<password>"
            }
            ```
            * response :
                * 200 : success
                ```json
                {
                    "username": "<username>"
                }
                ```
                * 476 : username does not exist
                * 480 : wrong password
                * 490 : general sql error
        * facebook :
            * request :
            ```json
            {
                "action": "connect",
                "connectionMethod": "facebook",
                "facebookId": "<facebookId>"
            }
            ```
            * response :
                * 200 : success
                ```json
                {
                    "username": "<username>"
                }
                ```
                * 477 : id does not exist
                * 490 : general sql error
        * google :
            * request :
            ```json
            {
                "action": "connect",
                "connectionMethod": "google",
                "googleId": "<googleId>"
            }
            ```
            * response :
                * 200 : success
                ```json
                {
                    "username": "<username>"
                }
                ```
                * 477 : id does not exist
                * 490 : general sql error
        * other connection method :
            * response :
                * 461 : wrong method
    * other action (``/auth``) :
        * response :
            * 460 : wrong action
* delete :
    * delete user (``/auth``) :
        * request :
        ```json
        {
            "username": "<username>"
        }
        ```
        * response :
            * 200 : success
            * 455 : username does not exist
            * 490 : general sql error

#### Services
##### Tokens

* post :
    * add token (``/services``) :
        * request :
        ```json
        {
            "placeholder": "<placeholder>",
            "service": "<service>",
            "token": "<token>"
        }
        ```
        * response :
            * 200 : success
            * 485 : placeholder already used
            * 490 : general sql error
* delete :
    * delete token (``/services``) :
        * request :
        ```json
        {
            "placeholder": "<placeholder>"
        }
        ```
        * response :
            * 200 : success
            * 477 : placeholder does not exist
            * 490 : general sql error

#### Dashboard
##### Areas

* post :
    * create area (``/dashboard``) :
        * request :
        ```json
        {
            "username": "<username>",
            "placeholder": "<placeholder>",
            "serviceAction": "<serviceAction>",
            "serviceActionConfig": {<serviceActionConfig>},
            "serviceReaction": "<serviceReaction>",
            "serviceReactionConfig": {<serviceReactionConfig>},
            "action": "<action>",
            "reaction": "<reaction>"
        }
        ```
        * response :
            * 200 : success
            * 465 : invalid action service name
            * 466 : invalid reaction service name
            * 467 : invalid action
            * 468 : invalid reaction
            * 469 : action does not exists in action service
            * 470 : reaction does not exists in reaction service
            * 476 : username does not exist
            * 480 : placeholder already used
            * 490 : general sql error
    * execute area (``/dashboard/execute``) :
        * request :
        ```json
        {
            "username": "<username>",
            "placeholder": "<placeholder>"
        }
        ```
        * response :
            * 200 : success
            * 476 : username does not exist
            * 477 : placeholder does not exist
            * 480 : area already running
            * 490 : general sql error
    * stop area (``dashboard/stop``) :
        * request :
        ```json
        {
            "username": "<username>",
            "placeholder": "<placeholder>"
        }
        ```
        * response :
            * 200 : success
            * 476 : username does not exist
            * 477 : placeholder does not exist
            * 481 : area already stopped
            * 490 : general sql error
    * get areas (``/dashboard/list``) :
        * request :
        ```json
        {
            "username": "<username>"
        }
        ```
        * response :
            * 200 : success
            ```json
                [{
                    "placeholder": "<placeholder>",
                    "running": "<true|false>",
                    "serviceAction": "<serviceAction>",
                    "action": "<action>",
                    "serviceReaction": "<serviceReaction>",
                    "reaction": "<reaction>"
                }, {
                    ...
                }]
            ```
            * 476 : username does not exist
* delete :
    * delete area (``/dashboard``) :
        * request :
        ```json
        {
            "username": "<username>",
            "placeholder": "<placeholder>"
        }
        ```
        * response :
            * 200 : success
            * 476 : username does not exist
            * 481 : placeholder does not exist
            * 490 : general sql error
* patch :
    * edit area (``/dashboard``) :
        * request :
        ```json
        {
            "username": "<username>",
            "placeholder": "<placeholder>",
            "serviceActionConfig": {<serviceActionConfig>},
            "serviceReactionConfig": {<serviceReactionConfig>}
        }
        ```
        * response :
            * 200 : success
            * 476 : username does not exist
            * 481 : placeholder does not exist
            * 490 : general sql error