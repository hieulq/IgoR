Ext.define("Igor.view.task.Task", {
    extend: 'Ext.NavigationView',
    xtype: 'tasksForm',

    requires: [
        'Ext.List',
        'Ext.Container',
        'Igor.view.task.ClassDetails',
        'Igor.view.task.New'
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
                    xtype: 'button',
                    itemId: 'termSelectBtn',
                    iconCls: 'doc_drawer',
                    iconMask: true,
                    ui: 'plain',
                    align: 'right',
                },
                {
                    xtype: 'button',
                    itemId: 'addTaskBtn',
                    iconCls: 'add',
                    iconMask: true,
                    ui: 'plain',
                    align: 'right',
                    
                    handler: function() {
                        var navView = this.up('navigationview');
                        var termBtn = Ext.ComponentQuery.query('#termSelectBtn')[0];

                        navView.push({xtype: 'newTask'});
                        this.hide();
                        termBtn.hide();
                    }
                }
            ]
        },

        items: [
            {
                xtype: 'list',
                itemId: 'schedulerList',
                ui: 'round',
                title: 'Schedulers',                
                itemTpl: '{title}',
                limit: 5,

                store: 'Tasks',
                grouped: true,
                itemTpl: [
                    '<div class="class"><div class="title">{subject_name}</div>',                    
                    '<div class="session">{total_session}</div></div>',
                    '<span style="font-size: 70%">{location}</span>'
                ].join(''),

                items: [
                    {
                        docked: 'top',
                        xtype: 'toolbar',
                        scrollable: 'horizontal',
                        
                        items: [
                            {
                                padding: '0 5',
                                defaults: {
                                    width: '95px' 
                                },
                                xtype: 'segmentedbutton',
                                itemId: 'daySelectBtn',
                                allowDepress: true,

                                items: [
                                    {
                                        text: 'Monday',
                                        itemId: '0',
                                        pressed: true
                                    },
                                    {
                                        text   : 'Tuesday',
                                        itemId: '1',                                        
                                    },
                                    {
                                        text: 'Wednesday',
                                        itemId: '2',
                                    },
                                    {
                                        text   : 'Thursday',
                                        itemId: '3',                                        
                                    },
                                    {
                                        text   : 'Friday',
                                        itemId: '4',                                        
                                    },
                                    {
                                        text   : 'Saturday',
                                        itemId: '5',                                        
                                    },
                                    {
                                        text   : 'Sunday',
                                        itemId: '6',                                        
                                    }
                                ],
                            }
                        ]
                    }
                ],

                listeners: {
                    itemtap: function(list, index, target, record) {
                        //console.log('onItemTap: index = ' + index);
                        var rec = list.getStore().getAt(index);
                        //console.log(rec.data);
                        //Ext.Msg.alert('Test', 'Redirect to class_code ' + rec.get('class_code'));
                        //Ext.Viewport.setActiveItem(Ext.create('Igor.view.task.ClassDetails'));
                        var navView = this.up('navigationview');
                        var termBtn = Ext.ComponentQuery.query('#termSelectBtn')[0];

                        navView.push({xtype: 'classDetailsForm'});
                        termBtn.hide();
                    }
                }
            }
            
        ]
    }
});
