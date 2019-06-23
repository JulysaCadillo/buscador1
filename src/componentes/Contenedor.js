import React,{Component} from "react";
import ListadoElementos from "./ListadoElementos"

const arregloContactos=[
    {id:1, nombre:"Julia",apellido:"cardenas",edad:24, telefono:"982412406",pais:"Peru"},
    {id:2, nombre:"Daniel",apellido:"Flores",edad:20, telefono:"982412456",pais:"Peru"},
    {id:3, nombre:"Julysa",apellido:"Carrasco",edad:15, telefono:"984562406",pais:"Brasil"},
    {id:4, nombre:"Israel",apellido:"Lopez",edad:26, telefono:"988962406",pais:"Peru"},
    {id:5, nombre:"Joel",apellido:"Garay",edad:30, telefono:"982002406",pais:"Peru"},
    {id:6, nombre:"Juan",apellido:"gutierrez",edad:12, telefono:"936912406",pais:"Brasil"},
    {id:7, nombre:"Carlos",apellido:"Pardo",edad:19, telefono:"987892406",pais:"Peru"},
    {id:8, nombre:"Roy",apellido:"Huamani",edad:18, telefono:"982459406",pais:"Peru"},
    {id:9, nombre:"Elias",apellido:"Mejia",edad:25, telefono:"982109406",pais:"Bolivia"},
    {id:10, nombre:"Daniela",apellido:"Lucas",edad:17, telefono:"986602406",pais:"Peru"},
    {id:11, nombre:"Maria",apellido:"jimenez",edad:19, telefono:"983642406",pais:"Peru"},
]

class Contenedor extends Component{

    constructor(){
        super()
        this.state={
            listaContactos:arregloContactos
        }
    }
    escribiendo=(evento)=>{
       // console.log("escribiendo",evento.target.value)
        const texto=evento.target.value;
        this.filtrar(texto)
    }

    filtrar=(texto)=>{
        const listadoFiltrado=[];
       for(let i=0;i<arregloContactos.length;i++){
           const contactos=arregloContactos[i];
           if(contactos.nombre.startsWith(texto)){
               listadoFiltrado.push(contactos);
           }
       }
       this.setState({listaContactos:listadoFiltrado})
    }
    render(){

        const{listaContactos}=this.state
        return(
            <div>
                Buscador web
            
              <div>
                <div><input  onChange={this.escribiendo}/></div>

                <ListadoElementos contactos={listaContactos} />
              </div>
           </div>

        )
    }
}

export default Contenedor