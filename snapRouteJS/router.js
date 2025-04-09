import { config } from "./config.js"
import { renderHtml } from "./render.js"

export function routeEventWhenUrlChange()
{
    // Route when url change
    window.addEventListener('popstate', function(e) 
    {
        route()
    })
}

export function routeWhenRefreshPage()
{
    // Route when refresh page. Not necessary if it is home page
    if (!location.hash) {
        return
    }
    
    route()
}

function route()
{
    var path = location.hash.replace('#/', '')

    if (path.indexOf(config.env.postPrefix) >= 0) {
        renderHtml(`${config.env.pathPrefix}${path}.html`, 'post')    
    } else {
        renderHtml(`${config.env.pathPrefix}layout/${config.routes[path].html}`, config.routes[path].section)
    }
}