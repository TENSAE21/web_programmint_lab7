function askPassword(ok, fail){
   //let password = prompt("Password?", '');
   let password = 'rockstar';
   if(password == "rockstar") ok();
   else fail();
}

let user = {
    name: 'John',

    loginOk(){
        console.log(`${this.name} logged in`);

    },
    
    loginFail(){
        console.log(`${this.name} failed to log in`)
    }

};

askPassword(function(){user.loginOk()}, function(){user.loginFail()}); // wrapper

askPassword(()=>user.loginOk(), ()=>user.loginFail());    // lambda

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));  // bind

askPassword(function(){user.loginOk.call(user)}, function(){user.loginFail.call(user)});  // call

askPassword(function(){user.loginOk.apply(user)}, function(){user.loginFail.apply(user)});    // apply
