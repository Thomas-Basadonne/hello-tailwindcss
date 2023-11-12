<script setup></script>

<template>
  <div>
    <h1
      class="text-green-600 bg-slate-400 text-3xl border-b-8 border-red-200 mb-1"
    >
      Hello Tailwind!
    </h1>
    <h1 class="text-ghost-100 text-sm md:text-md lg:text-lg">
      Hello Tailwind!
    </h1>
  </div>
  <hr />
  <!-- typography -->
  <div class="mt-5">
    <h1 class="text-9xl">Lorem ipsum dolor sit amet.</h1>
    <h2
      class="text-xl underline decoration-red-400 decoration-dotted decoration-8 underline-offset-4 leading-9"
    >
      Lorem ipsum dolor sit amet.
    </h2>
    <p class="text-lg">Lorem ipsum dolor sit amet.</p>
    <p class="text-base">Lorem ipsum dolor sit amet.</p>
    <p class="text-sm break-all">
      Loremhvkvkvkhvkhvhvhvhvhvhvhvhvhvhvvhvhvhvhvhvhvhvhvhvhvhhv ipsum dolor
      sit amet.
    </p>
    <div class="bg-green-300">
      <p class="truncate bg-red-400 p-1 mx-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ratione.
        Totam illum iure laboriosam libero! Illum voluptatum alias praesentium
        dignissimos recusandae, unde incidunt aliquam consequatur aut eveniet
        dolore laboriosam laudantium.
      </p>
    </div>

    <div class="flex w-full min-h-24">
      <div class="w-1/2 bg-yellow-300">sidebar</div>
      <div class="w-1/2 bg-blue-300">main</div>
    </div>
  </div>
  <div class="Parent">
    <div>header</div>
    <div class="flex">
      <div class="basis-3/4">Main content</div>
      <div class="basis-1/4">sidebar</div>
    </div>
  </div>
</template>

<style scoped></style>
