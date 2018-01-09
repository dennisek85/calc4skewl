$(document).on('click', 'a.pop', function(e){

    // Create a push state event
    let href = $(this).attr('href');
    history.pushState(null, null, href);

    changePage();

    //stop browser from reloading page
    e.preventDefault();

});

function changePage () {
    
    let url = location.pathname;

    $('header a').removeClass('active');
    $(`header a[href="${url}"]`).addClass('active');
    
    if(url == '/'){
        $('main').html('Du är på startsidan!');
    }

    if(url == '/spel'){
        $('main').html('Du vill spela ett spel!');
    }

    if(url == '/kontakt'){
        $('main').html('Här finns kontaktsidan!');
    }
}

//call changePage on initial page load

changePage();

//call changePage on popevents

window.addEventListener('popstate', changePage);