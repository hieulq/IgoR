Ext.define("Igor.view.about.About", {
    extend: 'Ext.Panel',
    xtype: 'aboutPage',

    config: {
        autoDestroy: true,
        styleHtmlContent: true,
        scrollable: true,

        contentEl: 'about',

        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
                title: 'About Igor',
                
            }
        ]
    }
});
