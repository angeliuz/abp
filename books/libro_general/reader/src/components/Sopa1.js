import React, { useEffect } from "react";


function Sopa1(props) {



    useEffect(() => {

    

    }, []);


    function handleEvent(event) {
        console.log(event.target.id);
        if(event.target.style.backgroundColor == "red"){
            event.target.style.backgroundColor = "white";
        }else{
            event.target.style.backgroundColor = "red";
        }
        
    }


    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100];
   // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const listItems = numbers.map((number) =>
        <div 
            className="wp-30 hp-30 border-style-solid border-color-android18 border-1 d-flex center-center" 
            id={"sopa_"+number}
            onClick={handleEvent}
        />
    );
   

    return (
        <div className="d-flex flex-wrap wp-300">
            {listItems}
        </div>
    );

}

export default Sopa1;