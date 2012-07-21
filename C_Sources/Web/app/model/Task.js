Ext.define("Igor.model.Task", {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'userid',
            'subject_name',
            'num_of_day',//Monday, ...
            'period',//morning,..
            'subjectid',
            'subject_code',
            'session_start',
            'total_session',
            'teacher_name',
            'location'
        ]
    }
});
