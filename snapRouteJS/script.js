import { config } from "./config.js"
import { renderHtml } from "./render.js"

// Add skeleton content
renderHtml(`${config.env.pathPrefix}layout/head.html`, document.head)
renderHtml(`${config.env.pathPrefix}layout/nav.html`, document.querySelector('nav'))
renderHtml(`${config.env.pathPrefix}layout/header.html`, document.querySelector('header'))
renderHtml(`${config.env.pathPrefix}layout/footer.html`, document.querySelector('footer'))
renderHtml(`${config.env.pathPrefix}layout/home.html`, 'home')

// Route when url change
window.addEventListener('popstate', function(e) 
{
    var path = location.hash.replace('#/', '')

    if (path.indexOf(config.env.postPrefix) >= 0) {
        renderHtml(`${config.env.pathPrefix}${path}.html`, 'post')    
    } else {
        renderHtml(`${config.env.pathPrefix}layout/${config.routes[path].html}`, config.routes[path].section)
    }
})

var timer = setInterval(function() 
{
    if (document.querySelector('footer') != null) {
        // Make visible home
        document.body.style.visibility = 'visible'
        document.body.classList.replace('hidden', 'show')

        document.querySelectorAll('a').forEach((link) => {
            console.log(link.href)
        })

        clearInterval(timer)
    }
 }, 1000);