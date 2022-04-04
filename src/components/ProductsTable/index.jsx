import {
    Container,
    ErrorContainer
} from './styles';

export function ProductsTable({ productsList }) {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>TIPO</th>
                        <th>PONTOS</th>
                        <th>CLIQUES</th>
                    </tr>
                </thead>
                {
                    productsList.map((product) => (
                        <tbody key={product.id}>
                            <tr>
                                <td>{product.id}</td>
                                <td className="productName">{product.name}</td>
                                <td>{product.type}</td>
                                <td>{product._meta.score}</td>
                                <td>{product._meta.visitsClickCount}</td>
                            </tr>
                        </tbody>
                    ))
                }
            </table>
        </Container>
    )
}