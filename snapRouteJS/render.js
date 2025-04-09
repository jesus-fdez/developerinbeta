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