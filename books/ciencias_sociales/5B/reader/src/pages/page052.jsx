import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_052.css";

function Page052(props) {

  const pagina = "052";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          <div className="cabecera-v1 hp-80 bgc-pidgey">
          </div>

          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_052/g.svg" alt="" />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">2</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Junto con mi grupo determino cómo asegurar los siguientes aspectos de la entrevista.
              </div>
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="d-flex msp-60 mep-60 mbp-0">

            <div className="row m-0 p-2 rounded-p-20 w-100">
              <div className="col-md-12 col-lg-12 position-relative">
                <div className="position-absolute top-100 start-0 translate-middle wp-100 msp-20 mtp--50 visible-768"><img src="images/page_052/img_004.png" className="wp-55" /></div>
                <div className="position-absolute top-0 start-50 translate-middle wp-100 mtp-30 msp-130 visible-768"><img src="images/page_052/img_002.png" className="wp-100" /></div>
                <div className="d-flex mbp-20 mtp-10 w-100 padding-box-35-1">
                  <div className="p-2 min-hp-100 w-100">
                    <div className="d-flex flex-column bgc-bison exterior-caja-v1 border-style-solid border-color-dark border-2 w-100 p-2 f-Ubuntu-L fsp-15 mbp-20">
                      <div className="d-flex interior-caja-v1 bgc-white text-start min-hp-0">
                        <div className="w-100 text-center">
                          <span className="f-Ubuntu-M">¿Cómo registrar adecuadamente?</span>
                          <br />
                          <span className="fsp-13">
                            ¿Tenemos un aparato de grabación que funcione?<br /> ¿Podremos hacer registros gráficos?
                          </span>
                        </div>
                      </div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-320" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-12 position-relative">
                <div className="position-absolute top-100 start-50 translate-middle wp-100 msp--200 mtp--100 visible-768"><img src="images/page_052/img_005.png" className="wp-120" /></div>
                <div className="position-absolute top-0 start-100 translate-middle wp-100 mtp--75 msp--130 visible-768"><img src="images/page_052/img_003.png" className="wp-130" /></div>
                <div className="d-flex mbp-20 mtp-10 w-100 padding-box-35-2">
                  <div className="p-2 min-hp-100 w-100">
                    <div className="d-flex flex-column bgc-bison exterior-caja-v1 border-style-solid  border-color-dark border-2 w-100 p-2 f-Ubuntu-L fsp-15 mbp-20">
                      <div className="d-flex interior-caja-v1 bgc-white text-start min-hp-0">
                        <div className="w-100 text-center">
                          <span className="f-Ubuntu-M">¿El espacio o lugar es adecuado?</span>
                          <br />
                          <span className="fsp-13">
                            ¿El espacio permite una conversación cómoda, segura y tranquila? Si es virtual, ¿la persona entrevistada puede acceder?
                          </span>
                        </div>
                      </div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-320" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_052/i_g.svg" alt="" /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">3</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Simulo la entrevista en grupo y compruebo que todo funcione adecuadamente (grabadora, plataforma web, entre otras).
              </div>
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="ptp-10 container-titulo-global mbp-80">
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_052/i_g.svg" alt="" /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">4</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                ¡Realizo las entrevistas!
              </div>
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
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
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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

export default Page052;
