Ext.define("Igor.view.Main", {
    extend: 'Ext.tab.Panel',
    xtype: 'mainpanel',

    requires: [
        'Igor.view.notification.News',
        'Igor.view.profile.Profile',
        'Igor.view.task.Task',
        'Igor.view.about.About'
    ],

    config: {
        fullscreen: true,
        tabBarPosition: 'bottom',
        ui: 'dark',

        layout: {
            animation: 'slide',
            type: 'card'
        },

        items: [
            {
                title: 'News',
                iconCls: 'rss',
                cls: 'news',
                badgeText: '3',
                xtype: 'news'
            },

            {
                xtype: 'tasks',
                title: 'Task',
                iconCls: 'calendar2',
                cls: 'task'
            },

            {
                title: 'Me',
                iconCls: 'team',
                cls: 'profile',
                xtype: 'profile'
            },

            {
                title: 'About',
                iconCls: 'info',
                cls: 'about',
                xtype: 'aboutPage'
            },

            {
                xtype: 'formpanel',
                title: 'Contact',
                iconCls: 'chat_black2',
                layout: 'vbox',

                items: [
                    {
                        xtype: 'fieldset',
                        title: 'Contact Us',
                        instructions: 'Email address is optional',

                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Name',
                                name: 'name'
                            },
                            {
                                xtype: 'emailfield',
                                label: 'Email',
                                name: 'email'
                            },
                            {
                                xtype: 'textareafield',
                                label: 'Message',
                                name: 'message',
                                height: 90
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        text: 'Send',
                        ui: 'confirm',
                    }
                ]
            }
        ]
    }
});
