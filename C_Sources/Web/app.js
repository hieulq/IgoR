Ext.Loader.setConfig({disableCaching: false});

Ext.application({
    name: 'Igor',

    requires: [
        'Ext.MessageBox'
    ],

    controllers: ['Main', 'ClassDetails', 'Login', 'Register'],
    views: ['Main','authenticate.Authenticate', 'authenticate.Register'],
    stores: ['Notifications','Users','Profiles','Tasks', 'Classdetails', 'Classprojects', 'Classtasks', 'Projectmembers', 'Projectjobs', 'Classusers', 'Subject'],
    models: ['Notification','User','Task', 'Classdetail', 'Classproject', 'Classtask', 'Projectjob', 'Projectmember', 'Classuser', 'Profile', 'Subject'],

    icon: {
        57: 'resources/icons/Icon.png',
        72: 'resources/icons/icon@72.png',
        114: 'resources/icons/Icon@2x.png',
        144: 'resources/icons/icon@114.png'
    },

    phoneStartupScreen: 'resources/loading/Default.jpg',
    tabletStartupScreen: 'resources/loading/Default~ipad.jpg',

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        Ext.Viewport.add({
            xclass: 'Igor.view.authenticate.Authenticate'
        });
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
