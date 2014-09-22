/******************************************************************************
 * LabOrTool - Laboratory Organization Tool
 * Copyright (C) 2014 Marco Giammarini
 *
 * Author(s):
 *  Marco Giammarini <m.giammarini@warcomeb.it>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>
 ******************************************************************************/

#ifndef EMPLOYEECONTROLLER_H
#define EMPLOYEECONTROLLER_H

#include <QVector>
#include <QSqlDatabase>

#include "employee.h"
#include "employeedialog.h"
#include "employeedatabase.h"

class EmployeeController : public QObject
{
    Q_OBJECT

public:
    typedef enum
    {
        Active,
        NoActive,
        All,
    } EmployeesListType;

    EmployeeController(QSqlDatabase* db);

    void openAddEmployeeDialog ();
    void openEditEmployeeDialog (int employeeId);
    void openViewEmployeeDialog (int employeeId);

    QVector<QVector<QString> > getEmployeesList (EmployeesListType type);
    QVector<QVector<QString> > getEmployeesList (QStringList searchParams);

signals:
    void updatedEmployeesList(QStringList searchParams);

private:

    EmployeeDialog * m_employeeDialog;

    /* Employees list */
    QVector<Employee*> m_employees;

    /* Employee wrapper for database */
    EmployeeDatabase * m_databaseWrapper;
    QSqlDatabase * m_database;
};

#endif // EMPLOYEECONTROLLER_H
