import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_023.css";

function Page023(props) {

  const pagina = "023";
  var indexInput = 0;
  const etapa = "3"
  const background = "bgc-android18";
  const color = "color-android18";
  const borderColor = "border-color-android18"
  const bgc_cajas = "bgc-goku";

  return (
    <div className="wrapper bgc-light">
    <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
            <div className={"cabecera-v1 hp-80 "+background}>

            </div>

            <div className="ptp-30 container-titulo-global mbp-40">
                {/* <div className={"f-Ubuntu-B fsp-20 psp-40 text-start lhp-20 "+color}>
                Tiempo de degradación de los desechos
                </div> */}
                <div className="d-flex">
                    {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_002.svg"} alt=""  /> */}
                    <div className={"f-ccdigitaldelivery-bold fsp-35 "+color}>3</div>
                    <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                    Realizamos la siguiente actividad experimental para poner a prueba la predicción.
                    </div>
                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                    {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/revista.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
                </div>
            </div>

            <div className="d-flex msp-60 mep-60 mbp-0">

              <div className="row m-0 p-0  w-100">
                  <div className="col-sm-12 col-md-6 pbp-20 ">
                    <div className="d-flex flex-column align-items-center">
                        <div className="d-flex  p-2 position-relative zindex-1">
                          <div className="position-absolute top-0 start-0 msp-0 mtp-0 zindex-1">
                            <div className="psp-10 pep-10 ptp-5 pbp-5 bgc-android18 border-style-solid border-color-white border-2 fsp-12 f-ccdigitaldelivery-bold color-white">Paso 1</div>
                          </div>
                            <img src={"images/page_"+pagina+"/img_001.png"} className="w-100 max-wp-280"  alt=""  />

                        </div>
                      <div className="bgc-urien mtp--30 ptp-30 pbp-10 psp-10 pep-10 border-style-double border-4 border-color-bulma w-95 max-wp-250 text-start fsp-15 f-Ubuntu-R">Rotular los recipientes. Luego, colocar la misma cantidad de tierra en cada uno.</div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 pbp-20 ">
                    <div className="d-flex flex-column align-items-center">
                        <div className="d-flex  p-2 position-relative zindex-1">
                          <div className="position-absolute top-0 start-0 msp-0 mtp-0 zindex-1">
                            <div className="psp-10 pep-10 ptp-5 pbp-5 bgc-android18 border-style-solid border-color-white border-2 fsp-12  f-ccdigitaldelivery-bold color-white">Paso 2</div>
                          </div>
                            <img src={"images/page_"+pagina+"/img_001.png"} className="w-100 max-wp-280"  alt=""  />

                        </div>
                      <div className="bgc-urien mtp--30 ptp-30 pbp-10 psp-10 pep-10 border-style-double border-4 border-color-bulma w-95 max-wp-250 text-start fsp-15 f-Ubuntu-R">En el recipiente 1, colocar una cáscara de plátano. En el recipiente 2, poner una bolsa de té y en el 3 una tapa plástica.</div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 pbp-20 ">
                    <div className="d-flex flex-column align-items-center">
                        <div className="d-flex  p-2 position-relative zindex-1">
                          <div className="position-absolute top-0 start-0 msp-0 mtp-0 zindex-1">
                            <div className="psp-10 pep-10 ptp-5 pbp-5 bgc-android18 border-style-solid border-color-white border-2 fsp-12 f-ccdigitaldelivery-bold color-white">Paso 3</div>
                          </div>
                            <img src={"images/page_"+pagina+"/img_001.png"} className="w-100"  alt=""  />

                        </div>
                      <div className="bgc-urien mtp--30 ptp-30 pbp-10 psp-10 pep-10 border-style-double border-4 border-color-bulma w-95 max-wp-250 text-start fsp-15 f-Ubuntu-R">Ubicar los recipientes en un lugar al aire libre y a la sombra durante 20 días. Cada 4 días observen los cambios que presenten los desechos.</div>
                    </div>
                  </div>
              </div>
            </div>


            <div className="ptp-30 container-titulo-global mbp-100">
                {/* <div className={"f-Ubuntu-B fsp-20 psp-40 text-start lhp-20 "+color}>
                Tiempo de degradación de los desechos
                </div> */}
                <div className="d-flex">
                    {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_002.svg"} alt=""  /> */}
                    <div className={"f-ccdigitaldelivery-bold fsp-35 "+color}>4</div>
                    <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                    Registramos las observaciones cada 4 días en la tabla que se nos entregará.
                    </div>
                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                    {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
                    <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_004.jpg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
                </div>
            </div>

  {/* PIE DE PAGINA */}
  <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
      <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
        ABP &copy; SM
      </div>
      <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
  </div>
    <div className="row position-absolute caja-flotante2 p-0 m-0 align-items-end marcador-etapa" style={{bottom:0}}>

        <div className="col-1 position-relative col-sm-2 p-0 m-0">
          <img src="images/rotulo_motivacion.svg" className="oculto" alt="" />
            <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
            <div className="w-100 hp-25 bgc-goten"></div>
        </div>
        <div className="col-7 position-relative col-sm-2 p-0 m-0">
            <img src="images/rotulo_planificacion.svg" className="oculto" alt="" />
            <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
            <div className="w-100 hp-25 bgc-bulma"></div>
        </div>
        <div className="col-1 position-relative col-sm-2 p-0 m-0">
          <img src="images/rotulo_investigacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
            <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
            <div className="w-100 hp-25 bgc-android18"></div>
        </div>
        <div className="col-1 position-relative col-sm-2 p-0 m-0">
          <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
            <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
            <div className="w-100 hp-25 bgc-pidgey"></div>
        </div>
        <div className="col-1 position-relative col-sm-2 p-0 m-0">
          <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
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

export default Page023;
