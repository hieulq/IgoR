Ext.define("Igor.view.Task", {
    extend: 'Ext.navigation.View',
    xtype: 'tasks',

    requires: [
        'Ext.List',
    ],

    config: {
        autoDestroy: false,
        

        navigationBar: {
            items: [
                {
                    xtype: 'button',
                    id: 'refreshNewsButton',
                    iconCls: 'add',
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
