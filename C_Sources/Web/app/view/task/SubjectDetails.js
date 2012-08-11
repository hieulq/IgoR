Ext.define("Igor.view.task.SubjectDetails", {
    extend: 'Ext.Container',
    xtype: 'subjectDetailsForm',

    requires: [
        'Ext.List',
        'Igor.store.Classdetails'
    ],

    config: {
        title      : 'Subject Details ',
        iconCls    : 'team',
        layout     : 'vbox',
        autoDestroy: true, 

        items: [
            {
                xtype: 'listitemheader',
                cls: 'dark',
                html: 'Subject Details'
            }
        ],
        items: [
            {
                xtype: 'dataview',
                itemId: 'subjectDetailsPanel',
                name: 'subjectDetailsPanel',
                flex: 2,
                scrollable: true,
                store: 'SubjectDetails',
                itemTpl: [
                    '<div class="x-container x-form-fieldset nonEditable" style="padding: 1em;">',
                        '<div class="x-docking-vertical">',
                            '<div class="x-body">',
                                '<div class="x-inner x-form-fieldset-inner">',
                                    '<div class="x-container x-field-text x-field x-label-align-left x-field-labeled x-form-label-nowrap x-empty">',
                                        '<div class="x-form-label" style="width: 30% !important;">',
                                            '<span>Name</span>',
                                        '</div>',
                                        '<div class="x-component-outer">',
                                            '<div class="x-field-input">',
                                                '<input class="x-input-el x-form-field x-input-text" type="text" value="{subject_name}">',
                                                '<div class="x-field-mask" style="display: none !important; "></div>',
                                            '</div>',
                                        '</div>',
                                    '</div>',
                                    '<div class="x-container x-field x-field-text x-label-align-left x-field-labeled x-form-label-nowrap x-empty">',
                                        '<div class="x-form-label" style="width: 30% !important; ">',
                                            '<span>Code</span>',
                                        '</div>',
                                        '<div class="x-component-outer">',
                                            '<div class="x-field-input">',
                                                '<input class="x-input-el x-form-field x-input-email" type="email" value="{subject_code}">',
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
                xtype: 'list',
                ui: 'round',
                itemId: 'selectClassesList',
                cls: 'x-feeds',
                flex: 1,
                disclosure: true,
                limit: 5,
                
                emptyText: '<div style="margin-top: 20px; text-align: center">No Matching Subject</div>',

                plugins: [
                    { xclass: 'Ext.plugin.ListPaging' },
                    { xclass: 'Ext.plugin.PullRefresh' }
                ],              

                store: 'SubjectClasses',
                itemTpl: [
                    '<div class="feed" style="background-image:url(resources/images/subject-icon.png);"></div>',
                    '{class_code}',
                    '<span>Location: {location} - Teacher: {teacher}</span>',
                    '<span>Duration: {duration} weeks - Term: {term}</span>',
                ].join(''), 
                
                items: [
                    {
                        xtype: 'listitemheader',
                        cls: 'dark',
                        html: 'Classes List of Subject',
                    }
                ],
            }
        ],
    }
});




