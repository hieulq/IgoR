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
                    id: 'termSelectBtn',
                    iconCls: 'doc_drawer',
                    iconMask: true,
                    ui: 'plain',
                    align: 'right',

                    handler: function() {
                        if (!this.picker) {
                            this.picker = Ext.Viewport.add({
                                xtype: 'picker',
                                title: 'Select Term',
                                toolbar: {
                                    title: 'Select Term'
                                },
                                slots: [
                                    {
                                        name : 'term',
                                        title: 'Term',
                                        data : [
                                            {text: '20111', value: 20111},
                                            {text: '20112', value: 20112},
                                            {text: '20113', value: 20113},
                                            {text: '20121', value: 20121}
                                        ]
                                    }
                                ]
                            });
                        }

                        this.picker.show();
                    }
                },
                {
                    xtype: 'button',
                    id: 'addTaskBtn',
                    iconCls: 'add',
                    iconMask: true,
                    ui: 'plain',
                    align: 'right',
                    
                    handler: function() {
                        var navView = this.up('navigationview');
                        var termBtn = Ext.getCmp('termSelectBtn');

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
                id: 'schedulerList',
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
                                id: 'daySelectBtn',
                                allowDepress: true,

                                items: [
                                    {
                                        text: 'Monday',
                                        id: '0',
                                        pressed: true
                                    },
                                    {
                                        text   : 'Tuesday',
                                        id: '1',                                        
                                    },
                                    {
                                        text: 'Wednesday',
                                        id: '2',
                                    },
                                    {
                                        text   : 'Thursday',
                                        id: '3',                                        
                                    },
                                    {
                                        text   : 'Friday',
                                        id: '4',                                        
                                    },
                                    {
                                        text   : 'Saturday',
                                        id: '5',                                        
                                    },
                                    {
                                        text   : 'Sunday',
                                        id: '6',                                        
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
                        var addTaskBtn = Ext.getCmp('addTaskBtn');
                        var termBtn = Ext.getCmp('termSelectBtn');

                        navView.push({xtype: 'classDetailsForm'});
                        termBtn.hide();
                    }
                }
            }
            
        ]
    }
});
