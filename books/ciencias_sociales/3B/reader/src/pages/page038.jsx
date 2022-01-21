import React from "react";
import InputBox from "../components/InputBox";
// import ModalVideo from "../components/ModalVideo";
import "./page_038.css";

function Page038(props) {

  const pagina = "038";
  var indexInput = 0;

  return (
      <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-20">
          <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
                {/* BEGIN CABECERA VERSIÓN 2 */}
                <div className="cabecera-v1 hp-80 bgc-pidgey"></div> 
                {/* END CABECERA VERSIÓN 2 */}

            <div className="ptp-10 psp-60 mbp-0 contenedor-pagina">
              <div className="f-Ubuntu-B psp-50 fsp-20 color-pidgey text-start lhp-20">Valoramos la diversidad de nuestra comunidad</div>
              <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_038/i_g.svg" alt="" />
                <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">2</div>
                <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start">Una forma de respetar y tolerar la diversidad que existe en nuestra escuela es…</div>
              </div>
            </div>

            <div className="ptp-10 psp-100 pep-80 mbp-0 contenedor-pagina">
              <div className="col-md-12 col-lg-12 mbp-10 position-relative">
                <div className="mbp-20 mtp-10 msp-20 mep-20">
                  <div className="bloque-respuesta linea1 bgc-jugador001 hp-540 p-2">
                    <div className="f-Ubuntu-L fsp-15 p-1 text-center">Escribimos diez acciones de respeto y tolerancia a la diversidad.</div>
                    <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-500" />
                  </div>
                </div>
              </div>
            </div>

            <div className="ptp-10 psp-110 mbp-0 contenedor-pagina position-relative">
            <div className="position-absolute bottom-0 end-0"><img src="images/page_038/mono.png" className="hp-140 pep-80" alt=""/></div>
              <div className="d-flex">
                <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">3</div>
                <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start w-60">Elaboramos un decálogo de principios de respeto y tolerancia a la diversidad que presentaremos en nuestra Fiesta de la Diversidad.</div>
              </div>
            </div>

            <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
              <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
              <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
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
              <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
                <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
                <div className="w-100 hp-25 bgc-android18"></div>
              </div>
              <div className="col-7 col-sm-2 p-0 m-0 position-relative">
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

export default Page038;
