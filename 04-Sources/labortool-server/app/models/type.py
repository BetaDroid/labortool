from .. import mysql
from ..exceptions import ValidationError


class Type(mysql.Model):
    __tablename__ = 'types'
    TypeId = mysql.Column(mysql.Integer, primary_key=True, nullable=False)
    TypeName = mysql.Column(mysql.String(45), nullable=False)

    def export_data(self):
        return {
            'TypeId': self.TypeId,
            'TypeName': self.TypeName
        }

    def import_data(self, data):
        try:
            self.TypeName = data['TypeName']
        except KeyError as e:
            raise ValidationError('Invalid component: missing ' + e.args[0])
        return self
