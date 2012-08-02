Ext.define("Igor.view.notification.News", {
    extend: 'Ext.navigation.View',
    xtype: 'updatesListForm',

    requires: [
        'Ext.List',
    ],

    config: {
        autoDestroy: true,
        

        navigationBar: {
            defaults: {
                    hideAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeOut',
                        duration: 200
                    },
                    showAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeIn',
                        duration: 200
                    }
            },
            
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
                    id: 'refreshNewsButton',
                    iconCls: 'time_repeat',
                    iconMask: true,
                    ui: 'plain',
                    align: 'right'
                }
            ]
        },

        items: [
            {
                xtype: 'list',
                id: 'updateList',
                title: 'News',
                cls: 'x-feeds',
                disclosure: true, 
                onItemDisclosure: true,
                limit: 5,
                disableSelection: true,

                plugins: [
                    { xclass: 'Ext.plugin.ListPaging' },
                    { xclass: 'Ext.plugin.PullRefresh' }
                ],               

                store: 'Notifications',
                itemTpl: [
                    '<div class="feed" style="background-image:url(resources/images/headshots/{avatar});"></div>',
                    '{username}',
                    '<span>{action} <a href="">{object}</a></span>',
                ].join(''),

                
                
            }
        ]
    }
});
