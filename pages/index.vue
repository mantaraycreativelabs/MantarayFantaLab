<template>
  <div>
    <HeroSection />
    <SocialProof />
    <FeaturesSection />
    <HowItWorks />
    <PricingTable />
    <FaqSection />
    <CallToAction />
  </div>
</template>

<script setup lang="ts">
// Importando i componenti
import HeroSection from '~/components/HeroSection.vue';
import SocialProof from '~/components/SocialProof.vue';
import FeaturesSection from '~/components/FeaturesSection.vue';
import HowItWorks from '~/components/HowItWorks.vue';
import PricingTable from '~/components/PricingTable.vue';
import FaqSection from '~/components/FaqSection.vue';
import CallToAction from '~/components/CallToAction.vue';
</script>

<style scoped>
/* Stile personalizzato se necessario */
</style>