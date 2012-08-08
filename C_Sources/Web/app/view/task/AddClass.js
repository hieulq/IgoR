Ext.define("Igor.view.task.AddClass", {
    extend: 'Ext.Container',
    xtype: 'addclass',

    requires: [
        'Ext.List',
        'Igor.store.Classdetails'
    ],

    config: {
        title      : 'All class(es) of ',
        iconCls    : 'team',
        layout     : 'vbox',
        autoDestroy: true, 

        items: [
            {
                xtype: 'fieldset',
                margin: 15,
                items: [
                    {
                        xtype: 'searchfield',
                        itemId: 'subjectSearch',
                        flex: 1,
                        scrollable: false,
                        height: '42px',
                        placeHolder: 'Search...',
                    }
                ]
            },
            {

                xtype: 'list',
                ui: 'round',
                itemId: 'subjectList',
                cls: 'x-feeds',
                flex: 1,
                disclosure: true,
                limit: 5,
                // onItemDisclosure: function(record) {
                //     alert(record.data.subject_id);
                // },
                listeners: {
                    itemtap: function (object, index, target, record) {
                        alert(record.data.subject_id); 
                    }
                },
                emptyText: '<div style="margin-top: 20px; text-align: center">No Matching Subject</div>',

                plugins: [
                    { xclass: 'Ext.plugin.ListPaging' },
                    { xclass: 'Ext.plugin.PullRefresh' }
                ],              

                store: 'Classdetails',
                // itemTpl: [
                //     '<div class="feed" style="background-image:url(resources/images/subject-icon.png);"></div>',
                //     '{subject_name}',
                //     '<span>ID: {subject_code} - {class_count} class(es)</span>',
                // ].join(''), 

                items: [
                    {
                        xtype: 'listitemheader',
                        cls: 'dark',
                        html: 'Subject List'
                    }
                ],
            },
        ]
    }
});



