import React from "react";
import InputBox from "../components/InputBox";
import Check from "../components/Check";
import "./page_059.css";

function Page059(props) {
  const pagina = "059";
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

          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className={"cabecera-v2 d-flex flex-column " + background}>
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">
              <div className={"caja-seccion wp-160 hp-70 text-center fsp-24 f-IntroRustG-Base " + color}>SESIÓN 16</div>
              <div className="d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¡Llegamos al final! </div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-30 container-titulo-global mbp-0">
            <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
              ¿Cómo lo hemos hecho?
            </div>
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                1
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Valoramos nuestra participación.
              </div>
              {/* <img src={"images/page_"+pagina+"/img_001.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>


          <div className="d-flex global-margin mtp-0 mbp-0 psp-20 pep-20 ptp-20 pbp-20 bgc-blanka rounded-p-20 position-relative">
            {/* <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-0  zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-40" alt="" /></div>*/}
            <div className="row p-0 m-0 w-100  text-start f-Ubuntu-R fsp-15">
              <div className="col-6 p-0 m-0 position-relative">
                <div className="d-flex flex-column w-100  psp-20 pep-20 ptp-0 pbp-0 f-Ubuntu-L">
                  Creemos que nuestra participación en la feria fue...
                </div>
                <div className="d-flex flex-column w-100  psp-20 pep-20 ptp-20 pbp-0">
                  <div className="position-relative msp-0 mep-0 mbp-10 psp-30 pep-10 ptp-10 pbp-10 rounded-p-10 border-style-solid border-1 border-color-white bgc-baraka f-Ubuntu-L fsp-14">
                    <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 zindex-1">
                      <div className="wp-30 hp-30">
                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                      </div>
                    </div>
                    tal como esperaba.
                  </div>
                </div>
                <div className="d-flex flex-column w-100 psp-20 pep-20 ptp-0 pbp-20">
                  <div className="position-relative msp-0 mep-0 mbp-10 psp-30 pep-10 ptp-10 pbp-10 rounded-p-10 border-style-solid border-1 border-color-white bgc-baraka f-Ubuntu-L fsp-14">
                    <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 zindex-1">
                      <div className="wp-30 hp-30">
                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                      </div>
                    </div>
                    de forma distinta a como esperaba.
                  </div>
                </div>

              </div>
              <div className="col-6 p-0 m-0 position-relative">
                <div className="d-flex mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
                  <div className="row p-0 m-0 w-100">
                    <div className="col-12 p-0 m-0 position-relative">
                      <div className="position-absolute top-0 start-0 translate-middle msp-5 mtp-20  zindex-1"><img src={"images/page_" + pagina + "/img_000.png"} className="wp-25" alt="" /></div>
                      <div className="">
                        <div className="d-flex flex-column bgc-white p-2 rounded-p-10">
                          <div className="psp-10 pep-10 text-start">
                            Porque...
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-150" />
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="ptp-20 container-titulo-global mbp-0">
            <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
              ¿Qué y cuánto he aprendido?
            </div>
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Valoro lo que he aprendido en este proyecto.
              </div>
              {/* <img src={"images/page_"+pagina+"/img_00.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="d-flex global-margin mtp-0 mbp-100 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-6 p-0 m-0 position-relative">
                <div className="position-absolute top-0 start-0 translate-middle msp-0 mtp-20 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-60" alt="" /></div>
                <div className="position-absolute top-50 start-100 translate-middle msp--5 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_003.svg"} className="wp-40" alt="" /></div>
                <div className="position-absolute top-100 start-50 translate-middle msp--5 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_003.svg"} className="wp-40 rotate-90" alt="" /></div>
                <div className="border-style-solid border-2 border-color-padme rounded-p-10 msp-0 mep-10 mtp-10 mbp-10">
                  <div className="d-flex flex-column bgc-jaga rounded-p-10">
                    <div className="psp-10 pep-10">
                      <div className="text-center f-pixilate-semibold mtp-10">¿Qué he aprendido?</div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-200" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 p-0 m-0 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle msp-0 mtp-20 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-60" alt="" /></div>
                <div className="border-style-solid border-2 border-color-yamcha rounded-p-10 msp-0 mep-10 mtp-10 mbp-10">
                  <div className="d-flex flex-column bgc-itto rounded-p-10">
                    <div className="psp-10 pep-10">
                      <div className="text-center f-pixilate-semibold mtp-10">¿Cómo he aprendido?</div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-200" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 p-0 m-0 position-relative">
                <div className="position-absolute top-100 start-0 translate-middle msp-0 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_005.png"} className="wp-80" alt="" /></div>
                <div className="border-style-solid border-2 border-color-android18 rounded-p-10 msp-0 mep-10 mtp-10 mbp-10">
                  <div className="d-flex flex-column bgc-azuka rounded-p-10">
                    <div className="psp-10 pep-10">
                      <div className="text-center f-pixilate-semibold mtp-10">¿Con quién he aprendido?</div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-200" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6 p-0 m-0 position-relative">
                <div className="position-absolute top-100 start-100 translate-middle msp-0 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_006.png"} className="wp-100" alt="" /></div>
                <div className="position-absolute top-50 start-0 translate-middle msp--5 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_003.svg"} className="wp-40" alt="" /></div>
                <div className="position-absolute top-0 start-50 translate-middle msp--5 mtp-0 zindex-1"><img src={"images/page_" + pagina + "/img_003.svg"} className="wp-40 rotate-90" alt="" /></div>
                <div className="border-style-solid border-2 border-color-freezer rounded-p-10 msp-0 mep-10 mtp-10 mbp-10">
                  <div className="d-flex flex-column bgc-pantro rounded-p-10">
                    <div className="psp-10 pep-10">
                      <div className="text-center f-pixilate-semibold mtp-10">¿Cómo me he sentido aprendiendo?</div>
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-200" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BEGIN PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
              ABP &copy; SM
            </div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>

            <div className={etapa == 1 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_motivacion.svg" className={etapa == 1 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className={etapa == 2 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_planificacion.svg" className={etapa == 2 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className={etapa == 3 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_investigacion.svg" className={etapa == 3 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className={etapa == 4 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_experimentacion.svg" className={etapa == 4 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className={etapa == 5 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_creacion.svg" className={etapa == 5 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className={etapa == 6 ? "col-7 position-relative col-sm-2 p-0 m-0" : "col-1 position-relative col-sm-2 p-0 m-0"}>
              <img src="images/rotulo_difusion.svg" className={etapa == 6 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
              <div className="w-100 hp-25 bgc-pikachu"></div>
            </div>
          </div>
          {/* END PIE DE PAGINA */}

        </div>
      </div>
    </div>
  );
}

export default Page059;
