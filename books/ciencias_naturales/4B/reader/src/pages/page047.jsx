import React from "react";
import InputBox from "../components/InputBox";
// import ModalVideo from "../components/ModalVideo";
import "./page_047.css";

function Page047(props) {

  const pagina = "047";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v1 hp-80 bgc-pidgey"></div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-10 psp-60 pep-60 mbp-0">
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_047/g_i.svg" alt="" />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">6</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start w-80">Como equipo, pensamos en la emergencia que debemos simular y describimos las acciones que debería realizar la brigada.</div>
            </div>
          </div>

          <div className="ptp-10 psp-130 pep-80 mbp-0">
            <div className="row mbp-10 position-relative">
              <div className="position-absolute top-0 start-100 translate-middle"><img src="images/page_047/mono.png" className="wp-110 mep-60 mtp--100" alt="" /></div>
              <div className="position-absolute top-0 start-0 translate-middle"><img src="images/page_047/mochila.png" className="wp-65 msp--40 mtp-80" alt="" /></div>
              <div className="d-flex border-style-solid border-color-goten border-3 p-0 m-0">
                <div className="mnw-30 bgc-genos p-3 border-right-style-solid border-color-goten border-3 d-flex align-items-center f-Ubuntu-L fsp-15">Antes de una emergencia de este tipo debemos…</div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-220 mnw-65 mep-10 msp-10" />
              </div>
            </div>
          </div>

          <div className="ptp-10 psp-130 pep-80 mbp-0">
            <div className="row mbp-10 position-relative">
              <div className="d-flex border-style-solid border-color-bulma border-3 p-0 m-0">
                <div className="mnw-30 bgc-piccolo p-3 border-right-style-solid border-color-bulma border-3 d-flex align-items-center f-Ubuntu-L fsp-15">Durante una emergencia de este tipo debemos…</div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 mnw-65 min-hp-220 mep-10 msp-10" />
              </div>
            </div>
          </div>

          <div className="ptp-10 psp-130 pep-80 mbp-80">
            <div className="row mbp-10 position-relative">
              
              <div className="d-flex border-style-solid border-color-android18 border-3 p-0 m-0 position-relative">
              <div className="position-absolute top-100 start-100 translate-middle"><img src="images/page_047/nina.png" className="wp-50 mbp-90 msp-30" alt="" /></div>
                <div className="mnw-30 bgc-azuka p-3 border-right-style-solid border-color-android18 border-3 d-flex align-items-center f-Ubuntu-L fsp-15">Después de una emergencia de este tipo debemos…</div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 mnw-65 min-hp-220 mep-10 msp-10" />
              </div>
            </div>
          </div>

          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
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

export default Page047;
