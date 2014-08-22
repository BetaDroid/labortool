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

#include "activitydialog.h"
#include "ui_activitydialog.h"

ActivityDialog::ActivityDialog(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::ActivityDialog),
    m_openType(ActivityDialog::DialogType_Add)
{
    ui->setupUi(this);

    fillCombobox();

    setupActivityField();
}

ActivityDialog::~ActivityDialog()
{
    delete ui;
}

void ActivityDialog::fillCombobox ()
{
    ui->statusCombobox->clear();
    ui->statusCombobox->addItem(tr("Not Started"), Activity::Status_NotStarted);
    ui->statusCombobox->addItem(tr("In Progress"), Activity::Status_InProgress);
    ui->statusCombobox->addItem(tr("Ended"), Activity::Status_Ended);
    ui->statusCombobox->addItem(tr("Postponed"), Activity::Status_Postponed);
    ui->statusCombobox->addItem(tr("Waiting"), Activity::Status_Waiting);

    ui->typeCombobox->clear();
    ui->typeCombobox->addItem(tr("Board"), Activity::Type_Board);
    ui->typeCombobox->addItem(tr("Repair"), Activity::Type_Repair);
    ui->typeCombobox->addItem(tr("Support"), Activity::Type_Support);
    ui->typeCombobox->addItem(tr("Firmware"), Activity::Type_Firmware);
    ui->typeCombobox->addItem(tr("Production"), Activity::Type_Production);
}

void ActivityDialog::setOpenType (ActivityDialog::DialogType type)
{
    m_openType = type;
    setupActivityField();
}

void ActivityDialog::setSelectedActivity (Activity * activity)
{
    m_activity = activity;
    fillActivityField();
}

void ActivityDialog::setupActivityField ()
{
    switch (m_openType)
    {
    case DialogType_Add:
        ui->idText->setText("0");

        ui->titleText->setText("");
        ui->titleText->setEnabled(true);

        ui->jobcodeText->setText("");
        ui->jobcodeText->setEnabled(true);

        ui->typeCombobox->setEnabled(true);
        ui->statusCombobox->setEnabled(true);

        /* TODO: Come li riempiamo? */
        ui->employeeCombobox->setEnabled(true);

        ui->deadlineEdit->setEnabled(true);
        ui->deadlineEdit->setDateTime(QDateTime::currentDateTime());

        ui->descriptionText->setEnabled(true);
        ui->descriptionText->setText("");
        break;
    case DialogType_Edit:
        ui->titleText->setEnabled(true);

        ui->jobcodeText->setEnabled(true);

        ui->typeCombobox->setEnabled(true);
        ui->statusCombobox->setEnabled(true);

        ui->employeeCombobox->setEnabled(true);

        ui->deadlineEdit->setEnabled(true);

        ui->descriptionText->setEnabled(true);
        break;
    case DialogType_View:
        ui->titleText->setEnabled(false);

        ui->jobcodeText->setEnabled(false);

        ui->typeCombobox->setEnabled(false);
        ui->statusCombobox->setEnabled(false);

        /* TODO: Come li riempiamo? */
        ui->employeeCombobox->setEnabled(false);

        ui->deadlineEdit->setEnabled(false);

        ui->descriptionText->setEnabled(false);
        break;
    default:
        /* mmm */
        break;
    }
}

void ActivityDialog::fillActivityField ()
{

}
