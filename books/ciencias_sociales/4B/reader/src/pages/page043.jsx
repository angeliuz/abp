import React from "react";
import InputBox from "../components/InputBox";
// import ModalVideo from "../components/ModalVideo";
import "./page_043.css";

function Page043(props) {

  const pagina = "043";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-pidgey d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 align-items-center ptp-40 psp-30 pep-30">
              <div className="caja-seccion wp-160 hp-60 d-flex justify-content-center ptp-10 mtp-5 color-pidgey fsp-24 f-IntroRustG-Base">SESIÓN 9</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¡A trabajar con nuestras fichas!</div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-10 psp-60 mbp-0">
            <div className="f-Ubuntu-B fsp-17 color-pidgey text-start lhp-20">Recordamos</div>
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">1</div>
              <div className="f-Ubuntu-R fsp-14 ptp-18 psp-10 text-start">Completo:</div>
            </div>
          </div>

          <div className="ptp-10 psp-135 pep-80">
            <div className="row rounded-p-10 bgc-sid position-relative">
              <div className="position-absolute top-50 start-50"><img src="images/page_043/lapiz.png" className="hp-80 mtp--60" alt="" /></div>
              <div className="col-12 col-md-6 p-0">
                <div className="w-100 p-2 m-0 position-relative">
                  <div className="rounded-p-10 p-3 bgc-white">
                    <div className="f-Ubuntu-L fsp-14 text-start w-100">Lo que hice en la última sesión fue:</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 p-0">
                <div className="w-100 p-2 m-0 position-relative">
                  <div className="rounded-p-10 p-3 bgc-white">
                    <div className="f-Ubuntu-L fsp-14 text-start w-100">Esto me servirá para:</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                  </div>
                </div>
              </div>
              <div className="col-12 p-0">
                <div className="w-100 p-2 m-0 position-relative">
                  <div className="rounded-p-10 p-3 bgc-white">
                    <div className="f-Ubuntu-L fsp-14 text-start w-100">Con mi equipo iniciamos ahora el momento de:</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ptp-10 psp-60 pep-50 mbp-0">
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">2</div>
              <div className="f-Ubuntu-R fsp-14 ptp-18 psp-10 text-start">Reflexiono sobre los avances de mi aprendizaje.</div>
            </div>
          </div>

          <div className="psp-90 pep-50 mbp-60">
            <div className="row position-relative">
              <div className="position-absolute top-50 start-50 visible-768"><img src="images/page_043/mono.png" className="hp-250 msp--170" alt="" /></div>
              <div className="col-12 col-md-6 position-relative ptp-15 rota-1">
                <div className="position-absolute top-0 start-100"><img src="images/page_043/pincho.svg" className="hp-45 msp--90" alt="" /></div>
                <div className="position-absolute top-100 start-0 translate-middle"><img src="images/page_043/hoja.png" className="hp-60 mtp--80" alt="" /></div>
                <div class="p-3 box-shadow-simple border-1 bgc-white">
                  <div className="f-Ubuntu-L fsp-14 text-center">¿Qué pensaba antes sobre la<br />convivencia escolar?</div>
                  <div className="pt-0 flex-grow-1"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-140" /></div>
                </div>
              </div>
              <div className="col-12 col-md-6 position-relative ptp-15 rota-2">
                <div className="position-absolute top-0 start-50"><img src="images/page_043/pincho.svg" className="hp-45 mtp--10" alt="" /></div>
                <div className="position-absolute top-100 start-0 translate-middle visible-768"><img src="images/page_043/flecha_arriba.svg" className="hp-65 mtp-40 msp-30" alt="" /></div>
                <div class="p-3 box-shadow-simple border-1 bgc-white">
                  <div className="f-Ubuntu-L fsp-14 text-center">¿Qué pienso ahora sobre la<br />convivencia escolar?</div>
                  <div className="pt-0 flex-grow-1"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-140" /></div>
                </div>
              </div>
              <div className="col-12 col-md-6 position-relative ptp-15 rota-3">
                <div className="position-absolute top-0 start-0"><img src="images/page_043/pincho.svg" className="hp-45 msp-0" alt="" /></div>
                <div className="position-absolute top-0 start-0 translate-middle visible-768"><img src="images/page_043/flecha_abajo.svg" className="hp-50 mtp-0 msp-100" alt="" /></div>
                <div class="p-3 box-shadow-simple border-1 bgc-white">
                  <div className="f-Ubuntu-L fsp-14 text-center">¿Qué he pensado sobre la convivencia<br />escolar durante las entrevistas?</div>
                  <div className="pt-0 flex-grow-1"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-140" /></div>
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

export default Page043;
