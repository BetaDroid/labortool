from .. import mysql
from ..exceptions import ValidationError


class NoteActivity(mysql.Model):
    __tablename__ = 'notesactivities'
    NoteActivityId = mysql.Column(mysql.Integer, primary_key=True, nullable=True)
    NoteActivityActivity = mysql.Column(mysql.Integer, nullable=False)
    NoteActivityText = mysql.Column(mysql.Text, nullable=False)
    NoteActivityEmployeeCreation = mysql.Column(mysql.Integer, nullable=False)
    NoteActivityEmployeeModification = mysql.Column(mysql.Integer, nullable=False)
    NoteActivityDateCreation = mysql.Column(mysql.DateTime, nullable=False)
    NoteActivityDateModification = mysql.Column(mysql.DateTime, nullable=False)

    def data_export(self):
        return {
            'NoteActivityId': self.NoteActivityId,
            'NoteActivityActivity': self.NoteActivityActivity,
            'NoteActivityText': self.NoteActivityText,
            'NoteActivityEmployeeCreation': self.NoteActivityEmployeeCreation,
            'NoteActivityEmployeeModification': self.NoteActivityEmployeeModification,
            'NoteActivityDateCreation': self.NoteActivityDateCreation,
            'NoteActivityDateModification': self.NoteActivityDateModification
        }

    def import_data(self, data):
        try:
            self.NoteActivityActivity = data['NoteActivityActivity']
            self.NoteActivityText = data['NoteActivityText']
            self.NoteActivityEmployeeCreation = data['NoteActivityEmployeeCreation']
            self.NoteActivityEmployeeModification = data['NoteActivityEmployeeModification']
            self.NoteActivityDateCreation = data['NoteActivityDateCreation']
            self.NoteActivityDateModification = data['NoteActivityDateModification']
        except KeyError as e:
            ValidationError('Invalid component: missing ' + e.args[0])
        return self
