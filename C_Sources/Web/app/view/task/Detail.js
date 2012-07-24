Ext.define("Igor.view.task.Detail", {
    extend: 'Ext.navigation.View',
    xtype: 'taskDetail',

    requires: [
        'Ext.List',
        'Igor.store.Tasks'
    ],

    config: {
        autoDestroy: false,

        navigationBar: {
            items: [
                {
                    xtype: 'image',
                    docked: 'top',
                    ui: 'light',
                    width: 100,
                    height: 45,
                    src: 'resources/images/Igor.png'
                }
            ]
        },

        items: [
            {
                xtype: 'container',
                layout: 'vbox',
                cls: 'userInfo',
                title: 'Class Detail',

                items: [
                    {
                        xtype: 'dataview',
                        flex: 1,
                        scrollable: true,

                        store: 'Tasks',
                        itemTpl: [
                            '<div class="header">',
                            '   <div class="avatar" style="background-image:url(resources/images/class-icon.png);"></div>',
                            '   <h3>{subject_code}-{subject_name}</h3>',
                            '   <h4>ID: {class_code}</h4>',
                            '</div>',
                            '<div class="x-container x-form-fieldset nonEditable" style="padding: 1em;">',
                                '<div class="x-docking-vertical">',
                                    '<div class="x-body">',
                                        '<div class="x-inner x-form-fieldset-inner">',
                                            '<div class="x-container x-field-text x-field x-label-align-left x-field-labeled x-form-label-nowrap x-empty">',
                                                '<div class="x-form-label" style="width: 30% !important;">',
                                                    '<span>Session</span>',
                                                '</div>',
                                                '<div class="x-component-outer">',
                                                    '<div class="x-field-input">',
                                                        '<input class="x-input-el x-form-field x-input-text" type="text" value="{total_session}">',
                                                        '<div class="x-field-mask" style="display: none !important; "></div>',
                                                    '</div>',
                                                '</div>',
                                            '</div>',
                                            '<div class="x-container x-field x-field-text x-label-align-left x-field-labeled x-form-label-nowrap x-empty">',
                                                '<div class="x-form-label" style="width: 30% !important; ">',
                                                    '<span>Teacher</span>',
                                                '</div>',
                                                '<div class="x-component-outer">',
                                                    '<div class="x-field-input">',
                                                        '<input class="x-input-el x-form-field x-input-email" type="email" value="{teacher_name}">',
                                                        '<div class="x-field-mask" style="display: none !important; "></div>',
                                                    '</div>',
                                                '</div>',
                                            '</div>',
                                            '<div class="x-container x-field-text x-field x-label-align-left x-field-labeled x-form-label-nowrap x-empty">',
                                                '<div class="x-form-label" style="width: 30% !important; ">',
                                                    '<span>Location</span>',
                                                '</div>',
                                                '<div class="x-component-outer">',
                                                    '<divclass="x-field-input">',
                                                        '<input class="x-input-el x-form-field x-input-email" type="text" value="{location}">',
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
