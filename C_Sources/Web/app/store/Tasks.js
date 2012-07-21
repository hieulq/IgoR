Ext.define("Igor.store.Tasks", {
    extend: 'Ext.data.Store',

    config: {
        model: 'Igor.model.Task',
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
            url: 'data/profiles.json'
        }
    }
});
