Ext.define("Igor.view.Task", {
    extend: 'Ext.NavigationView',
    xtype: 'tasks',

    requires: [
        'Ext.List',
        'Ext.Container'
    ],

    config: {
        autoDestroy: false,
        

        navigationBar: {
            items: [
                {
                    xtype: 'button',
                    id: 'addTask',
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
                xtype: 'list',
                ui: 'round',
                title: 'Tasks',                
                itemTpl: '{title}',
                data: [
                    { title: 'Subject 1' },
                    { title: 'Subject 2' },
                    { title: 'Subject 3' },
                    { title: 'Subject 4' }
                ],

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

                ]
            }
        ]
    },

    initialize: function() {
        this.callParent();

        var segmentedButton = this.down('segmentedbutton');
        var date = new Date().getDay() - 1;

        segmentedButton.setPressedButtons(date);
    }
});
