<template>
  <div class=" w-full py-5 bg-repeat t">
    <h3 class="text-2xl font-extrabold text-center  py-5 hover:underline">TECHNICAL SKILLS</h3>
    <div class="sm:block hidden">
      <v-timeline side="end" class="sm:w-1/2 w-screen mx-auto">
        <v-timeline-item v-for="skill in skills" :dot-color="skill.color">
          <template v-slot:opposite>
            <p class="font-bold text-2xl cinzel-700">{{ skill.title }}</p>
          </template>
          <div>
            <div class="text-h6 ">{{ skill.name }}</div>
            <v-alert :color="skill.color" :icon="skill.icon" :value="true">
              {{ skill.desc }}
            </v-alert>
          </div>
        </v-timeline-item>
      </v-timeline>
    </div>
    <div class="sm:hidden block w-full overflow-auto">
      <v-timeline direction="horizontal" side="end" class="w-screen mx-auto">
        <v-timeline-item v-for="skill in skills" :dot-color="skill.color">
          <template v-slot:opposite>
            <p class="font-bold text-2xl  text-center cinzel-700">{{ skill.title }}</p>
          </template>
          <div class="w-[300px]">
            <div class="text-h6 text-center open-sans">{{ skill.name }}</div>
            <v-alert :color="skill.color" :icon="skill.icon" :value="true">
              {{ skill.desc }}
            </v-alert>
          </div>
        </v-timeline-item>
      </v-timeline>
    </div>
  </div>
</template>

<script setup>
const skills = [
  {
    title: 'FRONTEND',
    icon: 'mdi-vuejs',
    name: 'Vue JS and Nuxt JS',
    desc: 'A progressive JavaScript framework for building user interfaces and single-page applications efficiently.',
    color: '#42b883'
  },
  {
    title: 'BACKEND',
    icon: 'mdi-laravel',
    name: 'Laravel',
    desc: 'Powerful PHP framework that simplifies web application development with elegant syntax and tools.',
    color: '#e74430'
  },
  {
    title: 'UI Components',
    icon: 'mdi-css3',
    name: 'Prime vue, Veutify ,Tailwind',
    desc: 'Components for building responsive, customizable user interfaces with rich components and utility classes.',
    color: '#38b2ac'
  },
  {
    title: 'ANDROID',
    icon: 'mdi-database',
    name: 'Java + xml',
    desc: 'For Robust and real android applications .',
    color: '#4285bc'
  },
  {
    title: 'DATABASES',
    icon: 'mdi-database',
    name: 'MySQL,Supabase',
    desc: 'For database management.',
    color: '#00758f'
  },
  {
    title: 'Collaboration',
    icon: 'mdi-github',
    name: 'Github',
    desc: 'Version control and collaboration, enabling code sharing and project management.',
    color: '#181717'
  },
  {
    title: 'CICD',
    icon: 'mdi-docker',
    name: 'Docker',
    desc: 'For automating application deployment using lightweight, portable containers for consistency.',
    color: '#2496ed'
  }
];
</script>

<style></style>
