import React from "react";
import "./page_044.css";

function Page044(props) {
  const pagina = "044";
  var indexInput = 0;

  return (
      <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-20">
          <div className="page bgc-pidgey position-relative" id={"page_"+pagina}>
            <div className="w-100 mt-15 pe-5 ps-5 ">
              {/* Begin background lineas */}
              <div className="lineas-p44">

                <div className="cabecera-p44">
                    <div className="titulo-p44 color-white fsp-20 lh-sm f-durotype-aspiranar-bold">Mis objetivos<br />en esta etapa son:</div>
                    <div className="cohete-p44"><img src="images/page_044/nave.png" alt=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 pp-5 m-0">
                        <div className="cuadro text-center ptp-18 fsp-15 f-colby-extra-regular float-end centrar-experimentacion"><img src="images/page_044/flecha.svg" alt="" className="wp-20 pep-5 pbp-5" /><span className="mtp-5 f-IntroRustG-Base">CONOCER</span> las tareas de<br />la brigada.</div>
                    </div>
                    <div className="col-12 pp-5 m-0">
                        <div className="cuadro text-center ptp-18 fsp-15 f-colby-extra-regular float-start centrar-experimentacion"><img src="images/page_044/flecha.svg" alt="" className="wp-20 pep-5 pbp-5" /><span className="mtp-5 f-IntroRustG-Base">SIMULAR</span> una situación<br />de emergencia.</div>
                    </div>
                    <div className="col-12 pp-5 m-0">
                        <div className="cuadro text-center ptp-18 fsp-15 f-colby-extra-regular float-end centrar-experimentacion"><img src="images/page_044/flecha.svg" alt="" className="wp-20 pep-5 pbp-5" /><span className="mtp-5 f-IntroRustG-Base">EVALUAR</span> la misión de la brigada<br />ante el simulacro de emergencia.</div>
                    </div>
                    {/* <div className="col-12 pp-5 m-0">
                        <div className="cuadro text-center ptp-18 fsp-15 f-colby-extra-regular float-start centrar-experimentacion"><img src="images/page_044/flecha.svg" alt="" className="wp-20 pep-5 pbp-5" /><span className="mtp-5 f-IntroRustG-Base">REFLEXIONAR</span> sobre nuestro<br />trabajo en equipo.</div>
                    </div> */}
                </div>

              </div>
              {/* End background lineas */}

              <div className="d-flex justify-content-center max-img mb-5 ptp-20">
                <div>
                  <img src="images/page_044/imagen.jpg" className="img-fluid" alt="" />
                </div>
              </div>
            
              {/* Begin pie de página */}
              <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "white" }}>ABP &copy; SM</div>
                <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
              </div>
              {/* End pie de página */}
            
            </div>
          </div>
        </div>
      </div>

  );
}

export default Page044;
