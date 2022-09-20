import { ProductosGrid }  from "./productosGrid";  /* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import { Navb } from "./nav.js"; 



export function App() {
    return ( 
    <div>
        <header>
            <h1>Productos</h1>
            <main>
             <ProductosGrid />
            </main>
        </header>
    </div>
    );
}
