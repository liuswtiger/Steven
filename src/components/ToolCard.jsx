import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const ToolCard = ({ tool }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({ id: tool.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    cursor: isDragging ? 'grabbing' : 'grab',
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
    >
      <a href={tool.url} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-4">
        <div className="text-4xl text-blue-500 mb-2">
          {/* 这里根据工具的图标类名显示相应的 Font Awesome 图标 */}
          <i className={tool.icon || "fas fa-link"}></i>
        </div>
        <p className="text-gray-800 dark:text-gray-200 text-center text-sm font-medium">{tool.name}</p>
      </a>
    </div>
  );
};

export default ToolCard;
