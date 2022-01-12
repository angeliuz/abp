import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";

import "./page_072.css";

function Page072(props) {

  const pagina = "072";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
            <div className="d-flex flex-column align-items-center pbp-20">
              <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
              <div className="cabecera-v1 hp-80 bgc-pikachu">
                </div>
            <div className=" container-titulo-global mbp-∫0">
            <div className="d-flex">
                {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_033/img_002.svg" alt=""  /> */}
                <div className="f-ccdigitaldelivery-bold fsp-35 color-pikachu">2</div>
                <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Respondemos al correo de Macarena.</div>
                 {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.jpg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-1" /> /*}
                {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

            <div className="cb-contenedor-mail-p72">
              <div className="cb-invitacion-p71 psp-35 f-Ubuntu-R fsp-18 fw-700 ptp-15"> RE:¡Felicitaciones!</div>
              <div className="cb-datos-mail pep-15 psp-10 ptp-10">
                <div className="d-flex mtp-10 justify-content-between mbp-5"> 
                  <div><img src="images/page_072/img_003.png" className="cb-computador-carta psp-30" alt=""></img></div> 
                  <div className="cb-datos-1 msp-10 align-items-center d-flex text-start">
                    <div className="psp-10 f-Ubuntu-l fsp-16"> <span className="fw-700"> Estudiantes 4° básico </span> 4_basico@colegio.cl <br /> Para Estudiantes 4° básico </div>
                  </div>
                </div>
              </div>
             
              <div className="cb-texto-mail-p72 mbp-40">
                  <div class="cb-carta-content-p71 f-Ubuntu-L text-start">
                    <img src="images/page_072/img_007.png" className="cb-favorito-carta-p72" alt=""></img>
                      <img src="images/page_072/img_001.png" className="cb-ipad-p72" alt=""></img>
                      <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200" />
                  </div>
                </div>
              </div>  

              <div className="psp-60 color-pikachu text-start f-Ubuntu-R fsp-18 mbp-10">Reflexión final antes de presentar</div>
              {/* ejercicio 2 */}
              <div className="cb-ejercicio-final-p72 justify-content-between">
                <div className="cb-ejercicio3-p72 psp-20 pep-10 position-relative">
                <img src="images/page_072/img_004.png" className="cb-notamorada-p72" alt=""></img>
                <img src="images/page_072/img_003.svg" className="cb-chinche-p72" alt=""></img>
                <div className="cb-titulo-ejercicio mbp-∫0">
            <div className="d-flex">
                <div className="f-ccdigitaldelivery-bold fsp-35 color-pikachu">3</div>
                <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start pbp-20">Con mi equipo creemos que la conformación de brigadas es importante porque: </div>  
            </div>
          </div>
                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200" />
                </div>

                <div className="cb-ejercicio3-p72 psp-20 pep-10 position-relative">
                <img src="images/page_072/img_005.png" className="cb-megafono-p72" alt=""></img>
                <img src="images/page_072/img_003.svg" className="cb-chinche-p72" alt=""></img>
                <div className="cb-titulo-ejercicio mbp-∫0">
            <div className="d-flex">
                <div className="f-ccdigitaldelivery-bold fsp-35 color-pikachu">4</div>
                <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Además, creemos que la comunidad educativa necesita estar preparada para actuar ante una emergencia porque: </div>  
            </div>
          </div>
                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200" />
                </div>

              </div>
              {/* ejercicio 2 */}

              <div className=" container-titulo-global mbp-∫0">
            <div className="d-flex position-relative mbp-200">
            <img src="images/page_072/img_006.png" className="cb-personaje-p72" alt=""></img>
                {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_033/img_002.svg" alt=""  /> */}
                <div className="f-ccdigitaldelivery-bold fsp-35 color-pikachu">5</div>
                <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Presentamos nuestra brigada <br /> a la comunidad educativa.</div>
                 {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.jpg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-1" /> /*}
                {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

                {/* PIE DE PAGINA */}
                <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                  <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                    ABP &copy; SM
                  </div>
                  <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
                </div>
                <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{bottom:0}}>

                    <div className="col-1 position-relative col-sm-2 p-0 m-0">
                      <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
                        <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
                        <div className="w-100 hp-25 bgc-goten"></div>
                    </div>
                    <div className="col-7 position-relative col-sm-2 p-0 m-0">
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
                    <div className="col-1 position-relative col-sm-2 p-0 m-0">
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

export default Page072;
