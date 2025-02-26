import { HiOutlinePencil} from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  return (
    // screen
    <div className="w-full p-0 m-0">
      {/* container */}
      <div className="w-full flex flex-col items-stretch gap-10 xl:gap-8">
        {/* block 1 */}
        <div className="flex items-start justify-between">
          <h2 className="font-bold text-2xl xl:text-4xl mt-0 pt-0 text-base-content dark:text-neutral-200">
            Mi Perfil
          </h2>
          <button
            onClick={() => navigate('/profile/edit')}
            className="btn text-xs xl:text-sm dark:btn-neutral"
          >
            <HiOutlinePencil className="text-lg" /> Editar Perfil
          </button>
        </div>

        {/* block 2 */}
        <div className="flex items-center gap-3 xl:gap-8 xl:mb-4">
          <div className="avatar">
            <div className="w-24 xl:w-36 2xl:w-48 rounded-full">
              <img
                src="https://avatars.githubusercontent.com/u/74099030?v=4"
                alt="foto-cowok-ganteng"
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-1">
            <h3 className="font-semibold text-xl xl:text-3xl">
              Alejandro Marcano
            </h3>
            <span className="font-normal text-base">Supervisor</span>
          </div>
        </div>
        {/* block 3 */}
        <div className="w-full flex flex-col items-stretch gap-3 xl:gap-7">
          {/* heading */}
          <div className="flex items-center w-full gap-3 xl:gap-5">
            <h4 className="font-semibold text-lg xl:text-2xl whitespace-nowrap">
              Informacion Basica
            </h4>
            <div className="w-full h-[2px] bg-base-300 dark:bg-slate-700 mt-1"></div>
          </div>
          {/* grid */}
          <div className="w-full grid grid-cols-1 xl:grid-cols-3 gap-5 xl:gap-5 xl:text-base">
            {/* column 1 */}
            <div className="w-full grid grid-cols-3 xl:flex gap-5 xl:gap-8">
              {/* column 1 label */}
              <div className="col-span-1 flex flex-col items-start xl:gap-5">
                <span>Primer Nombre:</span>
                <span>Apellido:</span>

              </div>
              {/* column 1 text */}
              <div className="col-span-2 flex flex-col items-start xl:gap-5">
                <span className="font-semibold">Alejandro</span>
                <span className="font-semibold">Marcano</span>

              </div>
            </div>
            {/* column 2 */}
            <div className="w-full grid grid-cols-3 xl:flex gap-5 xl:gap-8">
              {/* column 2 label */}
              <div className="col-span-1 flex flex-col items-start xl:gap-5">
                <span>Correo*</span>
                <span>Telefono</span>
                <span>Direccion</span>
              </div>
              {/* column 2 text */}
              <div className="col-span-2 flex flex-col items-start xl:gap-5">
                <span className="font-semibold">
                  alejandromarcano@gmail.com
                </span>
                <span className="font-semibold">0000-000-0000</span>
                <span className="font-semibold">
                Av. Rafael (Fucho) Tovar, sector Guatamare, Isla Margarita, Edo. Nueva Esparta, Venezuela.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
