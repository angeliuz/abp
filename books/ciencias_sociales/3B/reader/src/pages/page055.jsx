import React from "react";
import InputBox from "../components/InputBox";
import ModalVideo from "../components/ModalVideo";
import "./page_055.css";

function Page055(props) {

  const pagina = "055";
  var indexInput = 0;
  const etapa = "6"
  const background = "bgc-pikachu";
  const color = "color-pikachu";
  const colorSesion = "color-pikachu";
  const borderColor = "border-color-pikachu"
  const borderColorTabla = "border-color-kokomi"
  const bgc_cajas = "bgc-kokomi";

  return (
      <div className="wrapper bgc-light">
        <div className="d-flex flex-column align-items-center pbp-20">
          <div className="page bgc-white overflow-hidden position-relative" id={"page_"+pagina}>
                {/* BEGIN CABECERA VERSIÓN 2 */}
                <div className="cabecera-v2 bgc-pikachu d-flex flex-column">
                  <div className="d-flex contenedor-cabecera-v2 align-items-center ptp-40 psp-30 pep-30">
                    <div className="caja-seccion wp-160 hp-60 d-flex justify-content-center ptp-10 mtp-5 color-pikachu fsp-24 f-IntroRustG-Base">SESIÓN 15</div>
                    <div className="section-name d-flex align-items-center fsp-24 fw-700 f-Ubuntu-M color-white">¡Tenemos una fiesta!</div>
                  </div>
                </div> 
                {/* END CABECERA VERSIÓN 2 */}

            <div className="container-titulo-global mtp-20 mbp-0">
    <div className={"f-Ubuntu-B fsp-20 psp-20 text-start lhp-20 " + color}>
    Antes de partir…
    </div>

    <div className="d-flex psp-20">
         {/* <img className="hp-20 align-center mt-3 me-2 mb-2" src={"images/page_"+pagina+"/img_002.svg"} alt=""  /> */}
        <div className={"f-ccdigitaldelivery-bold fsp-35 " + color}>
            1
        </div>
        <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
        Veo, leo y contesto.
        </div>
        <ModalVideo
        id={"p" + pagina + "_video" + (indexInput += 1)}
        linkVideo="662961663"
        tituloVideo="¡Somos diversos! III"
        tipoVideo="vimeo"
        image={"images/generales/play.svg"}
        colorUnidad={background}
        clasesImagen="cambio hp-40 mtp-10"
        className="p-0 px-1"
    />
    </div>
</div>

                  <div className="cb-contenedor-mail">
                        <div className="cb-datos-mail pep-15 psp-10 ptp-10 pbp-10">
                        <div className="d-flex mbp-5"> 
                            <div className="cb-datos-a psp-10 f-Ubuntu-R fsp-16 mep-10 text-start">De:</div>
                            <div className="cb-datos-1 psp-10 f-Ubuntu-R fsp-16 text-start">alejandra@mail.com </div>
                        </div>
                        <div className="d-flex mbp-5">
                            <div className="cb-datos-a psp-10 mep-10 text-start">Para:</div>
                            <div className="cb-datos-1 psp-10 f-Ubuntu-R fsp-16 text-start">estudiantestercerobasico@correo.cl</div>
                        </div>
                        <div className="d-flex">
                            <div className="cb-datos-a psp-10 f-Ubuntu-R fsp-16 mep-10 text-start">Asunto:</div>
                            <div className="cb-datos-1 psp-10 f-Ubuntu-R fsp-16 text-start">Felicitaciones</div>
                        </div>
                        </div>
                        <div className="cb-texto-mail">
                            <div className="cb-carta-content f-Ubuntu-L text-start">
                                <img src="images/page_055/img_002.png" className="cb-celular-p55" alt=""></img>
                                <p>Estimados estudiantes, </p>
                                <p>¡Felicitaciones! Con mucho orgullo quiero decirles que hemos llegado
                                    al final de este proyecto. Ahora solo queda llevar a cabo la Fiesta de la
                                    Diversidad Cultural. Han trabajado con mucho entusiasmo, el trabajo
                                    en equipo que realizaron fue estupendo. Lograron enfrentar desafíos,
                                    superar obstáculos y organizar una maravillosa Fiesta de la Diversidad.
                                    Los invito a disfrutar de ella. ¡No olviden enviarme fotografías!</p>
    
                                <p>Saludos afectuosos</p>
                                <p>Alejandra </p>                              
                            </div>
                        </div>
                    </div>
                    <div className="ptp-10 psp-60 mbp-0 contenedor-pagina">
              <div className="d-flex">
                <div className="f-ccdigitaldelivery-bold fsp-35 color-pikachu">2</div>
                <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 text-start">Contesto el correo a Alejandra contándole mis expectativas sobre la fiesta.</div>
              </div>
            </div>
            <div className="cb-contenedor-mail ">
                        <div className="cb-datos-mail pep-15 psp-10 ptp-10 pbp-10">
                        <div className="d-flex mbp-5"> 
                            <div className="cb-datos-a psp-10 f-Ubuntu-R fsp-16 mep-10 text-start">De:</div>
                            <div className="cb-datos-1 psp-10 f-Ubuntu-R fsp-16 text-start">estudiantestercerobasico@correo.cl</div>
                        </div>
                        <div className="d-flex mbp-5">
                            <div className="cb-datos-a psp-10 mep-10 text-start">Para:</div>
                            <div className="cb-datos-1 psp-10 f-Ubuntu-R fsp-16 text-start">alejandra@mail.com</div>
                        </div>
                        <div className="d-flex">
                            <div className="cb-datos-a psp-10 f-Ubuntu-R fsp-16 mep-10 text-start">Asunto:</div>
                            <div className="cb-datos-1 psp-10 f-Ubuntu-R fsp-16 text-start">RE: Felicitaciones</div>
                        </div>
                        </div>
                        <div className="cb-texto-mail mbp-90">
                            <div className="cb-carta-content f-Ubuntu-L text-start">
                                <img src="images/page_055/img_003.png" className="cb-mensajecelu-p55" alt=""></img>
                                <InputBox id={ "p" + pagina + "_input"+ (indexInput+=1) } className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-170" />               
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
              <div className="col-1 col-sm-2 p-0 m-0 position-relative">
                <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
                <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
                <div className="w-100 hp-25 bgc-saitama"></div>
              </div>
              <div className="col-7 col-sm-2 p-0 m-0 position-relative">
                <img src="images/rotulo_difusion.svg" className="visible rotulo-etapa position-absolute top-0 start-0" alt="" />
                <div className="w-100 hp-15 bgc-leono rounded-caja-end"></div>
                <div className="w-100 hp-25 bgc-pikachu"></div>
              </div>
            </div>

          </div>
        </div>
       </div>
        
      
  );
}

export default Page055;
