import React from "react";
import InputBox from "../components/InputBox";
import ModalBook from "../components/ModalBook";
import Check2 from "../components/Check2";

import "./page_040.css";

function Page040(props) {
  const pagina = "040";
  var indexInput = 0;

  return (
    <div className="wrapper bgc-light">
      <div className="d-flex flex-column align-items-center pbp-20">
        <div
          className="page bgc-white overflow-hidden position-relative"
          id={"page_" + pagina}
        >
          <div className="cabecera-v1 hp-80 bgc-android18"></div>

          <div className="ptp-30 psp-60 pep-60">
            <div className="f-Ubuntu-M fsp-20 color-android18 text-start">
              Evaluación en función del rol
            </div>
          </div>
          <div className="ptp-10 container-titulo-global mbp-20">
            <div className="d-flex">
              <img
                src="images/page_040/img_001.svg"
                className="hp-20 mtp-15 msp--10 pep-10"
                alt=""
              />
              <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                1
              </div>
              <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                Me evalúo y evalúo a mi equipo en función de cada rol.
              </div>
            </div>
          </div>

          <div className="d-flex msp-80 mep-60 mbp-10">
            <div className="row w-100">
              <table className=" mbp-20 border-style-solid border-1 border-color-sektor">
                <tr>
                  <th className="bgc-rex border-style-solid border-1 f-pixilate-bold fsp-18">Rol</th>
                  <th className="w-40 bgc-rex border-style-solid border-1 f-pixilate-bold fsp-18">Función</th>
                  <th className="bgc-rex border-style-solid border-1"><img src="images/page_040/img_002.png" className="" alt="" /></th>
                  <th className="bgc-rex border-style-solid border-1"><img src="images/page_040/img_003.png" className="" alt="" /></th>
                  <th className="bgc-rex border-style-solid border-1"><img src="images/page_040/img_004.png" className="" alt="" /></th>
                  <th className="bgc-rex border-style-solid border-1"><img src="images/page_040/img_005.png" className="" alt="" /></th>
                </tr>
                <tr>
                  <td className="w-25 bgc-naraku border-style-solid border-1 f-Ubuntu-L fsp-16 " rowspan="2">Coordinación</td>
                  <td className="text-start p-2 border-style-solid border-1 f-Ubuntu-L fsp-16">
                    ¿Repartió el turno de
                    <br /> palabra?
                  </td>
                  <td className=" border-style-solid border-1">                  <Check2 id={"check2" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" className="w-100 h-100"></Check2>
                  </td>
                  <td className=" border-style-solid border-1">                  <Check2 id={"check2" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" className="w-100 h-100"></Check2>
                  </td>
                  <td className=" border-style-solid border-1">                  <Check2 id={"check2" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" className="w-100 h-100"></Check2>
                  </td>
                  <td className=" border-style-solid border-1">                  <Check2 id={"check2" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" className="w-100 h-100"></Check2>
                  </td>
                </tr>
                <tr>
                  <td className=" text-start p-2 border-style-solid border-1 f-Ubuntu-L fsp-16">
                    ¿Se aseguró de que todos
                    <br /> los miembros del equipo
                    <br />
                    participaran en las tareas?
                  </td>
                  <td className=" border-style-solid border-1">
                    <Check2 id={"check2" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" className="w-100 h-100"></Check2>
                  </td>
                  <td className=" border-style-solid border-1">                  <Check2 id={"check2" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" className="w-100 h-100"></Check2>
                  </td>
                  <td className=" border-style-solid border-1">                  <Check2 id={"check2" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" className="w-100 h-100"></Check2>
                  </td>
                  <td className=" border-style-solid border-1">                  <Check2 id={"check2" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" className="w-100 h-100"></Check2>
                  </td>
                </tr>
              </table>

              <table className=" mbp-20" border="1">
                <tr>
                  <td className="w-25 border-style-solid border-1 f-Ubuntu-L fsp-16 bgc-bach border-color-pikachu" rowspan="2">Supervisión</td>
                  <td className="w-40 text-start p-2 border-style-solid border-1 f-Ubuntu-L fsp-16 border-color-pikachu">
                    ¿Gestionó el tiempo
                    <br /> dedicado a las tareas?
                  </td>{" "}
                  <td className=" border-style-solid border-1 border-color-pikachu">                  <Check2 id={"check2" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" className="w-100 h-100"></Check2>
                  </td>
                  <td className=" border-style-solid border-1 border-color-pikachu">                  <Check2 id={"check2" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" className="w-100 h-100"></Check2>
                  </td>
                  <td className=" border-style-solid border-1 border-color-pikachu">                  <Check2 id={"check2" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" className="w-100 h-100"></Check2>
                  </td>
                  <td className=" border-style-solid border-1 border-color-pikachu">                  <Check2 id={"check2" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" className="w-100 h-100"></Check2>
                  </td>
                </tr>
                <tr>
                  <td className="text-start p-2 border-style-solid border-1 f-Ubuntu-L fsp-16 border-color-pikachu">
                    ¿Comprobó que cada
                    <br /> miembro del equipo haya
                    <br /> hecho su tarea dentro del
                    <br /> plazo establecido?
                  </td>{" "}
                  <td className=" border-style-solid border-1 border-color-pikachu">                  <Check2 id={"check2" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" className="w-100 h-100"></Check2>
                  </td>
                  <td className=" border-style-solid border-1 border-color-pikachu">                  <Check2 id={"check2" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" className="w-100 h-100"></Check2>
                  </td>
                  <td className=" border-style-solid border-1 border-color-pikachu">                  <Check2 id={"check2" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" className="w-100 h-100"></Check2>
                  </td>
                  <td className=" border-style-solid border-1 border-color-pikachu">                  <Check2 id={"check2" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" className="w-100 h-100"></Check2>
                  </td>
                </tr>
              </table>

              <table className=" mbp-20" border="1">
                <tr>
                  <td className="w-25 border-style-solid border-1 f-Ubuntu-L fsp-16 bgc-genos border-color-soldados" rowspan="2">
                    Relaciones <br />
                    públicas
                  </td>
                  <td className="w-40 text-start p-2 border-style-solid border-1 f-Ubuntu-L fsp-16 border-color-soldados">
                    ¿Se comunicó con el profesor
                    <br /> para solicitar ayuda y<br />
                    resolver dudas?
                  </td>{" "}
                  <td className=" border-style-solid border-1 border-color-soldados">                  <Check2 id={"check2" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" className="w-100 h-100"></Check2>
                  </td>
                  <td className=" border-style-solid border-1 border-color-soldados">                  <Check2 id={"check2" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" className="w-100 h-100"></Check2>
                  </td>
                  <td className=" border-style-solid border-1 border-color-soldados">                  <Check2 id={"check2" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" className="w-100 h-100"></Check2>
                  </td>
                  <td className=" border-style-solid border-1 border-color-soldados">                  <Check2 id={"check2" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" className="w-100 h-100"></Check2>
                  </td>
                </tr>
                <tr>
                  <td className="text-start p-2 border-style-solid border-1 f-Ubuntu-L fsp-16 border-color-soldados">¿Pidió ayuda a otros equipos?</td>
                  <td className=" border-style-solid border-1 border-color-soldados">                  <Check2 id={"check2" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" className="w-100 h-100"></Check2>
                  </td>
                  <td className=" border-style-solid border-1 border-color-soldados">                  <Check2 id={"check2" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" className="w-100 h-100"></Check2>
                  </td>
                  <td className=" border-style-solid border-1 border-color-soldados">                  <Check2 id={"check2" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" className="w-100 h-100"></Check2>
                  </td>
                  <td className=" border-style-solid border-1 border-color-soldados">                  <Check2 id={"check2" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" className="w-100 h-100"></Check2>
                  </td>
                </tr>
              </table>

              <table border="1">
                <tr>
                  <td className="w-25 border-style-solid border-1 f-Ubuntu-L fsp-16 bgc-jarek border-color-android18" rowspan="2">Intendencia</td>
                  <td className="w-40 text-start p-2 border-style-solid border-1 f-Ubuntu-L fsp-16 border-color-android18">
                    ¿Gestionó los materiales que
                    <br /> el equipo necesitaba para
                    <br />
                    realizar las tareas?
                  </td>{" "}
                  <td className=" border-style-solid border-1 border-color-android18">                  <Check2 id={"check2" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" className="w-100 h-100"></Check2>
                  </td>
                  <td className=" border-style-solid border-1 border-color-android18">                  <Check2 id={"check2" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" className="w-100 h-100"></Check2>
                  </td>
                  <td className=" border-style-solid border-1 border-color-android18">                  <Check2 id={"check2" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" className="w-100 h-100"></Check2>
                  </td>
                  <td className=" border-style-solid border-1 border-color-android18">                  <Check2 id={"check2" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" className="w-100 h-100"></Check2>
                  </td>
                </tr>
                <tr>
                  <td className="position-relative text-start p-2 border-style-solid border-1 f-Ubuntu-L fsp-16 border-color-android18" >
                    ¿Comprobó que el equipo
                    <br />
                    mantuviera un espacio de
                    <br />
                    trabajo limpio y ordenado?
                  </td>
                  <td className=" border-style-solid border-1 border-color-android18">                  <Check2 id={"check2" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" className="w-100 h-100"></Check2>
                  </td>
                  <td className=" border-style-solid border-1 border-color-android18">                  <Check2 id={"check2" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" className="w-100 h-100"></Check2>
                  </td>
                  <td className=" border-style-solid border-1 border-color-android18">                  <Check2 id={"check2" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" className="w-100 h-100"></Check2>
                  </td>
                  <td className=" border-style-solid border-1 border-color-android18">                  <Check2 id={"check2" + pagina + "_" + (indexInput += 1)} image="images/generales/ticket.svg" className="w-100 h-100"></Check2>
                  </td>
                </tr>
              </table>

              <div className="ptp-10 container-titulo-global mbp-20">
                <div className="d-flex">
                  <div className="f-ccdigitaldelivery-bold fsp-35 color-android18">
                    2
                  </div>
                  <div className="f-Ubuntu-R fsp-16 ptp-18 psp-10 pep-10 text-start">
                    Comparto mis apreciaciones con mi equipo y completo.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" msp-60 mep-60 mbp-50">
            <div className="row">
              <div className="col-md-6 col-sm-12 position-relative">

                <div className="  zindex-2 position-absolute top-0 start-100 translate-middle msp--30 mtp-20">
                  <img src="images/page_040/img_001.png" className="" alt="" />
                </div>
                <div className="bgc-white  border-style-solid  border-color-dark border-1 w-100 p-2 f-Ubuntu-L fsp-15 mbp-20">
                  <div className="f-Ubuntu-R fsp-16 ptp-10 psp-10 pep-10 pbp-10 text-start">
                    Me comprometo a seguir siendo:
                  </div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200"
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12 position-relative">
              <div className="  zindex-2 position-absolute top-0 start-100 translate-middle msp-20 mtp--110">
                  <img src="images/page_040/img_006.png" className="" alt="" />
                </div>
                <div className="  zindex-2 position-absolute top-0 start-100 translate-middle msp--30 mtp-20">
                  <img src="images/page_040/img_001.png" className="" alt="" />
                </div>
                <div className="bgc-white  border-style-solid  border-color-dark border-1 w-100 p-2 f-Ubuntu-L fsp-15 mbp-20">
                  <div className="f-Ubuntu-R fsp-16 ptp-10 psp-10 pep-10 pbp-10 text-start">
                    Me comprometo a mejorar:
                  </div>
                  <InputBox
                    id={"p" + pagina + "_input" + (indexInput += 1)}
                    className="p-0 px-1 text-start flex-grow-1 contenedor-linea lhp-35 min-hp-200"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* PIE DE PAGINA */}
          <div
            className="d-flex hp-90 caja-flotante p-0 m-0 position-absolute justify-content-end align-items-end zindex-2"
            style={{ bottom: 70, right: 0 }}
          >
            <div
              className="f-Ubuntu-M fsp-10 position-absolute mbp-60"
              style={{ transform: `rotate(270deg)`, color: "dark" }}
            >
              ABP &copy; SM
            </div>
            <div className="bgc-boros wp-50 hp-30 f-Ubuntu-M fsp-20 psp-5">
              {props.numeroPagina(pagina)}
            </div>
          </div>
          <div
            className="row w-100 position-absolute caja-flotante2 p-0 m-0 align-items-end"
            style={{ bottom: 0 }}
          >
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_motivacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-yamcha rounded-caja-start"></div>
              <div className="w-100 hp-25 bgc-goten"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_planificacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-tshinhan rounded-caja"></div>
              <div className="w-100 hp-25 bgc-bulma"></div>
            </div>
            <div className="col-7 col-md-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_investigacion.svg"
                className="visible rotulo-etapa position-absolute top-0 start-0"
                alt=""
              />
              <div className="w-100 hp-15 bgc-milk rounded-caja"></div>
              <div className="w-100 hp-25 bgc-android18"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img
                src="images/rotulo_experimentacion.svg"
                className="oculto"
                alt=""
              />
              <div className="w-100 hp-15 bgc-freezer rounded-caja"></div>
              <div className="w-100 hp-25 bgc-pidgey"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
              <img src="images/rotulo_creacion.svg" className="oculto" alt="" />
              <div className="w-100 hp-15 bgc-ash rounded-caja"></div>
              <div className="w-100 hp-25 bgc-saitama"></div>
            </div>
            <div className="col-1 col-md-2 p-0 m-0 position-relative">
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

export default Page040;
