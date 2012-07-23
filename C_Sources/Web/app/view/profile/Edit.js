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
                        xtype: 'datepickerfield',
                        name: 'dob',
                        label: 'DOB',
                        value: new Date('3/19/1989'),
                        picker: {
                            yearFrom: 1989
                        }
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
                                { groupid: '1', title: 'HTTT'},
                                { groupid: '2', title: 'TTM'},
                                { groupid: '3', title: 'KHMT'},
                                { groupid: '4', title: 'KTMT'},
                                { groupid: '5', title: 'CNPM'}
                            ]
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
                            var editProfileBtn = Ext.getCmp('editProfileButton');

                            navView.pop();
                            editProfileBtn.show();

                        }
                    }
                ]
            }
        ]
    }
});
