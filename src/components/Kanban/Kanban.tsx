import { useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { BsThreeDotsVertical, BsPlusCircle } from 'react-icons/bs';

import { KanbanItem } from '../../components';

type KanbanDataType = {
  name: string;
  items: {
    id: string;
    priority: number;
    title: string;
    chat: number;
    attachment: number;
    assignees: {
      avt: string;
    }[];
  }[];
}[];

type KanbanDataProps = {
  kanbanData: KanbanDataType;
};

const createGuidId = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const KanbanComponent: React.FC<KanbanDataProps> = ({ kanbanData }) => {
  const [boardData, setBoardData] = useState(kanbanData);
  const [showForm, setShowForm] = useState(false);
  const [selectedBoard, setSelectedBoard] = useState(0);

  const onDragEnd = (re: any) => {
    if (!re.destination) return;
    let newBoardData = boardData;
    var dragItem =
      newBoardData[parseInt(re.source.droppableId)].items[re.source.index];
    newBoardData[parseInt(re.source.droppableId)].items.splice(
      re.source.index,
      1
    );
    newBoardData[parseInt(re.destination.droppableId)].items.splice(
      re.destination.index,
      0,
      dragItem
    );
    setBoardData(newBoardData);
  };

  const onTextAreaKeyPress = (e: any) => {
    if (e.keyCode === 13) {
      //Enter
      const val = e.target.value;
      if (val.length === 0) {
        setShowForm(false);
      } else {
        const boardId = e.target.attributes['data-id'].value;
        const item = {
          id: createGuidId(),
          title: val,
          priority: 0,
          chat: 0,
          attachment: 0,
          assignees: [],
        };
        let newBoardData = boardData;
        newBoardData[boardId].items.push(item);
        setBoardData(newBoardData);
        setShowForm(false);
        e.target.value = '';
      }
    }
  };

  const DroppableClass = (board: string) => {
    let color: string;

    if (board === 'Backlog') color = 'bg-purple-500';
    else if (board === 'In Progress') color = 'bg-blue-500';
    else if (board === 'In Review') color = 'bg-orange-300';
    else color = 'bg-green-500';

    let style = `w-full h-1 bg-gradient-to-r ${color}
    absolute inset-x-0 top-0`;
    return style;
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className='grid grid-cols-4 gap-5 my-5'>
        {boardData.map((board, bIndex) => {
          return (
            <div key={board.name}>
              <Droppable droppableId={bIndex.toString()}>
                {(provided, snapshot) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    <div
                      className={`bg-gray-100 rounded-md shadow-md
                            flex flex-col relative overflow-hidden
                            ${snapshot.isDraggingOver && 'bg-green-100'}`}
                    >
                      <span className={DroppableClass(board.name)}></span>
                      <h4 className=' p-3 flex justify-between items-center mb-2'>
                        <span className='text-xl text-gray-500'>
                          {board.name}
                        </span>
                        <BsThreeDotsVertical className='text-xl text-gray-500' />
                      </h4>

                      <div
                        className='overflow-y-auto overflow-x-hidden h-auto'
                        style={{ maxHeight: 'calc(100vh - 290px)' }}
                      >
                        {board.items.length > 0 &&
                          board.items.map((item, iIndex) => {
                            return (
                              <KanbanItem
                                key={item.id}
                                data={item}
                                index={iIndex}
                              />
                            );
                          })}
                        {provided.placeholder}
                      </div>

                      {showForm && selectedBoard === bIndex ? (
                        <div className='p-3'>
                          <textarea
                            className='border-gray-300 rounded focus:ring-purple-400 w-full'
                            rows={3}
                            placeholder='Task info'
                            data-id={bIndex}
                            onKeyDown={(e) => onTextAreaKeyPress(e)}
                          />
                        </div>
                      ) : (
                        <button
                          className='flex justify-between items-center px-4 my-3 space-x-2 text-lg'
                          onClick={() => {
                            setSelectedBoard(bIndex);
                            setShowForm(true);
                          }}
                        >
                          <span>Add task</span>
                          <BsPlusCircle className='w-5 h-5 text-gray-500' />
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </Droppable>
            </div>
          );
        })}
      </div>
    </DragDropContext>
  );
};

export default KanbanComponent;
