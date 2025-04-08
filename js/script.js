import { head } from "./layout/head.js"
import { home } from "./layout/home.js"
import { nav } from "./layout/nav.js"
import { header } from "./layout/header.js"
import { footer } from "./layout/footer.js"

import { contact } from "./layout/contact.js"

// Add skeleton content
renderHtml('/developerinbeta/layout/head.html', document.head)
renderHtml('/developerinbeta/layout/nav.html', document.querySelector('nav'))
renderHtml('/developerinbeta/layout/header.html', document.querySelector('header'))
renderHtml('/developerinbeta/layout/footer.html', document.querySelector('footer'))
renderHtml('/developerinbeta/layout/home.html', 'home')
// addHtml(document.head, head())
// addHtml(document.querySelector('nav'), nav())
// addHtml(document.querySelector('header'), header())
// addHtml(document.querySelector('#home'), home())
// addHtml(document.querySelector('footer'), footer())

// Make visible home
document.body.style.visibility = 'visible'

// Route when url change
window.addEventListener('popstate', function(e) {
    var path = location.hash.replace('#/', '')

    switch (path) {
        case 'contact':
            renderHtml('/developerinbeta/layout/contact.html', 'home')
            break
        case 'solid':
        case 'clean-architecture':
        case 'laravel':
            renderHtml(`/developerinbeta/posts/${path}.html`, 'post')
            break
        default:
            renderHtml('/developerinbeta/layout/home.html', 'home')
            break
    }
            
})

// ================================= //

function route(section, sectionHtml)
{
    if (!section) {
        section = 'home';
    }

    document.querySelectorAll('section').forEach((section) => {
        section.style.display = 'none'
        section.innerHTML = ''
    })

    var sectionNode = document.querySelector('#' + section)
    addHtml(sectionNode, sectionHtml)
    sectionNode.style.display = 'block';
}

function addHtml(element, html)
{
    element.insertAdjacentHTML("afterbegin", html);
}

function renderHtml(file, section)
{
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

