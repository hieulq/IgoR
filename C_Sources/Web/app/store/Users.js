Ext.define("Igor.store.Users", {
    extend: 'Ext.data.Store',
    requires:['Ext.data.proxy.LocalStorage'],

    config: {
        model:'Igor.model.User',
        proxy: {
            type: 'localstorage',
            id  : 'loggedIn'
        },
        autoload: true
    }
});
