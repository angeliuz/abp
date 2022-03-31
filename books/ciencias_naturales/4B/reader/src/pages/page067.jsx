import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";

import "./page_067.css";

function Page067(props) {

  const pagina = "067";
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
        <div className={"dosier-e" + etapa + " page bgc-white overflow-hidden position-relative"} id={"page_" + pagina}>
          <img src={"images/cabecera/dosier_e" + etapa + ".svg"} className="w-100" alt="" />
          <div className="position-relative w-100 mbp-10">
            <div className="psp-80 pep-70 ptp-30 pbp-0 position-relative">
              <div className="fsp-16 f-Ubuntu-R text-start psp-50 pbp-10">Esta página ha sido completada por:</div>
              <div className={"psp-50 pep-50 ptp-5 pbp-5 bgc-white rounded-p-10 border-style-solid border-1 " + borderColor + " d-flex justify-content-center position-relative"}>
                <div className="position-absolute top-50 start-100 translate-middle wp-100 msp-0 mtp--10"><img src={"images/page_" + pagina + "/img_002.png"} className="w-80" alt="" /></div>
                <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp--10"><img src={"images/page_" + pagina + "/img_001.png"} className="wp-60" alt="" /></div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea w-100 lhp-35 min-hp-35" />
              </div>
            </div>
          </div>


          <div className="cb-6 mbp-90">

            <div className=" ptp-10 pbp-10 mtp-30 cb-650 pep-20 psp-20 mx-auto position-relative">
              <img src="images/page_067/img_005.png" class="w-110 cb-fondohoja-p67 position-absolute" alt=""></img>
              <div className="w-100 cb-cajas-top f-Ubuntu-L fsp-15 justify-content-between">
                <div className="hp-190 mx-290 w-100 bgc-white rounded-p-10 border-style-solid border-1 border-color-saitama zindex-10">
                  <div className="wp-200 text-start p-2 bgc-senhe cb-borde-desigual"> Antes creíamos que nuestra brigada sería:</div>
                  <div className="text-start psp-10 pep-10" >
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                  </div>
                </div>
                <div className="hp-190 mx-290 w-100 bgc-white rounded-p-10 border-style-solid border-1 border-color-saitama zindex-10 position-relative">
                  <img src="images/page_067/img_003.png" class="wp-80 cb-mega-p67 position-absolute" alt=""></img>
                  <div className="wp-200 text-start p-2 bgc-senhe  cb-borde-desigual">Ahora sabemos que nuestra brigada sería:</div>
                  <div className="text-start psp-10 pep-10" >
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                  </div>
                </div>
              </div>
              <div className="w-100  cb-cajas-top f-Ubuntu-L fsp-15 justify-content-between mtp-20">
                <div className="hp-190 mx-290 w-100 bgc-white rounded-p-10 border-style-solid border-1 border-color-saitama zindex-10 position-relative">
                  <img src="images/page_067/img_004.png" class="wp-80 cb-bino-p67 position-absolute" alt=""></img>
                  <div className="wp-200 text-start p-2 bgc-senhe  cb-borde-desigual">Lo que ha cambiado desde un inicio es:</div>
                  <div className="text-start psp-10 pep-10" >
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                  </div>
                </div>
                <div className="hp-190 mx-290 w-100 bgc-white rounded-p-10 border-style-solid border-1 border-color-saitama zindex-10">
                  <div className="wp-200 text-start p-2 bgc-senhe cb-borde-desigual">Los cambios se deben a:</div>
                  <div className="text-start psp-10 pep-10" >
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-120" />
                  </div>
                </div>
              </div>
            </div>

            {/* FIN EJERCICIO UNO*/}
            <div className="cb-paper">
              <div className="cb-paper-content f-Ubuntu-L border-style-solid border-1 border-color-saitama rounded-p-10 position-relative">
                <img src="images/page_067/img_006.png" class="wp-30 top-0 end-0 position-absolute" alt=""></img>
                <div className="text-start f-Ubuntu-L fsp-15 mtp-10"> Con la brigada queremos que en el colegio se sientan</div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                <div className="text-start f-Ubuntu-L fsp-15 mtp-10">porque: </div>
                <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="px-1 msp--10 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
              </div>
            </div>
          </div>
          {/* FIN EJERCICIO DOS*/}



          {/* BEIGN PIE DE PAGINA */}
          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>
          {/* END PIE DE PAGINA */}
        </div>
      </div>
    </div>

    // <div className="wrapper bgc-light">
    //         <div className="d-flex flex-column align-items-center pbp-20">
    //           <div className="page cb-page67 bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
    //             {/* contenido DE PAGINA */}



    //             {/* PIE DE PAGINA */}
    //             <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
    //               <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
    //                 ABP &copy; SM
    //               </div>
    //               <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
    //             </div>
    //              {/* FIN PIE DE PAGINA */}

    //         </div>
    //     </div>
    // </div>





  );
}

export default Page067;
