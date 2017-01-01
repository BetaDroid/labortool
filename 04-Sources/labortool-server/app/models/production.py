from .. import mysql


class Production(mysql.Model):
    __tablename__ = 'productions'
    ProductionId = mysql.Column(mysql.Integer, primary_key=True, nullable=False)
