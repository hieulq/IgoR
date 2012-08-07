Ext.define("Igor.view.task.New", {
    extend: 'Ext.Container',
    xtype: 'newTask',

    requires: [
        'Ext.List',
        'Igor.store.Subjects'
    ],

    config: {
        title      : 'New Scheduler',
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

                xtype: 'accordionlist',
                itemId: 'subjectList',
                flex: 2,
                store: 'Subjects',
                itemTpl: [
                    '<div class="feed" style="background-image:url(resources/images/subject-icon.png);"></div>',
                    '{subject_name}',
                    '<span>ID: {subject_code} - {class_count} class(es)</span>',
                ].join(''), 

                items: [
                    {
                        xtype: 'listitemheader',
                        cls: 'dark',
                        html: 'Subject List'
                    }
                ],
            },
            {

                xtype: 'list',
                ui: 'round',
                itemId: 'subjectList',
                cls: 'x-feeds',
                flex: 1,
                disclosure: true,
                limit: 5,
                onItemDisclosure: function(record) {
                    alert(record.data.subject_id);
                },
                listener: {
                    "tap": function (record) {
                        alert(record.data.subject_id); 
                    }
                },
                emptyText: '<div style="margin-top: 20px; text-align: center">No Matching Subject</div>',

                plugins: [
                    { xclass: 'Ext.plugin.ListPaging' },
                    { xclass: 'Ext.plugin.PullRefresh' }
                ],              

                store: 'Subjects',
                itemTpl: [
                    '<div class="feed" style="background-image:url(resources/images/subject-icon.png);"></div>',
                    '{subject_name}',
                    '<span>ID: {subject_code} - {class_count} class(es)</span>',
                ].join(''), 

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
