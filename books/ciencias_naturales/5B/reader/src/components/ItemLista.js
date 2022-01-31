import React from 'react';

function ItemLista(props) {

  function tipoBullet(){
      
    let tipoBullet ="";
    switch (props.tipoBullet) {
      case "letra":
        tipoBullet = "fsp-15 f-Ubuntu-B "+props.colorBullet;
        return tipoBullet;
        case "numero":
          return tipoBullet = "fsp-15 f-Ubuntu-B "+props.colorBullet;
        default:
            return tipoBullet = "wp-5 hp-5 "+props.colorBullet+" mtp-8 rounded-circle";
        }
    }

  return (
  <div className="d-flex align-items-start w-100 psp-10 pep-10 ">
  <div className={tipoBullet()}>{props.valueTipo}</div>
  <div className={"d-flex justify-content-start align-items-center w-100 text-start "+props.fuente+" "+props.fontSize+" "+props.color+" psp-5"}>
      {props.children}
  </div>
</div>)
}

export default ItemLista;
