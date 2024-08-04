import accordionData from "../utils/accordianData"
import { useState } from "react"
function Accordian() {

    const [selected, setSelected] = useState(null);
    const [multiSelected, setMultiSelected] = useState(false);
    const [multiple, setMultiple] = useState([]);

    function handleClick(id) {
        if (selected === id) {
            setSelected(null);
        }
        
        else {
            setSelected(id);
        }
    }

    function multiSelectOnClick(id) {
        let copy = [...multiple];
        let idx = multiple.indexOf(id);
        if (idx === -1) {
            copy.push(id);

        }
        else {
            copy.splice(idx, 1);
        }
        setMultiple(copy);
    }

    console.log(multiSelected)
    return (

        <div className="w-5/12 mx-auto mt-20 ">
            <button className="border  bg-slate-500 text-white py-2 px-4 font-semibold rounded-xl" onClick={() => setMultiSelected(!multiSelected)}>Multi Select </button><span className="ms-10 font-semibold">{(multiSelected)?"Multiple": "Single" }</span>
            {
                accordionData.map((item) =>
                    <div key={item.id} className="my-3 bg-slate-200 p-5 rounded-3xl">
                        <div className="font-bold text-xl flex justify-between cursor-pointer" onClick={(multiSelected)? ()=> multiSelectOnClick(item.id) :() => handleClick(item.id)}>
                            <span className="my-auto">{item.question}</span>
                            <span className="text-3xl">{(selected === item.id) || (selected === item.id) || (multiple.indexOf(item.id)!==-1) ? <span>-</span> : <span>+</span>}</span></div>
                        {
                            (selected === item.id) || (multiple.indexOf(item.id)!==-1) ? <div className="text-xl mt-4">{item.answer}</div> : <></>
                        }

                    </div>
                )
            }
        </div>
    )
}

export default Accordian
