Ext.define("Igor.controller.TaskDetails", {
    extend: 'Ext.app.Controller',
    views: ['TaskDetails'], // tương ứng sheet 6
    
    init: function() {
        
    },

    config: {
        control: {
            attentionListForm: 'List' {
                itemSelected: 'viewUserDetails'
            },
            viewSubjectDetails: 'Button' {
                onTap: 'viewSubjectDetails'
            },
            viewClassDetails: 'Button' {
                onTap: 'viewClassDetails'
            },
        },
        routes: {
            // Khi xuat hien url dang http://abc.com/#login thi se thuc hien ham showLogin
            'taskdetails/:id': 'doTaskDetails'
        },

        refs: {
            // Task Details
            taskDetailsForm: '#taskDetailsForm',
            viewSubjectDetails: '#viewSubjectDetails', // Có thể cho 1 nút view nhỏ cạnh dòng thông tin về subject -> người dùng xem thông tin subject ở màn hình riêng
            viewClassDetails: '#viewClassDetails', // Có thể cho 1 nút view nhỏ cạnh dòng thông tin về class -> xem class ở màn hình riêng

            // Attention List
            attentionListForm: '#attentionListForm',
        }

        before: {
            doTaskDetails: ['getTaskDetails', 'getAttentionList'],
        },
    },

    // Hàm này chạy chính
    doTaskDetails: function() {
        // Thực hiện 2 hàm filter trước
        // Binding dữ liệu lên giao diện
        this.showTaskDetails();
    },

    // (*) WS lấy toàn bộ thông tin của 1 task theo ID
    getTaskDetails: function(id) {
        // getTaskDetailsByID(task_id)
    },

    // (*) WS lấy toàn bộ user đang quan tâm tới class này theo classID
    getAttentionList: function(class_id) {
        // Sử dụng hàm Get_user_by_project(class_id) trong file .doc???
    },

    // Hàm này binding toàn bộ dữ liệu lấy ở 2 hàm trên lên giao diện chính
    showTaskDetails: function(){

    },

    // Hàm này sẽ chuyển sang màn hình User Details riêng để xem thông tin về user này
    viewUserDetails: function(user_id) {
        // Cập nhật route: .../userdetails/abc
        this.redirectTo('url'); // Chuyển sang màn hình User Details
    },

    // Hàm này sẽ chuyển sang màn hình Subject Details riêng vs subject_id tương ứng
    viewSubjectDetails: function(subject_id) {
        // Cập nhật route: .../subjectdetails/abc
        this.redirectTo('url');
    },

    // Hàm này chuyển sang màn hình Class Details vs class_id tương ứng
    viewClassDetails:function(class_id) {
        // Cập nhật route: .../classdetails/abc
        this.redirectTo('url');
    }
});