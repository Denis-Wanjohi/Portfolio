<template>
  <main class="bg-red-100 w-screen sm:py-10">
  <TopNav></TopNav>
  <About></About>
  <Skills id="skills"></Skills>
  <Projects id="projects"></Projects>
  <Contacts id="contacts"></Contacts>
  </main>
</template>

<script setup>
import TopNav from './../components/TopNav.vue' 
import About from './../components/About.vue' 
import Skills from './../components/Skills.vue' 
import Projects from './../components/Projects.vue' 
import Contacts from './../components/Contacts.vue' 

</script>