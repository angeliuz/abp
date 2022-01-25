import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";

import "./page_042.css";

function Page042(props) {
  const pagina = "042";
  var indexInput = 0;
  const etapa = "3"
  const background = "bgc-android18";
  const color = "color-android18";
  const borderColor = "border-color-android18"
  const borderColorTabla = "border-color-azuka"
  const bgc_cajas = "bgc-goku";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>


          <div className="d-flex global-margin mtp-80 mbp-80 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">
                <div className="position-absolute top-0 start-100 translate-middle msp-20 mtp-50 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-60" alt="" /></div>
                <div className="position-absolute top-100 start-0 translate-middle msp-0 mtp-0 visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-60" alt="" /></div>
                <div className="border-style-solid border-2 border-color-dark rounded-p-10">
                  <div className="d-flex flex-column bgc-white rounded-p-10">
                    <div className="bgc-kagome w-100 f-Ubuntu-R text-start fsp-15 rounded-set-10 psp-10 pep-10 ptp-5 pbp-5">
                      Creemos que las fichas de seguridad serán útiles para la brigada, porque:
                    </div>
                    <div className="psp-10 pep-10">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea  lhp-35 min-hp-270" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>


          <div className="d-flex flex-column global-margin mtp-0 mbp-20 psp-0 pep-0 ptp-0 pbp-0">
            <div className="f-pixilate-bold fsp-18 lh-sm text-start mbp-10">¿Cómo vamos?</div>
            <div className="d-flex flex-column bgc-white rounded-p-10 psp-10 pep-10 ptp-10 pbp-10 mtp-0 mbp-0">
              <div className="row p-0 m-0 w-100">
                <div className="col-12 p-0 m-0">
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-start">
                      <div className="mtp-0 pep-5">
                        <img src="images/generales/flecha_e3.svg" className="wp-15" />
                      </div>
                      <div className="f-Ubuntu-L fsp-15 ptp-2 text-start">
                        Lo que más nos gustó de esta etapa fue:
                      </div>
                    </div>
                    <div className="d-flex w-100 psp-20 pep-10 ptp-0 pbp-0">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                    </div>
                  </div>
                </div>
                <div className="col-12 p-0 m-0">
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-start">
                      <div className="mtp-0 pep-5">
                        <img src={"images/generales/flecha_e" + etapa + ".svg"} className="wp-15" />
                      </div>
                      <div className="f-Ubuntu-L fsp-15 ptp-2 text-start">
                        Lo que nos resultó más difícil del trabajo en equipo es:
                      </div>
                    </div>
                    <div className="d-flex w-100 psp-20 pep-10 ptp-0 pbp-0">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                    </div>
                  </div>
                </div>
                <div className="col-12 p-0 m-0">
                  <div className="d-flex flex-column">
                    <div className="d-flex align-items-start">
                      <div className="mtp-0 pep-5">
                        <img src={"images/generales/flecha_e" + etapa + ".svg"} className="wp-15" />
                      </div>
                      <div className="f-Ubuntu-L fsp-15 ptp-2 text-start">
                        Lo que podemos mejorar es:
                      </div>
                    </div>
                    <div className="d-flex w-100 psp-20 pep-10 ptp-0 pbp-0">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* BEIGN PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
            <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          {/* END PIE DE PAGINA */}
        </div>
      </div>
    </div>






    // <div className="wrapper bgc-light">
    //   <div className="d-flex flex-column align-items-center pbp-20">
    //     <div
    //       className="page cb-page42 bgc-white overflow-hidden position-relative "
    //       id={"page_" + pagina}
    //     >
    //       {/* contenido DE PAGINA */}
    //       <div className="psp-60 pep-60 ptp-40">
    //         <div className="col-md-12 col-lg-12 position-relative">
    //           <div className="position-absolute top-100 start-0 translate-middle wp-100 msp-20 mtp--100 visible-768">
    //             <img src="images/page_042/img_002.png" className="" />
    //           </div>
    //           <div className="position-absolute top-0 start-100 translate-middle wp-100 mtp-50 visible-768">
    //             <img src="images/page_042/img_001.png" className="" />
    //           </div>
    //           <div className="position-absolute top-100 start-100 translate-middle wp-100 msp-20 mtp-30 msp--20 visible-768">
    //             <img src="images/page_042/img_003.png" className="" />
    //           </div>

    //           <div className="d-flex mbp-20 mtp-90 w-100 ">
    //             <div className="p-2 min-hp-100 w-100">
    //               <div className="d-flex flex-column bgc-white exterior-caja-v1 border-style-solid  border-color-dark border-2 w-100 p-2 f-Ubuntu-L fsp-18 mbp-20">
    //                 <div className="d-flex interior-caja-v1 bgc-rain text-start min-hp-0">
    //                   <div className="w-100 text-start">
    //                   Creemos que las fichas de seguridad serán útiles para la brigada, porque:
    //                   </div>
    //                 </div>
    //                 <InputBox
    //                   id={"p" + pagina + "_input" + (indexInput += 1)}
    //                   className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200"
    //                 />
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="mtp-55 f-pixilate-bold mbp-5 text-start fsp-18">
    //           ¿Cómo vamos?
    //         </div>
    //         <div className=" align-items-start justify-content-start position-relative p-2 f-Ubuntu-L bgc-white fsp-13 rounded-p-10 ps-4 pe-4 mbp-50">
    //           <div className="position-absolute top-100 start-0 translate-middle wp-100 msp-20 mtp--20 visible-768">
    //             <img src="images/page_042/img_004.png" className="" />
    //           </div>
    //           <div className="position-absolute bottom-0 end-0 wp-100 msp-20 mtp--20 visible-768">
    //             <img src="images/page_042/img_005.png" className="" />
    //           </div>
    //           <div className="flex-wrap text-start">
    //             <img
    //               src="images/page_042/img_001.svg"
    //               className="hp-10 pep-5 mtp-5"
    //             ></img>
    //             <span className="w-24 f-Ubuntu-L fsp-18">
    //               Lo que más nos gustó de esta etapa fue:
    //             </span>
    //             <div className="pep-10 psp-10">
    //               <InputBox
    //                 id={"p" + pagina + "_input" + (indexInput += 1)}
    //                 className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-130"
    //               />
    //             </div>
    //           </div>
    //           <div className="flex-wrap text-start mtp-10">
    //             <img
    //               src="images/page_042/img_001.svg"
    //               className="hp-10 pep-5 mtp-5"
    //             ></img>
    //             <span className="w-24 f-Ubuntu-L fsp-18">
    //               Lo que nos resultó más difícil del trabajo en equipo es:
    //             </span>
    //             <div className="pep-10 psp-10">
    //               <InputBox
    //                 id={"p" + pagina + "_input" + (indexInput += 1)}
    //                 className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-130"
    //               />
    //             </div>
    //           </div>

    //           <div className="flex-wrap text-start mtp-10">
    //             <img
    //               src="images/page_042/img_001.svg"
    //               className="hp-10 pep-5 mtp-5"
    //             ></img>
    //             <span className="w-24 f-Ubuntu-L fsp-18">
    //               Lo que podemos mejorar es:
    //             </span>
    //             <div className="pep-10 psp-10">
    //               <InputBox
    //                 id={"p" + pagina + "_input" + (indexInput += 1)}
    //                 className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-130"
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>

    //       {/* PIE DE PAGINA */}
    //       <div
    //         className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2"
    //         style={{ bottom: 70, right: 0 }}
    //       >
    //         <div
    //           className="f-Ubuntu-M fsp-10 position-absolute mbp-60"
    //           style={{ transform: `rotate(270deg)`, color: "dark" }}
    //         >
    //           ABP &copy; SM
    //         </div>
    //         <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">
    //           {props.numeroPagina(pagina)}
    //         </div>
    //       </div>
    //       {/* FIN PIE DE PAGINA */}
    //     </div>
    //   </div>
    // </div>
  );
}

export default Page042;
