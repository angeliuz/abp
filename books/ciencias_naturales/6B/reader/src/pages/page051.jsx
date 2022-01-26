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
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-pidgey d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 align-items-center ptp-40 psp-30 pep-30">
              <div className="caja-seccion wp-160 hp-60 d-flex justify-content-center ptp-10 mtp-5 color-pidgey fsp-24 f-IntroRustG-Base">SESIÓN 12</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Una conversación necesaria</div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-0 psp-65 pep-40">
            {/* <div className="f-Ubuntu-B fsp-17 color-pidgey text-start lhp-20 psp-0">Preparamos la jornada de diálogo</div> */}
            <div className="d-flex">
              {/* <img className="hp-15 mtp-20 pep-10" src="images/page_047/i_g.svg" alt="" /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey pep-10">1</div>
              <div className="f-Ubuntu-R fsp-14 text-start pep-10 mtp-15 w-85">Leo el acuerdo de mi equipo en la página 48. ¿Cuál era el diagnóstico que elaboramos sobre la convivencia en el curso?</div>
              {/* <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image="images/page_033/revista.png" clasesImagen="hp-35 mtp-10" /> */}
            </div>
          </div>

          <div className="psp-90 pep-50 mbp-0">
            <div className="row">
              <div className="col-12 position-relative ptp-15">
                <div className="position-absolute top-0 start-50"><img src="images/page_051/pincho.svg" className="hp-45 mtp--10" alt="" /></div>
                <div className="position-absolute top-0 start-100"><img src="images/page_051/fotos.png" className="hp-70 msp--70 mtp--40" alt="" /></div>
                <div class="p-3 box-shadow-simple border-1 bgc-white">
                  <div className="pt-0 flex-grow-1"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-140" /></div>
                </div>
              </div>
            </div>
          </div>

          <div className="ptp-20 psp-65 pep-40">
            {/* <div className="f-Ubuntu-B fsp-17 color-pidgey text-start lhp-20 psp-0">Preparamos la jornada de diálogo</div> */}
            <div className="d-flex">
              {/* <img className="hp-15 mtp-20 pep-10" src="images/page_047/i_g.svg" alt="" /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey pep-10">2</div>
              <div className="f-Ubuntu-R fsp-14 text-start pep-10 mtp-15">Leo en la revista cómo tomar notas.</div>
              <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image="images/page_051/revista.svg" clasesImagen="hp-30 mtp-10" />
            </div>
          </div>

          <div className="ptp-20 psp-65 pep-40">
            <div className="f-Ubuntu-B fsp-17 color-pidgey text-start lhp-20 psp-0">Participamos como equipo en la jornada de diálogo</div>
            <div className="d-flex">
              {/* <img className="hp-15 mtp-20 pep-10" src="images/page_047/i_g.svg" alt="" /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey pep-10">3</div>
              <div className="f-Ubuntu-R fsp-14 text-start pep-10 mtp-15">Realizamos la jornada en torno a la pregunta: ¿Qué desafíos como curso tenemos en torno a la buena convivencia y cómo podemos solucionarlos?</div>
              {/* <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image="images/page_050/revista.svg" clasesImagen="hp-30 mtp-10" /> */}
            </div>
          </div>

          <div className="ptp-10 psp-65 pep-40">
            {/* <div className="f-Ubuntu-B fsp-17 color-pidgey text-start lhp-20 psp-0">Preparamos la jornada de diálogo</div> */}
            <div className="d-flex">
              {/* <img className="hp-15 mtp-20 pep-10" src="images/page_047/i_g.svg" alt="" /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey pep-10">4</div>
              <div className="f-Ubuntu-R fsp-14 text-start pep-10 mtp-15 w-80">Durante la jornada, tomo nota de las intervenciones de mis compañeros.</div>
              {/* <ModalVideo id={"p" + pagina + "_video" + (indexInput += 1)} image="images/page_033/revista.png" clasesImagen="hp-35 mtp-10" /> */}
            </div>
          </div>

          <div className="ptp-10 psp-100 pep-60 mbp-0 position-relative">
            <div className="row justify-content-center">
              <div className="col-12 p-0 m-0 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle"><img src="images/page_051/camara.png" className="hp-80 mep-40 mtp--40" alt="" /></div>
                <div className="position-absolute top-50 start-0 translate-middle"><img src="images/page_051/acuarela.png" className="hp-60 msp--50 mtp-160" alt="" /></div>
                <div className="bgc-jugador001 border-style-solid border-color-dark border-1 box-shadow-simple">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 hp-35 min-hp-330 contenedor-linea mep-10 msp-10" />
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

export default Page051;
