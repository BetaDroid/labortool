/******************************************************************************
 * LabOrTool - Laboratory Organization Tool
 * Copyright (C) 2014-2015 Marco Giammarini
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

#include "production.h"

#include <QDebug>
#include <QMetaEnum>

Production::Production(QString title):
    m_assignedEmployee(0)
{
    m_title = title;
}

Production::Production():
    m_assignedEmployee(0)
{
}

void Production::setId (uint id)
{
    m_id = id;
}

void Production::setTitle (QString title)
{
    m_title = title;
}

void Production::setDescription (QString description)
{
    m_description =  description;
}

void Production::setWorkCode (QString code)
{
    m_workCode = code;
}

void Production::setOutputCode (QString code)
{
    m_outputCode = code;
}

void Production::setEmployee (uint employee)
{
    m_assignedEmployee = employee;
}

void Production::setStatus (Status status)
{
    m_status = status;
}

void Production::setStatus (QString status)
{
    qDebug() << "Production::setStatus()";
    QByteArray bytearray = status.toLocal8Bit();
    qDebug() << "Production::setStatus() - string value" << status;

    int value = Production::staticMetaObject.enumerator(
                 Production::staticMetaObject.indexOfEnumerator("Status")).
                 keysToValue(bytearray.data());

    qDebug() << "Production::setStatus() - value" << value;
    m_status = static_cast<Production::Status>(value);
}

QString Production::getStatusString (Status value)
{
    return Production::staticMetaObject.enumerator(
                Production::staticMetaObject.indexOfEnumerator("Status")).
                valueToKey(value);
}
