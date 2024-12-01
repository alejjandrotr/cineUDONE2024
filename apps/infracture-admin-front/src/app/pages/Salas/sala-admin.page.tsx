import Breadcrumb from '../../../template/free-react-tailwind-admin-dashboard-main/src/components/Breadcrumbs/Breadcrumb';
import { List } from './components/list';
import { AddButton } from '../../components/buttons/add-button';

const SalasAdminPage = () => {
  return (
    <>
      <Breadcrumb pageName="Salas" />

      <div className="flex justify-end mb-4"> 
        <AddButton title="Salas" />
      </div>

      <div className="w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <List />
      </div>
    </>
  );
};

export default SalasAdminPage;