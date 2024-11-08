import {codeMakerAndRun } from './code-maker';

describe('PROBANDO EL CODE MAKE', () => {

  describe('Corre archivo', () =>{

    it('must run okey', () =>{
      expect(codeMakerAndRun()).toReturn();
    } )
  })


  describe('generar archivo', () =>{
    it('Algoritmo ', () =>{
      const pseudoCode = `Algoritmo de HolaMundo
                          INICIO
                          FIN`;
      const codeResult = `function holaMundo() {
                          
                          }`
    })

    it('Constantes 1', () =>{
      const pseudoCode = `Algoritmo de HolaMundo
                          DECLARACION
                            Constantes
                              X: 5
                          INICIO
                          FIN`;
      const codeResult = `function holaMundo() {
                            const X = 5;
                          }`
    })
    
    it('Constantes 2', () =>{
      const pseudoCode = `Algoritmo de HolaMundo
                          DECLARACION
                            Constantes
                              X: 5
                              Y: "HOLA"
                          INICIO
                          FIN`;
      const codeResult = `function holaMundo() {
                            const X = 5;
                            const Y = "HOLA";
                          }`
    })
    
    it('Constantes 3', () =>{
      const pseudoCode = `Algoritmo de HolaMundo
                          DECLARACION
                            Constantes
                              X, Y: 5
                              Y: "HOLA"
                          INICIO
                          FIN`;
      const codeResult = `function holaMundo() {
                            const X, Y = 5;
                            const Y = "HOLA";
                          }`
    })
  })
})