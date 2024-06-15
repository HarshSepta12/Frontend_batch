import React from 'react'

const Data = (props) => {
    const MobileData = [
        {
            id: props.id,
            MobileName: props.MobileName,
            Model: props.modal,
            launchDate: props.launchDate
        },
       
    ]
  
    return (
        <div>
            {MobileData.map((data) => (
                <div
                    key={data.id}
                    style={{
                        backgroundColor: "Gray",
                        textAlign: "center",
                        padding: "10px",
                        margin: "10px"
                    }}
                >
                    <h1>{data.MobileName}</h1>
                    <h1>{data.Model}</h1>
                    <h1>{data.launchDate}</h1>
                </div>
            ))}
        </div>
    )
}

export default Data
