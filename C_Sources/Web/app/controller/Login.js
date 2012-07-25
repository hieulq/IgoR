Ext.define("Igor.controller.Login", {
    extend: 'Ext.app.Controller',
    views: ['authenticate.Authenticate'], // tương ứng sheet 2
    
    init: function() {
        
    },

    config: {
        control: {
            submitButton: {
                tap: 'doLogin'
            },
        },
        routes: {
            'login': 'doLogin'
            // Khi xuat hien url dang http://abc.com/#login thi se thuc hien ham showLogin
        },

        refs: {
            loginForm: '#loginForm' 
            // sau nay có thể lấy email/pass... từ giao diện, có thể thêm refs cụ thể cho từng textbox...
            submitButton: 'button[action=login]'
        }

        before: {
            doLogin: 'authenticate'
            // Truoc khi thuc hien ham doLogin thi se invoke ham authenticate trước!
        },
    },

    doLogin: function(){
        // Gọi hàm tương tác vs server IgoR
        this.login();
        // Có thể thực hiện chuyển màn hình sang màn hình chính
        this.redirectTo('url');
    },

    // Ham này sẽ gửi thông tin cần xác thực tới Google Sync
    authenticate: function(action) {
        MyApp.authenticate({
            success: function() {
                // Do smt... để xác thực với google
                // Hiện thông báo thành công
                action.resume();
                // hàm này sẽ cho phép quay trở lại tình trạng app hiện tại, thực hiện tiếp hàm doLogin
            },
            failure: function() {
                Ext.Msg.alert('Wrong Information to login! Try Again!');
            }
        });
    },

    // (*) Web Service
    login: function (email, pass){
        // Hàm này sẽ thực hiện gửi thông tin về tình trạng đăng nhập của user lên server IgoR, sẽ nhận lại được respond
        // từ server, sau đó sẽ lưu các thông tin phiên đăng nhập như token, user_name, pass, user_id...
    },
});