import React, {Component} from "react";

class ListadoElementos extends Component{
    render(){
        const{contactos}=this.props
        return(
            <div>
                 <div>contactos</div>
                 <div>
                     {contactos.map((item)=>{

                         return(
                             <div key={item.id}>
                                 {item.nombre}
                                 </div>

                         )
                     })}
                 </div>
            </div>
            )
        }
   
}

export default ListadoElementos