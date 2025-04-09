const config = 
{
    routes: {
        'home' : {
            html : 'home.html',
            section : 'home'
        },
        'contact' : {
            html : 'contact.html',
            section : 'home'
        },
        // Post paths are routing automatically by html name
    },

    env: {
        pathPrefix: '/developerinbeta/',
        postPrefix: 'post'
    }
}

export {config}