import React from 'react'
import './experience.css'


const data = [{
    id: 1,
    title: 'Kinectrics Co-op',
    description: 'Enhance cyber security by identifying and containing phishing emails with malicious intent used to get sensitive company data'
}

    ,
{
    id: 2,
    title: 'OSL Retail Services',
    description: 'Assist hundreds to thousands of customers per day in finding or selecting items, and in addition to providing recommendations which may help their purchases'
}
    ,
{
    id: 3,
    title: 'Galaxy Rose',
    description: 'Engineered a business to sell roses for special ocasions. Created an impressive website and advertisement generating 100s of dollars of profit.'
}
]

const experiences = () => {
    return (<section id='experiences' > <h5>Places I Have Worked</h5> <h2>Work experiences</h2> <div className="container experiences__container" > {
        data.map(({
            id, title, description

        }) => {
            return (<article key={
                id
            }

                className='experiences__item' > <div className="experiences__item-image" >

                </div> <center> <h3> {
                    title
                }
                </h3>
                    <small> {
                        description}</small></center> </article>)
        })
    }

    </div> </section>)
}

export default experiences