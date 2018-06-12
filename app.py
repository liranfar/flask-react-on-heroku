from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

# set the project root directory as the static folder, you can set others.
app = Flask(__name__,
            static_url_path='',
            static_folder='client/build')

# CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://hlavaovemabkqo:fbbedd28e5a4edddd45977b9640344393f93c409c0425f687d43fd97c174cd5f@ec2-54-225-96-191.compute-1.amazonaws.com:5432/ddell78uvtts4r'
#app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:postgres@localhost/gili_matan_rsvp'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Create our database model
class Rsvp(db.Model):
    __tablename__ = "rsvps"
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(120), unique=True)
    email = db.Column(db.String(120), unique=True)
    additional_information = db.Column(db.String(255))
    greeting = db.Column(db.String(255))
    events = db.Column(db.String(255))
    guests = db.Column(db.Integer)

    def __init__(self,full_name, email, additional_information, greeting, events, guests):
        self.full_name = full_name
        self.email = email
        self.additional_information = additional_information
        self.greeting = greeting
        self.events = events
        self.guests = guests

    # def __repr__(self):
    #     return '<E-mail %r>' % self.email

    def to_json(self):
        return {
            'fullName': self.full_name,
            'email': self.email,
            'additional_information': self.additional_information,
            'greeting': self.greeting,
            'events':self. events,
            'guests': self.guests,
        }

@app.route('/')
def root():
    return app.send_static_file('index.html')

@app.route('/users/ping')
def ping_pong():
    return jsonify({
        'status': 'success',
        'message': 'pong!'
    })

@app.route('/rsvp', methods=['POST'])
def rsvp():
    post_data = request.get_json()
    response_object = {
        'status': 'fail',
        'message': 'Invalid payload.'
    }

    full_name = post_data['fullName']
    email = post_data['email']
    additional_information = post_data['additionalInformation']
    greeting = post_data['greeting']
    events = post_data['events']
    guests = post_data['guests']

    if not db.session.query(Rsvp).filter(Rsvp.email == email).count():
            rsvp = Rsvp(full_name, email, additional_information, greeting, events, guests)
            db.session.add(rsvp)
            db.session.commit()
            
            response_object = {
                'status': 'success',
                'message': 'RSVP has been added'
            }

            return jsonify(response_object), 201

    return jsonify(response_object), 400

@app.route('/greetings', methods=['GET'])
def greetings():
    all_greetings = Rsvp.query.with_entities(Rsvp.full_name, Rsvp.greeting).all()    
    response_object = {
        'status': 'Success',
        'data': {            
            'greetings': [{'name' : greeting[0], 'content':greeting[1]} for greeting in all_greetings]
        }
    }
    
    return jsonify(response_object), 200

if __name__ == '__main__':
    app.run()
