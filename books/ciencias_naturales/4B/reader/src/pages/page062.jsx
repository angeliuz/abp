import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import "./page_062.css";

function Page062(props) {

  const pagina = "062";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-saitama d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 align-items-center ptp-40 psp-30 pep-30">
              <div className="caja-seccion wp-160 hp-60 d-flex justify-content-center ptp-10 mtp-5 color-saitama fsp-24 f-IntroRustG-Base">SESIÓN 13</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¡Preparando las presentaciones!</div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}


          <div className="ptp-10 psp-60 pep-60 mbp-0 pep-220 msp--20">
            <div className="f-Ubuntu-B fsp-20 color-saitama text-start lhp-20 ">Preparando el <i >stand</i> de presentaciones</div>
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_062/img_004.svg" alt="" /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-saitama">1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start"> Definimos los objetivos de la jornada de presentación.</div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_045/revista.svg" clasesImagen="cambio hp-35 mtp-20" className="p-0 px-1" /> */}
              {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image="images/page_062/img_002.svg" clasesImagen="hp-40 text-center mtp-10 pep-20" className="p-0 px-0" /> */}
            </div>
          </div>



          <div className="d-flex msp-100 mep-60 position-relative mtp-40">
            <div className="border-style-solid border border-3 borde-color-dark p-3 min-hp-275 w-100 bgc-lizt position-relative">
              <div className="position-absolute top-0 start-100 translate-middle   mtp--35 msp--50"><img src="images/page_062/img_002.png" className="hp-80  " alt=""></img></div>

              <div className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center hp-30 mtp--20 msp--40">
                <img src="images/page_062/img_003.png" className="hp-70  position-relative " alt=""></img>
                <div className="position-absolute top-50 start-50 translate-middle  w-90  d-flex justify-content-center text-center f-pixilate-bold fsp-18 lh-sm color-dark "> Objetivos:</div>
              </div>

              {/* 
                    <div><img className="position-absolute top-0 start-0 hp-70 mtp--40 msp--40 position-relative" src="images/page_062/img_003.png"  alt=""> </img>
                        <div className="position-absolute top-50 start-50 translate-middle">1231</div>
                  </div>  */}

              <div className="msp-20 mtp-20">
                <div className="p-1 d-flex align-items-center   w-100">
                  <div className="d-inline hp-5 wp-5 rounded-50 bgc-saitama"></div>
                  <div className="f-Ubuntu-L msp-10 fsp-16 lh-sm text-start">Dar a conocer la misión y las tareas de las brigadas.</div>
                </div>
                <div className="p-1 d-flex align-items-center   w-100">
                  <div className="d-inline hp-5 wp-5 rounded-50 bgc-saitama"></div>
                  <div className="f-Ubuntu-L msp-10 fsp-16 lh-sm text-start">Informar a la comunidad educativa de la conformación de las brigadas.</div>
                </div>
                <div className="p-1 d-flex align-items-center   w-100">
                  <div className="d-inline hp-5 wp-5 rounded-50 bgc-saitama mbp-20"></div>
                  <div className="f-Ubuntu-L msp-10 fsp-16 lh-sm text-start">Educar a la comunidad educativa para actuar responsablementeante ante situaciones de emergencia.</div>
                </div>
                <div className="p-1 d-flex align-items-center   w-100">
                  <div className="d-inline hp-5 wp-5 rounded-50 bgc-saitama mbp-20"></div>
                  <div className="f-Ubuntu-L msp-10 fsp-16 lh-sm text-start">Solicitar la colaboración de la comunidad educativa para poner en marcha las brigadas.</div>
                </div>

                <div className="p-1 d-flex align-items-center mtp--10  w-100">
                  <div className="d-inline hp-5 wp-5 rounded-50 bgc-saitama mbp-20"></div>
                  <div className="f-Ubuntu-L msp-10 w-100 fsp-16 lh-sm text-start"> <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" /></div>

                </div>


              </div>
            </div>

          </div>


          <div className="ptp-10 psp-60 pep-60 mbp-0 pep-220 msp--20">
            {/* <div className="f-Ubuntu-B fsp-20 color-saitama text-start lhp-20 ">Preparando el stand de presentaciones</div> */}
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_062/img_004.svg" alt="" />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-saitama">2</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start"> Propongo a mi equipo una idea para organizar el <i >stand</i> de presentación de la brigada. Luego, justifico mi propuesta.</div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_045/revista.svg" clasesImagen="cambio hp-35 mtp-20" className="p-0 px-1" /> */}
              {/* <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image="images/page_062/img_002.svg" clasesImagen="hp-40 text-center mtp-10 pep-20" className="p-0 px-0" /> */}
            </div>
          </div>





          <div className="row container-row px-5 position-relative mbp-140">
            <div className=" position-absolute top-100 start-50 translate-middle visible-768"><img className="hp-130 mtp-30" src="images/page_062/img_006.png" alt="" /></div>
            <div className="col-sm-12 col-md-6  position relative ">     
              <div className="border-style-solid mtp-25 border-2 border-color-jasper rounded-p-10 w-100 ">
                <div className="d-flex align-items-center justify-content-center  rounded-set-10 bgc-jasper hp-45 pixilate-bold fsp-18 fw-700 color-white ">Mi propuesta de presentación 
                </div>
                <div className="mtp-10 msp-20 mep-30 ">    
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="w-100 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6  position relative mbp-50">
            <div className="espirales-creacion-62   position-absolute"><img src="images/page_062/img_007.png" className="w-45   " alt="" /></div>
              <div className="border-style-solid mtp-25 border-2 border-color-arlo rounded-p-10 w-100 ">
                <div className="d-flex align-items-center justify-content-center  rounded-set-10 bgc-arlo hp-45 pixilate-bold fsp-18 fw-700 color-white ">Justificación: </div>
                <div className="mtp-10 msp-30 mep-30 w-85">    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" /></div>
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
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-7 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_creacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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

export default Page062;
