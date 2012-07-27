Ext.define("Igor.store.Classdetails", {
    extend: 'Ext.data.Store',

    config: {
        model: 'Igor.model.Classdetail',
        autoLoad: true,

        proxy: {
            type: 'ajax',
            url : 'data/job_project.json',
            reader: {
                type: 'json',
                root: 'class'
            }
        }
        
        /*proxy: {
            type: 'jsonp',
            noCache: false,
            enablePagingParams: false,
            url: 'https://igor-assistant-ca-2012.appspot.com/igor/user/get_user_detail/2004',
            reader: {
                type: 'json',
                rootProperty: 'messages'
            }
        }*/
    }
});
