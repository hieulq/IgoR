Ext.define("Igor.view.about.About", {
    extend: 'Ext.navigation.View',
    xtype: 'aboutPage',

    requires: [
        'Ext.List'
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
                title: 'About Igor'
            }
        ]
    }
});
