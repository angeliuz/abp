import React from "react";
import ModalVideo from "../components/ModalVideo";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check from "../components/Check";
// import esquinaAzul from "images/page_044/esquinaAzul.svg";
import "./page_048.css";

function Page048(props) {

  const pagina = "048";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-saitama d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 ptp-40 psp-30 pep-30">

            </div>

          </div>
          {/* END CABECERA VERSIÓN 2 */}




          <div className=" container-titulo-global mbp-∫0">
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_033/img_002.svg" alt=""  /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-saitama">4</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Escribo mi texto literario sobre la diversidad que presentaré en la fiesta.</div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.jpg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_043/img_001.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="d-flex mtp-40 msp-90 mep-60 position-relative">

            <div className="row w-100">

              <div className="cb-ep-paper-48 ">
                <div className="cb-ep-paper-content-48 f-Ubuntu-L text-start hp-700 ">
                  <div className="mtp-5 ">
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-500" />

                  </div>
                </div>
              </div>
            </div>

          </div>


          <div className="d-flex w-90 position-relative mtp-140 mbp-50">

            <div className="position-absolute bottom-0 start-0 mtp--60 cuadroIndex-5 "> <img className="  hp-150 mtp--50 msp-80 visible-768" src="images/page_048/img_004.png" alt="" /> </div>
            <div className="position-absolute bottom-0 start-50 translate-middle-x mtp--60 cuadroIndex-5 "> <img className="hp-215 msp-200 " src="images/page_048/img_003.png" alt="" />


              <div className=" rota-info">

                <div className="position-absolute top-50 start-50 translate-middle w-95 psp-90 pep-110 mep-30  msp-120 mtp--110 position-relative">
                  <div className="d-flex align-items-center pbp-10">
                    <div className="f-Ubuntu-L msp-10 fsp-15 lh-sm pep-5 w-100 text-start">Muestro mi texto literario a mis compañeros y decidimos cómo difundirlos en la feria de la diversidad:.</div>
                  </div>
                  <div className="d-flex align-items-center  pbp-10">
                    <div className="d-inline wp-30 hp-30 bgc-white"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></div>
                    <div className="f-Ubuntu-L msp-10 fsp-15 lh-sm pep-5 w-100 text-start">Haremos una copia en formato grande para que todos lo puedan ver..</div>
                  </div>
                  <div className="d-flex align-items-center pbp-10">
                    <div className="d-inline wp-30 hp-30 bgc-white"><Check id={"check" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" ></Check></div>
                    <div className="f-Ubuntu-L msp-10 fsp-15 lh-sm pep-5 w-100 text-start ">Haremos varias copias individuales para que podamos compartir con los asistentes a la feria..</div>
                  </div>
                  <div className="position-absolute top-0 start-100 translate-middle msp--140 mtp--20 zindex-1"><img src={"images/page_" + pagina + "/img_002.png"} className="wp-30" alt="" /></div>
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
          <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>

            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-7 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_creacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-1 position-relative col-sm-2 p-0 m-0">
              <img src="images/rotulo_difusion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
              <div className="w-100 hp-25 bgc-pikachu"></div>
            </div>
          </div>


        </div>
      </div>
    </div>

  );
}

export default Page048;
