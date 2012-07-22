Ext.define("Igor.view.Profile", {
    extend: 'Ext.navigation.View',
    xtype: 'profile',

    requires: [
        'Ext.List',
    ],

    config: {
        autoDestroy: false,
        

        navigationBar: {
            items: [
                {
                    xtype: 'image',
                    docked: 'top',
                    ui: 'light',
                    width: 100,
                    height: 45,
                    src: 'resources/images/Igor.png'
                },
                {
                    xtype: 'button',
                    id: 'editProfileButton',
                    iconCls: 'compose',
                    iconMask: true,
                    ui: 'plain',
                    align: 'right',
                    hideAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeOut',
                        duration: 200
                    },
                    showAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeIn',
                        duration: 200
                    }
                }
            ]
        },

        items: [
            {
                
            }
        ]
    }
});
