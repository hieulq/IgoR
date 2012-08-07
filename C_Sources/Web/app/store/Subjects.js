Ext.define("Igor.store.Subjects", {
    extend: 'Ext.data.TreeStore',
    requires: [
    	"Igor.model.Subject"
    ],

    config: {
    	defaultRootProperty: 'items',
        model: 'Igor.model.Subject',
        autoLoad: true,

        root: {
        	items: [{
                subject_name: 'test subject_name',
                items: [{
                    subject_name: 'test child',
                    leaf: true
                }]
        	}]
    	}
        
    }
});
