Ext.define("Igor.view.task.New", {
    extend: 'Ext.form.Panel',
    xtype: 'newTask',

    requires: [
        'Ext.List',
        'Igor.store.Subject'
    ],

    config: {
        title      : 'New Scheduler',
        iconCls    : 'team',
        layout     : 'vbox',
        autoDestroy: true, 

        items: [
            {
                xtype: 'fieldset',

                items: [
                    {
                        xtype: 'searchfield',
                    },
                    {
                        xtype: 'list',
                        itemId: 'subjectList',
                        cls: 'x-feeds',
                        disclosure: true, 

                        store: 'Subject',
                        itemTpl: [
                            '{subject_name}',
                            '{subject_code}',
                            '{class_count}',
                        ].join(''), 



                    },
                ]
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                items: [
                    {
                        text: 'Save',
                        ui: 'confirm',
                        scope: this,
                        handler: function() {
                            var form = this.form;

                            // Mask the form
                            form.setMasked({
                                xtype: 'loadmask',
                                message: 'Saving...'
                            });

                            // Put it inside a timeout so it feels like it is going to a server.
                            setTimeout(function() {
                                if (form.user) {
                                    // Call the updateRecord method of formpanel with the user record instance. This will update the user record
                                    // with the latest values.
                                    form.updateRecord(form.user, true);
                                }

                                // Unmask the formpanel
                                form.setMasked(false);
                            }, 1000);
                        }
                    },

                    { xtype: 'spacer' },

                    // Here we add a reset button which will reset all fields within the form panel back to their original value
                    {
                        text: 'Cancel',

                        handler: function() {
                            // Call the form.reset method
                            var navView = this.up('navigationview');
                            var editProfileBtn = Ext.getCmp('addTaskBtn');
                            var termBtn = Ext.getCmp('termSelectBtn');

                            navView.pop();
                            editProfileBtn.show();
                            termBtn.show();

                        }
                    }
                ]
            }
        ]
    }
});
