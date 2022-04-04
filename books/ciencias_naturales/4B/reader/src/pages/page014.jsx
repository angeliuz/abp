import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_014.css";

function Page014(props) {
  const pagina = "014";
  var indexInput = 0;
  const etapa = "2";
  const background = "bgc-bulma";
  const color = "color-bulma";
  const borderColor = "border-color-bulma";
  const borderColorTabla = "border-color-buzz";
  const bgc_cajas = "bgc-piccolo";

  return (


    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className={"page " + background + " position-relative pagina-cohete"} id={"page_" + pagina}>

          <div className="w-100 mt-15 pe-5 ps-5 ">
            <div className="pc-lineas-v2 pbp-80">
              <div className="pc-cabecera">
                <div className="pc-titulo-12 color-white fsp-20 lh-sm f-durotype-aspiranar-bold">
                  Mis objetivos <br /> en esta etapa son:
                </div>
                <div className="pc-cohete" ><img src="images/generales/cohete.png" alt="" />
                </div>
              </div>

              <div className="pc-caja-objetivos-1">
                <div className="color-hardDark fsp-16 lh-sm f-pixilate-regular text-start">
                  <div className={"d-flex " + bgc_cajas + " psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 pc-caja-outline-e" + etapa}>
                    <div className="d-flex wp-23">
                      <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mbp-20 mep-5 wp-20" alt="" />
                    </div>
                    <div>
                      <span className="fsp-16 text-start f-pixilate-regular">
                        <span className="fsp-16 f-IntroRustG-Base text-start">
                          REFLEXIONAR </span> en <br /> torno a lo que sé del desafío.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pc-caja-objetivos-2">
                <div className="color-hardDark fsp-16 lh-sm f-pixilate-regular text-start">
                  <div className={"d-flex " + bgc_cajas + " psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 pc-caja-outline-e" + etapa}>
                    <div className="d-flex wp-23">
                      <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mbp-25 mep-5 wp-20" alt="" />
                    </div>
                    <div className="d-flex">
                      <span className="fsp-16 text-start f-pixilate-regular">
                        <span className="fsp-16 f-IntroRustG-Base text-start">
                          RECONOCER</span>  lo que necesito <br /> saber para abordar el desafío.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pc-caja-objetivos-3">
                <div className="color-hardDark fsp-16 lh-sm f-pixilate-regular text-star">
                  <div className={"d-flex " + bgc_cajas + " psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 pc-caja-outline-e" + etapa}>
                    <div className="d-flex">
                      <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mbp-25 mep-5 wp-20" alt="" />
                    </div>
                    <div className="d-flex">
                      <span className="fsp-16 text-start f-pixilate-regular">
                        <span className="fsp-16 f-IntroRustG-Base text-start">
                          CONOCER</span>  las tareas y <br /> asumir uno de los roles de trabajo.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center mtp--10 mbp-50 ">
              <div className="">
                <img src={"images/page_" + pagina + "/img_003.jpg"} className="w-100" alt="" />
              </div>
            </div>
            {/* Begin pie de página */}
            <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
              <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "white" }}>
                ABP &copy; SM
              </div>
              <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
            </div>
            {/* End pie de página */}


          </div>
        </div>
      </div>

    </div>








    // <div className="wrapper bgc-light">
    //   <div className="d-flex flex-column align-items-center pbp-50">
    //     <div className="page bgc-bulma position-relative" id={"page_" + pagina}>
    //       <div className="w-100 mt-15 pe-5 ps-5 ">
    //         <div className="cb-lineas">
    //           <div className="cb-cabecera">
    //             <div className="cb-titulo color-white fsp-27 lh-sm f-pixilate-bold mtp--10">
    //               Mis objetivos <br /> en esta etapa son:
    //             </div>
    //             <div className="cb-cohete msp--10">
    //               <img
    //                 src="images/page_014/img_001.png"
    //                 className="hp-80"
    //                 alt=""
    //               />
    //             </div>
    //           </div>
    //           <div class="cb-contenedor-1">
    //             <div class="color-hardDark fsp-16 lh-sm f-pixilate-regular text-start">
    //               <div class="d-flex bgc-piccolo psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 cb-outline">
    //                 <div class="d-flex">
    //                 </div>
    //                 <div>
    //                   {" "}
    //                   <span class="fsp-16 f-IntroRustG-Base">
    //                     REFLEXIONAR
    //                   </span>{" "}
    //                   en
    //                   <br />
    //                   torno a lo que sé del desafío.
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div class="cb-contenedor-2">
    //             <div class="color-hardDark fsp-16 lh-sm f-pixilate-regular text-start">
    //               <div class="d-flex bgc-piccolo psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 cb-outline">
    //                 <div class="d-flex">
    //                 </div>
    //                 <div>
    //                   {" "}
    //                   <span class="fsp-16 f-IntroRustG-Base">
    //                    DESCUBRIR{" "}
    //                   </span>{" "}
    //                   lo que necesito
    //                   <br />
    //                   saber para abordar el desafío.
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div class="cb-contenedor-3">
    //             <div class="color-hardDark fsp-16 lh-sm f-pixilate-regular text-start">
    //               <div class="d-flex bgc-piccolo psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 cb-outline">
    //                 <div class="d-flex">
    //                 </div>
    //                 <div>
    //                   {" "}
    //                   <span class="fsp-16 f-IntroRustG-Base">
    //                     CONOCER
    //                   </span>{" "}
    //                   las tareas y
    //                   <br />
    //                   asumir uno de los roles de trabajo.
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="d-flex justify-content-center max-img mb-5">
    //           <div className="">
    //             <img
    //               src="images/page_014/img_003.jpg"
    //               className="img-fluid"
    //               alt=""
    //             />
    //           </div>
    //         </div>
    //         <div
    //           className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2"
    //           style={{ bottom: 70, right: 0 }}
    //         >
    //           <div
    //             className="f-Ubuntu-M fsp-10 position-absolute mbp-60"
    //             style={{ transform: `rotate(270deg)`, color: "dark" }}
    //           >
    //             ABP &copy; SM
    //           </div>
    //           <div className="bgc-jawa wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">
    //             {props.numeroPagina(pagina)}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}

export default Page014;
