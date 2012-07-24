Ext.define("Igor.view.notification.News", {
    extend: 'Ext.navigation.View',
    xtype: 'news',

    requires: [
        'Ext.List',
    ],

    config: {
        autoDestroy: false,
        

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
                title: 'News',
                cls: 'x-feeds',
                disclosure: true, 
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

                onItemDisclosure: function(record, item, index, e) {
                    //show a messagebox alert which shows the persons firstName
                    e.stopEvent();
                    Ext.Msg.alert('Test', 'Redirect to objectid ' + record.get('objectid'));
                },

                listeners: {
                    itemtap: function(list, index, target, record) {
                        //console.log('onItemTap: index = ' + index);
                        var rec = list.getStore().getAt(index);
                        //console.log(rec.data);
                        Ext.Msg.alert('Test', 'Redirect to objectid ' + rec.get('objectid'));
                    }
                }
            }
        ]
    }
});
