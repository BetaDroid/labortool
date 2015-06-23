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

#include "productiondatabase.h"

#include <QVariant>
#include <QSqlError>

#define DB_FIELD_SUFFIX     "Production"

ProductionDatabase::ProductionDatabase(QSqlDatabase *db)
{
    m_database = db;
}

bool ProductionDatabase::addProduction (Production* production)
{
    qDebug() << "ProductionDatabase::addProduction()";

    QSqlQuery query(*m_database);
    QString queryString = "INSERT INTO production "
                          "(ProductionTitle, ProductionDescription, ProductionWorkCode, "
                          "ProductionOutputCode, ProductionEmployee, ProductionStatus) "
                          "VALUES (?, ?, ?, ?, ?, ?)";

    query.prepare(queryString);
    query.bindValue(0,production->getTitle());
    query.bindValue(1,production->getDescription());
    query.bindValue(2,production->getWorkCode());
    query.bindValue(3,production->getOutputCode());
    query.bindValue(4,production->getEmployee());
    query.bindValue(5,Production::getStatusString(production->getStatus()));

    qDebug() << "ProductionDatabase::addProduction() - " << query.lastQuery();

    if (query.exec())
    {
        qDebug() << "ProductionDatabase::addProduction() - Query successful";
        return true;
    }
    else
    {
        qDebug() << "ProductionDatabase::addProduction() - "<< query.lastError();
        return false;
    }
}

bool ProductionDatabase::getProduction (int id, Production *production)
{
    qDebug() << "ProductionDatabase::getProduction()";

    QString queryString = "SELECT * FROM production WHERE ProductionId='" +
            QString::number(id) + "'";

    qDebug() << "ProductionDatabase::getProduction() - Final search string: " << queryString;
    QSqlQuery query( queryString, *m_database);

    if (query.size() != 1)
    {
        qDebug() << "ProductionDatabase::getProduction() - database problems!";
        return false;
    }

    /* Read record! */
    qDebug() << "ProductionDatabase::getProduction() - read record";
    query.next();

    /* TODO */
    production->setId(id);
    production->setTitle(query.value(1).toString());
    production->setDescription(query.value(2).toString());
    production->setWorkCode(query.value(3).toString());
    production->setOutputCode(query.value(4).toString());
    production->setEmployee(query.value(6).toString().toUInt());
    production->setStatus(query.value(5).toString());

    qDebug() << "ProductionDatabase::getProduction() - production" << id <<
                query.value(3).toString() << query.value(1).toString() <<
                query.value(6).toString();
    return true;
}

bool ProductionDatabase::updateProduction(Production *production)
{
    qDebug() << "ProductionDatabase::updateProduction()";

    QSqlQuery query(*m_database);
    QString queryString = "UPDATE production SET "
            "ProductionTitle=:title ,"
            "ProductionDescription=:desc ,"
            "ProductionWorkCode=:code ,"
            "ProductionOutputCode=:output ,"
            "ProductionEmployee=:employee ,"
            "ProductionStatus=:status "
            "WHERE ProductionId=:rowid";

    query.prepare(queryString);
    query.bindValue(":title",production->getTitle());
    query.bindValue(":desc",production->getDescription());
    query.bindValue(":code",production->getWorkCode());
    query.bindValue(":output",production->getOutputCode());
    query.bindValue(":employee",QString::number(production->getEmployee()));
    query.bindValue(":status",QString(Production::getStatusString(production->getStatus())));
    query.bindValue(":rowid",QString::number(production->getId()));

    qDebug() << "ProductionDatabase::updateProduction() - Bound Value 0 " << query.boundValue(0);
    qDebug() << "ProductionDatabase::updateProduction() - Bound Value 1 " << query.boundValue(1);
    qDebug() << "ProductionDatabase::updateProduction() - Bound Value 2 " << query.boundValue(2);
    qDebug() << "ProductionDatabase::updateProduction() - Bound Value 3 " << query.boundValue(3);
    qDebug() << "ProductionDatabase::updateProduction() - Bound Value 4 " << query.boundValue(4);
    qDebug() << "ProductionDatabase::updateProduction() - Bound Value 5 " << query.boundValue(5);
    qDebug() << "ProductionDatabase::updateProduction() - Bound Value 6 " << query.boundValue(6);

    if (query.exec())
    {
        qDebug() << "ProductionDatabase::updateProduction() - " << query.lastQuery();
        qDebug() << "ProductionDatabase::updateProduction() - " << query.lastError();
        qDebug() << "ProductionDatabase::updateProduction() - Query successful";
        return true;
    }
    else
    {
        qDebug() << "ProductionDatabase::updateProduction() - " << query.lastQuery();
        qDebug() << "ProductionDatabase::updateProduction() - " << query.lastError();
        return false;
    }
}

