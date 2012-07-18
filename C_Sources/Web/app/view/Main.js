Ext.define("Igor.view.Main", {
    extend: 'Ext.tab.Panel',
    xtype: 'mainpanel',

    requires: [
        'Igor.view.News',
        'Igor.view.Profile'
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
                xtype: 'nestedlist',
                title: 'Task',
                iconCls: 'calendar2',
                cls: 'blog',
                displayField: 'title',

                store: {
                    type: 'tree',

                    fields: ['title', 'link', 'author', 'contentSnippet', 'content', {
                        name: 'leaf',
                        defaultValue: true
                    }],

                    root: {
                        leaf: false
                    },

                    proxy: {
                        type: 'jsonp',
                        url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',
                        reader: {
                            type: 'json',
                            rootProperty: 'responseData.feed.entries'
                        }
                    }
                },

                detailCard: {
                    xtype: 'panel',
                    scrollable: true,
                    styleHtmlContent: true
                },

                listeners: {
                    itemtap: function(nestedList, list, index, element, post) {
                        this.getDetailCard().setHtml(post.get('content'));
                    }
                }
            },

            {
                title: 'Me',
                iconCls: 'team',
                cls: 'profile',
                xtype: 'profile'
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
