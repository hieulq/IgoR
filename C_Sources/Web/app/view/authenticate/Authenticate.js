Ext.define("Igor.view.authenticate.Authenticate", {
    extend: 'Ext.navigation.View',
    xtype: 'loginForm',

    requires: [
        'Igor.view.authenticate.Register'
    ],

    config: {

        items: [
            {
                xtype: 'formpanel',
                title: 'Login',
                iconCls: 'team',
                layout: 'vbox',

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
                        title: 'Login',
                        instructions: 'Email and Password are required.',

                        items: [
                            {
                                xtype: 'emailfield',
                                id: 'emailAddress',
                                label: 'Email',
                                name: 'email'
                            },
                            {
                                xtype: 'passwordfield',
                                id: 'password',
                                label: 'Password',
                                name: 'password'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        text: 'Login',
                        id: 'submitBtn',
                        ui: 'confirm',
                        margin: '5',

                        // The handler is called when the button is tapped
                        handler: function() {

                            // This looks up the items stack above, getting a reference to the first form it see
                            var form = this.up('formpanel');

                            var values = form.getValues();

                            if (values['email']=='hieulq89@gmail.com' && values['password']=='123456') {
                                Ext.Viewport.setActiveItem(Ext.create('Igor.view.Main'));
                            }
                            else {
                                Ext.Msg.alert('Sorry', 'Incorrect email/password!');
                            }
                        }
                    },
                    {
                        xtype: 'button',
                        text: 'Register with Gmail',
                        ui: 'action',
                        margin: '5',

                        // The handler is called when the button is tapped
                        handler: function() {
                            var navView = this.up('navigationview');

                            navView.push({xtype: 'registerpage'});
                        }
                    }
                ]
            }
        ]
    }
});
