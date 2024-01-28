import React from "react";
const App = () => {
  return (
    <>
      <div className='row'>
        <div className='col-xs-12 col-md-8 col-lg-6'>
          <div className='card card-succes'>
            <div className='card-header bg-orange'>
              <h3 className='card-title'>Hola Mundo</h3>
            </div>
            <div className='card-body'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <div className='card-footer'>
              <button className='btn bg-teal btn-lg text-white float-right'>Aceptar</button>
              <button className='btn bg-success btn-lg text-black'>Cancelar</button>
            </div>
          </div>
        </div>
        <div className='col-xs-12 col-md-8 col-lg-6'>
        <div class="alert alert-danger alert-dismissible">
                  <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                  <h5><i class="icon fas fa-ban"></i> Alert!</h5>
                  Danger alert preview. This alert is dismissable. A wonderful serenity has taken possession of my
                  entire
                  soul, like these sweet mornings of spring which I enjoy with my whole heart.
                </div>
        </div>
      </div>

    </>
  )
}

export default App;
