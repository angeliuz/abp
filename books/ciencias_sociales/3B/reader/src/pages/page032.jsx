import React from "react";
import "./page_032.css";

function Page032(props) {
  const pagina = "032";
  var indexInput = 0;

  return (
      <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-20">
          <div className="page bgc-pidgey position-relative" id={"page_"+pagina}>
            <div className="w-100 mt-15 pe-5 ps-5 ">
              {/* Begin background lineas */}
              <div className="cb-lineas">

                <div className="cb-cabecera">
                    <div className="cb-titulo color-white fsp-20 lh-sm f-durotype-aspiranar-bold">Mis objetivos<br />en esta etapa son:</div>
                    <div className="cb-cohete"><img src="images/page_032/nave.png" alt=""/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 pp-5 m-0">
                        <div className="cuadro text-center ptp-18 fsp-15 f-colby-extra-regular float-end centrar"><img src="images/page_032/flecha.svg" alt="" className="wp-20 pep-5 pbp-5" /><span className="mtp-5 f-IntroRustG-Base">ENCUESTAR</span> a compañeros sobre<br />sus características e intereses.</div>
                    </div>
                    <div className="col-12 pp-5 m-0">
                        <div className="cuadro1 text-center ptp-18 fsp-15 f-colby-extra-regular centrar"><img src="images/page_032/flecha.svg" alt="" className="wp-20 pep-5 pbp-5" /><span className="mtp-5 f-IntroRustG-Base">IDENTIFICAR</span> la diversidad que<br />existe en nuestra<br />comunidad escolar.</div>
                    </div>
                    <div className="col-12 pp-5 m-0">
                        <div className="cuadro1 text-center ptp-18 fsp-15 f-colby-extra-regular float-end centrar"><img src="images/page_032/flecha.svg" alt="" className="wp-20 pep-5 pbp-5" /><span className="mtp-5 f-IntroRustG-Base">ELABORAR</span> un decálogo de<br />respeto y tolerancia a la<br />diversidad.</div>
                    </div>
                    <div className="col-12 pp-5 m-0">
                        <div className="cuadro text-center ptp-18 fsp-15 f-colby-extra-regular centrar"><img src="images/page_032/flecha.svg" alt="" className="wp-20 pep-5 pbp-5" /><span className="mtp-5 f-IntroRustG-Base">REFLEXIONAR</span> sobre nuestro<br />trabajo en equipo.</div>
                    </div>
                </div>

              </div>
              {/* End background lineas */}

              <div className="d-flex justify-content-center max-img mb-5 ptp-20">
                <div>
                  <img src="images/page_032/imagen.jpg" className="img-fluid" alt="" />
                </div>
              </div>
            
              {/* Begin pie de página */}
              <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
                <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
              </div>
              {/* End pie de página */}
            
            </div>
          </div>
        </div>
      </div>

  );
}

export default Page032;
