<template>
  <div class="flex h-screen bg-gray-100">
    <nav class="w-64 bg-gray-800 text-white">
      <div class="p-4">
        <span class="text-lg font-bold">Mantaray Fantacalcio</span>
      </div>
      <ul class="space-y-2">
        <li>
          <NuxtLink to="/app/dashboard" class="block p-4 hover:bg-gray-700">Dashboard</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/app/lega" class="block p-4 hover:bg-gray-700">Lega</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/app/rosa" class="block p-4 hover:bg-gray-700">Rosa</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/app/formazione" class="block p-4 hover:bg-gray-700">Formazione</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/app/mercato" class="block p-4 hover:bg-gray-700">Mercato</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/app/asta-live" class="block p-4 hover:bg-gray-700">Asta Live</NuxtLink>
        </li>
      </ul>
    </nav>

    <div class="flex-1 flex flex-col">
      <header class="bg-white shadow p-4 flex justify-between">
        <h1 class="text-xl font-semibold">Area Gestione</h1>
        <div>
          <span>Budget: <strong>100M</strong></span>
        </div>
      </header>
      <main class="p-4 flex-1 overflow-auto">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>