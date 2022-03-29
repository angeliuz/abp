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
                A partir de los derechos revisados y de otros presentes en la Constitución y la
              <i> Declaración Universal de Derechos Humanos</i>, propongo tres derechos en los
                que se podría centrar nuestra obra de arte. Justifico en cada caso.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_002.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="d-flex global-margin mtp-30 mbp-0 psp-0 pep-0 ptp-0 pbp-0">
            <div className="row  ">
              <div className="col-12">
                <div className="row p-0 m-0 w-100">

                  <div className="col-5  d-flex position-relative pbp-10 ">

                    <div className=" w-100 ">
                      <div className="d-flex w-100  f-Ubuntu-R fsp-15 p-1 color-bulma mbp-20 text-center">¿En que derecho me gustaría
                        centrar nuestra obra?
                      </div>
                      <div className=" w-100 p-1 border-style-solid border-2 border-color-lizt rounded-p-10  lh-sm text-start p-2 position-relative bgc-lizt">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-start flex-grow-1 lhp-30 min-hp-110" />
                        <div className=" d-flex position-absolute top-0 start-0 translate-middle msp--5 mtp-30 wp-30 hp-30 bgc-bulma border-style-solid border-1 border-color-bulma bgc-white rounded-1 fsp-16 align-items-center justify-content-center f-Ubuntu-M color-white">1

                        </div>

                      </div>
                    </div>



                  </div>
                  <div className="col-7 position-relative pbp-10">
                    <div className="position-absolute top-0 start-100 translate-middle mtp-15 msp--20 zindex-1"><img src="images/page_026/img_002.png" className="" alt="" /></div>
                    <div className="mtp-20">
                      <div className="d-flex align-items-center justify-content-center f-Ubuntu-R fsp-15 p-3 color-bulma  ">¿Por qué?
                      </div>
                      <div className=" w-100 p-1  border-style-solid border-2 border-color-kagome rounded-p-10  lh-sm text-start p-2 position-relative bgc-white">

                        <div className="position-absolute top-50 start-0 translate-middle zindex-1 "><img src={"images/page_026/img_003.svg"} className=" msp--25  mtp-0 " alt="" /></div>


                        <div className=" align-items-start justify-content-start w-100 f-Ubuntu-R fsp-15   ">

                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-0 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />

                        </div>


                      </div>
                    </div>

                  </div>

                  <div className="col-5  d-flex position-relative pbp-10 ">

                    <div className=" w-100 mtp-20">

                      <div className=" w-100 p-1 border-style-solid border-2 border-color-lizt rounded-p-10  lh-sm text-start p-2 position-relative bgc-lizt">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-start flex-grow-1 lhp-30 min-hp-110" />
                        <div className=" d-flex position-absolute top-0 start-0 translate-middle msp--5 mtp-30 wp-30 hp-30 bgc-bulma border-style-solid border-1 border-color-bulma bgc-white rounded-1 fsp-16 align-items-center justify-content-center f-Ubuntu-M color-white">2

                        </div>

                      </div>
                    </div>



                  </div>

                  <div className="col-7  position-relative pbp-10">

                    <div className="w-100 mtp-20">

                      <div className="w-100  p-1  border-style-solid border-2 border-color-kagome rounded-p-10  lh-sm text-start p-2 position-relative bgc-white">

                        <div className="position-absolute top-50 start-0 translate-middle zindex-1 "><img src={"images/page_026/img_003.svg"} className=" msp--25  mtp-0 " alt="" /></div>


                        <div className=" align-items-start justify-content-start w-100 f-Ubuntu-R fsp-15   ">

                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-0 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />

                        </div>


                      </div>
                    </div>

                  </div>

                  <div className="col-5  d-flex position-relative pbp-10 ">

                    <div className=" w-100 mtp-20">

                      <div className=" w-100 p-1 border-style-solid border-2 border-color-lizt rounded-p-10  lh-sm text-start p-2 position-relative bgc-lizt">
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 fsp-15 text-start flex-grow-1 lhp-30 min-hp-110" />
                        <div className=" d-flex position-absolute top-0 start-0 translate-middle msp--5 mtp-30 wp-30 hp-30 bgc-bulma border-style-solid border-1 border-color-bulma rounded-1 fsp-16 align-items-center justify-content-center f-Ubuntu-M color-white">3

                        </div>

                      </div>
                    </div>



                  </div>

                  <div className="col-7  position-relative pbp-10">

                    <div className="w-100 mtp-20">

                      <div className="w-100  p-1  border-style-solid border-2 border-color-kagome rounded-p-10  lh-sm text-start p-2 position-relative bgc-white">

                        <div className="position-absolute top-50 start-0 translate-middle zindex-1 "><img src={"images/page_026/img_003.svg"} className=" msp--25  mtp-0 " alt="" /></div>


                        <div className=" align-items-start justify-content-start w-100 f-Ubuntu-R fsp-15   ">

                          <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="mtp-0 p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-110" />

                        </div>


                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="ptp-30 container-titulo-global mbp-10">
            {/* <div className={"f-Ubuntu-B fsp-20 psp-0 text-start lhp-20 "+color}>¿Qué podemos reciclar?</div> */}
            <div className="d-flex">
              <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_" + pagina + "/img_001.svg"} alt="" />
              <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>3</div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Con mi grupo, seleccionamos el derecho en que estará centrada la
                obra y justificamos nuestra elección. Lo presentamos al curso.
              </div>
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/generales/play.svg" clasesImagen="cambio hp-40 mtp-10" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalVideo id={ "p" + pagina + "_video"+ (indexInput+=1) } image="images/page_007/img_001.png" className="p-0 px-1" /> */}
              {/* <ModalBook id={ "p" + pagina + "_book"+ (indexInput+=1) } image={"images/page_"+pagina+"/img_002.svg"} clasesImagen="hp-40 text-center mtp-10 " className="p-0 px-0" /> */}
            </div>
          </div>

          <div className="d-flex global-margin mtp-10 mbp-100 psp-40 pep-0 ptp-0 pbp-0">
            <div className="row p-0 m-0 w-100">
              <div className="col-12 m-0 p-0 position-relative">

                <div className="position-absolute top-0 start-100 translate-middle msp--20 zindex-2"><img src="images/page_026/img_005.png" className="" alt="" /></div>

                <div className="bgc-aister rounded-p-10 p-2 box-shadow-simple">
                  {/* <div className="d-flex align-items-center">
                    <div className="f-Ubuntu-R fsp-14 lh-sm text-start pep-10">Obra letra</div>
                    <div className="p-1 wp-70 d-flex bgc-white rounded-p-10"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 lhp-35 min-hp-35" /></div>
                  </div> */}
                  <div className="d-flex p-2 m-0 h-100 align-items-center">

                    <div className="col-12 psp-15">
                      <div className="bgc-white rounded-p-10 p-2">
                        <div className="f-Ubuntu-R fsp-16 msp-10 mep-10 text-center">¿En qué derecho se centrará nuestra obra?</div>
                        <InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" />
                      </div>
                    </div>
                  </div>
                  <div className="d-flex p-2 m-0 h-100 align-items-center">
                    <div className="col-2  rounded-p-10 p-2 hp-150 f-Ubuntu-R fsp-14 lh-sm position-relative d-flex justify-content-center align-items-center">¿Por qué?

                    </div>
                    <div className="col-10 psp-15">
                      <div className="bgc-white rounded-p-10 p-2"><InputBox id={"p" + pagina + "_input" + (indexInput += 1)} className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-140" /></div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
          {/* BEGIN PIE DE PAGINA */}
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
