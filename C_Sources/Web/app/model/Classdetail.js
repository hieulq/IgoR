Ext.define("Igor.model.Classdetail", {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'class_id',
            'class_code',
            'subject_name',
            'num_of_day',//Monday, ...
            'period',//morning,..
            'subject_code',
            'session_start',
            'total_session',
            'teacher_name',
            'location'
        ],

        /*proxy: {
            type: 'ajax',
            url : 'data/job_project.json',
            reader: {
                type: 'json',
                rootProperty: 'class'
            }
        }*/

    }
});
