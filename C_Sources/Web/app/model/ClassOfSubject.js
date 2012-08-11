Ext.define("Igor.model.ClassOfSubject", {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'term',
            'id',
            'location',
            'class_code',//Monday, ...
            'duration',//morning,..
            'is_finished',
            'teacher',
            'subject',
        ],
    }
});
