import React from "react";
import "./page_046.css";

function Page046(props) {

  const pagina = "046";
  var indexInput = 0;
  const etapa = "4"
  const background = "bgc-pidgey";
  const bgc_cajas = "bgc-tertiary";

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
                          Realizar
                        </span>
                        <br /> <span className="fsp-16 text-start f-Ubuntu-R">
                              las entrevistas. </span>
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
                          Analizar</span> <br /> <span className="fsp-16 text-start f-Ubuntu-R">
                              las entrevistas. </span>
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
                          Transcribir</span> <br /> <span className="fsp-16 text-start f-Ubuntu-R">
                              las entrevistas. </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pc-caja-objetivos-4">
                <div className="color-hardDark fsp-16 lh-sm f-pixilate-regular text-star">
                  <div className={"d-flex " + bgc_cajas + " psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 pc-caja-outline-e" + etapa}>
                    <div className="d-flex">
                      <img src={"images/generales/flecha_e" + etapa + ".svg"} className="mbp-20 mep-5 wp-20" alt="" />
                    </div>

                    <div className="d-flex">
                      <span className="fsp-16 text-start f-pixilate-regular">
                        <span className="fsp-16 f-IntroRustG-Base text-start">
                          Valorar</span> <br /> <span className="fsp-16 text-start f-Ubuntu-R">
                              el trabajo realizado. </span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center max-img mbp-50 ">
              <div className="">
                <img src="images/page_046/imagen.jpg" className="img-fluid" alt="" />
              </div>
            </div>
            {/* Begin pie de p??gina */}
            <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
              <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                ABP &copy; SM
              </div>
              <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
            </div>
            {/* End pie de p??gina */}


          </div>
        </div>
      </div>

    </div>

  );
}

export default Page046;
