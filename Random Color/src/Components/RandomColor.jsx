import { useState } from 'react'

function RandomColor() {

    const [type, setType] = useState("Hex");
    const [color, setColor] = useState("#FFFFFF")

    console.log(type);

    function RandomColor(length) {
        return Math.floor(Math.random() * length)
    }




    function handleRandomHexColor() {
        let tempColor = "#";
        let chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        for (let i = 0; i < 6; i++){
            tempColor += chars[RandomColor(chars.length)];
        }
        setColor(tempColor);
     }
    function handleRandomRGBColor() {
        let r = RandomColor(256);
        let g = RandomColor(256);
        let b = RandomColor(2565);

        let tempColor = `rgb(${r},${g},${b})`;
        setColor(tempColor);
     }

    return (
        <div className="text-center pt-20">

            <button className="bg-gray-500 py-2 px-3 text-white m-3 hover:bg-gray-400 hover:text-black font-semibold rounded-lg"
                onClick={() => setType("Hex")}
            >Hex Color</button>
            <button className="bg-gray-500 py-2 px-3 text-white m-3 hover:bg-gray-400 hover:text-black font-semibold rounded-lg"
                onClick={() => setType("RGB")}
            >RGB Color</button>
            <button className="bg-gray-500 py-2 px-3 text-white m-3 hover:bg-gray-400 hover:text-black font-semibold rounded-lg"
                onClick={(type === "Hex") ? handleRandomHexColor : handleRandomRGBColor}
            >Generate Color</button>

            <div style={{ backgroundColor: color }} className="flex flex-col justify-center w-6/12 border rounded-3xl h-80 border-black m-auto mt-20 font-semibold text-3xl">
                <div>{type}</div>
                <div>{color}</div>
            </div>
        </div>
    )
}

export default RandomColor