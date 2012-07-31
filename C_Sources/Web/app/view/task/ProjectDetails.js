Ext.define("Igor.view.task.ProjectDetails", {
    extend: 'Ext.Container',
    xtype: 'projectDetailsForm',
    itemId: 'projectDetailsForm',

    requires: [
        'Ext.List',
        'Igor.view.task.JobDetails',
        'Igor.store.Classprojects',
        'Igor.store.Projectmembers',
        'Igor.store.Projectjobs'
    ],

    config: {
        layout: 'vbox',
        cls: 'userInfo',
        title: 'Project Detail',


        items: [
            {
                xtype: 'dataview',
                itemId: 'projectDetailPanel',
                height: '97px',
                flex: 2,
                scrollable: false,

                store: 'Classprojects',
                itemTpl: [
                    '<div class="header">',
                    '   <div class="avatar" style="background-image:url(resources/images/project_icon.png);"></div>',
                    '   <h3>{name}</h3>',
                    '   <h4>{description}</h4>',
                    '</div>'
                ].join(''),

            },

            {
                xtype: 'list',
                itemId: 'projectMemberList',
                store: 'Projectmembers',
                disclosure: true,
                onItemDisclosure: true,
                flex: 1,                 

                cls: 'x-feeds',
                itemTpl: [
                    '<div class="feed" style="background-image:url(resources/images/headshots/{avatar});"></div>',
                    '{fullname}',
                    '<span>{studentid}-{group}C{course}-{email}</span>',
                ].join(''),

                items: [
                    {
                        xtype: 'listitemheader',
                        cls: 'dark',
                        html: 'Members'
                    }
                ],

                listeners: {
                    itemtap: function(list, index, target, record) {
                        //console.log('onItemTap: index = ' + index);
                        var rec = list.getStore().getAt(index);
                        //console.log(rec.data);
                        Ext.Msg.alert('Test', 'Redirect to userid ' + rec.get('userid'));
                        console.log(rec.get('userid'));
                    }
                }

            },

            {
                xtype: 'list',
                itemId: 'projectJobList',
                store: 'Projectjobs',
                disclosure: true,
                onItemDisclosure: true,
                flex: 1,                 

                cls: 'x-feeds',
                itemTpl: [
                    '<div class="feed" style="background-image:url(resources/images/{status}.png);"></div>',
                    '{name}',
                    '<span>{start_time} at {location}</span>',
                ].join(''),

                items: [
                    {
                        xtype: 'listitemheader',
                        cls: 'dark',
                        html: 'Jobs'
                    }
                ],

                listeners: {
                    itemtap: function(list, index, target, record) {
                        //var rec = list.getStore().getAt(index);
                        //Ext.Msg.alert('Test', 'Redirect to objectid ' + rec.get('jobid'));
                        //console.log(rec.get('jobid'));
                        var navView = this.up('navigationview');
                        
                        navView.push({xtype: 'jobDetailsForm'});
                    }
                }

            },

        ]
    },

    initialize: function() {
        var store = Ext.data.StoreManager.lookup('Projectmembers');
        store.load({
            callback: function(records, operation, success) {
                    /*var class1 = store.first();
                    console.log('Class code is: ' + class1.get('class_code'));

                    class1.projects().each(function(project) {
                        console.log("Project ID: " + project.getId());
                    });*/

                    console.log(records);
                },
                scope: this
        });
    }
});
