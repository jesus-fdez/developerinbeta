import { config } from "./config.js"
import { routeWhenRefreshPage } from "./router.js"

export function renderHtml(file, section)
{
    // TODO Add try/catch to handle errors (navigating to 404 page for example)
    
    var xhr = new XMLHttpRequest();
    xhr.open('GET', file, true)
    
    xhr.onreadystatechange = function() {
        if (this.readyState != 4 || this.status != 200) {
            return
        } 
        
        document.querySelectorAll('section').forEach((section) => {
            section.style.display = 'none'
            section.innerHTML = ''
        })

        var sectionNode = typeof section === 'string'
            ? document.querySelector('#' + section)
            : section

        sectionNode.insertAdjacentHTML("afterbegin", this.responseText);

        if (section == 'post') {
            hljs.highlightAll();
        }

        window.scrollTo(0, 0);
        sectionNode.style.display = 'block';
    }

    xhr.send()
}

export function pageRenderedPostActions()
{
    var timer = setInterval(function() {
        if (document.querySelector('footer') != null) {
            // Render home when page is ready
            renderHtml(`${config.env.pathPrefix}layout/home.html`, 'home')
            routeWhenRefreshPage()

            // Make home visible
            document.body.style.visibility = 'visible'
            document.body.classList.replace('hidden', 'show')

            clearInterval(timer)
        }
    }, 1000);
}