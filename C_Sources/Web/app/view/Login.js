Ext.define("Igor.view.Login", {
    extend: 'Ext.form.Panel',
    xtype: 'loginpage',

    config: {
        title: 'Login',
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

                    var values = form.getValues();

                    if (values['email']=='hieulq@gmail.com' && values['password']=='123456') {
                        Ext.Viewport.setActiveItem(Ext.create('Igor.view.Main'));
                    }
                    else {
                        Ext.Msg.alert('Sorry', 'Incorrect email/password!');
                    }
                }
            },
            {
                xtype: 'button',
                text: 'Signup',
                ui: 'confirm',

                // The handler is called when the button is tapped
                handler: function() {
                    Ext.Viewport.setActiveItem(Ext.create('Igor.view.Register'));
                }
            }
        ]
    }
});
