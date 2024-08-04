<template>
  <div>
    <div class="flex-1 overflow-y-auto p-4 bg-white rounded-lg shadow-md max-h-96">
      <ul class="space-y-4">
        <li
            v-for="(message, index) in messages"
            :key="index"
            :class="{'justify-end': message.role === 'user', 'justify-start': message.role === 'ai'}"
            class="flex items-center"
        >
          <div class="flex items-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl">
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
                'bg-gray-600 p-3 rounded text-white text-sm': message.role === 'user',
                'bg-gray-800 p-3 rounded self-end text-white text-sm': message.role === 'ai'
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
import { ref } from 'vue'
import axios from 'axios'

interface Message {
  role: string;
  content: string;
}

const messages = ref<Message[]>([])
const input = ref('')

// Función para ajustar el tamaño del textarea automáticamente
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
    const aiMessage = { role: 'ai', content: response.data }
    messages.value.push(aiMessage)
  } catch (error) {
    console.error('Error durante la solicitud a la API', error)
  }

  input.value = ''
}

const cleanMessage = (message: string) => {
  // Elimina los caracteres no deseados
  const cleanedMessage = message
      .replace(/\\n/g, ' ')
      .replace(/0:/g, '')
      .replace(/"/g, '')
      .replace(/\\+/g, '')
      .replace(/\*\*/g, '')
      .replace(/\*/g, '')
      .replace(/#/g, '')
      .trim();

  // Limita el mensaje a dos oraciones
  const sentences = cleanedMessage.split(/(?<=[.!?])\s+/); // Divide el texto en oraciones
  return sentences.slice(0, 2).join(' '); // Toma solo las dos primeras oraciones
}
</script>

<style scoped>
/* Añade estilos personalizados aquí si es necesario */
</style>
