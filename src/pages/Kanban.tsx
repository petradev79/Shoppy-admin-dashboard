import { Header, KanbanComponent } from '../components';
import { kanbanData } from '../data/dummy';

const Kanban = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='App' title='Kanban' />
      <KanbanComponent kanbanData={kanbanData} />
    </div>
  );
};

export default Kanban;
