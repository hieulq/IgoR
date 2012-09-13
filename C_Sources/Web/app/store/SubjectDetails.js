Ext.define("Igor.store.SubjectDetails", {
    extend: 'Ext.data.Store',

    config: {
        model: 'Igor.model.Subject',
        autoLoad: true,
    }
});
