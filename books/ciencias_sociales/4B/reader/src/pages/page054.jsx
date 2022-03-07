import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_054.css";

function Page054(props) {

  const pagina = "054";
  var indexInput = 0;
  const etapa = "4"
  const background = "bgc-pidgey";
  const color = "color-pidgey";
  const borderColor = "border-color-pidgey"
  const borderColorTabla = "border-color-pantro"
  const bgc_cajas = "bgc-pantro";


  return (

    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>

          <div className="ptp-50 psp-70 pep-60 mbp-0 position-relative">
            <div className="row">
              <div className="col-12 p-2 m-0 position-relative">
                <div className="rounded-p-10 bgc-white border-style-solid border-color-bulma border-1">
                  <div className="position-relative f-Ubuntu-R fsp-14 p-2 bgc-hotaru rounded-ts-be-10 lh-sm min-hp-45 d-flex align-items-center justify-content-start text-start wp-320">Como equipo, creemos que lo importante para una buena convivencia en nuestro curso es:</div>
                  <div className="position-absolute top-0 start-50 visible-768"><img src="images/page_054/lapiz.png" className="hp-80 msp-0 mtp--20" alt="" /></div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-190 mep-10 msp-10" />
                </div>
              </div>

              <div className="col-12 p-2 m-0 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle"><img src="images/page_054/ronda.png" className="hp-100 mep-70 mtp-0" alt="" /></div>
                <div className="rounded-p-10 bgc-white border-style-solid border-color-saitama border-1">
                  <div className="f-Ubuntu-R fsp-14 p-2 bgc-bobafett rounded-ts-be-10 lh-sm min-hp-45 d-flex align-items-center justify-content-start text-start wp-320">Como curso, acordamos que para mejorar nuestra convivencia:</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-190 mep-10 msp-10" />
                </div>
              </div>
            </div>
          </div>

          <div className="ptp-10 psp-0 pep-60 mbp-0 position-relative">
            <div className="mbp-5 psp-50 f-pixilate-bold fsp-18 lh-sm text-start">¿Cómo vamos?</div>
            <div className="row psp-50">
              <div className="col-10 border-style-solid border-color-white border-2 p-1 bgc-genos">
                <div className="d-flex flex-wrap w-100 align-items-center titulo-linea psp-60">
                  <img src={"images/generales/flecha_e1.svg"} className="mep-5 wp-15" alt="" />
                  <span className="w-24 f-Ubuntu-L fsp-14 text-start">Lo que más nos gustó de esta etapa fue:</span>
                </div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="msp-80 mep-10 text-start flex-grow-1 contenedor-linea lh-sm min-hp-80" />
              </div>
              <div className="col-11 border-style-solid border-color-white border-2 p-1 bgc-hotaru">
                <div className="d-flex flex-wrap w-100 align-items-center titulo-linea psp-60">
                  <img src={"images/generales/flecha_e2.svg"} className="mep-5 wp-15" alt="" />
                  <span className="w-24 f-Ubuntu-L fsp-14 text-start">Lo mejor de la jornada de diálogo fue:</span>
                </div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="msp-80 mep-10 text-start flex-grow-1 contenedor-linea lh-sm min-hp-80" />
              </div>
              <div className="col-12 border-style-solid border-color-white border-2 p-1 bgc-azuka position-relative">
                <div className="position-absolute top-0 start-100 translate-middle"><img src="images/page_054/mono.png" className="hp-230 mep-70 mbp-235" alt="" /></div>
                <div className="d-flex flex-wrap w-100 align-items-center titulo-linea psp-60">
                  <img src={"images/generales/flecha_e3.svg"} className="mep-5 wp-15" alt="" />
                  <span className="w-24 f-Ubuntu-L fsp-14 text-start">Lo que se puede mejorar de la jornada de diálogo es:</span>
                </div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="msp-80 mep-10 text-start flex-grow-1 contenedor-linea lh-sm min-hp-80" />
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

        </div>
      </div>
    </div>

  );
}

export default Page054;
