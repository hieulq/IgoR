Ext.define("Igor.view.profile.Profile", {
    extend: 'Ext.navigation.View',
    xtype: 'userDetailsForm',

    requires: [
        'Ext.List',
        'Igor.store.Users',
        'Igor.view.profile.Edit',
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
                    itemId: 'logoutButton',
                    iconCls: 'reply',
                    iconMask: true,
                    ui: 'plain',
                    align: 'right',
                    
                    handler: function() {
                        var userStore = Ext.getStore('Users');
                        userStore.removeAll();
                        userStore.sync();

                        Ext.Viewport.setActiveItem(Ext.create('Igor.view.authenticate.Authenticate'), {type: 'slide'});               
                    }
                },
                {
                    xtype: 'button',
                    itemId: 'editProfileButton',
                    iconCls: 'compose',
                    iconMask: true,
                    ui: 'plain',
                    align: 'right',
                    
                    handler: function() {
                        var navView = this.up('navigationview');

                        navView.push({xtype: 'profileEdit'});
                        this.hide();
                    }
                }
            ]
        },

        items: [
            {
                xtype: 'container',
                layout: 'vbox',
                cls: 'userInfo',
                title: 'Profile',

                items: [
                    {
                        xtype: 'dataview',
                        flex: 1,
                        scrollable: true,

                        store: 'Users',
                        itemTpl: [
                            '<div class="header">',
                            '   <div class="avatar" style="background-image:url(resources/images/headshots/{avatar});"></div>',
                            '   <h3>{fullname}</h3>',
                            '   <h4>{group} - Course {course}</h4>',
                            '</div>',
                            '<div class="x-container x-form-fieldset nonEditable" style="padding: 1em;">',
                                '<div class="x-docking-vertical">',
                                    '<div class="x-body">',
                                        '<div class="x-inner x-form-fieldset-inner">',
                                            '<div class="x-container x-field-text x-field x-label-align-left x-field-labeled x-form-label-nowrap x-empty">',
                                                '<div class="x-form-label" style="width: 30% !important;">',
                                                    '<span>Student ID</span>',
                                                '</div>',
                                                '<div class="x-component-outer">',
                                                    '<div class="x-field-input">',
                                                        '<input class="x-input-el x-form-field x-input-text" type="text" value="{studentid}">',
                                                        '<div class="x-field-mask" style="display: none !important; "></div>',
                                                    '</div>',
                                                '</div>',
                                            '</div>',
                                            '<div class="x-container x-field x-field-text x-label-align-left x-field-labeled x-form-label-nowrap x-empty">',
                                                '<div class="x-form-label" style="width: 30% !important; ">',
                                                    '<span>Email</span>',
                                                '</div>',
                                                '<div class="x-component-outer">',
                                                    '<div class="x-field-input">',
                                                        '<input class="x-input-el x-form-field x-input-email" type="email" value="{email}">',
                                                        '<div class="x-field-mask" style="display: none !important; "></div>',
                                                    '</div>',
                                                '</div>',
                                            '</div>',
                                        '</div>',
                                    '</div>',
                                '</div>',
                            '</div>'
                        ].join('')
                    }

                ]
            }
        ]
    }
});
