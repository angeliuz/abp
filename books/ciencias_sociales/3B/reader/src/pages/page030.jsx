import React from "react";
import InputBox from "../components/InputBox";
// import ModalVideo from "../components/ModalVideo";

import "./page_030.css";

function Page030(props) {
  const pagina = "030";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="cb-page30 page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          <div className="d-flex msp-60 mep-60 mbp-100">
            <div className="row m-0 p-2 w-100 ">
              <div className="col-sm-12 col-md-6 col-lg-6 position-relative">
                <div className="caja-30-1 mbp-20 mtp-100 p-2 w-100 border-style-solid border-4  bgc-white">
                <div className="position-absolute top-0 start-50 translate-middle-x mtp-60">
                  <img src="images/page_030/img_001.png" className=" wp-50" alt="" />
                </div>
                <div className="position-absolute top-0 end-0 mtp-90">
                  <img src="images/page_030/img_003.png" className=" " alt="" />
                </div>
                  <div className="text-start f-Ubuntu-R fsp-15 psp-10">
                    Lo que más nos gustó
                    <br /> hacer en esta etapa fue…
                  </div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-380"
                  />
                </div>
              </div>

              <div className="col-sm-12 col-md-6 col-lg-6 position-relative">
                <div className="caja-30-2 mbp-20 mtp-100 p-2 w-100 border-style-solid  bgc-white position-relative">
                <div className="position-absolute top-0 end-0 mtp--30">
                  <img src="images/page_030/img_001.png" className=" wp-50" alt="" />
                </div>
                <div className="position-absolute top-0 start-0 mtp--50">
                  <img src="images/page_030/img_002.png" className=" " alt="" />
                </div>
                  <div className="  text-start f-Ubuntu-R fsp-15 psp-10">
                    Nos gustaría saber más sobre…
                  </div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-400"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* PIE DE PAGINA */}
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
            <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">
              {props.numeroPagina(pagina)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page030;
