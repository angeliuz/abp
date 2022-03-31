import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check2";

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
          <div className={"cabecera-v1 hp-80 " + background}>
          </div>



          <div className="d-flex global-margin h-100  mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 msp-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">

                <div className="d-flex w-100 p-2">
                  <div className="d-flex d-inline justify-content-start align-items-start text-start f-Ubuntu-R color-saitama fsp-17  fw-700 pbp-5">b.</div>
                  <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Consideramos que la propuesta de nuestros compañeros es…</div>
                </div>

              </div>
            </div>
          </div>


          <div className="d-flex global-margin mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">

                <div className="d-flex flex-row  justify-content-center ">

                  <div className="d-flex m-3">
                    <div className="d-flex wp-150 hp-45 bgc-yellow f-Ubuntu-R fsp-15 center-center position-relative  rounded-p-10 bgc-milk">Útil
                      <div className="position-absolute top-50 start-0 translate-middle   border-style-solid border-1 border-color-dark  rounded-1">
                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex m-3">
                    <div className="d-flex wp-150 hp-45 bgc-yellow f-Ubuntu-R fsp-15 center-center position-relative  rounded-p-10 bgc-milk">Creativa
                      <div className="position-absolute top-50 start-0 translate-middle   border-style-solid border-1 border-color-dark  rounded-1">
                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex m-3">
                    <div className="d-flex wp-150 hp-45 bgc-yellow f-Ubuntu-R fsp-15 center-center position-relative  rounded-p-10 bgc-milk">Original
                      <div className="position-absolute top-50 start-0 translate-middle   border-style-solid border-1 border-color-dark  rounded-1">
                        <Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>


          <div className="ptp-0 psp-100 pep-60 mbp-0 position-relative">
            <div className="row justify-content-center">
              <div className="col-12 p-0 m-0 position-relative">
                {/* <div className="position-absolute top-100 start-100 translate-middle visible-768"><img src="images/page_052/mono.png" className="hp-140 mep-40 mtp--130" alt="" /></div> */}

                <div className="bgc-jugador001 border-style-solid border-color-dark border-1 box-shadow-simple p-2">
                  <div className="d-flex justify-content-start align-items-start text-start f-Ubuntu-R fsp-15  ptp-5 psp-0">Decimos esto porque…
                  </div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                </div>
              </div>
            </div>
          </div>


          <div className="ptp-30 container-titulo-global mbp-0">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
              Plan de trabajo
            </div> */}
            <div className="d-flex psp-20">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_.svg"} alt=""  /> */}
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
                2
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Comunicamos nuestras apreciaciones con nuestros compañeros y escuchamos las suyas.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/generales/play.svg"} clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_001.png"} className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista65.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>






          <div className="d-flex global-margin mtp-0 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12">
                <div className="row">
                  <div className="col-6 ">
                    <div className="d-flex justify-content-start text-start"></div>

                    <div className="mtp-20">
                      <div className="w-100  p-1 m-2 border-style-solid border-1 border-color-lightDark rounded-p-10  lh-sm text-start p-2 position-relative">Nuestros compañeros consideraron que nuestra propuesta es…
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-220" />
                        <div className="position-absolute top-100 start-100 translate-middle   msp-20 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-70" alt="" /></div>
                        {/* <div className="position-absolute top-0 start-0  zindex-1 mtp--15"><img class=" hp-45" src="images/page_060/img_001.png" alt="" /></div> */}
                        {/* <div className="position-absolute top-100 start-0 translate-middle  zindex-1 mtp-10"><img class=" hp-60" src="images/page_060/img_003.png" alt="" /></div> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-6 ">
                    <div className="d-flex justify-content-start text-start"></div>

                    <div className="mtp-20">
                      <div className="w-100  p-1 m-2 border-style-solid border-1 border-color-lightDark rounded-p-10  lh-sm text-start p-2 position-relative">Nos comentaron que…
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-20 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-220" />
                        {/* <div className="position-absolute top-0 start-0  zindex-1 mtp--15"><img class=" hp-45" src="images/page_060/img_001.png" alt="" /></div> */}
                        {/* <div className="position-absolute top-100 start-0 translate-middle  zindex-1 mtp-10"><img class=" hp-60" src="images/page_060/img_003.png" alt="" /></div> */}
                      </div>
                    </div>
                  </div>




                </div>



              </div>
            </div>
          </div>






          <div className="d-flex w-100 mtp-50 psp-60 pep-60 ptp-20 mbp-0 bgc-windu border-top-style-solid border-color-dark border-2 pbp-80 position-relative">
            {/* <div className="position-absolute top-0 start-50 translate-middle visible-768 mtp--39 msp--80"><img src="images/page_060/img_004.png" className="wp-80 " alt="" /></div> */}
            <div className="row w-100 p-0 m-0">
              <div className="col-12 position-relative">
                <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo voy?</div>
                <div className="d-flex flex-column mbp-20 mtp-10 w-100">
                  <div className="p-2 min-hp-80 w-100 border-style-solid border-2 rounded-p-10 border-color-white bgc-white">
                    <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 text-start">
                      <img src="images/generales/flecha_e5.svg" className="mep-5 wp-15" alt="" />
                      <span>Me favorece trabajar de forma</span>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                    <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 mtp-20 text-start">
                      <img src="images/generales/flecha_e5.svg" className="mep-5 wp-15" alt="" />
                      <span>¿Qué no debería cambiar porque me sale bien?</span>
                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-80" />
                  </div>

                </div>




                {/* BEGIN TABLE */}
                <div className="col-12">
                  <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-5">¿Cómo me siento?</div>
                  <div className="d-flex flex-wrap w-100 align-items-end titulo-linea mbp-30">
                    <div className="w-100 p-2 pb-3 bgc-white rounded-p-10">
                      <table className="w-100">
                        <tbody>
                          <tr>
                            <td><span className="w-24 f-Ubuntu-L mtp-5 mbp-10 text-start">Marco con un <img src={"images/page_" + pagina + "/img_001.svg"} className="hp-17 mtp--2" alt="" /> el recuadro que mejor me represente.</span></td>
                            <td className={"style-caja " + background + " tf-letra border-style-solid border-1 " + borderColor + " f-colby-compres-bold ps-2 pe-2 color-white"}>
                              Nunca</td>
                            <td style={{ minWidth: "55px" }} className={"style-caja " + background + " tf-letra  border-style-solid border-1 " + borderColor + " f-colby-compres-bold ps-2 pe-2 color-white"}>
                              A veces</td>
                            <td className={"style-caja " + background + " tf-letra border-style-solid border-1 " + borderColor + " f-colby-compres-bold ps-2 pe-2 color-white"}>
                              Generalmente</td>
                            <td className={"style-caja " + background + " tf-letra  border-style-solid border-1 " + borderColor + " f-colby-compres-bold ps-2 pe-2 color-white"}>
                              Siempre</td>
                          </tr>
                          <tr>
                            <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-16 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Confío en mi capacidad para aprender y me valoro.</td>
                            <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                            <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                            <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                            <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          </tr>
                          <tr>
                            <td className={"" + bgc_cajas + " f-Ubuntu-L fsp-16 text-start psp-5 border-style-solid border-1 " + borderColor + ""}>Confío en mis compañeros y me ayudan cuando lo necesito.</td>
                            <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                            <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                            <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                            <td className={"border-style-solid border-1 " + borderColor + ""}><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></td>
                          </tr>

                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* END TABLE */}



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
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_creacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
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

export default Page062;
