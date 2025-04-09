import { config } from "./config.js"
import { renderHtml } from "./render.js"

// Add skeleton content
renderHtml(`${config.env.pathPrefix}layout/head.html`, document.head)
renderHtml(`${config.env.pathPrefix}layout/nav.html`, document.querySelector('nav'))
renderHtml(`${config.env.pathPrefix}layout/header.html`, document.querySelector('header'))
renderHtml(`${config.env.pathPrefix}layout/footer.html`, document.querySelector('footer'))
renderHtml(`${config.env.pathPrefix}layout/home.html`, 'home')

// Make visible home
document.body.style.visibility = 'visible'

// Route when url change
window.addEventListener('popstate', function(e) {
    var path = location.hash.replace('#/', '')

    if (path.indexOf(config.env.postPrefix) >= 0) {
        renderHtml(`${config.env.pathPrefix}${path}.html`, 'post')    
    } else {
        renderHtml(`${config.env.pathPrefix}layout/${config.routes[path].html}`, config.routes[path].section)
    }
})