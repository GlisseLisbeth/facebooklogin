window.fbAsyncInit = () =>{
  FB.init({
    appId: '747970148661508',
    cookie: true,
    xfbml: true,
    version: 'v2.8'
  });
};


function loginHandler(response){
  if(response.status === 'connected'){
    state.status = 'conectado';
    FB.api('/me?fields=email,name', user => {
      state.user = user;
      state.doRender();
    });
  } else if(response.status === 'not_authorized'){
      state.user = null,
      state.status = "Aplicación no autorizada";
      state.doRender();
    }
}

function doLogin(){
  FB.login(loginHandler, {scope: 'email'});
  console.log("LoginHandler: "+loginHandler);
  console.log("Scope: "+{scope: 'email'})
}
