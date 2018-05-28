# flask and react deployed on heroku
a very simple flask app integrated with React on REST, deployed on heroku.

# Usage

### Local Development
```
$ git clone...
$ cd <>
```
### Server

```
$ virtualenv -p python3 venv
$ pip install -r requirements.txt
$ gunicorn app:app
```

### Client
```
$ cd client
$ npm install
$ npm start
```
To build client app: `npm run build`

To check the build directory on a static server :
```
$ cd build
$ python3 -m http.server
```

### Deployment on heroku
```
$ heroku login ...
$ heroku create <your-app-name>
$ heroku git:remote <your-app-name>
$ git push heroku master
```
## Resources

1. [static files in flask](https://stackoverflow.com/questions/20646822/how-to-serve-static-files-in-flask)

1. [python3 virtualenv](https://stackoverflow.com/questions/23842713/using-python-3-in-virtualenv)
