from flask_testing import TestCase
import json
import unittest
from app import db, app


class BaseTestCase(TestCase):
    def create_app(self):
        app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.test.db'
        app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
        return app

    def setUp(self):
        db.create_all()
        db.session.commit()

    def tearDown(self):
        db.session.remove()
        db.drop_all()


class TestRsvp(BaseTestCase):
    def test_rsvp_added(self):
        """Ensure the Rsvp has beed added succefully"""
        with self.client:
            response = self.client.post(
                '/rsvp',
                data=json.dumps({
                    'fullName': 'michael',
                    'email': 'michael@mherman.org',
                    'message': 'see you there!'
                }),
                content_type='application/json',
            )
            data = json.loads(response.data.decode())
            self.assertEqual(response.status_code, 201)
            self.assertIn('success', data['status'])
            self.assertIn('RSVP has been added', data['message'])



if __name__ == '__main__':
    unittest.main()