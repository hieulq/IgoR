Ext.define("Igor.controller.ClassDetails", {
    extend: 'Ext.app.Controller',
    views: ['ClassDetails'], // tương ứng sheet 8
    
    init: function() {
        
    },

    config: {
        control: {
            jobListForm: 'List' {
                itemSelected: 'viewJobDetails', // Xem chi tiết Job Details
            },
            addJobToClassSubmit: 'button' {
                onTap: 'addJobClass',
            },
            deleteClassSubmit: 'button' {
                onTap: 'deleteClass',
            },
            addClassToUserSubmit: 'button' {
                onTap: 'addClassToUser'
            }
        },
        routes: {
            'classdetails/:id': 'doClassDetails'
            // Khi xuat hien url dang http://abc.com/.../#classdetails thi se thuc hien ham showLogin
        },

        refs: {
            // Class Details Form
            classDetailsForm: '#classDetailsForm',
            deleteClassSubmit: '#deleteClassSubmit',
            addJobToClassSubmit: '#addJobToClassSubmit',
            addClassToUserSubmit: '#addClassToUserSubmit',
            
            // Jobs List Form
            jobListForm: '#jobListForm'
        }

        before: {
            doClassDetails: ['getClassDetails', 'getJobsList'],
            deleteClass: ['checkValidationDeletingClass'],
        },
    },

    // Hàm chính
    doClassDetails: function() {
        // Thực hiện 2 hàm filters trước rồi binding dữ liệu lên giao diện
    },

    // (*) WS lấy về thông tin chi tiết của class tương ứng class_id
    getClassDetails: function(class_id) {
        // Sử dụng hàm Get_job_detail(job_id) trong file .doc
    },

    // (*) WS lấy toàn bộ các jobs của user tương ứng vs class này
    getJobsList: function(class_id, user_id) {
        // Sử dụng hàm Get_jobs_by_class_id(user_id, class_id) trong file .doc
    },

    // Hàm xem thông tin chi tiết Job tương ứng job_id
    viewJobDetails: function(job_id) {
        // Cập nhật route: .../jobdetails/abc
        // Chuyển sang màn hình xem chi tiết Job
        this.redirectTo('url');
    },

    // Hàm thêm mới 1 job cho class tương ứng, vs user hiện tại
    addJobClass: function(user_id, class_id) {
        // Cập nhật route: .../addjob
        // Chuyển sang màn hình thêm mới job
        this.redirectTo('url');
        // Sẽ làm màn hình thêm mới Job sau! Sử dụng hàm Add_class_job(user_id, job_detail, class_id) trong file .doc
    },

    // Hàm xóa class
    deleteClass: function(class_id) {
        // Sử dụng hàm Delete_class (user_id, class_id) trong file .doc
    },

    checkValidationDeletingClass: function() {
        // Làm sau
    },

    // Hàm thêm lớp học vào thông tin user hiện tại
    addClassToUser: function(user_id, class_id) {
        // Sử dụng hàm Add_class_to_user(user_id, class_id) trong file .doc
    },
});