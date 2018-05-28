# flask and react deployed on heroku


# Usage
* Local Development
`git clone...`
`cd <>`
* Server
`virtualenv -p python3 venv`
`pip install -r requirements.txt`
`gunicorn app:app`
* Client
`cd client-dev`
`npm install`
`npm start`
To build client app: `npm run build`

* Deployment on heroku
`heroku login` ...
`heroku create <your-app-name>`
`heroku git:remote <your-app-name>`
`git push heroku master`

## Resources
[static files in flask](https://stackoverflow.com/questions/20646822/how-to-serve-static-files-in-flask)
[python3 virtualenv](https://stackoverflow.com/questions/23842713/using-python-3-in-virtualenv)
