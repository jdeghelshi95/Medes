import React from 'react'
import { Helmet } from 'react-helmet'
import {HelmetProvider} from "react-helmet-async"

const Sermons = () => {
  return (
    <div>
      <HelmetProvider>
      <script src="https://js.churchcenter.com/modal/v1"></script>
      </HelmetProvider>
      
      
      <h1> Sermons</h1>
      <a src=" https://js.churchcenter.com/modal/v1 "href ="https://medes.churchcenter.com/giving?open-in-church-center-modal=true">Give Now</a>

      <a href="https://yoursubdomain.churchcenter.com/giving?open-in-church-center-modal=true">Give online</a>


    </div>
  )
}

export default Sermons