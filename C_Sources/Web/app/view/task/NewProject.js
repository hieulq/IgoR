Ext.define("Igor.view.task.NewProject", {
    extend: 'Ext.form.Panel',
    xtype: 'newProjectForm',
    itemId: 'newProjectForm',

    requires: [
        'Igor.store.Classusers',
        'Igor.view.MultiSelect'
    ],

    config: {
        title: 'New Project',
        layout: 'vbox',
        classid: null,

        items: [
            {
                xtype: 'fieldset',
                title: 'New Project',
                instructions: 'Enter Required Information.',

                items: [
                    {
                        xtype: 'textfield',
                        label: 'Name',
                        name: 'name'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Description',
                        name: 'description'
                    },
                    {
                        xtype: 'multiselectfield',
                        usePicker : false,
                        itemId: 'userListField',
                        label: 'Select Member',
                        name: 'members',
                        valueField: 'userid',
                        displayField: 'fullname',
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
                        itemId: 'saveProjectBtn',
                        ui: 'confirm',
                    },

                    { xtype: 'spacer' },

                    // Here we add a reset button which will reset all fields within the form panel back to their original value
                    {
                        text: 'Reset',

                        handler: function() {
                            // Call the form.reset method
                            Ext.getCmp('newProjectForm').reset();

                        }
                    }
                ]
            }
        ]
    }
});
