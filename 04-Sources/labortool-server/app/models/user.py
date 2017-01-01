from .. import mysql
from flask import current_app
from itsdangerous import TimedJSONWebSignatureSerializer as Serializer
from werkzeug.security import generate_password_hash, check_password_hash
from ..exceptions import ValidationError


class User(mysql.Model):
    __tablename__ = 'users'
    UserId = mysql.Column(mysql.Integer, primary_key=True, nullable=False)
    UserName = mysql.Column(mysql.String(64), index=True, nullable=False)
    UserPassword = mysql.Column(mysql.String(128), nullable=False)
    UserRole = mysql.Column(mysql.Integer, mysql.ForeignKey('usersroles.UserRoleId'), nullable=True)
    UserNote = mysql.Column(mysql.Text, nullable=True)

    def export_data(self):
        return {
            'UserId': self.UserId,
            'UserName': self.UserName,
            'UserRole': self.UserRole,
            'UserNote': self.UserNote
        }

    def import_data(self, data):
        try:
            self.UserName = data['UserName']
            self.set_password(data['UserPassword'])
            self.UserRole = data['UserRole']
            self.UserNote = data['UserNote']
        except KeyError as e:
            raise ValidationError('Invalid user: missing ' + e.args[0])
        return self

    def set_password(self, password):
        self.UserPassword = generate_password_hash(password)

    def verify_password(self, password):
        return check_password_hash(self.UserPassword, password)

    def generate_auth_token(self, expires_in=43200):
        s = Serializer(current_app.config['SECRET_KEY'], expires_in=expires_in)
        return s.dumps({'UserId': self.UserId}).decode('utf-8')

    @staticmethod
    def verify_auth_token(token):
        s = Serializer(current_app.config['SECRET_KEY'])
        try:
            data = s.loads(token)
        except:
            return None
        return User.query.get(data['UserId'])
