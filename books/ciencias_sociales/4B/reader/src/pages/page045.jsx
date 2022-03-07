import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";
import "./page_045.css";

function Page045(props) {

  const pagina = "045";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-pidgey d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 align-items-center ptp-40 psp-30 pep-30">
              <div className="caja-seccion wp-160 hp-60 d-flex justify-content-center ptp-10 mtp-5 color-pidgey fsp-24 f-IntroRustG-Base">SESIÓN 10</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Nuestras relaciones cotidianas</div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-10 psp-60 pep-190 mbp-0 position-relative">
            {/* <div className="position-absolute top-50 start-100 translate-middle"><img src="images/page_045/mono.png" className="hp-130 msp--300 mtp-40" alt="" /></div> */}
            <div className="f-Ubuntu-B fsp-17 color-pidgey text-start lhp-20">Representamos nuestras relaciones cotidianas</div>
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">1</div>
              <div className="f-Ubuntu-R fsp-14 ptp-18 psp-10 text-start">A partir de las sesiones anteriores y mis experiencias, recorto y pego personajes de mi curso o colegio. Luego, representamos alguna situación de convivencia escolar.</div>
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} pagina={"93"} image={"images/page_" + pagina + "/revista.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
            </div>
          </div>

          <div className="ptp-10 position-relative">
            <div className="position-absolute top-0 start-100 translate-middle"><img src="images/page_045/mono.png" className="hp-130 msp--300 mtp--75" alt="" /></div>
            <img src="images/page_045/imagen_fondo.jpg" className="h-100" alt="" />
            {/* <div className="imagen-fondo w-100 h-100"></div> */}
          </div>

          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "white" }}>ABP &copy; SM</div>
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

export default Page045;
