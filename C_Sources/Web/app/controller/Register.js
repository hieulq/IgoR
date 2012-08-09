Ext.define("Igor.controller.Register", {
    extend: 'Ext.app.Controller',
    views: ['authenticate.Register'], // tương ứng sheet 1
    
    requires: [
        'Igor.view.Main'
    ],

    init: function() {
        
    },

    config: {
        control: {
            submitRegisterBtn: {
                tap: 'doRegister'
            }
        },

        routes: {
            'register': 'doRegister'
        },

        refs: {
            registerForm: 'registerForm',
            submitRegisterBtn: 'registerForm #submitRegisterBtn'
        },

        before: {
            
        }
    },

    doRegister: function(){
        var registerForm = this.getRegisterForm().getValues();
        var fullNameText = registerForm['fullname'];
        var emailText = registerForm['email'];
        var passwordText = registerForm['password'];
        var studentIDText = registerForm['studentid'];
        var courseText = registerForm['course'];
        var groupText = registerForm['group'];
        var avatarPathText = 'http://igor-assistant-ca-2012.appspot.com/igor/static/images/igor.jpg';
        if (emailText != '' && passwordText != '') {
            this.sendRegisterRequest(emailText, passwordText, fullNameText, groupText, studentIDText, courseText, avatarPathText);
        } else {
            Ext.Msg.alert('Not enough information!');
        }
    },

    // (*) Web Service
    sendRegisterRequest: function (_email, _password, _name, _class_group, _student_code, _user_course, _avatar){
        Ext.data.JsonP.request({    
            url: 'https://igor-assistant-ca-2012.appspot.com/igor/user/call/jsonp/check_email_available/',
            params: {
                email: _email
            },
            disableCaching: false,

            success: function(result, request) {
                if (result.status == 'OK' && result.message == '1') {
                    Ext.data.JsonP.request({    
                        url: 'https://igor-assistant-ca-2012.appspot.com/igor/user/call/jsonp/register/',
                        params: {
                            email: _email,
                            password: _password,
                            name: _name,
                            class_group: _class_group,
                            student_code: _student_code,
                            user_course: _user_course,
                            avatar: _avatar
                        },
                        disableCaching: false,

                        success: function(result, request) {
                            if (result.status == 'OK' && result.message != '') {
                                var user_id = result.message;
                                Ext.data.JsonP.request({    
                                url: 'https://igor-assistant-ca-2012.appspot.com/igor/user/call/jsonp/get_user_detail/',
                                params: {
                                    id: user_id
                                },
                                disableCaching: false,

                                success: function(result, request) {
                                    if (result.status == 'OK' && result.message != '') {
                                        var userStore = Ext.getStore('Users'), userDetails = {};
                                        userStore.removeAll();
                                        userStore.sync();

                                        // Save the current user for the logged in session
                                        Ext.Array.each(result.message, function(user) {
                                            if (user.avatar == '') {
                                                user.avatar = "default_male.png";
                                            }      
                                            userDetails = Ext.create('Igor.model.User', user);
                                            userDetails.set('loggedIn', true);
                                            userStore.add(userDetails);
                                            userStore.sync();
                                        });

                                        // Route to the Main view
                                        Ext.Viewport.setActiveItem(Ext.create('Igor.view.Main'));
                                    } else {
                                        Ext.Msg.alert('Failed Registering!');
                                    }
                                }
                            });
                            } else {
                                Ext.Msg.alert('Failed Registering!');
                            }
                        }
                    });
                } else {
                    Ext.Msg.alert('Email Address existed!');
                }
            }
        });
    }
});