lintmaestro
============
Sample app to show how to lint your javascript files as you save them. 

![Alt text](https://raw.githubusercontent.com/albab/lintmaestro/master/app/assets/images/preview.png "Lint")

I like this setup a lot because you can create additional tasks for pretty much anything and it's a safe alternative from the "tab hell" I've been experiencing with collaborative Makefiles.

First make sure you have npm installed install the packages with:  
```
npm install
```

Now when you run 
```
rails s
```

An additional shell window should open and listen to/lint your javascript changes.


TO DO:
- Track PID of Rails server and kill/close the jslint window when server stops