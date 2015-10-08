lintmaestro
============
Lightweight option to lint your javascript files as you save them. 

I like this setup a lot because you can create additional tasks for pretty much anything and it's a safe alternative from the "tab hell" I've been experiencing with collaborative Makefiles.

First make sure you have npm installed and these packages install correctly:  
```
npm install gulp --save-dev 
npm install gulp-jshint --save-dev 
npm install jshint-stylish —save-dev
npm install gulp-cached --save-dev 
```

Now when you run 
```
rails s
```

An additional shell window should open and listen to/lint your javascript changes.


TO DO:
- Track PID of Rails server and kill/close the jslint window when server stops