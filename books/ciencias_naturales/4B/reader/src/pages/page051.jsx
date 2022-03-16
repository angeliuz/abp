import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import "./page_051.css";

function Page051(props) {

  const pagina = "051";
  var indexInput = 0;

  return (
      <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-20">
          <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
                {/* BEGIN CABECERA VERSIÓN 2 */}
                <div className="cabecera-v1 hp-80 bgc-pidgey"></div> 
                {/* END CABECERA VERSIÓN 2 */}

              <div className="ptp-10 psp-100 pep-60 mbp-10">
                <div className="d-flex">
                  <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">3</div>
                  <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start w-85">Como curso, realizamos una votación para acordar si los simulacros serán o no grabados por nuestro profesor.</div>
                </div>
              </div>

              <div className="psp-140 pep-120">
                <div className="row position-relative">
                  <div className="position-absolute top-50 start-0 translate-middle"><img src="images/page_051/botones.png" className="wp-60 mep-50 mtp--80" alt=""/></div>
                  <div className="position-absolute top-100 start-100 translate-middle"><img src="images/page_051/profe.png" className="wp-70 msp-50 mbp-180" alt=""/></div>
                  <div className="col-6"><img src="images/page_051/caja_verde.svg" className="w-100" alt="" /></div>
                  <div className="col-6"><img src="images/page_051/caja_naranja.svg" className="w-100" alt="" /></div>
                </div>
              </div>

              <div className="ptp-10 psp-100 pep-60 mbp-10">
                <div className="d-flex">
                  <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">4</div>
                  <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start w-85">¡A presentar! Tomo apuntes de lo que me parece interesante de cada emergencia simulada.</div>
                </div>
              </div>

            <div className="psp-140 pep-120">
              <div className="w-100 psp-40 ptp-20 pbp-20 pep-15 text-left bgc-white border-style-solid border-1 border-color-muted position-relative box-shadow-simple">
                <div className="position-absolute top-100 start-100 translate-middle"><img src="images/page_051/agenda.png" className="wp-100 msp--60 mtp-20" alt=""/></div>
                <div className="position-absolute top-50 start-0 translate-middle"><img src="images/page_051/img_011.png" className="wp-70 msp-15" alt=""/></div>
                <div className="d-flex align-items-center">
                  <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 lhp-35 contenedor-linea w-100 min-hp-320" />
                </div>
              </div>
            </div>

            <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
              <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
              <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
            </div>

            <div className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>
              <div className="col-1 col-md-2 p-0 m-0 position-relative">
                <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
                <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
                <div className="w-100 hp-25 bgc-goten"></div>
              </div>
              <div className="col-1 col-md-2 p-0 m-0 position-relative">
                <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
                <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
                <div className="w-100 hp-25 bgc-bulma"></div>
              </div>
              <div className="col-1 col-md-2 p-0 m-0 position-relative">
                <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
                <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
                <div className="w-100 hp-25 bgc-android18"></div>
              </div>
              <div className="col-7 col-md-2 p-0 m-0 position-relative">
                <img src="images/rotulo_experimentacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
                <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
                <div className="w-100 hp-25 bgc-pidgey"></div>
              </div>
              <div className="col-1 col-md-2 p-0 m-0 position-relative">
                <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
                <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
                <div className="w-100 hp-25 bgc-saitama"></div>
              </div>
              <div className="col-1 col-md-2 p-0 m-0 position-relative">
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

export default Page051;
