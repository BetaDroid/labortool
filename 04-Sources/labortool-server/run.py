#!/usr/bin/python
import os
from app import create_app, mysql
from app.models.user import User


if __name__ == '__main__':
    app = create_app(os.environ.get('FLASK_CONFIG', 'development'))
    with app.app_context():
        if User.query.get(1) is None:
            u = User(UserName='admin')
            u.set_password('admin')
            mysql.session.add(u)
            mysql.session.commit()
    app.run()
