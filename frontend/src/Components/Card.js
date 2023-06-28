import React from 'react'

function Card(props) {

    let options = props.option;
    console.log(options)
    let priceOption = Object.keys(options)
    // console.log(priceOption)

  return (
    <div >
                <div className="card m-3" style={{ "width": "18rem" ,"maxHeight":"360px" }}>
                    <img className="card-img-top" src={props.imgSrc} alt="..." style={{height:"150px" , objectFit:"fill"}} />
                    <div className="card-body">
                        <h5 className="card-title">{props.foodName}</h5>
                       
                        <div className='container'> 
                        <select  className='m-2 h-100  bg-success rounded'>
                            {
                                Array.from(Array(6),(err,i)=>{
                                    return(

                                        <option key={i+1} value={i+1}>{i+1}</option>
                                    )
                                })
                            }
                        </select>
                        <select className='m-2 h-100  bg-success rounded'>
                           {
                            priceOption.map((dataquantity)=>{
                                return (
                                    <option key={dataquantity} value={dataquantity}>{dataquantity}</option>
                                )
                            })
                           }
                        </select>
                        <div className='d-inline h-100 fs-5'>
                            Total price
                        </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Card