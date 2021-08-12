import React from 'react'
/* import Icon1 from '../../images/svg-1.svg' */
/* import Icon2 from '../../images/svg-2.svg'
import Icon3 from '../../images/svg-3.svg' */
import { ServicesCard, 
         ServicesContainer,
         ServicesH1, 
         ServicesH2, 
         ServicesIcon, 
         ServicesP, 
         ServicesWrapper,ServicesLink
         } from './ServicesElements'

import useFetch from './useFetch';


const Services = () => {
    const {data : blogs, isPending, error} = useFetch('https://valery100.pythonanywhere.com/api/')
    

    return (
        <>
        {error && <div style={{color:'red'}}> {error} </div>}
        {isPending && <div> Cargando... </div> }
        
        <ServicesContainer id="servicios">
            <ServicesH1>Publicaciones</ServicesH1>
            <ServicesWrapper>
            { blogs && blogs.map((blog, i)=>{
              if (i >= blogs.length - 3) {
                return (
                  <ServicesLink to={`/api/${blog.id}`} key={blog.id}>
                    <ServicesCard>
                        <ServicesIcon src={blog.foto}/>
                        <ServicesH2>{blog.title}</ServicesH2>
                        <ServicesP>{blog.body}</ServicesP>
                    </ServicesCard>
                  </ServicesLink>)
              }else{
                return null
              }
            })}  
            </ServicesWrapper>   
        </ServicesContainer>
       
        </>
    )
}

export default Services