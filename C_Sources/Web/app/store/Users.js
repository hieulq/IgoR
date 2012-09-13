Ext.define("Igor.store.Users", {
    extend: 'Ext.data.Store',
    requires:['Ext.data.proxy.LocalStorage'],

    config: {
        model:'Igor.model.User',
        autoSync: true,
        proxy: {
            type: 'localstorage',
            id  : 'usersStorage'
        },
        autoload: true,

        /*listeners : {
            load : function (s) {
                console.log('Data loaded, store has ' + s.getCount() + ' items');
            }
        }*/
    }
});
