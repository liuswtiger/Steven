import React from 'react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { SortableContext, arrayMove, sortableKeyboardCoordinates, rectSortingStrategy } from '@dnd-kit/sortable';
import ToolCard from './ToolCard';
import useStore from '../store/useStore';

const ToolGrid = ({ tools }) => {
  const { categories, activeCategory, setCategories } = useStore();

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setCategories((prevCategories) => {
        const activeCategoryData = prevCategories.find(cat => cat.id === activeCategory);
        if (!activeCategoryData) return prevCategories;

        const oldIndex = activeCategoryData.tools.findIndex(tool => tool.id === active.id);
        const newIndex = activeCategoryData.tools.findIndex(tool => tool.id === over.id);
        const newTools = arrayMove(activeCategoryData.tools, oldIndex, newIndex);

        return prevCategories.map(cat =>
          cat.id === activeCategory ? { ...cat, tools: newTools } : cat
        );
      });
    }
  }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={tools.map(tool => tool.id)} strategy={rectSortingStrategy}>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 p-4">
          {tools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
};

export default ToolGrid;
