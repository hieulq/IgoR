Ext.define("Igor.model.Subject", {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'subject_id',
            'subject_name',
            'subject_code',
            'class_count',
        ],
    }
});
