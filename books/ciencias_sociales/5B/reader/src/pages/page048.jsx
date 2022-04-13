import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check";
import CheckMultiple from "../components/CheckMultiple";

import "./page_048.css";

function Page048(props) {

  const pagina = "048";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          <div className="cabecera-v1 hp-80 bgc-pidgey">
          </div>

          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_048/g.svg" alt="" />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">3</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Con mi grupo, identifico las características que debería tener nuestra entrevista.<br />
                Marco con un <img src="images/page_048/vb.svg" className="wp-15 mtp--2" alt="" /> las que corresponden y con una <img src="images/page_048/xx.svg" className="wp-15 mtp--2" alt="" /> las que no.
              </div>
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>



          <div className="d-flex msp-60 mep-60 mbp-10">

            <div className="row ptp-10 ps-12 pe-8 m-0">
              <div className="col-sm-12 col-md-3 position-relative p-1 mbp-40">
                {/* <div className="flecha position-absolute"><img src="images/page_031/img_003.svg" className="w-45 " alt=""/></div> */}
                {/* <div className="position-absolute top-100 start-50 translate-middle zindex-1 min-hp-40 min-wp-50 bgc-white border-style-solid border-1 border-color-dark wp-40 mtp-0 msp-0"></div> */}
                <div className="position-absolute top-100 start-50 translate-middle zindex-1"><CheckMultiple id={"check_p" + pagina + "_" + (indexInput += 1)} image0={"images/generales/check_vacio.svg"} image1={"images/generales/ticket.svg"} image2={"images/generales/cruz.svg"}
                  classContainer="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1 disable-select d-flex center-center p-1" />
                </div>
                <div className="position-absolute top-0 start-50 translate-middle d-flex justify-content-center align-items-center f-Ubuntu-B color-white zindex-1 bgc-goten rounded-2 wp-30 hp-30 mtp-10 msp-0">1</div>
                <div className="px-0">
                  <div className="position-relative d-flex align-items-center justify-content-center bgc-genos min-hp-110 p-2 rounded-p-10 ">
                    <div className="text-center f-Ubuntu-R fsp-14">Reforzar nuestras opiniones iniciales.</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-3 position-relative p-1 mbp-40">
                {/* <div className="flecha position-absolute"><img src="images/page_031/img_003.svg" className="w-45 " alt=""/></div> */}
                {/* <div className="position-absolute top-100 start-50 translate-middle zindex-1 min-hp-40 min-wp-50 bgc-white border-style-solid border-1 border-color-dark wp-40 mtp-0 msp-0"></div> */}
                <div className="position-absolute top-100 start-50 translate-middle zindex-1"><CheckMultiple id={"check_p" + pagina + "_" + (indexInput += 1)} image0={"images/generales/check_vacio.svg"} image1={"images/generales/ticket.svg"} image2={"images/generales/cruz.svg"}
                  classContainer="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1 disable-select d-flex center-center p-1" />
                </div>
                <div className="position-absolute top-0 start-50 translate-middle d-flex justify-content-center align-items-center f-Ubuntu-B color-white zindex-1 bgc-bulma rounded-2 wp-30 hp-30 mtp-10 msp-0">2</div>
                <div className="px-0">
                  <div className="position-relative d-flex align-items-center justify-content-center bgc-buzz min-hp-110 p-2 rounded-p-10 ">
                    <div className="text-center f-Ubuntu-R fsp-14">Tener una estructura clara pero flexible.</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-3 position-relative p-1 mbp-40">
                {/* <div className="flecha position-absolute"><img src="images/page_031/img_003.svg" className="w-45 " alt=""/></div> */}
                <div className="position-absolute top-100 start-50 translate-middle zindex-1"><CheckMultiple id={"check_p" + pagina + "_" + (indexInput += 1)} image0={"images/generales/check_vacio.svg"} image1={"images/generales/ticket.svg"} image2={"images/generales/cruz.svg"}
                  classContainer="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1 disable-select d-flex center-center p-1" />
                </div>
                <div className="position-absolute top-0 start-50 translate-middle d-flex justify-content-center align-items-center f-Ubuntu-B color-white zindex-1 bgc-android18 rounded-2 wp-30 hp-30 mtp-10 msp-0">3</div>
                <div className="px-0">
                  <div className="position-relative d-flex align-items-center justify-content-center bgc-azuka min-hp-110 p-2 rounded-p-10 ">
                    <div className="text-center f-Ubuntu-R fsp-14">Ser muy extensa.</div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-3 position-relative p-1 mbp-40">
                {/* <div className="flecha position-absolute"><img src="images/page_031/img_003.svg" className="w-45 " alt=""/></div> */}
                <div className="position-absolute top-100 start-50 translate-middle zindex-1"><CheckMultiple id={"check_p" + pagina + "_" + (indexInput += 1)} image0={"images/generales/check_vacio.svg"} image1={"images/generales/ticket.svg"} image2={"images/generales/cruz.svg"}
                  classContainer="wp-30 hp-30 bgc-white border-style-solid border-1 border-color-dark bgc-white rounded-1 disable-select d-flex center-center p-1" />
                </div>
                <div className="position-absolute top-0 start-50 translate-middle d-flex justify-content-center align-items-center f-Ubuntu-B color-white zindex-1 bgc-pidgey rounded-2 wp-30 hp-30 mtp-10 msp-0">4</div>
                <div className="px-0">
                  <div className="position-relative d-flex align-items-center justify-content-center bgc-woody min-hp-110 p-2 rounded-p-10 ">
                    <div className="text-center f-Ubuntu-R fsp-14">Recoger la visión de la persona entrevistada.</div>
                  </div>
                </div>
              </div>


            </div>
          </div>

          <div className="ptp-0 container-titulo-global mbp-20">
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_048/g.svg" alt="" />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">4</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Con mi grupo, establezco los roles para las entrevistas.
              </div>
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="d-flex msp-60 mep-60 bgc-hermione rounded-p-10 psp-20 pep-20">

            <div className="row ptp-20 ps-12 pe-8 m-0 w-100">

              <div className="col-12 position-relative p-0 m-0 d-flex align-items-center">
              <img src="images/page_048/espiral_1.svg" className="wp-45 position-absolute top-100 start-100 translate-middle msp--60 mtp-10 zindex-2" alt="" />
                <div className="position-absolute top-0 start-50 translate-middle mtp-15 msp-0 w-100  f-Ubuntu-R text-start">Entrevistaremos a...</div>
                <div className="position-absolute top-50 start-0 translate-middle mtp-0 msp-25 rounded-end bgc-hermione border-style-solid border-start-0 border-2 border-color-freezer p-1 text-center color-pidgey wp-25 f-Ubuntu-B fsp-14 zindex-1">1</div>
                <div className="msp-10 mep-10 border-style-solid border-color-freezer rounded-p-5 bgc-white mtp-30 caja-contenedora-respuesta" >
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
                </div>

              </div>
              <div className="col-12 position-relative ptp-0 pbp-0 m-0">

                <div className="position-absolute top-0 start-50 translate-middle mtp-15 msp-0 w-100 f-Ubuntu-R text-center">Los roles que asumiremos son...</div>
                <div className="d-flex flex-column mbp-20 mtp-30 p-2 w-100 rounded-p-10 bgc-white">
                  <div className="p-2 w-100 d-flex flex-column">
                    <div className="f-Ubuntu-L fsp-14 text-start w-100">¿Quién guiará la entrevista?</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                  </div>
                  <div className="p-2 w-100 d-flex flex-column">
                    <div className="f-Ubuntu-L fsp-14 text-start w-100">¿Quién registrará la entrevista.</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                  </div>
                </div>

              </div>

              <div className="col-12 position-relative p-0 m-0 d-flex align-items-center">
                <img src="images/page_048/espiral_1.svg" className="wp-45 position-absolute top-100 start-100 translate-middle msp--60 mtp-10 zindex-2" alt="" />
                <div className="position-absolute top-0 start-50 translate-middle mtp-15 msp-0 w-100  f-Ubuntu-R text-start ">Entrevistaremos a...</div>
                <div className="position-absolute top-50 start-0 translate-middle mtp-0 msp-25 rounded-end bgc-hermione border-style-solid border-start-0 border-2 border-color-freezer p-1 text-center color-pidgey wp-25 f-Ubuntu-B fsp-14 zindex-1">2</div>
                <div className="msp-10 mep-10 border-style-solid border-color-freezer rounded-p-5 bgc-white mtp-30 caja-contenedora-respuesta" >
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  min-hp-100" />
                </div>

              </div>
              <div className="col-12 position-relative ptp-0 pbp-0 m-0">

                <div className="position-absolute top-0 start-50 translate-middle mtp-15 msp-0 w-100 f-Ubuntu-R text-center ">Los roles que asumiremos son...</div>
                <div className="d-flex flex-column mbp-20 mtp-30 p-2 w-100 rounded-p-10 bgc-white">
                  <div className="p-2 w-100 d-flex flex-column">
                    <div className="f-Ubuntu-L fsp-14 text-start w-100">¿Quién guiará la entrevista?</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  min-hp-35" />
                  </div>
                  <div className="p-2 w-100 d-flex flex-column">
                    <div className="f-Ubuntu-L fsp-14 text-start w-100">¿Quién registrará la entrevista.</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  min-hp-35" />
                  </div>
                </div>

              </div>

            </div>

          </div>

          <div className="ptp-10 container-titulo-global mbp-0">
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_048/g.svg" alt="" />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-pidgey">5</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Redactamos y enviamos la siguiente invitación a las personas que entrevistaremos.
              </div>
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_031/img_002.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="d-flex msp-60 mep-60 psp-20 pep-20">

            <div className="row ptp-0 ps-12 pe-8 m-0 w-100">
              <div className="col-12  position-relative mbp-70">
                <div className="position-absolute top-0 start-100 translate-middle msp-30 mtp-120 visible-768"><img src="images/page_048/camarografo.png" className="wp-70 " alt="" /></div>
                <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-60 visible-768"><img src="images/page_048/periodista.png" className="wp-60 " alt="" /></div>

                <div className="d-flex flex-column mbp-20 mtp-10 p-2 w-100 border-style-solid border-2 rounded-p-10 border-color-dark bgc-white">
                  <div className="p-2 w-100 d-flex flex-column">
                    {/* <div className="f-Ubuntu-L fsp-16  text-start w-100">Podemos mejorar en...</div> */}
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-210" />
                  </div>
                </div>
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
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
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

export default Page048;
