
<script setup lang='ts'>
    import { useSeoMeta, useHead } from 'nuxt/app';
  
    useHead({
        htmlAttrs: { lang: 'en' },
        link: [ { rel: 'icon', type: 'image/png', href: '/images/favicon-32x32.png' } ]
    });

    useSeoMeta({
        title: '',
        ogTitle: '',
        description: '',
        ogDescription: '',
        ogImage: '/images/favicon-32x32.png',
        ogImageAlt: 'Project logo ',
        ogUrl: 'https://bem-ui.vercel.app/',
        
        twitterCard: 'summary_large_image',
        twitterTitle: '',
        twitterDescription: '',
        twitterImage: '/images/favicon-32x32.png',
        
        keywords: '',

        author: "Olorunshogo (Moses) BAMTEFA" 
    }); 
</script>

<template>
    <div>

    </div>
</template>

<style lang="css" scoped>

</style>