QVector<Production*>
ProductionDatabase::searchProductions(QStringList searchParams)
{
    qDebug() << "ProductionDatabase::searchProductions()";

    QVector<Production*> productionList;

    QString queryString = "SELECT ProductionId, ProductionTitle, ProductionDescription, "
                          "ProductionWorkCode, ProductionOutputCode, ProductionEmployee, "
                          "ProductionStatus FROM production ";

    if (searchParams.size()>0)
    {
        qDebug() << "ProductionDatabase::searchProductions() - Search param list is not empty";

        queryString.append("WHERE ( ");
        for (int i = 0; i < searchParams.size(); ++i)
        {
            qDebug() << "ProductionDatabase::searchProductions() - Param:" << searchParams.at(i);

            if (searchParams.at(i).indexOf('=') != -1)
            {
                QStringList searchParam = searchParams.at(i).split('=');
                if (searchParam.size() == 2)
                {
                    qDebug() << "ProductionDatabase::searchProductions() - Param is correct";
                    queryString.append(DB_FIELD_SUFFIX +
                                       searchParam.at(0) +  "='" +
                                       searchParam.at(1) + "' ");
                }
                else
                {
                    qDebug() << "ProductionDatabase::searchProductions() - Param is not correct";
                    return productionList;
                }
            }
            else if (searchParams.at(i).indexOf('$') != -1)
            {
                QStringList searchParam = searchParams.at(i).split('$');
                if (searchParam.size() == 2)
                {
                    qDebug() << "ProductionDatabase::searchProductions() - Param is correct";
                    qDebug() << "ProductionDatabase::searchProductions()" << searchParam;
                    QStringList searchComboParams = searchParam.at(1).split('|');
                    queryString.append("( ");
                    for (int j = 0; j < searchComboParams.size(); ++j)
                    {
                        queryString.append(DB_FIELD_SUFFIX +
                                           searchParam.at(0) +  "='" +
                                           searchComboParams.at(j) + "' ");

                        if (j+1 == searchComboParams.size())
                            queryString.append(") ");
                        else
                            queryString.append("OR ");
                    }
                }
                else
                {
                    qDebug() << "ProductionDatabase::searchProductions() - Param is not correct";
                    return productionList;
                }
            }
            else if (searchParams.at(i).indexOf('%') != -1)
            {
                QStringList searchParam = searchParams.at(i).split('%');
                if (searchParam.size() == 2)
                {
                    qDebug() << "ProductionDatabase::searchProductions() - Param is correct";
                    queryString.append(
                        "( ProductionTitle LIKE '%" + searchParam.at(1) + "%' OR " +
                        "ProductionDescription LIKE '%" + searchParam.at(1) + "%' OR " +
                        "ProductionOutputCode LIKE '%" + searchParam.at(1) + "%' OR " +
                        "ProductionWorkCode LIKE '%" + searchParam.at(1) + "%') "
                    );
                }
                else
                {
                    qDebug() << "ProductionDatabase::searchProductions() - Param is not correct";
                    return productionList;
                }
            }
            else
            {
                qDebug() << "ProductionDatabase::searchProductions() - Param is not correct";
                return productionList;
            }

            if (i+1 == searchParams.size())
                queryString.append(") ");
            else
                queryString.append(" AND ");
        }

    }
    queryString.append("ORDER BY ProductionWorkCode ASC");

    qDebug() << "ProductionDatabase::searchProductions() - Final search string: " << queryString;

    QSqlQuery query(queryString, *m_database);
    while (query.next())
    {
        Production * production = new Production;
        production->setId(query.value(0).toUInt());
        production->setTitle(query.value(1).toString());
        production->setDescription(query.value(2).toString());
        production->setWorkCode(query.value(3).toString());
        production->setOutputCode(query.value(4).toString());
        production->setEmployee(query.value(5).toUInt());
        production->setStatus(query.value(6).toString());

        productionList.append(production);
    }

    qDebug() << "ProductionDatabase::searchProductions() - Final list" << productionList;
    return productionList;
}
