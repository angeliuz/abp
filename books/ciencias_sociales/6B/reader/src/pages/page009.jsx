import React from "react";
import InputBox from "../components/InputBox";

import "./page_009.css";

function Page009(props) {

  const pagina = "009";
  var indexInput = 0;


  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="cb-page09 page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* <img src="images/page_009/cabecera.svg" className="cb-dossier" alt="" /> */}


          <div className="d-flex msp-90 mep-90 mtp-170 mbp-100">

            <div className="row m-0 p-2 w-100 ">

              <div className="col-sm-12 col-md-12 position-relative">

                <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp--10 visible-768"><img src="images/page_009/img_001.png" className="wp-70 " alt="" /></div>
                <div className="position-absolute top-50 start-100 translate-middle msp-0 mtp-0 visible-768"><img src="images/page_009/img_002.png" className="wp-60 " alt="" /></div>
                <div className="fsp-16 f-Ubuntu-R text-start psp-20 pbp-10 text-start">Esta página fue completada por:</div>
                <div className="bgc-white exterior-caja-v1 border-style-solid  border-color-goten border-2 w-100 p-2 f-Ubuntu-L fsp-15 mbp-20">
                  <div className="d-flex flex-column position-relative w-100 psp-20 psp-20">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                  </div>
                </div>

              </div>
              <div className="col-sm-12 col-md-12 position-relative">
                <div className="position-absolute top-50 start-100 translate-middle msp--20 mtp-60 visible-768 zindex-1"><img src="images/page_009/img_003.png" className="wp-80 " alt="" /></div>
                <div className="bgc-white exterior-caja-v1 w-100 p-2 f-Ubuntu-L fsp-15 mbp-20 border-style-solid border-color-dark border-1 cb-outline-p9">
                  <div className="d-flex flex-column position-relative w-100">
                    <div className="fsp-16 f-Ubuntu-R text-start psp-0 pbp-10 text-center">Nuestro equipo lo formamos...</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" />
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-12 position-relative">
                <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp-0 visible-768 zindex-1"><img src="images/page_009/img_005.png" className="wp-60 " alt="" /></div>
                <div className="bgc-white exterior-caja-v1 w-100 p-2 f-Ubuntu-L fsp-15 mbp-20 border-style-solid border-color-dark border-1 cb-outline-p9">
                  <div className="d-flex flex-column position-relative w-100">
                    <div className="fsp-16 f-Ubuntu-R text-start psp-0 pbp-10 text-center"> En el proyecto nos comprometemos a...</div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
                  </div>
                </div>
              </div>


              <div className="col-sm-12 col-md-12 position-relative">
              <div className="position-absolute top-100 start-100 translate-middle msp--40  visible-768 zindex-1"><img src={"images/page_" + pagina + "/img_007.png"} className="wp-120" alt="" /></div>
                <div className="position-absolute top-50 start-0 translate-middle msp-10 mtp--20 visible-768 zindex-1"><img src="images/page_009/img_006.png" className="wp-30 " alt="" /></div>
                <div className="bgc-white exterior-caja-v1 w-100 p-2 f-Ubuntu-L fsp-15 mbp-20 border-style-solid border-color-dark border-1 cb-outline-p9">
                  <div className="d-flex flex-column position-relative w-100">
                    <div className="fsp-16 f-Ubuntu-R text-start psp-0 pbp-10 text-start"> Cada integrante del grupo escoge un seudónimo artístico. Aquí reflejamos nuestro compromiso con los seudónimos que seleccionamos.</div>
                    <div className="row d-flex f-Ubuntu-R fsp-15 mbp-20 ">
                      <div className="position-relative">
                        
                      </div>

                      <div className="col-sm-12 col-md-4 align-items-stretch">
                        <div className="h-100 text-center bgc-white w-100 rounded-p-10  mtp-10">
                          <div className="h-100 psp-15 pep-15">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="h-100 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-4 align-items-stretch">
                        <div className="h-100 text-center bgc-white w-100 rounded-p-10 mtp-10">
                          <div className="h-100 psp-15 pep-15">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="h-100 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-4 align-items-stretch">
                        <div className="h-100 text-center bgc-white w-100 rounded-p-10 mtp-10">
                          <div className="h-100 psp-15 pep-15">
                            <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="h-100 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-100" />
                          </div>
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

        </div>
      </div>
    </div >


  );
}

export default Page009;
