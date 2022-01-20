import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_038.css";

function Page038(props) {

  const pagina = "038";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
          <div className="d-flex flex-column align-items-center pbp-20">
              <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
            <div className="cabecera-v1 hp-80 bgc-android18">
            </div>

          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
                {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_033/img_002.svg" alt=""  /> */}
                <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">2</div>
                <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Leemos la revista y pensamos en las tres ideas que queremos comunicar en una ficha de seguridad.</div>
                <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_038/img_001.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" />
            </div>
          </div>

         
         <div className="msp-80 mep-60 position-relative">
         {/* <div className="position-absolute top-50 start-100 translate-middle   "><img src="images/page_038/img_003.png" className="hp-90" alt="" /></div> */}
              <div className="m-2 border-style-solid border-2 border-color-soldados  rounded-p-10  hp-50 w-80 p-1">
                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
              </div>
              <div className="m-2 border-style-solid border-2 border-color-ken  rounded-p-10  hp-50 w-80 p-1">
                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
              </div>
              <div className="m-2 border-style-solid border-2 border-color-android18  rounded-p-10  hp-50 w-80 p-1">
                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-35" />
              </div>

         </div>



         <div className="ptp-10 container-titulo-global mbp-20  msp--30">
            <div className="d-flex">
                <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_038/img_002.svg" alt=""  />
                <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">3</div>
                <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 msp-10 w-70 text-start ">Pensamos en la estructura de la ficha de seguridad y la diseñamos.</div>
                {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_038/img_001.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>


          <div className="msp-80 mep-60 mtp--20 position-relative">
              <div className="position-absolute top-0 start-100 translate-middle   msp--30 mtp--65 "><img src="images/page_038/img_003.png" className="wp-110" alt="" /></div>
              <div className="m-2 border-style-solid border-2 border-color-android18  rounded-p-10 p-2 h-100 w-100 ">
                  <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-280" />
              </div>
 

         </div>



         <div className="ptp-10 container-titulo-global mbp-20  msp--30">
            <div className="d-flex">
                <img className="hp-20 align-center mt-3 me-2 mb-2" src="images/page_038/img_002.svg" alt=""  />
                <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">4</div>
                <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">Definimos los materiales para elaborar las fichas de seguridad.</div>
                {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image="images/page_038/img_001.svg" clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

        <div className="msp-80 mep-60 mtp--20 position-relative">
              <div className="d-flex justify-content-around align-items-center  w-100 pep-20 psp-20  position-relative">
              <div className="position-absolute top-0 start-100 translate-middle   msp--30 mtp-10  "><img src="images/page_038/img_004.png" className="wp-60" alt="" /></div>

                <div className="d-flex align-items-center justify-content-center text-center bgc-genos   wp-240 hp-40 p-2 rounded-p-5  fsp-15  ">Hojas de bloc o cartulinas</div>
                <div className="d-flex align-items-center justify-content-center text-center bgc-piccolo wp-240 hp-40 p-2 rounded-p-5  fsp-15  ">Lápices de colores</div>
              </div>
        </div>





        <div className="msp-80 mep-60 mtp--20 position-relative">
              <div className="d-flex justify-content-around align-items-center">
                <div className="d-flex align-items-center justify-content-center    w-100   p-2  ">
                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-150" />
                </div>
            
              </div>
        </div>

      


 
                
           
            {/* PIE DE PAGINA */}
            <div className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2" style={{ bottom: 70, right: 0 }}>
              <div className="f-Ubuntu-M fsp-10 position-absolute mbp-60" style={{ transform: `rotate(270deg)`, color: "dark" }}>
                ABP &copy; SM
              </div>
              <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">{props.numeroPagina(pagina)}</div>
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
              <div className="col-7 col-sm-2 p-0 m-0 position-relative">
                <img src="images/rotulo_investigacion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
                <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
                <div className="w-100 hp-25 bgc-android18"></div>
              </div>
              <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                <img src="images/rotulo_experimentacion.svg" className="oculto" alt="" />
                <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
                <div className="w-100 hp-25 bgc-pidgey"></div>
              </div>
              <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
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

export default Page038;
