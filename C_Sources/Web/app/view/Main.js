Ext.define("Igor.view.Main", {
    extend: 'Ext.tab.Panel',
    xtype: 'mainpanel',

    requires: [
        'Igor.view.News',
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
            // This is the home page, just some simple html
            {
                title: 'News',
                iconCls: 'rss',
                cls: 'news',
                badgeText: '3',
                xtype: 'news'
            },

            // This is the recent blogs page. It uses a tree store to load its data from blog.json
            {
                xtype: 'nestedlist',
                title: 'Task',
                iconCls: 'compose',
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

            // This is the contact page, which features a form and a button. The button submits the form
            {
                xtype: 'formpanel',
                title: 'Me',
                iconCls: 'team',
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
