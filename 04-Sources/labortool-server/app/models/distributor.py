from .. import mysql
from ..exceptions import ValidationError


class Distributor(mysql.Model):
    __tablename__ = 'distributors'
    DistributorCode = mysql.Column(mysql.String(45), primary_key=True, nullable=False)
    DistributorName = mysql.Column(mysql.String(45), nullable=False)
    DistributorWebSite = mysql.Column(mysql.Text, nullable=False)

    def export_data(self):
        return {
            'DistributorCode': self.DistributorCode,
            'DistributorName': self.DistributorName,
            'DistributorWebSite': self.DistributorWebSite
        }

    def import_data(self, data):
        try:
            self.DistributorCode = data['DistributorCode']
            self.DistributorName = data['DistributorName']
            self.DistributorWebSite = data['DistributorWebSite']
        except KeyError as e:
            raise ValidationError('Invalid distributor: missing ' + e.args[0])
        return self
