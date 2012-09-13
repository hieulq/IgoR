Ext.define("Igor.view.task.NewClassTask", {
    extend: 'Ext.form.Panel',
    xtype: 'newClassTaskForm',
    itemId: 'newClassTaskForm',

    requires: [
        'Igor.utility.picker.TimePicker'
    ],

    config: {
        title: 'New Class Task',
        layout: 'vbox',

        items: [
            {
                xtype: 'fieldset',
                title: 'New Class Task',
                instructions: 'Enter Required Information.',

                items: [
                    {
                        xtype: 'textfield',
                        label: 'Name',
                        name: 'name'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Location',
                        name: 'location'
                    },
                    {
                        xtype: 'textareafield',
                        label: 'Note',
                        name: 'note',
                        height: 90
                    },
                    {
                        xtype: 'datepickerfield',
                        name: 'startdate',
                        label: 'Start Date',
                        value: new Date(),
                        picker: {
                            yearFrom: 2000
                        }
                    },
                    {
                        xtype: 'timepickerfield',
                        label: 'Start Time',
                        value: new Date(), // object also possible {hours:12, minutes:25},
                        name: 'starttime',
                        picker:{
                            height:300,// (optional) These values default to 0-24
                        }
                    },
                    {
                        xtype: 'datepickerfield',
                        name: 'enddate',
                        label: 'Deadline Date',
                        value: new Date(),
                        picker: {
                            yearFrom: 2000
                        }
                    },
                    {
                        xtype: 'timepickerfield',
                        label: 'Deadline Time',
                        value: new Date(), 
                        name: 'endtime',
                        picker:{
                            height:300,
                        }
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
                        itemId: 'saveClassTaskBtn',
                        ui: 'confirm',
                    },

                    { xtype: 'spacer' },

                    // Here we add a reset button which will reset all fields within the form panel back to their original value
                    {
                        text: 'Reset',

                        handler: function() {
                            // Call the form.reset method
                            Ext.getCmp('newClassTaskForm').reset();
                        }
                    }
                ]
            }
        ]
    }
});
