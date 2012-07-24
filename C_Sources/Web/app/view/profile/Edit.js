Ext.define("Igor.view.profile.Edit", {
    extend: 'Ext.form.Panel',
    xtype: 'profileEdit',

    config: {
        title: 'Edit',
        layout: 'vbox',

        items: [
            {
                xtype: 'fieldset',
                title: 'Edit',
                instructions: 'Input valid Student ID and Email.',

                items: [
                    {
                        xtype: 'textfield',
                        label: 'Full Name',
                        name: 'fullname'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Student ID',
                        name: 'studentid'
                    },
                    {
                        xtype: 'datepickerfield',
                        name: 'dob',
                        label: 'DOB',
                        value: new Date('3/19/1989'),
                        picker: {
                            yearFrom: 1989
                        }
                    },
                    {
                        xtype: 'selectfield',
                        label: 'Course',
                        name: 'course',
                        valueField: 'course',
                        displayField: 'title',
                        store: {
                            data: [
                                { course: '52', title: 'Course 52'},
                                { course: '53', title: 'Course 53'},
                                { course: '54', title: 'Course 54'},
                                { course: '55', title: 'Course 55'},
                                { course: '56', title: 'Course 56'}
                            ]
                        }
                    },
                    {
                        xtype: 'selectfield',
                        label: 'Group',
                        name: 'group',
                        valueField: 'groupid',
                        displayField: 'title',
                        store: {
                            data: [
                                { groupid: '1', title: 'HTTT'},
                                { groupid: '2', title: 'TTM'},
                                { groupid: '3', title: 'KHMT'},
                                { groupid: '4', title: 'KTMT'},
                                { groupid: '5', title: 'CNPM'}
                            ]
                        }
                    }
                ]
            }
        ]
    }
});
