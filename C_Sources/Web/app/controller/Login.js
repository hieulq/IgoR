Ext.define("Igor.controller.Login", {
    extend: 'Ext.app.Controller',
    views: ['authenticate.Authenticate'], // tương ứng sheet 2

    requires: [
        'Igor.view.Main'
    ],
    
    init: function() {
        //this.checkSession();
    },

    config: {
        control: {
            submitButton: {
                tap: 'doLogin'
            },

            authenForm: {
                initialize: 'checkSession'
            },
        },

        routes: {
            'login': 'doLogin'
        },

        refs: {
            authenForm: 'authenForm',
            loginForm: 'authenForm #loginForm',
            submitButton: 'authenForm #submitBtn'
        },

        before: {
            // doLogin: ['checkSession']
        }
    },

    checkSession: function() {
        var userStores = Ext.getStore('Users');

        userStores.load({
            callback: function(records, operation, success) {
                    if (records != null && userStores.first() !== undefined) {
                        Ext.Viewport.setActiveItem(Ext.create('Igor.view.Main'), {type: 'slide'});                    
                    }
                },
                scope: this
        });

        this.getAuthenForm().onAfter('erased', function(){
            this.destroy();
        });
    },

    doLogin: function(){
        // Lấy thông tin từ view
        var loginForm = this.getLoginForm().getValues();
        var emailText = loginForm['email'];
        var passText = loginForm['password'];

        if (emailText != '' && passText != '') {
            this.communicatingServer(emailText, passText);
        } else {
            // Không điền đầy đủ thông tin
            Ext.Msg.alert('Invalid Email or Password!');
        }
    },

    // (*) Web Service
    communicatingServer: function (_email, _password){
        var userStore = Ext.getStore('Users');
        userStore.removeAll();

        Ext.data.JsonP.request({    
            url: 'https://igor-assistant-ca-2012.appspot.com/igor/user/call/jsonp/login/',
            params: {
                email: _email,
                password: _password
            },
            disableCaching: false,

            success: function(result, request) {
                if (result.status == 'OK' && result.message !== 'Authentication failed! Check your email or password again') {
                    // Save the current user for the logged in session
                    Ext.Array.each(result.message, function(user) {
                        var userStore = Ext.getStore('Users'), userDetails = {};
                        userStore.removeAll();
                        user.avatar = "default_male.png";
                        userDetails = Ext.create('Igor.model.User', user);
                        userDetails.set('loggedIn', true);
                        userStore.add(userDetails);
                        userStore.sync();
                    });

                    // Route to the Main view
                    Ext.Viewport.setActiveItem(Ext.create('Igor.view.Main'));
                } else {
                    Ext.Msg.alert('Invalid Email or Password!');
                }
            }
        });
    }
});