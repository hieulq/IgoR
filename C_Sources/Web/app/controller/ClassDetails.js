Ext.define("Igor.controller.ClassDetails", {
    extend: 'Ext.app.Controller',
    views: ['task.ClassDetails'], 
    
    init: function() {
        
    },

    config: {
        control: {
            
        },

        routes: {
            'tasks/:id': 'doClassDetail'
        },

        refs: {
            // Class Details Form
            classDetailsForm: 'classDetailsForm',
            classProjectList: 'classDetailsForm #classProjectList'
        },

        before: {
            
        }
    },

    // Hàm chính
    doClassDetail: function(id) {
        // Thực hiện 2 hàm filters trước rồi binding dữ liệu lên giao diện
        // this.getAllProjectsByClass(id);
    },

    getAllProjectsByClass: function(class_id) {
        
    }
});