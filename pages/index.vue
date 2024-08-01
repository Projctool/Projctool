<script setup lang="ts">
// You can add any necessary script setup here
</script>

<template>
  <div class="home-page p-8 font-sans">
	<h1 class="text-4xl font-bold text-gray-800 mb-4">Welcome to Projctool!</h1>
	<p class="text-lg text-gray-700 mb-6">
	  Projctool is a comprehensive AI-powered tool designed to assist in managing software projects efficiently. Whether you're working on a long-term project or a short sprint, Projctool offers features that make task assignment, user story creation, time estimation, and cost management straightforward and accessible. By leveraging artificial intelligence, Projctool provides intelligent recommendations and optimizations to enhance project management workflows. Our focus is on providing easy usability through both a web application and an API service.
	</p>
	
	<h2 class="text-2xl font-semibold text-gray-800 mb-2">🚀 Key Features</h2>
	<ul class="list-none pl-0 mb-6">
	  <li class="mb-2">Task Assignment: Easily assign tasks to team members.</li>
	  <li class="mb-2">User Stories: Create and manage user stories effectively.</li>
	  <li class="mb-2">Time Tracking: Assign time to tasks and track progress.</li>
	  <li class="mb-2">Cost Estimation: Estimate costs per hour and manage budgets.</li>
	  <li class="mb-2">Project Management: Suitable for both long-term and short-term projects.</li>
	  <li class="mb-2">Usability: User-friendly interface designed for efficiency.</li>
	  <li class="mb-2">API Service: Integrate with other tools and services seamlessly.</li>
	  <li class="mb-2">AI Capabilities: Utilize AI for intelligent task recommendations, project forecasting, and more.</li>
	  <li class="mb-2">Custom AI API Key: Customize your AI interactions with a personal API key tailored to your preferences.</li>
	</ul>
	
	<h2 class="text-2xl font-semibold text-gray-800 mb-2">🤖 AI Potential</h2>
	<p class="text-lg text-gray-700 mb-6">
	  Projctool leverages AI to enhance your project management experience:
	</p>
	<ul class="list-none pl-0 mb-6">
	  <li class="mb-2">Intelligent Task Recommendations: Get suggestions on task prioritization and assignment based on historical data and project goals.</li>
	  <li class="mb-2">Project Forecasting: Use AI to predict project timelines, potential delays, and resource allocation.</li>
	  <li class="mb-2">Personalized Insights: Customize AI interactions with your own API key for tailored insights and recommendations.</li>
	</ul>
	
	<div class="buttons mt-8">
	  <router-link to="/start-new-project" class="mr-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Start New Project</router-link>
    <router-link to="/import-project" class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Import Project</router-link>
  </div>
  </div>
</template>

<script setup lang="ts">
</script>
