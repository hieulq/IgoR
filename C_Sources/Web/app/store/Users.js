Ext.define("Igor.store.Users", {
    extend: 'Ext.data.Store',

    config: {
        model: 'Igor.model.User',
        pageSize: 5,
        autoLoad: true,
        sorters: 'date',
        grouper: {
            groupFn: function(record) {
                return record.get('!username');
            }
        },
        proxy: {
            type: 'ajax',
            url: 'data/users.json'
        }
    }
});
