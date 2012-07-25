Ext.define("Igor.controller.JobDetails", {
    extend: 'Ext.app.Controller',
    views: ['JobDetails'], // tương ứng sheet 9
    
    init: function() {
        
    },

    config: {
        control: {
            markFinishedJob: 'button' {
                onTap: 'markFinishedJob',
            },
            deleteJob: 'button' {
                onTap: 'deleteJob',
            },
            shareJobToClass: 'button' {
                onTap: 'shareJobToClass',
            },
        },
        routes: {
            // Khi xuất hiện url dạng http://abc.com/.../jobdetails/abc
            'jobdetails/:id': 'doJobDetails',
        },

        refs: {
            // Job Details Form
            jobDetailsForm: '#jobDetailsForm',
            markFinishedJob: '#markFinishedJob',
            deleteJob: '#deleteJob',
            shareJobToClass: '#shareJobToClass',
        }

        before: {
            doJobDetails: 'getJobDetails',
        },
    },

    // Hàm chính
    doJobDetails: function() {
        // Sau khi thực hiện hàm filter thì sẽ binding dữ liệu lên giao diện
    },

    // (*) WS lấy về toàn bộ thông tin về job hiện tại theo job_id
    getJobDetails: function(job_id) {
        // Sử dụng hàm Get_job_detail(job_id) trong file .doc
    },

    // (*) WS cập nhật finished Job hiện tại
    markFinishedJob: function(job_id) {
        // Sử dụng hàm Mark_job_finished(job_id) trong file .doc
    },

    // (*) WS xóa job hiện tại
    deleteJob: function(job_id) {
        // Sử dụng hàm Delete_job(job_id) trong file .doc
    },

    // (*) WS share job hiện tại
    shareJobToClass: function(job_id, from_user_id, class_id) {
        // Sử dụng hàm Share_job_to_class(job_id, from_user_id, class_id) trong file .doc
    },
});