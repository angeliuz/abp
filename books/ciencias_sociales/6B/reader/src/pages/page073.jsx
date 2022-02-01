import React from "react";
import ModalVideo from "../components/ModalVideo";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import "./page_073.css";

function Page073(props) {
  const pagina = "073";
  var indexInput = 0;
  const etapa = "6"
  const background = "bgc-pikachu";
  const color = "color-pikachu";
  const borderColor = "border-color-pikachu"
  const borderColorTabla = "border-color-kokomi"
  const bgc_cajas = "bgc-kokomi";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          <div className={"cabecera-v1 hp-80 " + background}>
          </div>

          <div className="msp-60 mep-60 mtp-20 mbp-10">
            <div className="row p-0 m-0">
              <div className="col-sm-12 col-md-3 position-relative"></div>
              <div className="container-titulo-global mbp-0 mbp-20">
                <div className="d-flex psp-20">
                  {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
                  <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                    4
                  </div>
                  <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                    Leemos los consejos de la revista y, antes de presentarnos a toda comunidad 96 educativa, ensayamos lo que diremos frente a nuestro curso.
                  </div>
                  {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                  {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
                  <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} image={"images/page_" + pagina + "/img_001.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
                </div>
              </div>
              <div className="bgc-riuko ptp-10 pbp-40 rounded-p-10 mbp-70">
                <div className="text-center align-items-center justify-content-center bgc-jinx wp-250 mx-auto mtp--10 mbp-40 rounded-seb-10 color-white fw-700 ptp-5 pbp-5">
                  NUESTRA PRESENTACIÓN
                </div>
                {/* BEGIN EJERCICIO 1 */}
                <div className="row mx-auto d-flex f-Ubuntu-R fsp-15 mbp-70 ">
                  <div className="col-sm-12 col-md-6 position-relative">
                    <div className="position-absolute top-100 start-0 translate-middle msp-0 mtp-0 visible-768 zindex-10"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-70" alt="" /></div>
                    <div className="position-absolute color-white fw-700 top-0 start-50 translate-middle msp-0 mtp-0 zindex-1 bgc-powder fsp-15 rounded-p-10 p-2">
                      PASO 1
                    </div>
                    <div className="text-center w-100 border-2 border-style-solid border-color-marcianos rounded-p-10 pbp-30 bgc-white">
                      <div className="f-Ubuntu-L fsp-15 rounded-p-10 max-wp-200 mx-auto mtp-10 hp-60 pep-20 psp-20 ptp-10 pbp-10 bgc-qiqi d-flex justify-content-center align-items-center">
                        Tenemos los mensajes
                      </div>
                      <div className="d-flex justify-content-start mbp-5 psp-15 ">
                        <div className="wp-30 hp-30 mtp-10 bgc-white border-1 border-style-solid border-color-dark rounded-1 mep-5">
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                        </div>
                        <div className="text-start msp-5 mtp-10 pep-5  bgc-white  rounded-1 f-Ubuntu-L fsp-13 d-flex align-items-start">
                          Dominio del tema: Todos conocemos <br /> el tema de nuestro proyecto.
                        </div>
                      </div>
                      <div className="d-flex justify-content-start mbp-5 psp-15">
                        <div className="wp-30 hp-30 mtp-10 bgc-white border-1 border-style-solid border-color-dark rounded-1 mep-5">
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                        </div>
                        <div className="text-start msp-5 mtp-10 pep-5  bgc-white  rounded-1 f-Ubuntu-L fsp-13 d-flex align-items-start">
                          Participación: Todos participamos en <br /> la exposición y todos podemos hablar<br /> del tema de nuestro proyecto.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 position-relative">
                    <div className="position-absolute top-100 start-100 translate-middle msp--60 mtp-20 visible-768 zindex-10"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-80" alt="" /></div>
                    <div className="position-absolute color-white fw-700 top-0 start-50 translate-middle msp-0 mtp-0 zindex-1 bgc-powder fsp-15 rounded-p-10 p-2 ">
                      PASO 2
                    </div>
                    <div className="text-center w-100 border-2 border-style-solid border-color-marcianos rounded-p-10 pbp-50 bgc-white">
                      <div className="f-Ubuntu-L fsp-15 rounded-p-10 max-wp-200 mx-auto mtp-10 hp-60 pep-20 psp-20 ptp-10 pbp-10 bgc-qiqi d-flex justify-content-center align-items-center">
                        Preparamos una pauta
                      </div>
                      <div className="d-flex justify-content-start mbp-5 psp-15 ">
                        <div className="wp-30 hp-30 mtp-10 bgc-white border-1 border-style-solid border-color-dark rounded-1 mep-5">
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                        </div>
                        <div className="text-start msp-5 mtp-10 pep-5  bgc-white  rounded-1 f-Ubuntu-L fsp-13 d-flex align-items-start">
                          Organización: Nos planificamos para <br /> que la exposición esté bien ordenada.
                        </div>
                      </div>
                      <div className="d-flex justify-content-start mbp-5 psp-15">
                        <div className="wp-30 hp-30 mtp-10 bgc-white border-1 border-style-solid border-color-dark rounded-1 mep-5">
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                        </div>
                        <div className="text-start msp-5 mtp-10 pep-5  bgc-white  rounded-1 f-Ubuntu-L fsp-13 d-flex align-items-start">
                          Claridad: El objetivo de nuestra <br /> presentación queda claro.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* BEGIN EJERCICIO 2 */}
                <div className="max-wp-600 mx-auto position-relative">
                  <div className="position-absolute top-100 start-0 translate-middle msp-0 mtp--70 visible-768 zindex-10"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-130" alt="" /></div>
                  <div className="position-absolute color-white fw-700 top-0 start-50 translate-middle msp-0 mtp-0 zindex-1 bgc-powder fsp-15 rounded-p-10 p-2">
                    PASO 3
                  </div>
                  <div className="text-center w-100 border-2 border-style-solid border-color-marcianos rounded-p-10 pbp-50 bgc-white">
                    <div className="f-Ubuntu-L fsp-15 rounded-p-10 max-wp-300 mx-auto mtp-10 hp-60 pep-20 psp-20 ptp-10 pbp-10 bgc-qiqi d-flex justify-content-center align-items-center">
                      Ensayamos en voz alta
                    </div>
                    <div className="mx-auto max-wp-400 mtp-15">
                      <div className="d-flex justify-content-start mbp-5 psp-15 ">
                        <div className="wp-30 hp-30 mtp-10 bgc-white border-1 border-style-solid border-color-dark rounded-1 mep-5">
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                        </div>
                        <div className="text-start msp-5 mtp-10 pep-5  bgc-white  rounded-1 f-Ubuntu-L fsp-13 d-flex align-items-start">
                          Volumen: Utilizamos un tono de voz adecuado para <br /> que nos escuchen.
                        </div>
                      </div>
                      <div className="d-flex justify-content-start align-items-center mbp-5 psp-15">
                        <div className="wp-30 hp-30 mtp-10 bgc-white border-1 border-style-solid border-color-dark rounded-1 mep-5">
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                        </div>
                        <div className="text-start msp-5 mtp-10 pep-5  bgc-white  rounded-1 f-Ubuntu-L fsp-13 d-flex align-items-start">
                          Postura: Miramos a la cara a nuestro público.
                        </div>
                      </div>
                      <div className="d-flex justify-content-start mbp-5 psp-15 ">
                        <div className="wp-30 hp-30 mtp-10 bgc-white border-1 border-style-solid border-color-dark rounded-1 mep-5">
                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-center flex-grow-1 lhp-30 min-hp-35" />
                        </div>
                        <div className="text-start msp-5 mtp-10 pep-5  bgc-white  rounded-1 f-Ubuntu-L fsp-13 d-flex align-items-start">
                          Lenguaje no verbal: Utilizamos las manos para darle <br /> sentido a nuestro mensaje.
                        </div>
                      </div>
                    </div>
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
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
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
