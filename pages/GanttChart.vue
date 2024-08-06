<template>
  <div class="p-4 bg-gray-100">
    <h1 class="text-3xl font-bold mb-4 text-gray-800">Diagrama de Gantt</h1>
    <div class="flex flex-col space-y-4">
      <div v-for="task in tasks" :key="task.id" class="relative bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="bg-gray-200 h-8 flex items-center px-4">
          <div class="text-sm font-medium text-gray-700">{{ task.title }}</div>
        </div>
        <div class="h-8" :style="{ width: task.days * 20 + 'px', backgroundColor: task.color }">
          <span class="text-white text-center">{{ task.progress }}%</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const route = useRoute();
    const tasks = ref([]);

    onMounted(() => {
      const description = route.query.description ? JSON.parse(route.query.description) : { tasks: [] };
      tasks.value = description.tasks.map(task => ({
        ...task,
        color: task.color || '#4A90E2', // Default color if not specified
      }));
    });

    return {
      tasks,
    };
  }
};
</script>

<style scoped>
/* Estilos del diagrama de Gantt */
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
