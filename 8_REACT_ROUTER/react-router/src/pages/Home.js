import { useFetch } from '../hooks/useFetch'
import { Link } from "react-router-dom"

import './Home.css'


const Home = () => {

    const url = "http://localhost:3000/products"

    const { data: items, loading, error } = useFetch(url);

    return (
        <>
            {loading && <p>Carregando dados...</p>}
            {error && <p>Ocorreu um erro...</p>}
            <ul className="products">
                {items &&
                    items.map((product) => (
                        <li key={product.id}>
                            <h2>{product.name}</h2>
                            <p>R$: {product.price}</p>
                            <Link to={`/products/${product.id}`}>Detalhes</Link>
                        </li>
                    ))}
            </ul>
        </>
    )
}

export default Home