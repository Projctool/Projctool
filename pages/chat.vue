<template>
  <div>
    <div ref="messageContainer" class="flex-1 overflow-y-auto p-4 bg-white rounded-lg shadow-md max-h-96">
      <ul class="space-y-4">
        <li
            v-for="(message, index) in messages"
            :key="index"
            :class="{'justify-end': message.role === 'user', 'justify-start': message.role === 'ai'}"
            class="flex items-center"
        >
          <div
              :class="{
                'flex-row-reverse': message.role === 'user',
                'flex-row': message.role === 'ai'
              }" 
              class="flex items-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
            <img
                v-if="message.role === 'user'"
                src="https://static.thenounproject.com/png/363640-200.png"
                alt="User Avatar"
                class="w-8 h-8 rounded-full ml-2"
            >
            <img
                v-if="message.role === 'ai'"
                src="https://iapara.com/wp-content/uploads/2024/03/gemini-google.jpg.webp"
                alt="AI Avatar"
                class="w-8 h-8 rounded-full mr-2"
            >
            <p
                :class="{
                'bg-gray-600 p-3 rounded text-white text-sm ml-2': message.role === 'user',
                'bg-gray-800 p-3 rounded self-end text-white text-sm mr-2': message.role === 'ai'
              }"
                class="p-3 rounded-lg break-words"
            >
              {{ cleanMessage(message.content) }}
            </p>
          </div>
        </li>
      </ul>
    </div>
    <div class="flex items-center space-x-4 mt-4">
      <form @submit.prevent="handleSubmit" class="flex items-center w-full p-4 bg-white rounded-lg shadow-md">
        <input
            v-model="input"
            @input="handleInputChange"
            class="w-full p-2 border rounded-[30px]"
            placeholder="Type a message..."
        />
        <button
            type="submit"
            class="p-2 bg-primary text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition duration-300 ease-in-out"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import axios from 'axios'

interface Message {
  role: string;
  content: string;
}

const messages = ref<Message[]>([])
const input = ref('')

const autoResize = (event: Event) => {
  const textarea = event.target as HTMLTextAreaElement
  textarea.style.height = 'auto'
  textarea.style.height = textarea.scrollHeight + 'px'
}

const handleInputChange = (event: Event) => {
  input.value = (event.target as HTMLInputElement).value
}

const handleSubmit = async () => {
  const userMessage = { role: 'user', content: input.value }
  messages.value.push(userMessage)

  try {
    const response = await axios.post('/api/chat', { messages: [userMessage] })
    const aiMessage = { role: 'ai', content: getProjectRelatedResponse(response.data) }
    messages.value.push(aiMessage)
  } catch (error) {
    console.error('Error durante la solicitud a la API', error)
  }

  input.value = ''
}

const getProjectRelatedResponse = (message: string) => {
  if (isProjectRelated(message)) {
    return message
  } else {
    return 'Lo siento, pero eso no te puedo responder, ya que soy una herramienta integral impulsada por IA diseñada para ayudarte a gestionar proyectos de software de manera eficiente. Ya sea que estés trabajando en un proyecto a largo plazo o en un sprint corto, ofrezco funciones que hacen que la asignación de tareas, la creación de historias de usuario, la estimación de tiempos y la gestión de costos sean sencillas y accesibles. Asimismo, también doy recomendaciones y optimizaciones inteligentes para mejorar los flujos de trabajo de gestión de proyectos.'
  }
}

const isProjectRelated = (message: string) => {
  const projectKeywords = ['proyecto', 'tarea', 'historia de usuario', 'estimación de tiempos', 'gestión de costos', 'asignación de tareas']
  return projectKeywords.some(keyword => message.toLowerCase().includes(keyword))
}

const cleanMessage = (message: string) => {
  const cleanedMessage = message
      .replace(/\\n/g, ' ')
      .replace(/0:/g, '')
      .replace(/"/g, '')
      .replace(/\\+/g, '')
      .replace(/\*\*/g, '')
      .replace(/\*/g, '')
      .replace(/#/g, '')
      .trim();

  const sentences = cleanedMessage.split(/(?<=[.!?])\s+/); 
  return sentences.slice(0, 2).join(' '); 
}

const messageContainer = ref<HTMLElement | null>(null)

const scrollToBottom = () => {
  if (messageContainer.value) {
    messageContainer.value.scrollTop = messageContainer.value.scrollHeight
  }
}

onMounted(() => {
  const observer = new MutationObserver(scrollToBottom)
  if (messageContainer.value) {
    observer.observe(messageContainer.value, { childList: true, subtree: true })
  }
  onBeforeUnmount(() => {
    observer.disconnect()
  })
})

</script>

<style scoped>

</style>
