import React, { ChangeEvent, FormEvent } from 'react';
import toast from 'react-hot-toast';
import { HiOutlineXMark } from 'react-icons/hi2';

interface AddDataProps {
  slug: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddData: React.FC<AddDataProps> = ({
  slug,
  isOpen,
  //   columns,
  setIsOpen,
}) => {
  // global
  const [showModal, setShowModal] = React.useState(false);
  const [file, setFile] = React.useState<File | null>(null);
  const [preview, setPreview] = React.useState<string | null>(null);

  // add user
  const [firstName, setFirstName] = React.useState('');
  const [lastName, setLastName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [isVerified, setIsVerified] = React.useState('');
  const [formUserIsEmpty, setFormUserIsEmpty] = React.useState(true);

  // add product
  const [title, setTitle] = React.useState('');
  const [color, setColor] = React.useState('');
  const [producer, setProducer] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [inStock, setInStock] = React.useState('');
  const [formProductIsEmpty, setFormProductIsEmpty] =
    React.useState(true);

  // global
  const loadImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const imageUpload = e.target.files[0];
      setFile(imageUpload);
      setPreview(URL.createObjectURL(imageUpload));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast('Gabisa dong!', { icon: '😛' });
  };

  React.useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  // add user
  React.useEffect(() => {
    if (
      firstName === '' ||
      lastName === '' ||
      email === '' ||
      phone === '' ||
      isVerified === '' ||
      file === null
    ) {
      setFormUserIsEmpty(true);
    }

    if (
      firstName !== '' &&
      lastName !== '' &&
      email !== '' &&
      phone !== '' &&
      isVerified !== '' &&
      file !== null
    ) {
      setFormUserIsEmpty(false);
    }
  }, [email, file, firstName, isVerified, lastName, phone]);

  React.useEffect(() => {
    if (
      title === '' ||
      color === '' ||
      producer === '' ||
      price === '' ||
      inStock === '' ||
      file === null
    ) {
      setFormProductIsEmpty(true);
    }

    if (
      title !== '' &&
      color !== '' &&
      producer !== '' &&
      price !== '' &&
      inStock !== '' &&
      file !== null
    ) {
      setFormProductIsEmpty(false);
    }
  }, [color, file, inStock, price, producer, title]);

  if (slug === 'user') {
    return (
      <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-black/75 z-[99]">
        <div
          className={`w-[80%] xl:w-[50%] rounded-lg p-7 bg-base-100 relative transition duration-300 flex flex-col items-stretch gap-5 ${
            showModal ? 'translate-y-0' : 'translate-y-full'
          }
            ${showModal ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="w-full flex justify-between pb-5 border-b border-base-content border-opacity-30">
            <button
              onClick={() => {
                setShowModal(false);
                setIsOpen(false);
              }}
              className="absolute top-5 right-3 btn btn-ghost btn-circle"
            >
              <HiOutlineXMark className="text-xl font-bold" />
            </button>
            <span className="text-2xl font-bold">Añadir Pelicula</span>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4"
          >
            <input
              type="text"
              placeholder="Titulo"
              className="input input-bordered w-full"
              name="Titulo"
              id="firstName"
              onChange={(element) =>
                setFirstName(element.target.value)
              }
            />
            <input
              type="text"
              placeholder="Sinopsis"
              className="input input-bordered w-full"
              name="Sinopsis"
              id="Sinopsis"
              onChange={(element) =>
                setLastName(element.target.value)
              }
            />
            <input
              type="text"
              placeholder="Clasificación"
              className="input input-bordered w-full"
              name="Clasificación"
              id="Clasificación"
              onChange={(element) => setEmail(element.target.value)}
            />
            <input
              type="text"
              placeholder="Tipo"
              className="input input-bordered w-full"
              name="Tipo"
              id="Tipo"
              onChange={(element) => setPhone(element.target.value)}
            />
             <input
              type="text"
              placeholder="Duraccion"
              className="input input-bordered w-full"
              name="Duraccion"
              id="Duraccion"
              onChange={(element) => setEmail(element.target.value)}
            />
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Estado de la pelicula</span>
              </div>
              <select
                className="select select-bordered"
                name="isVerified"
                id="isVerified"
                onChange={(element) =>
                  setIsVerified(element.target.value)
                }
              >
                <option disabled selected>
                  Selecione el Estado
                </option>
                <option value="true">Activo</option>
                <option value="false">Inactivo</option>
              </select>
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">
                Subir foto del poster
                </span>
              </div>
              <input
                type="file"
                className="file-input file-input-bordered w-full"
                onChange={loadImage}
              />
            </label>
            {preview && preview !== '' && (
              <div className="w-full flex flex-col items-start gap-3">
                <span>Vista previa</span>
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src={preview} alt="profile-upload" />
                  </div>
                </div>
              </div>
            )}
            <button
              className={`mt-5 btn ${
                formUserIsEmpty ? 'btn-disabled' : 'btn-primary'
              } btn-block col-span-full font-semibold`}
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (slug === 'product') {
    return (
      <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-black/75 z-[99]">
        <div
          className={`w-[80%] xl:w-[50%] rounded-lg p-7 bg-base-100 relative transition duration-300 flex flex-col items-stretch gap-5 ${
            showModal ? 'translate-y-0' : 'translate-y-full'
          }
            ${showModal ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="w-full flex justify-between pb-5 border-b border-base-content border-opacity-30">
            <button
              onClick={() => {
                setShowModal(false);
                setIsOpen(false);
              }}
              className="absolute top-5 right-3 btn btn-ghost btn-circle"
            >
              <HiOutlineXMark className="text-xl font-bold" />
            </button>
            <span className="text-2xl font-bold">Nueva Funcion</span>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4"
          >
            <input
              type="text"
              placeholder="Pelicula"
              className="input input-bordered w-full"
              name="title"
              id="title"
              onChange={(element) => setTitle(element.target.value)}
            />
            <input
              type="text"
              placeholder="Horario"
              className="input input-bordered w-full"
              name="color"
              id="color"
              onChange={(element) => setColor(element.target.value)}
            />
            <input
              type="text"
              placeholder="Sala"
              className="input input-bordered w-full"
              name="producer"
              id="producer"
              onChange={(element) =>
                setProducer(element.target.value)
              }
            />
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Estado de la Funcion</span>
              </div>
              <select
                className="select select-bordered"
                name="inStock"
                id="inStock"
                onChange={(element) =>
                  setInStock(element.target.value)
                }
              >
                <option disabled selected>
                  Selecione el Estado
                </option>
                <option value="true">Activa</option>
                <option value="false">Inactiva</option>
              </select>

            </label>
            <button
              className={`mt-5 btn ${
                formProductIsEmpty ? 'btn-disabled' : 'btn-primary'
              } btn-block col-span-full font-semibold`}
            >
              Agregar
            </button>
          </form>
        </div>
      </div>
    );
  }

  return null;
};

export default AddData;
