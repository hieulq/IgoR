Ext.define("Igor.view.authenticate.Register", {
    extend: 'Ext.form.Panel',
    xtype: 'registerpage',

    config: {
        title: 'Register',
        iconCls: 'team',
        layout: 'vbox',

        items: [
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
            },
            {
                xtype: 'button',
                text: 'Register',
                ui: 'confirm',
                margin: '5',

                // The handler is called when the button is tapped
                handler: function() {

                    // This looks up the items stack above, getting a reference to the first form it see
                    var form = this.up('formpanel');

                    // Sends an AJAX request with the form data to the url specified above (contact.php).
                    // The success callback is called if we get a non-error response from the server
                    form.submit({
                        success: function() {
                            // The callback function is run when the user taps the 'ok' button
                            Ext.Msg.alert('Thank You', 'Your message has been received', function() {
                                form.reset();
                            });
                        }
                    });
                }
            }
        ]
    }
});
