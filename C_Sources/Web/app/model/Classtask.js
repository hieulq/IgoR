Ext.define("Igor.model.Classtask", {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'id',
            'name',
            'status',
            'start_time',
            'end_time',
            'repeat_date',
            'location',
            'note',
            'class_subject',
            'owner',
            'test',
            'date',
        ],

        // proxy: {
        //     type: 'ajax',
        //     url : 'data/job_project.json',
        //     reader: {
        //         type: 'json',
        //         rootProperty: 'tasks'

        //     }
        // }
    }
});
