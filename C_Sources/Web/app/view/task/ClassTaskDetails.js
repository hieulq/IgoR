Ext.define("Igor.view.task.ClassTaskDetails", {
    extend: 'Ext.Container',
    xtype: 'classTaskDetailsForm',
    itemId: 'classTaskDetailsForm',

    requires: [
        'Ext.List',
        'Igor.store.Classtasks'
    ],

    config: {
        layout: 'vbox',
        cls: 'userInfo',
        title: 'Job Detail',


        items: [
            {
                xtype: 'dataview',
                itemId: 'taskDetailPanel',
                flex: 1,
                scrollable: true,

                store: 'Classtasks',
                itemTpl: [
                    '<div class="header">',
                    '   <div class="avatar" style="background-image:url(resources/images/task-icon.png);"></div>',
                    '   <h3>{name}</h3>',
                    '   <h4>{location}</h4>',
                    '</div>',
                    '<div class="x-container x-form-fieldset nonEditable" style="padding: 1em;">',
                        '<div class="x-docking-vertical">',
                            '<div class="x-body">',
                                '<div class="x-inner x-form-fieldset-inner">',
                                    '<div class="x-container x-field-text x-field x-label-align-left x-field-labeled x-form-label-nowrap x-empty">',
                                        '<div class="x-form-label" style="width: 30% !important;">',
                                            '<span>Start Time</span>',
                                        '</div>',
                                        '<div class="x-component-outer">',
                                            '<div class="x-field-input">',
                                                '<input class="x-input-el x-form-field x-input-text" type="text" value="{start_time}">',
                                                '<div class="x-field-mask" style="display: none !important; "></div>',
                                            '</div>',
                                        '</div>',
                                    '</div>',
                                    '<div class="x-container x-field x-field-text x-label-align-left x-field-labeled x-form-label-nowrap x-empty">',
                                        '<div class="x-form-label" style="width: 30% !important; ">',
                                            '<span>End Time</span>',
                                        '</div>',
                                        '<div class="x-component-outer">',
                                            '<div class="x-field-input">',
                                                '<input class="x-input-el x-form-field x-input-email" type="email" value="{end_time}">',
                                                '<div class="x-field-mask" style="display: none !important; "></div>',
                                            '</div>',
                                        '</div>',
                                    '</div>',
                                    '<div class="x-container x-field-text x-field x-label-align-left x-field-labeled x-form-label-nowrap x-empty">',
                                        '<div class="x-form-label" style="width: 30% !important; ">',
                                            '<span>Note</span>',
                                        '</div>',
                                        '<div class="x-component-outer">',
                                            '<divclass="x-field-input">',
                                                '<input class="x-input-el x-form-field x-input-email" type="text" value="{note}">',
                                                '<div class="x-field-mask" style="display: none !important; "></div>',
                                            '</div>',
                                        '</div>',
                                    '</div>',
                                '</div>',
                            '</div>',
                        '</div>',
                    '</div>'
                ].join(''),

            },

            {
                xtype: 'toolbar',
                docked: 'bottom',
                items: [
                    {
                        text: 'Mark Completed',
                        ui: 'confirm',
                        scope: this,
                        handler: function() {
                            
                        }
                    },

                    { xtype: 'spacer' },

                    // Here we add a reset button which will reset all fields within the form panel back to their original value
                    {
                        text: 'Mark Incompeleted',
                        ui: 'decline',

                        handler: function() {
                            

                        }
                    }
                ]
            }

        ]
    }
});
