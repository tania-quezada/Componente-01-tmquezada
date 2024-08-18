import { Component, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'api-table',
  styleUrl: 'api-table.css',
  shadow: true,
})
export class ApiTable {
  // Propiedad para recibir la URL de la API
  @Prop() apiUrl: string = 'https://dummyjson.com/products';

  // Estado para almacenar los datos de la API
  @State() products: any[] = [];

  // Estado para manejar errores
  @State() error: string;

  // Estado para manejar el producto seleccionado
  @State() selectedProduct: any = null;

  // Método que se ejecuta al inicializar el componente
  componentWillLoad() {
    this.fetchData();
  }

  // Método para obtener datos de la API
  async fetchData() {
    try {
      const response = await fetch(this.apiUrl);
      if (!response.ok) {
        throw new Error('Error en la obtención de los datos');
      }
      const data = await response.json();
      this.products = data.products;
    } catch (error) {
      this.error = error.message;
    }
  }

  // Método para manejar la selección de un producto
  selectProduct(product) {
    this.selectedProduct = product;
  }

  // Método para cerrar el modal
  closeModal() {
    this.selectedProduct = null;
  }

  // Renderización de la tabla
  render() {
    if (this.error) {
      return <div>Error: {this.error}</div>;
    }

    if (this.products.length === 0) {
      return <div>Cargando datos...</div>;
    }

    return (
      <div>
        <header>
          <h1>Componente Web en Stencil</h1>
        </header>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {this.products.map(product => (
              <tr onClick={() => this.selectProduct(product)}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>${product.price}</td>
                <td>{product.stock}</td>
                <td><img src={product.thumbnail} alt={product.title} width="50" /></td>
              </tr>
            ))}
          </tbody>
        </table>

        {this.selectedProduct && (
          <div class="modal">
            <div class="modal-content">
              <span class="close" onClick={() => this.closeModal()}>&times;</span>
              <h2>{this.selectedProduct.title}</h2>
              <img src={this.selectedProduct.thumbnail} alt={this.selectedProduct.title} />
              <p>{this.selectedProduct.description}</p>
              <p><strong>Price:</strong> ${this.selectedProduct.price}</p>
              <p><strong>Stock:</strong> {this.selectedProduct.stock}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}
