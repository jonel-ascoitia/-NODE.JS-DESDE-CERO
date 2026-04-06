// ─────────────────────────────────────────────────────────
// ENUMS — Valores fijos del restaurante
// Un enum garantiza que solo los valores definidos aquí
// pueden usarse como categoría.
// ─────────────────────────────────────────────────────────

export enum Categoria {
  ENTRADA   = 'Entradas',
  PRINCIPAL = 'Segundos',
  POSTRE    = 'Postres',
  BEBIDA    = 'Bebidas'
}

// ─────────────────────────────────────────────────────────
// INTERFACES — Modelos del restaurante
// ─────────────────────────────────────────────────────────

export interface Plato {
  _id:        string   // generado por MongoDB
  nombre:     string
  categoria?: Categoria
  precio:     number
  stock:      number
}

// 📥 Lo que envía el cliente al crear un plato (POST /menu)
export interface CreatePlatoDto {
  nombre:    string
  categoria?: Categoria
  precio:    number
  stock?:    number
}

// 📤 Lo que devuelve el servidor al cliente (GET /menu)
export interface PlatoResponseDto {
  _id:        string
  nombre:     string
  categoria?: Categoria
  precio:     number
  stock:      number
}

export interface User {
  _id:      string
  email:    string
  password: string  // siempre hasheado, NUNCA texto plano
}

export interface RegisterDto {
  email:    string
  password: string
}

export interface LoginDto {
  email:    string
  password: string
}

export interface LoginResponseDto {
  token:   string
  message: string
}
