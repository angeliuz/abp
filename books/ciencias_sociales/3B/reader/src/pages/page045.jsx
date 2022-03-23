import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import ModalBook from "../components/ModalBook";
import "./page_045.css";

function Page045(props) {

  const pagina = "045";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          {/* BEGIN CABECERA VERSIÓN 2 */}
          <div className="cabecera-v2 bgc-saitama d-flex flex-column">
            <div className="d-flex contenedor-cabecera-v2 align-items-center ptp-40 psp-30 pep-30">
              <div className="caja-seccion wp-160 hp-60 d-flex justify-content-center ptp-10 mtp-5 color-saitama fsp-24 f-IntroRustG-Base">SESIÓN 12</div>
              <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">Comenzamos a crear</div>
            </div>
          </div>
          {/* END CABECERA VERSIÓN 2 */}

          <div className="ptp-10 psp-60 mbp-0 contenedor-pagina">
            <div className="f-Ubuntu-B fsp-20 color-saitama text-start lhp-20">Musicalizando-ando</div>
            <div className="d-flex">
              {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_033/g_i.svg" alt="" /> */}
              <div className="f-ccdigitaldelivery-bold fsp-35 color-saitama">1</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start">Leo la revista, comprendo y completo.</div>
              <ModalBook id={"p" + pagina + "_book" + (indexInput += 1)} pagina={"74"} image={"images/page_" + pagina + "/img_001.svg"} clasesImagen="hp-40 text-center mtp-10 msp-10" className="p-0 px-0" />
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_045/img_001.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
            </div>
          </div>

          <div className="ptp-10 psp-100 pep-80 mbp-0 contenedor-pagina">
            <div className="col-md-12 col-lg-12 mbp-10 position-relative">
              <div className="position-absolute top-0 start-0 translate-middle"><img src="images/page_045/img_002.png" className="wp-40 msp--100 mtp-40" alt="" /></div>
              <div className="position-absolute top-100 start-0 translate-middle"><img src="images/page_045/img_003.png" className="hp-100 msp--80  mb-120" alt="" /></div>
              <div className="mbp-20 mtp-10  mep-20">
                <div className=" linea1 min-hp-150 p-2  ">
                  <div className="f-Ubuntu-L fsp-15 p-1 text-start">
                    Lo que más me llamó la atención de los ejemplos musicales que se presentan en la revista es…</div>
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                </div>
              </div>
            </div>
          </div>



          <div className="d-flex justify-content-center  msp-60 mep-40 mtp-40 mbp-150 ">
            <div className="w-90 h-100 position-relative ">

              <div className="position-absolute top-0 start-100 translate-middle img-parlante"><img src="images/page_045/img_005.png" className="hp-100 mtp-20 " alt="" /></div>

              <div className="row d-flex justify-content-center bgc-bobafett  sombra-contenedor-45 ">

                <div className="col-lg-5 col-sm-12 m-0 p-0 caja-sobre">

                  <div className="border-style-solid border-1 border-color-saitama mtp-10   bgc-white   position-relative  ">
                    <div className="position-absolute top-50 start-0 translate-middle  "><img src="images/page_045/img_008.png" className="hp-60 mep-40 mtp-100 " alt="" /></div>
                    <div className="d-flex   ">
                      <img className="hp-20 align-center mt-3 me-2 mb-2 msp--40" src="images/page_045/img_006.svg" alt="" />
                      <div className="f-ccdigitaldelivery-bold fsp-35 color-saitama">2</div>
                      <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-left">La música que queremos<br></br> incluir en nuestra fiesta será…</div>

                      {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_033/circ.png" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                    </div>
                    <div className="p-2">
                      <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-230" />
                    </div>
                  </div>
                </div>

                <div className="col-lg-7 col-sm-12  m-0 bgc-bobafett  ptp-20  position-relative">
                  <div className="position-absolute bottom-0 start-0  msp--250 "><img src="images/page_045/img_009.png" className="hp-120   visible-768 " alt="" /></div>


                  <div className="caja-debajo-45 mtp-10 position-relative border-style-solid border-1 border-color-saitama bgc-white  pbp-50">

                    <div className=" bgc-white w-220  ">
                      <div className=" msp-100 pep-20 ptp-20 psp-0   text-start">

                        <div className="d-flex bgc-white  w-100 ">
                          <img className="hp-20 align-center mt-3 me-2 mb-2  " src="images/page_045/img_007.svg" alt="" />
                          <div className="f-ccdigitaldelivery-bold fsp-35 color-saitama">3</div>
                          <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-left">Escribimos las ideas que queremos incluir en nuestra canción.</div>
                          {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_033/circ.png" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}

                        </div>
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-230" />

                        <div className="d-flex bgc-white  w-100 ">
                          {/* <img className="hp-20 align-center mt-3 me-2 mb-2  " src="images/page_045/img_007.svg" alt="" /> */}
                          <div className="f-ccdigitaldelivery-bold fsp-35 color-saitama">4</div>
                          <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-left  ">Escribimos nuestra canción y la guardamos para nuestra fiesta.</div>
                          {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_033/circ.png" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>



            </div>
          </div>














          <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
            <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>ABP &copy; SM</div>
            <div className="bgc-goku wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
          </div>

          <div className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end" style={{ bottom: 0 }}>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_investigacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-7 col-sm-2 p-0 m-0 position-relative">
              <img src="images/rotulo_creacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-1 col-sm-2 p-0 m-0 position-relative">
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

export default Page045;
