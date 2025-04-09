import { config } from "./config.js"
import { renderHtml, pageRenderChecker } from "./render.js"
import { routeWhenUrlChange } from "./router.js"

// Add skeleton content
renderHtml(`${config.env.pathPrefix}layout/head.html`, document.head)
renderHtml(`${config.env.pathPrefix}layout/nav.html`, document.querySelector('nav'))
renderHtml(`${config.env.pathPrefix}layout/header.html`, document.querySelector('header'))
renderHtml(`${config.env.pathPrefix}layout/footer.html`, document.querySelector('footer'))

pageRenderChecker()
routeWhenUrlChange()