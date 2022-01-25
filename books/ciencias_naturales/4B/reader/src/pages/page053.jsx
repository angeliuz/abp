import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import "./page_053.css";

function Page053(props) {

  const pagina = "053";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v1 hp-80 bgc-pidgey"></div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-10 psp-100 pep-60 mbp-0">
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">3</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start w-85">Comparto con mi equipo los apuntes que tomé de los simulacros y escribimos una conclusión general de cada emergencia.</div>
            </div>
          </div>

          <div className="ptp-10 psp-130 pep-80 mbp-100">
            <div className="row mbp-10 bgc-ryu rounded-p-5 p-3 bloque-respuesta">
              <div className="col-12 p-1 m-0 position-relative">
                <div className="position-absolute top-0 start-0"><img src="images/page_053/pincho.svg" className="wp-35 msp--15 mtp--10" alt="" /></div>
                <div className="position-absolute top-0 start-100 translate-middle"><img src="images/page_053/fotos.png" className="wp-80 mep-10 mtp-0" alt="" /></div>
                <div className="bgc-white rounded-p-5 p-2 border-style-solid border-color-goten border-2">
                  <div className="f-Ubuntu-L fsp-15 p-1 text-start mtp-5">Ocurre un sismo mientras estamos en la sala de clases.</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                </div>
              </div>

              <div className="col-12 p-1 m-0 position-relative">
                <div className="position-absolute top-0 start-0"><img src="images/page_053/pincho.svg" className="wp-35 msp--15 mtp--10" alt="" /></div>
                <div className="bgc-white rounded-p-5 p-2 border-style-solid border-color-bulma border-2">
                  <div className="f-Ubuntu-L fsp-15 p-1 text-start mtp-5">Un estudiante se cae al correr por las escaleras durante el recreo.</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                </div>
              </div>

              <div className="col-12 p-1 m-0 position-relative">
                <div className="position-absolute top-0 start-0"><img src="images/page_053/pincho.svg" className="wp-35 msp--15 mtp--10" alt="" /></div>
                <div className="bgc-white rounded-p-5 p-2 border-style-solid border-color-saitama border-2">
                  <div className="f-Ubuntu-L fsp-15 p-1 text-start mtp-5">Se rompe un material de vidrio durante un experimento científico.</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                </div>
              </div>

              <div className="col-12 p-1 m-0 position-relative">
                <div className="position-absolute top-0 start-0"><img src="images/page_053/pincho.svg" className="wp-35 msp--15 mtp--10" alt="" /></div>
                <div className="position-absolute top-50 start-0"><img src="images/page_053/pito.png" className="wp-80 msp--60 mtp-0" alt="" /></div>
                <div className="bgc-white rounded-p-5 p-2 border-style-solid border-color-pidgey border-2">
                  <div className="f-Ubuntu-L fsp-15 p-1 text-start mtp-5">Hay una amago de incendio en la sala de profesores.</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                </div>
              </div>
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

export default Page053;
