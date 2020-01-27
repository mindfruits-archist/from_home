
  tarteaucitron.user.googletagmanagerId = 'GTM-TXN8QDQ';
  (tarteaucitron.job = tarteaucitron.job || []).push('googletagmanager');
  //SI LE COOKIE N'EXISTE PAS,
  //window.onload = function(){
  window.addEventListener('load', function(){
    console.log("DOM entièrement chargé et analysé")

    console.log('document.cookie.tarteaucitron != "!googletagmanager=true": ');
    console.log(document.cookie.tarteaucitron != "!googletagmanager=true");
    console.log("document's loading: tac");
    if(document.cookie.indexOf("tarteaucitron") == -1 || (document.cookie.indexOf("tarteaucitron=!googletagmanager=true") == -1 && document.cookie.indexOf("tarteaucitron=!googletagmanager=false") == -1)){

      console.log("is tac's cookie exist ?: " + document.cookie.indexOf("tarteaucitron"));
      document.getElementsByTagName('body')[0].innerHTML += "<div id='tac_cover'></div>"
      document.getElementsByTagName('body')[0].className += " RGPD"
      jQuery('body').on('click', '#tarteaucitronServices #tarteaucitronAllDenied,#tarteaucitronServices #tarteaucitronAllAllowed,#tarteaucitronServices #googletagmanagerAllowed,#tarteaucitronServices #googletagmanagerDenied,#tarteaucitronPersonalize', (e) => {
        document.location.reload()
          /*
          tac_cover.parentNode.removeChild(tac_cover)
          $bod.classList.remove('RGPD')
          */
      })
    }else console.log("cookie tac already exists: %s", document.cookie);
  });


  // console.log( "tarteaucitronRoot:" );
  // console.log( tarteaucitronRoot );
  //
  // console.log("tarteaucitron:1 ")
  // console.log(tarteaucitron)
