Ext.define("Igor.store.Classusers", {
    extend: 'Ext.data.Store',

    config: {
        model: 'Igor.model.Classuser',
        pageSize: 5,
        autoLoad: true,
        sorters: 'date',
        grouper: {
            groupFn: function(record) {
                return record.get('!username');
            }
        }
    }
});
