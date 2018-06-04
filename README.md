Prerequisites:
--------------
 - npm >= v5.6.0
 - node >= v10.2.1 
 - meteor >= 1.6.1.1 (https://www.meteor.com/install)

Clone:
-----
````
git clone https://github.com/raj143225/meteor.git /path/to/dir
cd /path/to/dir
````
Development Setup:
-----------------
```cmd
Steps:-
 meteor npm install
 meteor --port 3000
 
Open another terminal and chnage to project path and mongo server:
 meteor mongo

```

Run Test Cases:
---------------
```cmp
npm test

Note: Run this command from project root path
```

Production Build Steps:
----------------------
```cmd
 npm install --production
 meteor build /path/to/build --architecture os.linux.x86_64
 Note: Above step creates a tar file extract and create my_build_bundle_directory
 
 cd my_build_bundle_directory
 cd programs/server
 npm install
 cd ../../
 MONGO_URL=mongodb://******:*******@ds147440.mlab.com:47440/learn-tasks ROOT_URL=https://react-meteor-demo.herokuapp.com/ node main.js
```

- Deployed Mongo DB in mLab
- Hosted production build in heroku

Demo:
----
https://react-meteor.herokuapp.com/