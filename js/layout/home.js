export function home() {

return `
<div class="container">
    <div class="row">

        <div class="col-10 mx-auto">
            <div class="row">

                <div class="col-md-6 col-12">
                    <div class="card article mb-4 shadow">
                        <a href="/developerinbeta/posts/clean-architecture.html"><img class="card-img-top" src="/developerinbeta/assets/img/clean-arch01.jpg" alt="Clean architecture" /></a>
                        <div class="card-body">
                            <h5 class="card-title">Clean architecture.</h5>
                            <p class="card-text">Arquitectura de software que busca, a través de la separación de responsabilidades, hacer que el código sea más modular, mantenible y escalable.</p>
                            <a class="btn btn-primary" href="/developerinbeta/posts/clean-architecture.html">Leer →</a>
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6 col-12">
                    <div class="card article mb-4 shadow">
                        <a href="/developerinbeta/posts/solid.html"><img class="card-img-top" src="/developerinbeta/assets/img/solid01.jpg" alt="Principios SOLID" /></a>
                        <div class="card-body">
                            <h5 class="card-title">Principios SOLID: qué son y por qué deberías usarlos.</h5>
                            <p class="card-text">¿Cómo puedo escribir software que sea flexible y fácil de escalar? La respuesta está en los principios SOLID.</p>
                            <a class="btn btn-primary" href="/developerinbeta/posts/solid.html">Leer →</a>
                        </div>
                    </div>
                </div>

                <div class="col-md-6 col-12">
                    <div class="card article mb-4 shadow">
                        <a href="/developerinbeta/posts/laravel.html"><img class="card-img-top" src="/developerinbeta/assets/img/laravel01.jpg" alt="Laravel 12" /></a>
                        <div class="card-body">
                            <h5 class="card-title">Instalación de Laravel y autenticación con Bootstrap.</h5>
                            <p class="card-text">Laravel es un framework de PHP robusto y elegante para desarrollar aplicaciones web. En esta guía aprenderás a instalar Laravel 12 (versión actual).</p>
                            <a class="btn btn-primary" href="/developerinbeta/posts/laravel.html">Leer →</a>
                        </div>
                    </div>
                </div>

            </div>

            <!-- <div include-html="layouts/pagination.html"></div> -->
        </div>
        
        <!-- <div class="col-lg-3">
            
            <div include-html="layouts/blogdescription.html"></div>
            <div include-html="layouts/categories.html"></div>
            
        </div> -->

    </div>
</div>
`;
}