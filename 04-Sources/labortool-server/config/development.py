import os
import ConfigParser

basedir = os.path.abspath(os.path.dirname(__file__))
config = ConfigParser.ConfigParser()

DEBUG = True
IGNORE_AUTH = True
SECRET_KEY = 'test'

config.read(os.getcwd() + '/config/db_config.conf')
SQLALCHEMY_DATABASE_URI = 'mysql+pymysql://' + config.get('DB', 'user') + \
                          ':' + config.get('DB', 'password') + '@' + \
                          config.get('DB', 'host') + ':' + config.get('DB', 'port') + '/' + config.get('DB', 'db')
SQLALCHEMY_TRACK_MODIFICATIONS = True


