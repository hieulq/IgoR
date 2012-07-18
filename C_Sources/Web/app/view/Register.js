Ext.define("Igor.view.Register", {
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
                        xtype: 'textfield',
                        label: 'Course',
                        name: 'course'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Group',
                        name: 'group'
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Register',
                ui: 'confirm',

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
