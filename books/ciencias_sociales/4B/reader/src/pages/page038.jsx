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


          <div className="ptp-10 psp-80 pep-80 mbp-0 position-relative">
            <div className="row justify-content-center">
              <div className="col-12 p-0 m-0 position-relative">
                <div className="position-absolute top-50 start-100 translate-middle  mtp--30 visible-768"><img src="images/page_038/img_003.png" className=" " alt="" /></div>
                <div className="position-absolute top-0 start-100 translate-middle msp--60 mtp-90 visible-768"><img src="images/page_038/img_002.png" className=" wp-200" alt="" /></div>
                <div className="position-absolute top-0 start-0 translate-middle msp-50"><img src="images/page_038/img_001.svg" className="wp-180 " alt="" /></div>
                <div className="bgc-jugador001 border-style-solid border-color-dark border-1 box-shadow-simple ptp-30">
                  <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                    <p className="color-saitama">Nombre del entrevistado o entrevistada:</p>
                    <p>Sergio Alfredo López Mamani.</p>
                    <p><span className="color-saitama">Edad:</span> 10 años.</p>
                    <p><span className="color-saitama">Fecha de nacimiento:</span> 28 de diciembre de 2012.</p>
                    <p><span className="color-saitama">Curso:</span> 4ºB</p>
                    <p><span className="color-saitama">Escuela:</span> Colegio Nueva Esperanza..</p>
                    <p><span className="color-saitama">En sus tiempos libres le gusta:</span> escuchar música, jugar fútbol,
                      visitar a su abuela Gladys.</p>
                    <p><span className="color-saitama">Su asignatura favorita es:</span> Ciencias Naturales y Educación Física.</p>
                    <p><span className="color-saitama">Su comida favorita es:</span> arroz con huevos revueltos.</p>
                    <p><span className="color-saitama">Para mejorar la convivencia escolar, cree que:</span> es importante respetarnos mutuamente y entender a los demás.</p>
                    <p><span className="color-saitama">¿Por qué es importante tener una buena convivencia escolar?:</span> porque
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

          <div className="d-flex  mtp-0 mbp-0 psp-80 pep-80 ptp-0 pbp-100">
            <div className="row  m-0 w-100 bgc-loki rounded-p-10">
              <div className="col-12 p-0 m-0 position-relative">
                <div className="row psp-10 pep-10">
                  <div className="col-12 f-pixilate-bold fsp-18 ptp-10">¿Qué estoy aprendiendo?</div>
                  <div className="col-md-6 col-12 position-relative">
                    <div className="position-absolute top-50 start-0 translate-middle msp--10 mtp-0 visible-768"><img src="images/page_038/img_004.png" className=" " alt="" /></div>
                    <div className="position-absolute top-50 start-100 translate-middle msp-20 mtp-0 visible-768"><img src="images/page_038/img_005.svg" className="hp-300 " alt="" /></div>

                    <div className="d-flex mbp-20 mtp-10 w-100">
                      <div className="p-2 
                       w-100 border-style-solid border-2 rounded-p-10 border-color-android18 bgc-white">

                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-300" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-1 col-12 "></div>
                  <div className="col-md-5 col-12 ">


                    <div className="col-md-12 col-12 mbp-10">
                      <div className="px-3 border-style-solid border-2 border-color-android18 bgc-white rounded-p-20">

                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70"
                        />
                        <div className="f-pixilate-bold fsp-16 ptp-15">
                          Lo puedo aplicar en casa
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12 col-12 mbp-10 ">
                      <div className="px-3 border-style-solid border-2 bgc-white border-color-android18 rounded-p-20">

                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
                        <div className="f-pixilate-bold fsp-16 ptp-15">
                          Lo puedo aplicar con amigos
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12 col-12 mbp-10 ">
                      <div className="px-3 border-style-solid border-2 border-color-android18 bgc-white rounded-p-20">

                        <InputBox
                          id={"p" + pagina + "_input" + (indexInput += 1)}
                          className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70"
                        />
                        <div className="f-pixilate-bold fsp-16 ptp-15">
                          Lo puedo aplicar en clases
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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
