export function solid()
{
    return `
<div class="container">
    <div class="row">
        <div class="col-11 mx-auto">
            
            <article>
                <header class="mb-4">
                    <h1 class="fw-bolder mb-1">Principios SOLID en programación: qué son y por qué deberías usarlos.</h1>
                    <a class="badge bg-secondary text-decoration-none link-light mt-3" href="#!">Clean code</a>
                    <div class="mt-3"><img src="/developerinbeta/assets/img/profile-s.jpg" class="profile" alt="Jesús Fdez." /> Jesús Fdez.</div>
                </header>
            
                <figure class="text-center" style="background-color: #090502;">
                    <img class="img-fluid" src="/developerinbeta/assets/img/solid01.jpg" alt="Principios SOLID" />
                </figure>
            
                <p>Si alguna vez has trabajado con código desordenado y difícil de mantener, seguramente te has preguntado: ¿Cómo puedo escribir software que sea flexible y fácil de escalar? La respuesta está en los principios SOLID.</p>
                <p>Los principios SOLID son un conjunto de cinco reglas que te ayudan a diseñar código más limpio, mantenible y robusto. Fueron formulados por Robert C. Martin (Uncle Bob) y han sido una referencia clave en el desarrollo de software orientado a objetos. Si aplicas estos principios, evitarás problemas como código acoplado, difícil de probar o difícil de modificar sin romper otras partes del sistema.</p>

                <h3>Los 5 principios SOLID explicados con ejemplos</h3>

                <h4>S - Single Responsibility Principle (Principio de Responsabilidad Única)</h4>
                <p>Una clase debe tener solo una responsabilidad en el sistema. Si una clase hace muchas cosas, el código se vuelve difícil de mantener.</p>
                <p>Ejemplo: ❌ Incorrecto</p>

                        
<pre><code class="language-java">
class Reporte {
    void generarPDF() {
        // Genera un PDF
    }
    
    void guardarEnBD() {
        // Guarda en base de datos
    }
}
</code></pre>

                        <p>Aquí la clase Reporte tiene dos responsabilidades: generar un PDF y guardar en la base de datos. Deberíamos separarlas:</p>
                        <p>Ejemplo: ✅ Correcto</p>

<pre><code class="language-java">
class Reporte {
    String obtenerDatos() {
        return "Datos del reporte";
    }
}

class GeneradorPDF {
    void generar(Reporte reporte) {
        // Convierte reporte en PDF
    }
}

class GuardarBD {
    void guardar(Reporte reporte) {
        // Guarda en base de datos
    }
}
</code></pre>

                        <p>Así, cada clase tiene una sola responsabilidad.</p>

                        <h4>O - Open/Closed Principle (Principio Abierto/Cerrado)</h4>
                        <p>El código debe estar abierto para extensión, pero cerrado para modificación.</p>
                        <p>Esto significa que debemos poder añadir nuevas funcionalidades sin modificar el código existente.</p>
                        <p>Ejemplo: ❌ Incorrecto</p>

<pre><code class="language-java">
class Calculadora {
    int operar(String tipo, int a, int b) {
        if (tipo.equals("suma")) {
            return a + b;
        } else if (tipo.equals("resta")) {
            return a - b;
        }
        return 0;
    }
}    
</code></pre>

                        <p>Si queremos agregar multiplicación o división, tendríamos que modificar la clase. Mejor usar polimorfismo:</p>
                        <p>Ejemplo: ✅ Correcto</p>

<pre><code class="language-java">
interface Operacion {
    int calcular(int a, int b);
}

class Suma implements Operacion {
    public int calcular(int a, int b) {
        return a + b;
    }
}

class Resta implements Operacion {
    public int calcular(int a, int b) {
        return a - b;
    }
}
</code></pre>

                        <p>Ahora podemos agregar nuevas operaciones sin tocar el código existente.</p>

                        <h4>L - Liskov Substitution Principle (Principio de Sustitución de Liskov)</h4>
                        <p>Las subclases deben poder sustituir a la clase base sin problemas.</p>
                        <p>Si heredas una clase, la subclase debe comportarse como la clase padre sin causar errores inesperados.</p>
                        <p>Ejemplo: ❌ Incorrecto</p>

<pre><code class="language-java">
class Ave {
    void volar() {
        System.out.println("Volando...");
    }
}

class Pinguino extends Ave {
    @Override
    void volar() {
        throw new RuntimeException("Los pingüinos no vuelan");
    }
}
</code></pre>

                        <p>Un pingüino no debería heredar un método que no puede usar.</p>
                        <p>Ejemplo: ✅ Correcto</p>

<pre><code class="language-java">
class Ave {}

class AveVoladora extends Ave {
    void volar() {
        System.out.println("Volando...");
    }
}

class Pinguino extends Ave {
    void nadar() {
        System.out.println("Nadando...");
    }
}
</code></pre>

                        <p>Ahora el pinguino no viola el principio de Liskov.</p>

                        <h4>I - Interface Segregation Principle (Principio de Segregación de Interfaces)</h4>
                        <p>Las clases no deben verse forzadas a implementar interfaces que no utilizan.</p>
                        <p>Si una interfaz es muy grande, es mejor dividirla en interfaces más pequeñas y específicas.</p>
                        <p>Ejemplo: ❌ Incorrecto</p>

<pre><code class="language-java">
interface Trabajador {
    void programar();
    void cocinar();
}
</code></pre>

                        <p>Si tenemos un programador, no debería verse obligado a implementar cocinar().</p>
                        <p>Ejemplo: ✅ Correcto</p>

<pre><code class="language-java">
interface Programador {
    void programar();
}

interface Cocinero {
    void cocinar();
}

class Desarrollador implements Programador {
    public void programar() {
        System.out.println("Programando...");
    }
}

class Chef implements Cocinero {
    public void cocinar() {
        System.out.println("Cocinando...");
    }
}
</code></pre>

                        <p>Ahora cada clase solo implementa lo que necesita.</p>

                        <h4>D - Dependency Inversion Principle (Principio de Inversión de Dependencias)</h4>
                        <p>Los módulos de alto nivel no deben depender de módulos de bajo nivel, sino de abstracciones.</p>
                        <p>Esto significa que una clase no debe depender de otra concreta, sino de una interfaz o abstracción.</p>
                        <p>Ejemplo: ❌ Incorrecto</p>

<pre><code class="language-java">
class Motor {
    void encender() {
        System.out.println("Motor encendido");
    }
}

class Coche {
    private Motor motor;

    Coche() {
        this.motor = new Motor();
    }
}
</code></pre>

                        <p>El coche depende directamente de Motor. Si cambiamos Motor, hay que modificar Coche.</p>
                        <p>Ejemplo: ✅ Correcto</p>

<pre><code class="language-java">
interface IMotor {
    void encender();
}

class MotorElectrico implements IMotor {
    public void encender() {
        System.out.println("Motor eléctrico encendido");
    }
}

class Coche {
    private IMotor motor;

    Coche(IMotor motor) {
        this.motor = motor;
    }
}
</code></pre>

                <p>Ahora Coche puede usar cualquier motor que implemente IMotor sin cambios.</p>
                <h4>🏆 Conclusión: Por qué deberías aplicar SOLID</h4>
                <p>Aplicar los principios SOLID en tus proyectos te ayudará a escribir <span class="blue">código escalable, más limpio y fácil de mantener</span>.</p>
                <p>Si quieres mejorar como desarrollador, dominar estos principios es clave. Empieza a aplicarlos desde hoy y verás la diferencia en la calidad de tu código.</p>
            </article>

        </div>
    </div>
</div>    
    `;
}