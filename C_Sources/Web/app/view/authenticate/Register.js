Ext.define("Igor.view.authenticate.Register", {
    extend: 'Ext.form.Panel',
    xtype: 'registerForm',

    config: {
        title: 'Register',

        items: [
            {
                xtype: 'image',
                cls: 'logo',
                ui: 'light',
                width: 100,
                height: 45,
                src: 'resources/images/Igor.png'
            },
            {
                xtype: 'fieldset',
                title: 'Register',
                instructions: 'Email and Password are required.',

                items: [
                    {
                        xtype: 'textfield',
                        label: 'Full Name',
                        name: 'fullname'
                    },
                    {
                        xtype: 'emailfield',
                        label: 'Email',
                        name: 'email'
                    },
                    {
                        xtype: 'passwordfield',
                        label: 'Password',
                        name: 'password'
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
                                { groupid: 'HTTT', title: 'HTTT'},
                                { groupid: 'TTM', title: 'TTM'},
                                { groupid: 'KHMT', title: 'KHMT'},
                                { groupid: 'KTMT', title: 'KTMT'},
                                { groupid: 'CNPM', title: 'CNPM'}
                            ]
                        }
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Register',
                itemId: 'submitRegisterBtn',
                ui: 'confirm',
                margin: '5',
            }
        ]
    }
});
