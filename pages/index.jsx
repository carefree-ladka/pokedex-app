import Head from "next/head"
import { useState } from "react"
import dynamic from "next/dynamic"
import { types as filterTypes, gender as filterGenders } from "../utils/types"
import SuspenseLayout from "../components/common/SuspenseLayout"
import PokemonLoader from "../components/common/PokemonLoader"

const Home = dynamic(() => import("../components/home/Home"), {
  suspense: true,
})
const Pokemon = dynamic(() => import("../components/common/Pokemon"), {
  suspense: true,
})

export default function IndexPage() {
  const [typeOptions] = useState(filterTypes)
  const [genderOptions] = useState(filterGenders)

  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Pokédex - Discover and Explore Pokémon</title>
        <meta name="description" content="Explore the world of Pokémon with our interactive Pokédex. Search, filter, and discover detailed information about your favorite Pokémon." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Pokédex</h1>
            <p className="text-lg text-gray-600">Discover and explore the world of Pokémon</p>
          </header>
          
          <SuspenseLayout fallback={<PokemonLoader />}>
            <Home
              typeOptions={typeOptions}
              genderOptions={genderOptions}
            />
            <Pokemon />
          </SuspenseLayout>
        </div>
      </main>
    </div>
  )
}
