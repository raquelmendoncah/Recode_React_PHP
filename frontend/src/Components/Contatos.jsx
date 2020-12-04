import React from 'react';
import './estilo.css';

const Contato = () => {
  const [comentarios, setComentarios] = React.useState([]);
  const [render, setRender] = React.useState(false);
  const [msg, setMsg] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [btn, setBtn] = React.useState('Ver Mensagens');

  React.useEffect(async () => {
    const url = 'http://localhost/React/backend/api2.php';
    const response = await fetch(url);
    setComentarios(await response.json());
  }, [render]);
  

  function registerComment(event) {
    event.preventDefault();

    let formData = new FormData(event.target);
    const url = 'http://localhost/React/backend/api3.php';

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((dados) => {
        setRender(!render);
        setMsg(dados);

        setTimeout(() => {
          setMsg(false);
        }, 1000);
      });
  }

  function showTable() {
    setShow(!show);
    if (show) {
      setBtn('Ver Mensagens');
    } else {
      setBtn('Ocultar Mensagens');
    }
  }

  return (
    <main className="container-fluid">
      <h2>Contato</h2>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <img
              src="./Imagens/Email.jpeg"
              alt="email-logo"
              style={{ width: '50px' }}
            />
            <p> contato@fullstackeletro.com</p>
          </div>
          <div className="col text-center">
            <img
              src="./Imagens/Whatsapp.jpeg"
              alt="whats-logo"
              style={{ width: '50px' }}
            />
            <p> (11)99999-9999</p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <form onSubmit={registerComment}>
        <label htmlFor="nome">Nome:</label>
        <input
          className="form-control"
          type="text"
          id="name"
          name="nome"
          placeholder="Digite aqui seu nome."
        />
        <br />
        <label htmlFor="msg">Mensagem:</label>
        <br />
        <textarea
          className="form-control"
          name="msg"
          id="msg"
          cols="90"
          rows="5"
          placeholder="Deixe aqui sua mensagem"
        ></textarea>
        <br />
        <button className="btn btn-outline-secondary btn-lg" type="submit">
          Enviar
        </button>
        <button
          className="btn btn-outline-secondary btn-lg ml-5"
          type="button"
          onClick={showTable}
        >
          {btn}
        </button>
      </form>

      {msg && (
        <div className="alert alert-success mx-auto mt-4 w-75" role="alert">
          Cadastro efetuado com sucesso!
        </div>
      )}

      {show && (
        <table className="table table-striped table-sm table-responsive-sm">
          <caption>Mensagens</caption>
          <thead>
            <tr>
              <th scope="col">Cliente</th>
              <th scope="col">Data</th>
              <th scope="col">Mensagem</th>
            </tr>
          </thead>
          <tbody>
            {comentarios.map((comentario) => {
              return (
                <tr key={comentario.id}>
                  <td>{comentario.nome}</td>
                  <td>{comentario.data}</td>
                  <td>{comentario.msg}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </main>
  );
};

export default Contatos;

function Contatos() {
  const [contato, setContato] = React.useState([]);
  const [render, setRender] = React.useState(false);
  const [msg, setMsg] = React.useState(false);

  React.useEffect(async () => {
    const url = 'http://desktop/Raquel%20REACT%20PHP/backend/api2.php';
    const response = await fetch(url);
    setContato(await response.json());
  }, [render]);

  function enviarComentario(event) {
    event.preventDefault();
    let formData = new FormData(event.target);

    const url = 'http://desktop/Raquel%20REACT%20PHP/backend/api3.php';

    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((dados) => {
        setRender(!render);
        setMsg(dados);
        setTimeout(() => {
          setMsg(false);
        }, 3000);
      });
  }

  const formatDate = (rawDate) => {
    const myDate = new Date(rawDate);
    const d = myDate.getDay();
    const mo = myDate.getMonth();
    // const y = myDate.getFullYear();
    const h = myDate.getHours();
    const mi = myDate.getMinutes();

    return `[ ${d}/${mo} às ${h}:${mi} ]`;
  };

  return (
    <>
      <div className="container">
        <div className="container m-5">
          <div className="row">
            <div className="col text-center">
              <img
                src="./Imagens/Email.jpeg"
                alt="email-logo"
                style={{ width: '50px' }}
              />
              <p> contato@fullstackeletro.com</p>
            </div>
            <div className="col text-center">
              <img
                src="./Imagens/Whatsapp.jpeg"
                alt="whats-logo"
                style={{ width: '50px' }}
              />
              <p> (11)99999-9999</p>
            </div>
          </div>
        </div>

        <form onSubmit={enviarComentario}>
          <div className="form-group">
            <h3>Mande seu feedback!!!</h3>
            <br />
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              className="form-control mb-3"
              name="nome"
              id="nome"
            />
            <br />
            <label htmlFor="msg">Mensagem:</label>
            <textarea
              className="form-control"
              name="msg"
              id="msg"
              rows="3"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-danger">
            Enviar
          </button>
        </form>
        {msg && (
          <div className="alert alert-danger mx-auto mt-5 w-100" role="alert">
            Mensagem enviada com sucesso!
          </div>
        )}
      </div>
      <div
        className="container p-4 mt-5"
        style={{ background: '#f29898', borderRadius: '20px' }}
      >
        <h3 className="font-weight-bold">Comentários</h3>

        {contato.map((element) => {
          return (
            <div key={element.id}>
              <div className="row">
                <div className="col">
                  <div className="card border-0 mx-auto mt-4">
                    <div className="card-header border-0">
                      <small className="text-danger">
                        {element.nome} - {formatDate(element.data)}:
                      </small>
                    </div>

                    <div
                      className="card-body"
                      style={{ background: '#f3e4e4' }}
                    >
                      {element.msg}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
