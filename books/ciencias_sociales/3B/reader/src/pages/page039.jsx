import React from "react";
import InputBox from "../components/InputBox";
// import ModalVideo from "../components/ModalVideo";

import "./page_039.css";

function Page039(props) {

  const pagina = "039";
  var indexInput = 0;
  const etapa = "4"
  const background = "bgc-pidgey";
  const color = "color-pidgey";
  const colorSesion = "color-primary";
  const borderColor = "border-color-pidgey"
  const borderColorTabla = "border-color-pantro"
  const bgc_cajas = "bgc-pantro";

  return (

    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
          <div className={"dosier-e"+etapa+" page bgc-white overflow-hidden position-relative"} id={"page_"+pagina}>
              <img src={"images/cabecera/dosier_e"+etapa+".svg"} className="w-100" alt=""/>

                <div className="position-relative w-100 mbp-40">
                    <div className="psp-80 pep-70 ptp-30 pbp-0 position-relative">
                        <div className="fsp-16 f-Ubuntu-R text-start psp-50 pbp-10">Esta página fue completada por:</div>
                        <div className="psp-50 pep-50 ptp-5 pbp-5 bgc-white rounded-p-10 border-style-solid border-1 border-color-pidgey d-flex justify-content-center position-relative">
                            <div className="position-absolute top-50 start-100 translate-middle wp-100 msp-0 mtp--10"><img src="images/page_039/escuela.png" className="w-100" alt="" /></div>
                            <div className="position-absolute top-50 start-0 translate-middle msp-0 mtp--10"><img src="images/page_039/circulo.png" className="wp-80" alt="" /></div>
                            <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) }  className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
                        </div>
                    </div>
                </div>

                <div className="d-flex msp-60 mep-60 mbp-100">

                    <div className="row m-0 p-2 w-100 ">
                        <div className="col-md-12 col-lg-12 position-relative">
                           <div className="position-absolute top-0 start-100 msp--60 mtp-0"><img src="images/page_039/pincho.svg" className="wp-35 " alt="" /></div>
                           <div className="position-absolute top-0 start-0 msp-10 mtp-0"><img src="images/page_039/pincho.svg" className="wp-35 " alt="" /></div>
                           <div className="position-absolute top-50 start-0 msp-0 mtp-80 visible-768"><img src="images/page_039/lapiz.png" className="wp-50 " alt="" /></div> 

                            <div className="d-flex flex-column mbp-20 mtp-10 p-2 w-100 border-style-solid border-1 border-color-dark bgc-jaga">
                            <div className="col-md-12 col-lg-12 position-relative text-center f-Ubuntu-R fsp-15">En esta etapa aprendimos que en nuestra escuela…</div>
                                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-280" />
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-12 position-relative">
                           <div className="position-absolute top-0 start-0 msp-5 mtp-15"><img src="images/page_039/punta.svg" className="wp-20" alt="" /></div>
                           <div className="position-absolute top-0 start-100 msp--30 mtp-15"><img src="images/page_039/punta.svg" className="wp-20" style={{ transform: `rotate(90deg)`}} alt="" /></div>
                           <div className="position-absolute top-100 start-100 msp--30 mtp--40"><img src="images/page_039/punta.svg" className="wp-20" style={{ transform: `rotate(180deg)`}} alt="" /></div>
                           <div className="position-absolute top-100 start-0 msp-5 mtp--40"><img src="images/page_039/punta.svg" className="wp-20" style={{ transform: `rotate(270deg)`}} alt="" /></div>

                           <div className="position-absolute top-0 start-100 msp--120 mtp--15 visible-768"><img src="images/page_039/carta.png" className="wp-60 " alt="" /></div> 

                            <div className="d-flex flex-column mbp-20 mtp-20 p-2 w-100 border-style-solid border-4 border-color-vegeta bgc-white">
                                <div className="col-md-12 col-lg-12 position-relative text-start f-Ubuntu-R fsp-15">Creemos que el decálogo de principios que elaboramos permitirá….</div>
                                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-250" />
                            </div>
                        </div>

                    </div>
                </div>



              {/* PIE DE PAGINA */}
              <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
                  <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                    ABP &copy; SM
                  </div>
                  <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
              </div>

            </div>
        </div>
    </div>


  );
}

export default Page039;
