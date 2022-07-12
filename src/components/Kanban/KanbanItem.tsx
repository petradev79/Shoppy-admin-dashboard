import { Draggable } from 'react-beautiful-dnd';
import { BiChat } from 'react-icons/bi';
import { AiOutlinePaperClip, AiOutlinePlus } from 'react-icons/ai';
import Avatar from '@mui/material/Avatar';

type KanbanItemProps = {
  data: {
    id: string;
    priority: number;
    title: string;
    chat: number;
    attachment: number;
    assignees: {
      avt: string;
    }[];
  };
  index: number;
};

const KanbanItem: React.FC<KanbanItemProps> = ({ data, index }) => {
  return (
    <Draggable index={index} draggableId={data.id.toString()}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className='bg-white rounded-md p-3 m-3 mt-0 last:mb-0'
        >
          <label
            className={`
              px-2 py-1 rounded text-white text-sm
              ${
                data.priority === 0
                  ? 'bg-green-500'
                  : data.priority === 1
                  ? 'bg-blue-500'
                  : 'bg-purple-500'
              }
              `}
          >
            {data.priority === 0
              ? 'Low Priority'
              : data.priority === 1
              ? 'Medium Priority'
              : 'High Priority'}
          </label>
          <h5 className='text-md my-3 text-lg leading-6'>{data.title}</h5>
          <div className='flex justify-between'>
            <div className='flex space-x-2 items-center'>
              <span className='flex space-x-1 items-center'>
                <BiChat className='w-4 h-4 text-gray-500' />
                <span>{data.chat}</span>
              </span>
              <span className='flex space-x-1 items-center'>
                <AiOutlinePaperClip className='w-4 h-4 text-gray-500' />
                <span>{data.attachment}</span>
              </span>
            </div>

            <ul className='flex space-x-3'>
              {data.assignees.map((ass: any, index: number) => {
                return (
                  <li key={index}>
                    <Avatar alt='Remy Sharp' src={ass.avt} />
                  </li>
                );
              })}
              <li>
                <button
                  className='border border-dashed flex items-center w-9 h-9 border-gray-500 justify-center
                    rounded-full'
                >
                  <AiOutlinePlus className='w-5 h-5 text-gray-500' />
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default KanbanItem;
