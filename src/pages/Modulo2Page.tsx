import { useState } from "react";

type ContadorProps = {
    initial?:number;
    step?:number
}

export const Modulo2Page = ({initial=0,step=1}:ContadorProps) => {

    const [count,setCount] = useState<number>(initial)
    const inc = ()=> setCount((c)=>c+step)
    const dec = ()=> setCount((c)=>c-step)

    // Inferido 
    const [tazas,setTazas] = useState(1);

    type Ingredientes = "agua" | "cafe" | "azucar"; // Solo puede ser uno de estos tres valores
    
    type RecetaCafe ={
        agua?:number;
        cafe?:number;
        azucar?:number;
    }
    type CafePreparado = {
        mensaje: string;
        intensidad: "suave" | "media" | "fuerte";
    };

    // Explicito - union literal
    const [intensidadUI,setIntensidadUI] = useState<CafePreparado["intensidad"]>
    ("suave")

    // Explicito con null
    const [ultimoCafe,setUltimoCafe] = useState<CafePreparado | null>(null);
    
    // Valores que pueden ser undefined
    const [azucarIn,setAzucarIn] = useState<number | undefined>(undefined);

    // Interface (se Fusiona con type, pero se puede extender)
    type CardProps = {title: string};
        interface CardProps1 {title: String}
        interface Battle {arena:string}
        interface Battle {KI:number}
        const peleaOk: Battle = {arena: "Desierto", KI:1500};


    // Interface (Orientado a objetos)
    // Padre
    interface RecetaBase {
        agua:number;
        cafe:number;
    }    
    // Hijo
    interface RecetaConAzucar extends RecetaBase {
        azucar:number;
    }
    interface MaquinaCafe {
        modelo:string
    }
    interface MaquinaCafe {
        aguaMaxima:number
    }

    const maquina : MaquinaCafe = {modelo:"Deluxe", aguaMaxima:500};

    //function prepararCafe(receta: RecetaCafe): CafePreparado {
     //   const intensidad = receta.cafe > 10 ? "fuerte" : receta.cafe > 5 ? "media" : "suave";
       // return {
        //    mensaje: `Café preparado con ${receta.agua}ml de agua, ${receta.cafe}g de café y ${receta.azucar}g de azúcar.`,
       //     intensidad,
       // };
    //}

    function prepararCafe({agua=0,cafe=0,azucar=0}: RecetaCafe) : CafePreparado{
        const intensidad = cafe >10 ? "fuerte" :"suave";
        return{
            mensaje: `Café preparado con ${agua}ml de agua, ${cafe}g de café y ${azucar}g de azúcar.`,intensidad
        }
    }

    interface CafePreparado1 { mensaje: string; intensidad: "suave" | "media" | "fuerte"; }

    function prepararCafe1 (receta: RecetaConAzucar): CafePreparado1 {
        const intensidad: CafePreparado1['intensidad'] =
            receta.cafe > 10 ? "fuerte" : receta.cafe > 5 ? "media" : "suave";
        return {
            mensaje: `Café preparado con ${receta.agua}ml de agua, ${receta.cafe}g de café y ${receta.azucar}g de azúcar.`,
            intensidad,
        };
    }

    const OnCafe = () => {
        const resultado = prepararCafe({ agua: 200, cafe: 8, azucar: 5 });
        alert(resultado.mensaje + ` Intensidad: ${resultado.intensidad}`);};

    const OnCafeInterface = () =>{
        const resultado = prepararCafe1({agua:200,cafe:5,azucar:5});
        alert (resultado.mensaje + "Con intensidad: "+ resultado.intensidad)
    }

    // Intersecciones
    type A = {nombre:string} // Si hay un tipe del mismo nombre de variable con el mismo dato literal se intersecciona
    type B = {edad:number}
    type C = {state:boolean}
    type Persona = A & B & C
    const juanObject: Persona = {nombre:"Juan",edad:23,state:true}


  return (
    <div className="h-screen bg-amber-300 text-black flex flex-col gap-4">
         <span>Modulo 2</span>
        
        <button onClick={OnCafe} className="bg-amber-950 text-white p-2 rounded">
            Hacer un café
           
        </button>
        <button onClick={OnCafeInterface} className="bg-amber-950 text-white p-2 rounded">
            Preparar cafe con Interface
        </button>

        <span>Interface</span>
        {peleaOk.arena + " "+ peleaOk.KI}
        <span>State tipados</span>
          {intensidadUI}
        <button onClick={()=>setIntensidadUI("media")}>
        cambiar State
        </button >
        <span>Contador</span>
        <button className="rounded-md border border-neutral-700 bg-neutral-800 px-3 py-1 hover:bg-neutral-700  text-amber-50" onClick={dec}>-</button>
        <span>{count}</span>
        <button className="rounded-md border border-neutral-700 bg-neutral-800 px-3 py-1 hover:bg-neutral-700 text-amber-50" onClick={inc}>+</button>
        <h2>Intersecciones (&)</h2>
        {juanObject.nombre} - {juanObject.edad}
        <pre>{JSON.stringify(juanObject,null,2)}</pre>
    </div>
  );
}