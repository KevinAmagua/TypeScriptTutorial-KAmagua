
import { Link } from "react-router-dom";
import { calcularDanio } from "../utils/CalcularDanio";

export const Modulo1Page = () => {
  let saga = "Freezer"; // Valor inferido o que asume como string
  let horasEntretenimiento: number = 100; // Valor tipado explícitamente como number
  const enCombate: boolean = true; // Valor tipado explícitamente como boolean
  let guerrero: string = "Goku"; // Valor tipado explícitamente como string
  let ki: number = 1000; // Valor tipado como number
  const equipoZ: string[] = ["Goku", "Vegeta", "Piccolo","Gohan"]; // Array de strings
 const coordernadas: [number, number,string] = [10, 20,"XYZ"]; // Tupla de dos números
  //5 funciones tipadas (parametros + retorno)
//  function calcularDanio(ataque: number, defensa: number): number {
    //return ataque - defensa;
  //}
  // Funcion flecha tipada (parametros + retorno)
  const calcularVelocidad = (distancia: number, tiempo: number): number => {
    return distancia / tiempo;
  };

  // 6 Null y Undefined
  let transformacion: string | null = null; // Puede ser string o null
  transformacion = "Super Saiyan"; // Asignación de un valor string
  let estrategia : string | undefined = undefined; // Puede ser string o undefined
  estrategia = "Kame Hame Ha"; // Asignación de un valor string
  // 7 Any y unknown
  let semillaErminatanio: any;
  semillaErminatanio = "Semilla de poder"; // Puede ser cualquier tipo
  let poderDesconocido: unknown = 9000;
  if (typeof poderDesconocido === "number") {
    poderDesconocido += 1000; // Se puede operar si es number
  }
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <div className="max-auto max-w-3xl p-8">
        <header className="mb-8 border-b border-neutral-800 pb-4">

          <Link to="/" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-md">
            Volver al inicio
          </Link>

          <h1 className="text-3xl font-semibold text-blue-500 mt-4 mb-2">
            React + TypeScript - Modulo 1</h1>
          <p className="text-sm text-neutral-400">
            Fundamentos: tipos basicos, arrays y tuplas</p>
        </header>
        <section className="mb-8">
            <h2 className="text-xl font-medium text-blue-300 mb-2">
              Inferencia y básicos</h2>
              <div className="grid grid-cols-1 gap-1 md:grid-cols-1 
              gap-2 text-neutral-300">
               <div>Saga: {saga}</div>
                <div>Horas de entretenimiento: {horasEntretenimiento}</div>
                <div>Guerrero: {guerrero}</div>
                <div>En combate: {enCombate ? "Sí" : "No"}</div>
                <div>Ki: {ki}</div>
              </div>
        </section>
        <section className="mb-8">
            <h2 className="text-xl font-medium text-blue-300 mb-2">
              Arrays y tuplas</h2>
              <div className="grid grid-cols-1 gap-1 md:grid-cols-1 
              gap-2 text-neutral-300">
                <div>Equipo Z: {equipoZ.join(", ")}</div>
                <div>Coordenadas: x = {coordernadas[0]}, y = {coordernadas[1]}, z = {coordernadas[2]}</div>
              </div>
        </section>
        <section className="mb-8">
            <h2 className="text-xl font-medium text-blue-300 mb-2">
              Funciones tipadas</h2>
              <div className="grid grid-cols-1 gap-1 md:grid-cols-1 
              gap-2 text-neutral-300">
                <p>Daño calculado: {calcularDanio(450, 2)}</p>
                <p>Velocidad calculada: {calcularVelocidad(100, 5)}</p>
              </div>
        </section>
        <section className="mb-8">
            <h2 className="text-xl font-medium text-blue-300 mb-2">
              Null y Undefined</h2>
              <div className="grid grid-cols-1 gap-1 md:grid-cols-1 
              gap-2 text-neutral-300">
                <div>Transformación: {transformacion}</div>
                <div>Estrategia: {estrategia}</div>
              </div>
        </section>
        <section className="mb-8">
            <h2 className="text-xl font-medium text-blue-300 mb-2">
              Any y unknown</h2>
              <div className="grid grid-cols-1 gap-1 md:grid-cols-1 
              gap-2 text-neutral-300">
                <div>Semilla Erminatanio (Any): {semillaErminatanio}</div>
              </div>
        </section>
      </div>
    </main>
  );
};