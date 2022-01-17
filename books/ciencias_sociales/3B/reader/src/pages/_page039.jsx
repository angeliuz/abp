import React from "react";
import InputBox from "../components/InputBox";
// import ModalVideo from "../components/ModalVideo";
import "./page_039.css";

function Page039(props) {

  const pagina = "039";
  var indexInput = 0;

  return (
      <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-20">
          <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>

          <img src="images/page_039/cabecera.svg" alt="" />
                <div className="position-relative w-100">
                    <div className="psp-80 pep-70 ptp-30 pbp-60">
                        <div className="f-Ubuntu-R fsp-18 psp-60 ptp-10 pbp-10"> Esta página es completada por:</div>
                        <div className="d-flex">
                            <img src="images/page_039/img_001.png" alt="" className="tf-notebook mtp--10 mlp--30 hp-70" />
                            <div className="p-4 bgc-white rounded-p-10 border border-color-pidgey w-100"></div>
                            <img src="images/page_039/img_002.png" alt="" className="tf-crayones text-align-right mtp--10 hp-70" />
                        </div>
                        <div className="ptp-20">
                            <div className="bgc-white border border-color-dark rounded-p-10">
                                <div className="bgc-guile mxwp-230 rounded-p-10">
                                    <div className="f-Ubuntu-R psp-20 py-2">La encuesta nos permitió:</div>
                                </div>
                                <div className="psp-20 pep-20 pbp-20">
                                    <div className="linea pbp-20"></div>
                                    <div className="linea pbp-20"></div>
                                    <div className="linea pbp-20"></div>
                                    <div className="linea pbp-20"></div>
                                    <div className="linea pbp-20"></div>
                                    <div className="linea pbp-20"></div>
                                </div>
                            </div>
                            <div className="ptp-30"></div>
                            <div className="bgc-white border border-color-dark rounded-p-10">
                                <div className="bgc-chitara mxwp-280 rounded-p-10">
                                    <div className="f-Ubuntu-R psp-20 py-2">Y consulta pública nos sirvió para:</div>
                                </div>
                                <div className="psp-20 pep-20 pbp-20">
                                    <div className="linea pbp-20"></div>
                                    <div className="linea pbp-20"></div>
                                    <div className="linea pbp-20"></div>
                                    <div className="linea pbp-20"></div>
                                    <div className="linea pbp-20"></div>
                                    <div className="linea pbp-20"></div>
                                </div>
                            </div>
                            <div className="ptp-30"></div>
                            <div className="bgc-white border border-color-dark rounded-p-10">
                                <div className="bgc-tigro mxwp-520 rounded-p-10">
                                    <div className="f-Ubuntu-R psp-20 py-2"> Las ventajas de nuestra propuesta de
                                        alimentación saludable son:</div>
                                </div>
                                <div className="psp-20 pep-20 pbp-20">
                                    <div className="linea pbp-20"></div>
                                    <div className="linea pbp-20"></div>
                                    <div className="linea pbp-20"></div>
                                    <div className="linea pbp-20"></div>
                                    <div className="linea pbp-20"></div>
                                    <div className="linea pbp-20"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
              <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
              <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
            </div>

          </div>
        </div>
      </div>
  );
}

export default Page039;
