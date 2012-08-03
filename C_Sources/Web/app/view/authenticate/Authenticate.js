Ext.define("Igor.view.authenticate.Authenticate", {
    extend: 'Ext.navigation.View',
    xtype: 'authenForm',

    requires: [
        'Igor.view.authenticate.Register'
    ],

    config: {

        items: [
            {
                xtype: 'formpanel',
                itemId: 'loginForm',
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
                        itemId: 'submitBtn',
                        ui: 'confirm',
                        margin: '5',
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
