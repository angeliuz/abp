import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";

import "./page_026.css";

function Page026(props) {

  const pagina = "026";
  var indexInput = 0;
  const etapa = "3"
  const background = "bgc-android18";
  const color = "color-android18";
  const colorSesion = "color-primary";
  const borderColor = "border-color-android18"
  const bgc_cajas = "bgc-goku";


  return (

    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div className="page bgc-white overflow-hidden position-relative" id={"page_" + pagina}>
          <div className="cabecera-v1 hp-80 bgc-android18">
          </div>

          {/* <div className="ptp-30 container-titulo-global mbp-10">
                    {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 "+color}>¿Qué podemos reciclar?</div> */}
          {/* <div className="d-flex">
                        {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_001.svg"} alt=""  /> */}
          {/* <div className={"f-ccdigitaldelivery-bold fsp-35 "+color}>3</div> */}
          {/* <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                        Leo la historieta de la revista y completamos.
                        </div> */}
          {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
          {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
          {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
          {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_002.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
          {/* </div> */}
          {/* </div> */}




          <div className="ptp-30 container-titulo-global mbp-10">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 "+color}>¿Qué podemos reciclar?</div> */}
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_001.svg"} alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>2</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Aprendo cómo es una casa sostenible.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_002.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="msp-60 mep-60 mtp-20 mbp-10">
            <div className="row p-0 m-0">
              <div className="col-sm-12 col-md-3 position-relative"></div>
              <div className="max-wp-700 mx-auto position-relative mbp-20">
                <div className=""><img src={"images/page_" + pagina + "/img_007.png"} className="w-100" alt="" /></div>
              </div>
            </div>


          </div>

          <div className="d-flex global-margin h-100  mtp-0 mbp-0 psp-60 pep-0 ptp-0 pbp-0">
            <div className="row p-0 msp-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">

                <div className="d-flex w-100 p-2">
                  <div className="d-flex d-inline justify-content-start align-items-start text-start f-Ubuntu-R color-android18 fsp-17 fw-700 ">a.</div>
                  <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Identifico los objetivos de desarrollo sostenible que se promueven.</div>
                  {/* <ModalVideo
                    id={"p" + pagina + "_video" + (indexInput += 1)}
                    image="images/generales/play.svg"
                    clasesImagen="cambio hp-40 mtp-10"
                    className="p-0 px-1"
                  /> */}
                  {/* <ModalBook
                    id={"p" + pagina + "_book" + (indexInput += 1)}
                    image={"images/page_" + pagina + "/img_008.svg"}
                    clasesImagen="hp-40 text-center mtp-10 "
                    className="p-0 px-1"
                  /> */}
                </div>

              </div>
            </div>
          </div>

          <div className="d-flex msp-120 mep-120 mtp-0 mbp-20">

            <div className="row m-0 psp-10 pep-10  pbp-0 bgc-kagome border-style-solid border-1 border-color-kagome w-100  ">

              <div className="col-md-12 col-lg-12 position-relative ">
                <div className="position-absolute top-50 start-0 translate-middle msp--20 zindex-1 "><img src="images/page_026/img_004.png" className="" alt="" /></div>
                <div className="position-absolute top-0 start-100 translate-middle msp--20 mtp-10 zindex-1 "><img src="images/page_026/img_003.png" className="" alt="" /></div>
                <div className="position-absolute top-50 start-100 translate-middle msp-20  zindex-1 "><img src="images/page_026/img_005.png" className="" alt="" /></div>
                <div className="d-flex flex-column mbp-0 mtp-0 w-100">
                  {/* <div className="f-Ubuntu-L fsp-16 msp-10 mep-10 text-center">una palabra que me haya llamado la atención</div> */}
                  <div className="p-2 min-hp-80 w-100 ">
                    <div className="f-Ubuntu-L fsp-15 msp-0 mep-10 text-start">


                    </div>
                    <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />
                  </div>

                </div>

              </div>

            </div>
          </div>

          <div className="d-flex global-margin h-100  mtp-0 mbp-20 psp-60 pep-0 ptp-0 pbp-0">
            <div className="row p-0 msp-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">

                <div className="d-flex w-100 p-2">
                  <div className="d-flex d-inline justify-content-start align-items-start text-start f-Ubuntu-R color-android18 fsp-17 fw-700 ">b.</div>
                  <div className="d-flex justify-content-start align-items-center text-start f-Ubuntu-R fsp-15 psp-5">Imaginamos cuáles de estas características, u otras, podrían contribuir a un
                    colegio sostenible y lo relacionamos con el proyecto.</div>
                  {/* <ModalVideo
                    id={"p" + pagina + "_video" + (indexInput += 1)}
                    image="images/generales/play.svg"
                    clasesImagen="cambio hp-40 mtp-10"
                    className="p-0 px-1"
                  /> */}
                  {/* <ModalBook
                    id={"p" + pagina + "_book" + (indexInput += 1)}
                    image={"images/page_" + pagina + "/img_008.svg"}
                    clasesImagen="hp-40 text-center mtp-10 "
                    className="p-0 px-1"
                  /> */}
                </div>

              </div>
            </div>
          </div>
          <div className="d-flex  mtp-0 mbp-120 psp-90 pep-90 ptp-10 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 p-0 m-0 position-relative">
                {/* <div className="position-absolute top-100 start-100 translate-middle"><img src="images/page_046/mono.png" className="hp-210 mep-50 mbp-200" alt="" /></div> */}
                <div className="rounded-p-10 border-style-solid border-color-goro border-3 p-2">
                  <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-320 contenedor-linea" />
                </div>
              </div>
            </div>
          </div>





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
          {/* END PIE DE PAGINA */}

        </div>
      </div>
    </div>

  );
}

export default Page026;
