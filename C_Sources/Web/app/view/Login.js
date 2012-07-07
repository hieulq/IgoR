Ext.define("Igor.view.Login", {
    extend: 'Ext.form.Panel',
    xtype: 'loginpage',

    config: {
        title: 'Me',
        iconCls: 'team',
        layout: 'vbox',

        items: [
            {
                xtype: 'fieldset',
                title: 'Login',
                instructions: 'Email and Password are required.',

                items: [
                    {
                        xtype: 'emailfield',
                        label: 'Email',
                        name: 'email'
                    },
                    {
                        xtype: 'passwordfield',
                        label: 'Password',
                        name: 'password'
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Login',
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
