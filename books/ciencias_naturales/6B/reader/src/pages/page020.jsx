import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";

import "./page_020.css";

function Page020(props) {
  const pagina = "020";
  var indexInput = 0;
  const etapa = "3";
  const background = "bgc-android18";
  const bgc_cajas = "bgc-azuka";

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className={"page " + background + " position-relative pagina-cohete"}
          id={"page_" + pagina}
        >
          <div className="w-100 mt-15 pe-5 ps-5 ">
            <div className="pc-lineas-v2 pbp-80">
              <div className="pc-cabecera">
                <div className="pc-titulo-12 color-white fsp-20 lh-sm f-durotype-aspiranar-bold">
                  Mis objetivos <br /> en esta etapa son:
                </div>
                <div className="pc-cohete">
                  <img src="images/generales/cohete.png" alt="" />
                </div>
              </div>

              <div className="pc-caja-objetivos-1">
                <div className="color-hardDark fsp-16 lh-sm f-pixilate-regular text-start">
                  <div
                    className={
                      "d-flex " +
                      bgc_cajas +
                      " psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 pc-caja-outline-e" +
                      etapa
                    }
                  >
                    <div className="d-flex wp-23">
                      <img
                        src={"images/generales/flecha_e" + etapa + ".svg"}
                        className="mbp-40 mep-5 wp-20"
                        alt=""
                      />
                    </div>
                    <div>
                      <span className="fsp-16 text-start f-Ubuntu-R">
                        <span className="fsp-16 f-IntroRustG-Base text-start">
                          RECOPILAR
                        </span>{" "}
                        informaciĆ³n
                        <br />
                        sobre las energĆ­as
                        <br /> renovables y sus usos.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pc-caja-objetivos-2">
                <div className="color-hardDark fsp-16 lh-sm f-pixilate-regular text-start">
                  <div
                    className={
                      "d-flex " +
                      bgc_cajas +
                      " psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 pc-caja-outline-e" +
                      etapa
                    }
                  >
                    <div className="d-flex wp-23">
                      <img
                        src={"images/generales/flecha_e" + etapa + ".svg"}
                        className="mbp-40 mep-5 wp-20"
                        alt=""
                      />
                    </div>
                    <div className="d-flex">
                      <span className="fsp-16 text-start f-Ubuntu-R">
                        <span className="fsp-16 f-IntroRustG-Base text-start">
                          IDENTIFICAR
                        </span>{" "}
                        soluciones <br />
                        para aprovechar las<br />
                        energĆ­as renovables.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pc-caja-objetivos-3">
                <div className="color-hardDark fsp-16 lh-sm f-pixilate-regular text-star">
                  <div
                    className={
                      "d-flex " +
                      bgc_cajas +
                      " psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 pc-caja-outline-e" +
                      etapa
                    }
                  >
                    <div className="d-flex">
                      <img
                        src={"images/generales/flecha_e" + etapa + ".svg"}
                        className="mbp-40 mep-5 wp-20"
                        alt=""
                      />
                    </div>
                    <div className="d-flex">
                      <span className="fsp-16 text-start f-Ubuntu-R">
                        <span className="fsp-16 f-IntroRustG-Base text-start">
                          CONSTRUIR
                        </span>{" "}
                        una <br /> infografĆ­a sobre la<br />
                        investigaciĆ³n.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pc-caja-objetivos-4 caja-4">
                <div className="color-hardDark fsp-16 lh-sm f-pixilate-regular text-star">
                  <div
                    className={
                      "d-flex " +
                      bgc_cajas +
                      " psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 pc-caja-outline-e" +
                      etapa
                    }
                  >
                    <div className="d-flex">
                      <img
                        src={"images/generales/flecha_e" + etapa + ".svg"}
                        className="mbp-40 mep-5 wp-20"
                        alt=""
                      />
                    </div>
                    <div className="d-flex">
                      <span className="fsp-16 text-start f-Ubuntu-R">
                        <span className="fsp-16 f-IntroRustG-Base text-start">
                          VALORAR
                        </span>{" "}
                        cĆ³mo se <br />
                        trabaja en equipo y<br />
                        quĆ© se puede mejorar.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center mtp--80 mbp-50 ">
              <div className="">
                <img
                  src={"images/page_" + pagina + "/imagen.png"}
                  className="w-100"
                  alt=""
                />
              </div>
            </div>
            {/* Begin pie de pĆ”gina */}
            <div
              className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2"
              style={{ bottom: 70, right: 0 }}
            >
              <div
                className="f-Ubuntu-M fsp-10 position-absolute mbp-60"
                style={{ transform: `rotate(270deg)`, color: "dark" }}
              >
                ABP &copy; SM
              </div>
              <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">
                {props.numeroPagina(pagina)}
              </div>
            </div>
            {/* End pie de pĆ”gina */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page020;
