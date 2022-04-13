import React from "react";
import InputBox from "../components/InputBox";
import "./page_062.css";

function Page062(props) {

  const pagina = "062";
  var indexInput = 0;
  const etapa = "5"
  const background = "bgc-saitama";
  const color = "color-saitama";
  const borderColor = "border-color-saitama"
  const borderColorTabla = "border-color-bobafett"
  const bgc_cajas = "bgc-bobafett";

  return (

    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>

          {/* BEGIN CABECERA VERSIÓN 1 */}
          <div className={"cabecera-v1 hp-80 " + background}></div>
          {/* END CABECERA VERSIÓN 1 */}

          <div className="container-titulo-global mtp-20 mbp-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 "+color}>
xxx
</div> */}
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Nos repartimos las tareas y pensamos en lo que necesitamos.
              </div>
              {/* <img src={"images/page_"+pagina+"/img_00.svg"} className="wp-100" alt=""/> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="d-flex global-margin mtp-0 mbp-60 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100 bgc-windu rounded-p-10  border-style-solid border-1 border-color-dark">
              <div className="col-md-6 col-md-6 p-0 m-0 position-relative ">
                <div className="position-absolute bottom-0 start-0    msp--30 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_004.png"} className="wp-40" alt="" /></div>


                <div className="justify-content-center p-2 h-100 w-100 ">
                  <div className="h-100 border-style-solid border-1 border-color-dark rounded-p-10  bgc-white  ">
                    <div className="w-100 psp-50 pep-50 ptp-10 pbp-10  mbp-10  position-relative">
                      <div className="position-absolute top-50 start-0 translate-middle-y    msp-30 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_003.png"} className="wp-40" alt="" /></div>
                      <div className="elipse wp-320 alinea border-style-solid border-2 rounded-p-10 border-color-dark w-100 bgc-bulma hp-120 mtp-20  ">
                        <div className="d-flex justify-content-center text-center align-items-center hp-120 f-Ubuntu-R fsp-15 fw-700 color-white lh-sm">Tengo todos los<br /> materiales que necesito</div>
                      </div>
                      <div className=" w-100 ">
                        <div className="d-flex justify-content-around  mt-1 ">
                          <div className="">
                            <img src={"images/page_" + pagina + "/img_005.svg"} className="wp-25 msp-20" alt="" />
                            <div className="d-flex align-items-center justify-content-center mtp-10 rounded-p-50 border-color-dark hp-50 wp-50 bgc-bulma">
                              <div className="f-Ubuntu-R fsp-15 fw-300 color-white">SI</div>
                            </div>
                          </div>
                          <div className="">
                            <img src={"images/page_" + pagina + "/img_005.svg"} className="wp-25 mep-20 rota-horizontal" alt="" />
                            <div className="d-flex align-items-center justify-content-center mtp-10 rounded-p-50 border-color-dark hp-50 wp-50 bgc-bulma">
                              <div className="f-Ubuntu-R fsp-15 fw-300 color-white">NO</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-100 psp-10 pep-10 ptp-10 pbp-10  mbp-10 ">
                      <div className="d-flex  p-0 m-0  ">
                        <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5"> Me falta</div>
                      </div>
                      <div className="">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-0 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-540" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <div className="col-md-6 col-md-6 p-0 m-0 position-relative ">
                <div className="position-absolute top-0 end-0  msp-30 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-40" alt="" /></div>
                <div className="justify-content-center p-2 h-100 w-100 ">
                  <div className="h-100 border-style-solid border-1 border-color-dark rounded-p-10 bgc-white ">

                    <div className="w-100 psp-50 pep-50 ptp-10 pbp-10  mbp-10  position-relative">
                      <div className="position-absolute top-50 end-0 translate-middle-y  mep-10 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-50" alt="" /></div>
                      <div className="elipse wp-320 alinea border-style-solid border-2 rounded-p-10 border-color-dark w-100 bgc-bulma hp-120 mtp-20  ">
                        <div className="d-flex justify-content-center text-center align-items-center hp-120 f-Ubuntu-R fsp-15 fw-700 color-white lh-sm">Voy a <br />necesitar ayuda</div>
                      </div>
                      <div className=" w-100 ">
                        <div className="d-flex justify-content-around  mt-1 ">
                          <div className="">
                            <img src={"images/page_" + pagina + "/img_005.svg"} className="wp-25 msp-20" alt="" />
                            <div className="d-flex align-items-center justify-content-center mtp-10 rounded-p-50 border-color-dark hp-50 wp-50 bgc-bulma">
                              <div className="f-Ubuntu-R fsp-15 fw-300 color-white">SI</div>
                            </div>
                          </div>
                          <div className="">
                            <img src={"images/page_" + pagina + "/img_005.svg"} className="wp-25 mep-20 rota-horizontal" alt="" />
                            <div className="d-flex align-items-center justify-content-center mtp-10 rounded-p-50 border-color-dark hp-50 wp-50 bgc-bulma">
                              <div className="f-Ubuntu-R fsp-15 fw-300 color-white">NO</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-100 psp-10 pep-10 ptp-10 pbp-10  mbp-10 ">
                      <div className="d-flex  p-0 m-0  ">
                        <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5"> Necesito</div>
                      </div>
                      <div className="">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-0 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-540" />
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>





          {/* <div className="">
                    <div className="d-flex  p-0 m-0  ">
                      <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5"> Emotiva, para</div>
                    </div>
                    <div className="">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-0 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200" />
                    </div>

                  </div> */}







          {/* BEGIN PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
              ABP &copy; SM
            </div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>

            <div className={etapa == 1 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_motivacion.svg" className={etapa == 1 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className={etapa == 2 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_planificacion.svg" className={etapa == 2 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className={etapa == 3 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_investigacion.svg" className={etapa == 3 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className={etapa == 4 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_experimentacion.svg" className={etapa == 4 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className={etapa == 5 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
              <img src="images/rotulo_creacion.svg" className={etapa == 5 ? "visible rotulo-etapa position-absolute top-0 start-0" : "oculto"} alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className={etapa == 6 ? "col-7 position-relative col-md-2 p-0 m-0" : "col-1 position-relative col-md-2 p-0 m-0"}>
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

export default Page062;
