Ext.define("Igor.store.ClassUsers", {
    extend: 'Ext.data.Store',

    config: {
        model: 'Igor.model.ClassUser',
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
