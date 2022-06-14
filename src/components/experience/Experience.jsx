import React from 'react'
import './experience.css'


const data = [{
    id: 1,
    title: 'Kinectrics Co-op',
    description: 'Enhance cyber security by identifying and containing phishing emails with malicious intent used to get sensitive company data',
    achievements: 'Set a record for the most amount of problems solved by any co-op student in 4 months. Started working on harder cyber-security problems'
}

    ,
{
    id: 2,
    title: 'OSL Retail Services',
    description: 'Assist hundreds to thousands of customers per day in finding or selecting items, and in addition to providing recommendations which may help their purchases',
    achievements: 'Beat Walmart Protection Plan goals by 400% each month'
}
    ,
{
    id: 3,
    title: 'Galaxy Rose',
    description: 'Engineered a business to sell roses for special ocasions. Created a website using Shopify and advertised using Facebook Ads',
    achievements: 'Very profitable during Mothers & Valentines Day. Communicated to suppliers and got products delivered before estimated dates and very good return on FB adverts.'
}
]

const experiences = () => {
    return (<section id='experiences' > <h2>My Work Experience</h2> <div className="container experiences__container" > {
        data.map(({
            id, title, description, achievements

        }) => {
            return (<article key={
                id
            }

                className='experiences__item' > <div className="experiences__item-image" >

                </div> <center> <h3> {
                    title
                }
                </h3>
                    <small> <b>Description: </b>{
                        description}</small>
                    <br></br>
                    <small><b>Achievements: </b>{achievements}</small></center> </article>)
        })
    }

    </div> </section>)
}

export default experiences