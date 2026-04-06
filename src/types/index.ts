import { Categoria, PlatoResponseDto, CreatePlatoDto } from './restaurante.types'

// ✅ Usando el enum correctamente
const categoriaDeHoy: Categoria = Categoria.PRINCIPAL
console.log(categoriaDeHoy)  // imprime: 'Segundos'

// Ver todos los valores disponibles
const todasLasCategorias = Object.values(Categoria)
console.log(todasLasCategorias)

// ❌ Descomenten para ver el error en acción:
// const categoriaInvalida: Categoria = 'seg'

const platoDemo: PlatoResponseDto = {
  _id: '60d21b4667d0d8992e610c85',
  nombre: 'Ceviche Mixto',
  categoria: Categoria.PRINCIPAL,
  precio: 35.5,
  stock: 12
};

const nuevoPlato: CreatePlatoDto = {
  nombre: 'Ceviche Mixto',
  categoria: Categoria.PRINCIPAL,
  precio: 35.5,
  stock: 12
};

console.log(platoDemo);
console.log(nuevoPlato);
