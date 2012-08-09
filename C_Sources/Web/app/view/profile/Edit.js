Ext.define("Igor.view.profile.Edit", {
    extend: 'Ext.form.Panel',
    xtype: 'profileEdit',

    config: {
        title: 'Edit',
        layout: 'vbox',

        items: [
            {
                xtype: 'fieldset',
                title: 'Edit',
                instructions: 'Input valid Student ID and Email.',

                items: [
                    {
                        xtype: 'textfield',
                        label: 'Full Name',
                        name: 'fullname'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Student ID',
                        name: 'studentid'
                    },
                    {
                        xtype: 'selectfield',
                        label: 'Course',
                        name: 'course',
                        valueField: 'course',
                        displayField: 'title',
                        store: {
                            data: [
                                { course: '52', title: 'Course 52'},
                                { course: '53', title: 'Course 53'},
                                { course: '54', title: 'Course 54'},
                                { course: '55', title: 'Course 55'},
                                { course: '56', title: 'Course 56'}
                            ]
                        }
                    },
                    {
                        xtype: 'selectfield',
                        label: 'Group',
                        name: 'group',
                        valueField: 'groupid',
                        displayField: 'title',
                        store: {
                            data: [
                                { groupid: 'HTTT', title: 'HTTT'},
                                { groupid: 'TTM', title: 'TTM'},
                                { groupid: 'KHMT', title: 'KHMT'},
                                { groupid: 'KTMT', title: 'KTMT'},
                                { groupid: 'CNPM', title: 'CNPM'}
                            ]
                        }
                    },
                    {
                        xtype: 'textfield',
                        label: 'Avatar URL',
                        name: 'avatarPath'
                    }
                ]
            },
            

            // Create a docked bottom toolbar which will contain buttons to trigger various functions in our formpanel.
            {
                xtype: 'toolbar',
                docked: 'bottom',
                items: [
                    {
                        xtype: 'button',
                        text: 'Save',
                        ui: 'confirm',
                        itemId: 'saveUpdatedProfileBtn',
                        scope: this,
                    },

                    { 
                        xtype: 'spacer' 
                    },

                    // Here we add a reset button which will reset all fields within the form panel back to their original value
                    {
                        xtype: 'button',
                        text: 'Reset',
                        ui : 'action',

                        handler: function() {
                            // Call the form.reset method
                            //Ext.getCmp('profileEdit').setValue('');
                            var form = Ext.ComponentQuery.query('#profileEdit.form')[0];
                            form.reset();
                        }
                    }
                ]
            }
        ]
    }
});
