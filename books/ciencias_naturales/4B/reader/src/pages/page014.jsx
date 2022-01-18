import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_014.css";

function Page014(props) {
  const pagina = "014";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-50">
        <div className="page bgc-bulma position-relative" id={"page_" + pagina}>
          <div className="w-100 mt-15 pe-5 ps-5 ">
            <div className="cb-lineas">
              <div className="cb-cabecera">
                <div className="cb-titulo color-white fsp-27 lh-sm f-pixilate-bold mtp--10">
                  Mis objetivos <br /> en esta etapa son:
                </div>
                <div className="cb-cohete msp--10">
                  <img
                    src="images/page_014/img_001.png"
                    className="hp-80"
                    alt=""
                  />
                </div>
              </div>
              <div class="cb-contenedor-1">
                <div class="color-hardDark fsp-16 lh-sm f-pixilate-regular text-start">
                  <div class="d-flex bgc-piccolo psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 cb-outline">
                    <div class="d-flex">
                    </div>
                    <div>
                      {" "}
                      <span class="fsp-16 f-IntroRustG-Base">
                        REFLEXIONAR
                      </span>{" "}
                      en
                      <br />
                      torno a lo que sé del desafío.
                    </div>
                  </div>
                </div>
              </div>
              <div class="cb-contenedor-2">
                <div class="color-hardDark fsp-16 lh-sm f-pixilate-regular text-start">
                  <div class="d-flex bgc-piccolo psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 cb-outline">
                    <div class="d-flex">
                    </div>
                    <div>
                      {" "}
                      <span class="fsp-16 f-IntroRustG-Base">
                       DESCUBRIR{" "}
                      </span>{" "}
                      lo que necesito
                      <br />
                      saber para abordar el desafío.
                    </div>
                  </div>
                </div>
              </div>
              <div class="cb-contenedor-3">
                <div class="color-hardDark fsp-16 lh-sm f-pixilate-regular text-start">
                  <div class="d-flex bgc-piccolo psp-20 ptp-20 pbp-15 pep-20 rounded-p-10 cb-outline">
                    <div class="d-flex">
                    </div>
                    <div>
                      {" "}
                      <span class="fsp-16 f-IntroRustG-Base">
                        CONOCER
                      </span>{" "}
                      las tareas y
                      <br />
                      asumir uno de los roles de trabajo.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-center max-img mb-5">
              <div className="">
                <img
                  src="images/page_014/img_003.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
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
              <div className="bgc-jawa wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">
                {props.numeroPagina(pagina)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page014;
