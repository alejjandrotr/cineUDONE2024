import React, { ChangeEvent } from 'react';
import toast from 'react-hot-toast';
import { HiOutlinePencil } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const navigate = useNavigate();

  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = React.useState<File | null>(
    null
  );
  const [preview, setPreview] = React.useState<string | null>(null);

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageUpload = e.target.files[0];
      setSelectedFile(imageUpload);
      setPreview(URL.createObjectURL(imageUpload));
      console.log('Selected File: ', selectedFile);
    }
  };
  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const [firstName, setFirstName] = React.useState('Alejandro');
  const [lastName, setLastName] = React.useState('Marcano');
  const [email, setEmail] = React.useState('alejandromarcano@gmail.com');
  const [phone, setPhone] = React.useState('0000-000-0000');
  const [address, setAddress] = React.useState(
    'Av. Rafael (Fucho) Tovar, sector Guatamare, Isla Margarita, Edo. Nueva Esparta, Venezuela.'
  );

  return (
    // screen
    <div className="w-full p-0 m-0">
      {/* container */}
      <div className="w-full flex flex-col items-stretch gap-7 xl:gap-8">
        {/* block 1 */}
        <div className="flex flex-col xl:flex-row items-start justify-between gap-3 xl:gap-0">
          <h2 className="font-bold text-2xl xl:text-4xl mt-0 pt-0 text-base-content dark:text-neutral-200">
            Mi Perfil
          </h2>
          <div className="w-full xl:w-auto grid grid-cols-2 xl:flex gap-3">
            <button
              onClick={() => navigate('/profile')}
              className="btn btn-block xl:w-auto dark:btn-neutral"
            >
              Descartar cambios
            </button>
            <button
              onClick={() => {
                navigate('/profile');
                toast('Cambios Guardados!', { icon: '😛' });
              }}
              className="btn btn-block xl:w-auto btn-primary"
            >
              Guardar cambios
            </button>
          </div>
        </div>
        {/* block 2 */}
        <div className="flex items-center gap-3 xl:gap-8 xl:mb-4">
          {/* Photo */}
          <div className="relative inline-flex">
            <button
              onClick={handleIconClick}
              className="btn btn-circle btn-sm xl:btn-md top-0 right-0 absolute z-[1]"
            >
              <HiOutlinePencil className="text-xs xl:text-lg" />
            </button>
            <div className="avatar">
              <div className="w-24 xl:w-36 2xl:w-48 rounded-full">
                <img
                  src={
                    preview ||
                    'https://avatars.githubusercontent.com/u/74099030?v=4'
                  }
                  alt="foto-cowok-ganteng"
                />
              </div>
            </div>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            onChange={handleFileSelect}
          />

          {/* Heading */}
          <div className="flex flex-col items-start gap-1">
            <h3 className="font-semibold text-xl xl:text-3xl">
              {firstName} {lastName}
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
          <div className="w-full grid xl:grid-cols-3 gap-3 xl:gap-5 2xl:gap-20 xl:text-base">
            {/* column 1 */}
            <div className="w-full flex flex-col sm:grid sm:grid-cols-3 xl:flex xl:flex-col gap-3 xl:gap-5">
              {/* row 1 */}
              <div className="w-full grid xl:grid-cols-3 2xl:grid-cols-4 items-center gap-1 xl:gap-0">
                <div className="w-full whitespace-nowrap">
                  <span className="whitespace-nowrap">
                      Primer Nombre
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  value={firstName}
                  onChange={(element) =>
                    setFirstName(element.target.value)
                  }
                  className="input input-bordered w-full col-span-2 2xl:col-span-3"
                />
              </div>
              {/* row 2 */}
              <div className="w-full grid xl:grid-cols-3 2xl:grid-cols-4 items-center gap-1 xl:gap-0">
                <div className="w-full whitespace-nowrap">
                  <span className="whitespace-nowrap">
                    Apellido
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  value={lastName}
                  onChange={(element) =>
                    setLastName(element.target.value)
                  }
                  className="input input-bordered w-full col-span-2 2xl:col-span-3"
                />
              </div>
            </div>
            {/* column 2 */}
            <div className="w-full flex flex-col sm:grid sm:grid-cols-2 xl:flex xl:flex-col gap-3 xl:gap-5">
              {/* row 1 */}
              <div className="w-full grid xl:grid-cols-3 2xl:grid-cols-4 items-center gap-1 xl:gap-0">
                <div className="w-full whitespace-nowrap">
                  <span className="whitespace-nowrap">Correo</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  value={email}
                  onChange={(element) =>
                    setEmail(element.target.value)
                  }
                  className="input input-bordered w-full col-span-2 2xl:col-span-3"
                />
              </div>
              {/* row 2 */}
              <div className="w-full grid xl:grid-cols-3 2xl:grid-cols-4 items-center gap-1 xl:gap-0">
                <div className="w-full whitespace-nowrap">
                  <span className="whitespace-nowrap">Telefono</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  value={phone}
                  onChange={(element) =>
                    setPhone(element.target.value)
                  }
                  className="input input-bordered w-full col-span-2 2xl:col-span-3"
                />
              </div>
              {/* row 3 */}
              <div className="w-full grid sm:col-span-full xl:grid-cols-3 2xl:grid-cols-4 xl:items-start gap-1 xl:gap-0">
                <div className="w-full whitespace-nowrap xl:mt-3">
                  <span className="whitespace-nowrap">Direccion</span>
                </div>
                <textarea
                  className="textarea textarea-bordered w-full col-span-2 2xl:col-span-3"
                  placeholder="Address"
                  value={address}
                  onChange={(element) =>
                    setAddress(element.target.value)
                  }
                ></textarea>
                {/* <input
                  type="text"
                  placeholder="Type here"
                  value={address}
                  onChange={(element) =>
                    setAddress(element.target.value)
                  }
                  className="input input-bordered w-full col-span-2 2xl:col-span-3"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
