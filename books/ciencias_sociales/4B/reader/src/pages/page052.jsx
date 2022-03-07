import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import "./page_052.css";

function Page052(props) {

  const pagina = "052";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v1 hp-80 bgc-pidgey"></div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-0 psp-100 pep-60 mbp-0 position-relative">
            <div className="row justify-content-center">
              <div className="col-12 p-0 m-0 position-relative">
                <div className="position-absolute top-100 start-100 translate-middle visible-768"><img src="images/page_052/mono.png" className="hp-140 mep-40 mtp--130" alt="" /></div>
                <div className="position-absolute top-50 start-0 translate-middle"><img src="images/page_052/lapiz.png" className="hp-80 msp-0 mtp--90" alt="" /></div>
                <div className="bgc-jugador001 border-style-solid border-color-dark border-1 box-shadow-simple">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-330 contenedor-linea mep-10 msp-10" />
                </div>
              </div>
            </div>
          </div>

          <div className="ptp-10 psp-65 pep-40">
            {/* <div className="f-Ubuntu-B fsp-17 color-pidgey text-start lhp-20 psp-0">Preparamos la jornada de diálogo</div> */}
            <div className="d-flex">
              {/* <img className="hp-15 mtp-20 pep-10" src="images/page_047/i_g.svg" alt="" /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey pep-10">5</div>
              <div className="f-Ubuntu-R fsp-14 text-start pep-10 mtp-15">Respondo:</div>
              {/* <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image="images/page_033/revista.png" clasesImagen="hp-35 mtp-10" /> */}
            </div>
          </div>

          <div className="ptp-10 psp-65 pep-40">
          <div className="position-absolute top-50 start-50 translate-middle msp-10 mtp-145 visible-768 zindex-1"><img src={"images/page_" + pagina + "/espiral.svg"} className="wp-60 mtp-60" alt="" /></div>
            <div className="row d-flex mx-auto f-Ubuntu-L fsp-15 mbp-0 position-relative justify-content-between">
              
              <div className="position-absolute top-100 start-0 translate-middle msp-0 mtp-25 zindex-1"><img src={"images/page_" + pagina + "/posit.png"} className="wp-60 mtp--60 msp-0" alt="" /></div>
              <div className="col-sm-12 col-md-6 pbp-10">
                <div className="text-center w-100 border-1 border-style-solid border-color-saitama rounded-p-10">
                  <div className="rounded-set-6 hp-60 pep-20 psp-20 ptp-10 pbp-10 bgc-saitama d-flex justify-content-center align-items-center text-white p-2 f-Ubuntu-B">¿A qué acuerdo llegamos<br />como curso?</div>
                  <div className="psp-15 pep-25"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-330" /></div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 pbp-10">
                <div className="text-center w-100 border-1 border-style-solid border-color-bulma rounded-p-10">
                  <div className="rounded-set-6 hp-60 ptp-10 pbp-10 bgc-bulma d-flex justify-content-center align-items-center text-white p-2 f-Ubuntu-B">¿Estoy de acuerdo con<br />ese acuerdo? ¿Por qué?</div>
                  <div className="psp-20 pep-15"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-330" /></div>
                </div>
              </div>
            </div>
          </div>

          <div className="ptp-10 psp-20 pep-140 pbp-60">
            <div className="d-flex">
              <img className="hp-15 mtp-20 pep-10" src="images/page_052/g.svg" alt="" />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey pep-10">6</div>
              <div className="f-Ubuntu-R fsp-14 text-start pep-10 mtp-15">Creamos un documento en el que exponemos los desafíos de nuestro curso en torno a la convivencia y nuestras propuestas. Utilizamos el material que nos entregarán..</div>
              <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image="images/page_052/revista.svg" clasesImagen="hp-35 mtp-10" />
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

export default Page052;
