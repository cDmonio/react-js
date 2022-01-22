function mostrarTabla(articulos) {
    return (
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>Código</th>
              <th>Descripción</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {articulos.map(art => {
              return (
                <tr key={art.codigo}>
                  <td>{art.codigo}</td>
                  <td>{art.descripcion}</td>
                  <td>{art.precio}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
}

export default mostrarTabla;
