Ext.define("Igor.view.News", {
    extend: 'Ext.navigation.View',
    xtype: 'news',

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
                    iconCls: 'time_repeat',
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

                store: 'Feeds',
                itemTpl: [
                    '<div class="feed" style="background-image:url(resources/images/headshots/{headshot});"></div>',
                    '{firstName} {lastName}',
                    '<span>{title}</span>'
                ].join(''),

                onItemDisclosure: function(record, item, index, e) {
                    //show a messagebox alert which shows the persons firstName
                    e.stopEvent();
                    Ext.Msg.alert('Test', 'Redirect to page ' + record.get('firstName'));
                },

                listeners: {
                    itemtap: function(list, index, target, record) {
                        //console.log('onItemTap: index = ' + index);
                        var rec = list.getStore().getAt(index);
                        //console.log(rec.data);
                        Ext.Msg.alert('Test', 'Redirect to page ' + rec.get('firstName'));
                    }
                }
            }
        ]
    }
});
