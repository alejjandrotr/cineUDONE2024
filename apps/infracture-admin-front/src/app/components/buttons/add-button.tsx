import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";

export const AddButton = ({ title }: { title: string }) => (
  <Link
    to="#"
    className="inline-flex
               items-center
               justify-center text-center font-medium  text-white 
               gap-2.5
               bg-meta-4
               py-4 px-10
               hover:bg-opacity-90
               lg:px-8 xl:px-10
               rounded-md"
  >
    <FaPlus /> Agregar Sala
  </Link>
);
