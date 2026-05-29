export type ProductColor = {
  name: string
  hex: string
  slug: string
  imageIndex: number
}

export type ProductSpec = {
  label: string
  value: string
}

export type Product = {
  id: string
  slug: string
  name: string
  tagline: string
  description: string
  longDescription: string
  price: number
  originalPrice?: number
  category: "over-ear" | "in-ear" | "earbuds"
  colors: ProductColor[]
  images: string[]
  specs: ProductSpec[]
  features: string[]
  badge?: string
  new?: boolean
  bestseller?: boolean
  video?: string
}

export type CartItem = {
  product: Product
  quantity: number
  selectedColor: ProductColor
}