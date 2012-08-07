Ext.define("Igor.view.task.New", {
    extend: 'Ext.form.Panel',
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

                items: [
                    {
                        xtype: 'searchfield',
                    },
                    {
                        xtype  : 'list',
                        itemId : 'subjectList',
                        
                        // store  : 'Subjects',
                        data: [
                            {
                                subject_name: 'test name 1',
                                subject_code: 'test code 1',
                            },
                        ]
                        itemTpl: [
                            'subject_name',
                        ].join(''), 
                    },
                ]
            },
        ]
    }
});
