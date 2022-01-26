import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_038.css";

function Page038(props) {

  const pagina = "038";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          <div className="cabecera-v1 hp-80 bgc-android18">
          </div>

          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_038/img_002.svg" alt=""  /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">3</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">A partir del ejemplo, creamos fichas con la información de las entrevistas.</div>
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>


          <div className="ptp-10 psp-100 pep-60 mbp-0 position-relative">
            <div className="row justify-content-center">
              <div className="col-12 p-0 m-0 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle"><img src="images/page_051/camara.png" className="hp-80 mep-40 mtp--40" alt="" /></div>
                <div className="position-absolute top-50 start-0 translate-middle"><img src="images/page_051/acuarela.png" className="hp-60 msp--50 mtp-160" alt="" /></div>
                <div className="bgc-jugador001 border-style-solid border-color-dark border-1 box-shadow-simple">
                  <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                    <p>Nombre del entrevistado o entrevistada:</p>
                    <p>Sergio Alfredo López Mamani.</p>
                    <p>Edad: 10 años.</p>
                    <p>Fecha de nacimiento: 28 de diciembre de 2012.</p>
                    <p>Curso: 4ºB</p>
                    <p>Escuela: Colegio Nueva Esperanza..</p>
                    <p>En sus tiempos libres le gusta: escuchar música, jugar fútbol,
                    visitar a su abuela Gladys.</p>
                    <p>Su asignatura favorita es: Ciencias Naturales y Educación Física.</p>
                    <p>Su comida favorita es: arroz con huevos revueltos.</p>
                    <p>Para mejorar la convivencia escolar, cree que: es importante respetarnos mutuamente y entender a los demás.</p>
                    <p>¿Por qué es importante tener una buena convivencia escolar?: porque
                    así podemos relacionarnos mejor, solucionar de mejor manera nuestras
                    diferencias y llevarnos bien.</p>
                    </div>
                  {/* <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 hp-35 min-hp-330 contenedor-linea mep-10 msp-10" /> */}
                </div>
              </div>
            </div>
          </div>

          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_038/img_002.svg" alt=""  /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">4</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Reflexiono sobre lo que he realizado hoy.</div>
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="d-flex global-margin mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
              <div className="row p-0 m-0 w-100">
                  <div className="col-12 p-0 m-0 position-relative">
                      
                  </div>
              </div>
          </div>
          
          {/* PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
              ABP &copy; SM
            </div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          <div className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_investigacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_difusion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
              <div className="w-100 hp-25 bgc-pikachu"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Page038;
