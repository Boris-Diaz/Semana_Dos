import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalBody, FormGroup, ModalFooter, ModalHeader } from "reactstrap";




const data = [
  { id: 1, documento: "123456", nombres: "Juanito Perez", tarea: "Tarea 1", horas: "1" },
  { id: 2, documento: "1789654", nombres: "Jaimio Perez", tarea: "Tarea 2", horas: "10" },
  { id: 3, documento: "9632585", nombres: "Fulanito Presente", tarea: "Tarea 3", horas: "5" },
];

class Cuerpo extends Component {
  state = {
    data: data,
    form: {
      id: '',
      documento: '',
      nombres: '',
      tarea: '',
      horas: ''
    },
    modalInsertar: false,
    modalEditar: false,
    filtroNombre: '', // Nuevo estado para almacenar el nombre para filtrar
    tareasFiltradas: [], // Nuevo estado para almacenar las tareas filtradas por nombre
  };

  handleAdd = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  // Función para manejar cambios en el campo de búsqueda por nombre
  handleNombreChange = e => {
    this.setState({ filtroNombre: e.target.value });
  };

  mostrarModalInsertar = () => {
    this.setState({ modalInsertar: true });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  mostrarModalEditar = (registro) => {
    this.setState({ modalEditar: true, form: registro });
  };

  cerrarModalEditar = () => {
    this.setState({ modalEditar: false });
  };

  insertar = () => {
    var valorNuevo = { ...this.state.form };
    valorNuevo.id = this.state.data.length + 1;
    var lista = this.state.data;
    lista.push(valorNuevo);
    this.setState({ data: lista, modalInsertar: false });
  };

  editar = (dato) => {
    var lista = this.state.data.map((item) => (item.id === dato.id ? dato : item));
    this.setState({ data: lista, modalEditar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("¿Desea usted eliminar esta tarea " + dato.id + "?");
    if (opcion) {
      var lista = this.state.data.filter(item => item.id !== dato.id);
      this.setState({ data: lista });
    }
  };

  // Función para realizar la búsqueda por nombre
  buscarPorNombre = () => {
    const { filtroNombre, data } = this.state;
    const tareasFiltradas = data.filter(tarea => tarea.nombres.toLowerCase().includes(filtroNombre.toLowerCase()));
    this.setState({ tareasFiltradas });
  };

  render() {
    return (
      <>
             
          <br/>
                 
        <Container className='cuerpo'>
   
          <br />
          
          <div className="d-flex justify-content-between">
            <Button color="success" onClick={this.mostrarModalInsertar}>Insertar nueva tarea</Button>
            <div>
              


              <input className='buscar'
                type="text"
                placeholder="Buscar por nombre"
                value={this.state.filtroNombre}
                onChange={this.handleNombreChange}
              /> &nbsp; 
              <Button className='btnbuscar' color="primary" onClick={this.buscarPorNombre}>Buscar</Button>
            </div>
          </div>
          <br /><br />
          <Table responsive hover>
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">DOCUMENTO</th>
                <th scope="col">NOMBRES</th>
                <th scope="col">TAREA</th>
                <th scope="col">HORAS</th>
                <th scope="col">ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {this.state.tareasFiltradas.length > 0 ? (
                this.state.tareasFiltradas.map(elemento => (
                  <tr key={elemento.id}>
                    <td>{elemento.id}</td>
                    <td>{elemento.documento}</td>
                    <td>{elemento.nombres}</td>
                    <td>{elemento.tarea}</td>
                    <td>{elemento.horas}</td>
                    <td>
                      <Button color='primary' onClick={() => this.mostrarModalEditar(elemento)}>Editar</Button>{' '}
                      <Button color='danger' onClick={() => this.eliminar(elemento)}>Eliminar</Button>
                    </td>
                  </tr>
                ))
              ) : (
                this.state.data.map(elemento => (
                  <tr key={elemento.id}>
                    <td>{elemento.id}</td>
                    <td>{elemento.documento}</td>
                    <td>{elemento.nombres}</td>
                    <td>{elemento.tarea}</td>
                    <td>{elemento.horas}</td>
                    <td>
                      <Button color='primary' onClick={() => this.mostrarModalEditar(elemento)}>Editar</Button>{' '}
                      <Button color='danger' onClick={() => this.eliminar(elemento)}>Eliminar</Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalInsertar}>
         
          <ModalHeader>
            <div>
              <h3>Insertar nueva tarea</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>Id</label>
              <input className='form-control' readOnly type='text' value={this.state.data.length + 1} />
            </FormGroup>
            <FormGroup>
              <label>Documento</label>
              <input className='form-control' name="documento" type='text' onChange={this.handleAdd} />
            </FormGroup>
            <FormGroup>
              <label>Nombres</label>
              <input className='form-control' name="nombres" type='text' onChange={this.handleAdd} />
            </FormGroup>
            <FormGroup>
              <label>Tarea</label>
              <input className='form-control' name="tarea" type='text' onChange={this.handleAdd} />
            </FormGroup>
            <FormGroup>
              <label>Horas</label>
              <input className='form-control' name="horas" type='text' onChange={this.handleAdd} />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.insertar}>Insertar</Button>
            <Button color="secondary" onClick={this.cerrarModalInsertar}>Cancelar</Button>
          </ModalFooter>
        </Modal>

        <Modal isOpen={this.state.modalEditar}>
          <ModalHeader>
            <div>
              <h3>Editar tarea</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <FormGroup>
              <label>Id</label>
              <input className='form-control' readOnly type='text' value={this.state.form.id} />
            </FormGroup>
            <FormGroup>
              <label>Documento</label>
              <input className='form-control' name="documento" type='text' onChange={this.handleAdd} value={this.state.form.documento} />
            </FormGroup>
            <FormGroup>
              <label>Nombres</label>
              <input className='form-control' name="nombres" type='text' onChange={this.handleAdd} value={this.state.form.nombres} />
            </FormGroup>
            <FormGroup>
              <label>Tarea</label>
              <input className='form-control' name="tarea" type='text' onChange={this.handleAdd} value={this.state.form.tarea} />
            </FormGroup>
            <FormGroup>
              <label>Horas</label>
              <input className='form-control' name="horas" type='text' onChange={this.handleAdd} value={this.state.form.horas} />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={() => this.editar(this.state.form)}>Editar</Button>
            <Button color="secondary" onClick={this.cerrarModalEditar}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}

export default Cuerpo
