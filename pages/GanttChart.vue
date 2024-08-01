<template>
    <div class="p-4 bg-gray-100">
    <h1 class="text-3xl font-bold mb-4 text-gray-800">Diagrama de Gantt</h1>
    <div class="flex flex-col space-y-4">
      <div v-for="task in tasks" :key="task.id" class="relative bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="bg-gray-200 h-8 flex items-center px-4">
          <div class="text-sm font-medium text-gray-700">{{ task.name }}</div>
        </div>
        <div class="h-8 bg-blue-500 text-white text-center flex items-center" :style="{ width: task.duration + 'px' }">
          {{ task.name }}
        </div>
      </div>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tasks: [
          { id: 1, name: 'Task 1', duration: 100, color: '#4A90E2' },
          { id: 2, name: 'Task 2', duration: 400, color: '#E94E77' },
          { id: 3, name: 'Task 3', duration: 150, color: '#50E3C2' },
        ],
      };
    },
  };
  </script>
  
  <style >
  .gantt-chart {
    display: flex;
    flex-direction: column;
  }
  .tasks {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .task {
    position: relative;
    height: 30px;
    display: flex;
    align-items: center;
  }
  .task-bar {
    height: 100%;
    display: flex;
    align-items: center;
    color: #fff;
    padding: 0 10px;
    box-sizing: border-box;
    border-radius: 4px;
  }
  .task-name {
    font-size: 14px;
    font-weight: 500;
  }
  </style>
  