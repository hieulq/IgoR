Ext.define("Igor.store.SubjectClasses", {
    extend: 'Ext.data.Store',

    config: {
        model: 'Igor.model.ClassOfSubject',
        autoLoad: true,
    }
});
