import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";

import "./page_073.css";

function Page073(props) {

  const pagina = "073";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-pikachu d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className="caja wp-150 text-center fsp-24 f-IntroRustG-Base color-pikachu">SESIÓN 16</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¿Qué aprendimos?</div>
            </div>
            <div className="d-flex contenedor-cabecera-v2 ptp-10 psp-30 pep-30 align-self-center justify-content-between w-90">

            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}
          <div className=" container-titulo-global mbp-∫0">
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_033/img_002.svg" alt=""  /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pikachu">1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Trabajo en la revista y reflexiono sobre lo que aprendí en este proyecto.</div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.jpg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-1" /> */}
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image="images/page_073/img_002.svg" clasesImagen="hp-40 text-center mtp-10 mbp-10 " className="p-0 px-0" />
            </div>
          </div>
          <div className="cb-contenedor-dos justify-content-center pe-2 ps-2 pbp-15">
            <div className="w-100 position-relative">
              <img src="images/page_073/img_004.png" className="cb-notamorada-p73" alt=""></img>
              <div className="bgc-kazuha cb-outline-p73 p-3 f-Ubuntu-L fsp-15 border-color-garou cb-caja1" >
                <p className="cb-psp2 color-pikachu fw-700">¿Qué aprendí?</p>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
              </div>
              <div className="bgc-marcianos cb-outline-p73 p-3 f-Ubuntu-L fsp-15 border-color-garou cb-caja2-p73" >
                <p className="color-sektor fw-700">¿Con quién aprendí?</p>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
              </div>
            </div>
            <div className="w-100">

              <div className="bgc-sayu p-3 cb-outline-p73 f-Ubuntu-L fsp-15 border-color-garou cb-caja3 position-relative" >
                <img src="images/page_073/img_003.png" className="cb-nube-p73" alt=""></img>
                <p className="cb-psp color-bulma fw-700">¿Cómo aprendí?</p>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
              </div>
              <div className="bgc-windu cb-outline-p73 p-3 f-Ubuntu-L fsp-15 border-color-garou cb-caja4" >
                <p className="cb-psp2 color-saitama fw-700">¿Cómo me he sentido aprendiendo?</p>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 msp-10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
              </div>
            </div>
          </div>
          {/* ETAPA 2*/}
          <div className=" container-titulo-global mbp-∫0">
            <div className="d-flex">

              <div className="f-ccdigitaldelivery-bold fsp-35 color-pikachu">2</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Lo que mejor resultó de nuestro proyecto fue:  </div>
            </div>
          </div>
          <div className="cb-seccion2-p73 text-start">
            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
            <div className="mtp-15"> porque:</div>
            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
          </div>
          {/* END ETAPA 2 */}
          {/* ETAPA 3*/}
          <div className=" container-titulo-global mbp-∫0">
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pikachu">3</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Creemos que nos faltó o pudimos mejorar en:  </div>
            </div>
          </div>
          <div className="cb-seccion2-p73 text-start position-relative">
            <img src="images/page_073/img_005.png" className="cb-doctora-p73" alt=""></img>
            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
            <div className="mtp-15"> porque:</div>
            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
          </div>
          {/* END ETAPA 3 */}
          {/* ETAPA 4*/}
          <div className=" container-titulo-global mbp-∫0">
            <div className="d-flex">
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pikachu">4</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-star">Los asistentes a la presentación opinan que la brigada...</div>
            </div>
          </div>
          <div className="cb-seccion2-p73 text-start mbp-90">
            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
            <div className="mtp-15"> Esto nos hace sentir:</div>
            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-70" />
          </div>
          {/* END ETAPA 4 */}
          {/* PIE DE PAGINA */}
          <div className="d-flex hp-90  p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
              ABP &copy; SM
            </div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>

            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-7 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_difusion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
              <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
              <div className="w-100 hp-25 bgc-pikachu"></div>
            </div>
          </div>



        </div>
      </div>
    </div>

  );
}

export default Page073;
