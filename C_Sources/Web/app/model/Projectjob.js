Ext.define("Igor.model.Projectjob", {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'jobid',
            'name',
            'status',
            'start_time',
            'end_time',
            'repeat_date',
            'location',
            'note'
        ],


    }
});
