import { useEffect, useState } from "react";

const TipCalculator = () => {
    const [total, setTotal] =  useState(Number(0))
    const [tipPorcent, setTipPorcent] = useState(0)
    const taxes = 0.0625
    const [finalPrice, setFinalPrice] = useState(0)

    useEffect(()=> {
        setTipPorcent(0)
        if (total > 999999999.99 && !isNaN(total) && !isNaN(tipPorcent)){
            setTotal(999999999.99)
            return
        }
        
    },[total])

    useEffect(()=> {
        if (tipPorcent > 100 && !isNaN(tipPorcent)){
            setTipPorcent(100)
            return
        }
        const calTips = (tipPorcent / 100) * total
        const totalPlusTips = (Number(calTips) + Number(total))
        const totalfinalPrice = (Number(totalPlusTips) * taxes + totalPlusTips)
        setFinalPrice(totalfinalPrice)



    },[tipPorcent])

   //console.log(tipsPlusTotal)

    return(
        <div className="shadow-lg  border border-2 border-seconday  p-5 rounded-5 d-flex align-items-center justify-content-center flex-column">

           <h1 className="fw-bold ">Tips calculator </h1>
           {total > 999999998 && 
           <p className="text-danger fw-bold">Total can not be more the 999,999,999.99</p>}
           {tipPorcent > 99 && 
           <p className="text-danger fw-bold">Tips can not be more the 100%</p>}
           
        {/* Input para el total */}
<div className="input-group mb-3 rounded-4 shadow-sm">
  <span className="input-group-text bg-light border-0">
    <i className="bi bi-currency-dollar text-muted"></i>
  </span>
  <input
    className="form-control bg-light border-0 rounded-end-4"
    maxLength={9}
    value={total}
    onChange={(j) => setTotal(j.target.value)}
    type="number"
    placeholder="Enter price"
  />
</div>

{/* Input para el porcentaje de propina */}
{total > 0 && (
  <div className="input-group mb-3 rounded-4 shadow-sm">
    <span className="input-group-text bg-light border-0">
      <i className="bi bi-percent text-muted"></i>
    </span>
    <input
      className="form-control bg-light border-0 rounded-end-4"
      maxLength={3}
      value={tipPorcent}
      onChange={(e) => setTipPorcent(e.target.value)}
      type="number"
      placeholder="Enter Tip Percentage"
    />
  </div>
)}
           <br/> 

           <h6>Tax: {taxes * 100}</h6>
           <h6>Tips :{tipPorcent}%</h6>

           <h2>Total: {finalPrice.toFixed(2)}</h2>

        </div>
    )
}
export default TipCalculator;