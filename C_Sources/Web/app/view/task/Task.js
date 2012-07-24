Ext.define("Igor.view.task.Task", {
    extend: 'Ext.NavigationView',
    xtype: 'tasks',

    requires: [
        'Ext.List',
        'Ext.Container',
        'Igor.view.task.Detail',
        'Igor.view.task.New'
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
                    align: 'left',
                    width: 100,
                    height: 45,
                    src: 'resources/images/Igor.png'
                },

                {
                    xtype: 'button',
                    id: 'backBtn',
                    ui: 'plain',
                    text: 'Back',
                    align: 'left'                    
                },
                    
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
                ui: 'round',
                title: 'Tasks',                
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
                                allowDepress: true,

                                items: [
                                    {
                                        text: 'Monday',
                                        pressed: true
                                    },
                                    {
                                        text   : 'Tuesday'                                        
                                    },
                                    {
                                        text: 'Wednesday'
                                    },
                                    {
                                        text   : 'Thursday'                                        
                                    },
                                    {
                                        text   : 'Friday'                                        
                                    },
                                    {
                                        text   : 'Saturday'                                        
                                    },
                                    {
                                        text   : 'Sunday'                                        
                                    }
                                ],

                                listeners: {
                                    toggle: function(container, button, pressed){
                                        Ext.Msg.alert('Test', "User toggled the '" + button._text + "' button: " + (pressed ? 'on' : 'off'));
                                    }
                                }
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
                        Ext.Viewport.setActiveItem(Ext.create('Igor.view.task.Detail'));
                    }
                }
            }
            
        ]
    },

    initialize: function() {
        this.callParent();

        var segmentedButton = this.down('segmentedbutton');
        var date = new Date().getDay();

        if (date == 0) segmentedButton.setPressedButtons(6);
        else segmentedButton.setPressedButtons(date - 1);
    }
});
