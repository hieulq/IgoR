Ext.define("Igor.model.Task", {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'class_code',
            'subject_name',
            'num_of_day',//Monday, ...
            'period',//morning,..
            'subject_code',
            'session_start',
            'total_session',
            'teacher_name',
            'location'
        ]
    }
});
