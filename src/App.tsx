import Header from "./components/Header";
import Hero from './components/Hero'
import Clientes from './components/Clientes'
import Services from "./components/Services";
import Project from './assets/project.svg'
import Raise from './assets/raise.svg'
import Timelines from './assets/timelines.svg'
import Rating from './assets/rating.svg'

export default function App() {
  return (
   <main className="flex flex-col min-h-screen py-4">
     <Header />
     <Hero />
     <Clientes />
     <Services />
    <div id="portifolio" className="flex flex-col py-12 bg-green-100 items-center justify-center">
      <div className="flex items-center gap-5">
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-col items-center">
         <img src={Project} className="w-14" alt="" />
         <p className="font-medium">Projetos Realizados</p>
        </div>
        <h1 className="text-primary textxl fontbold">250 +</h1>
      </div>
      <div className="w-[1px] h-44 bg-zinc-300"></div>

      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-col items-center">
         <img src={Rating} className="w-14" alt="" />
         <p className="font-medium">Projetos Realizados</p>
        </div>
        <h1 className="text-primary textxl fontbold">85%</h1>
      </div>
      <div className="w-[1px] h-44 bg-zinc-300"></div>

      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-col items-center">
         <img src={Raise} className="w-14" alt="" />
         <p className="font-medium">Projetos Realizados</p>
        </div>
        <h1 className="text-primary textxl fontbold">10M</h1>
      </div>
      <div className="w-[1px] h-44 bg-zinc-300"></div>

      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-col items-center">
         <img src={Timelines} className="w-14" alt="" />
         <p className="font-medium">Projetos Realizados</p>
        </div>
        <h1 className="text-primary textxl fontbold">2 anos</h1>
      </div>
      <div className="w-[1px] h-44 bg-zinc-300"></div>
      </div>
    </div>

   </main>
  )
}
