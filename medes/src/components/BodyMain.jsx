import backGround from "../img/DO01000846.jpg"

export default function Example() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src= {backGround}
              alt=""
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-indigo-600">
              Acerca de Nosotros
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nuestra Vision
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
               “Mision Evangelica Del Espiritu Santo tiene como
              visión ganar la ciudad de Plainfield, NJ y las ciudades cercanas,
              en el estado de New Jersey y todos los Estados Unidos Para Cristo.
              Esto lo logramos Por medio del método celular que se encuentra en
              Hechos 2:46, el cual nos ha servido de gran bendición. A través de
              estas reuniones en las casas, la gran comisión se nos hace más
              efectiva. Como iglesia misionera nuestra vision es ganar Centro y
              Sur América para cristo y todos los confines de la tierra (mateo
              28: 18-20). Queremos predicar la palabra de Dios a través de la
              santa doctrina y el estudio de la biblia para el fortalecimiento
              de la iglesia la cual espera la venida de su salvador. Con la
              ayuda de nuestro gran maestro amigo y compañero fiel, el Espiritu
              Santo.
            </p>
            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
