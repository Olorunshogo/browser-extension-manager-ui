
<script setup lang='ts'>
    import { useSeoMeta, useHead } from 'nuxt/app';
    import { Button } from '@/components/ui/button';
  
    useHead({
        htmlAttrs: { lang: 'en' },
        link: [ { rel: 'icon', type: 'image/png', href: '/images/favicon-32x32.png' } ]
    });

    useSeoMeta({
        title: 'Frontend Mentor | Browser extensions manager UI',
        description: '',
        
        ogTitle: 'Frontend Mentor | Browser extensions manager UI',
        ogDescription: '',
        ogImage: '/images/favicon-32x32.png',
        ogImageAlt: 'Project logo ',
        ogUrl: 'https://bem-ui.vercel.app/',
        
        twitterCard: 'summary_large_image',
        twitterTitle: 'Frontend Mentor | Browser extensions manager UI',
        twitterDescription: '',
        twitterImage: '/images/favicon-32x32.png',
        
        author: "Olorunshogo Moses BAMTEFA",
        keywords: '',
        robots: 'index, follow'
        
    }); 

    const activeFilter = ref<'all' | 'active' | 'inactive'>('all');

    function toggleFilter(filter: 'all' | 'active' | 'inactive') {
        activeFilter.value = filter;
    }

    // Fetch extensions data from the API
    const { data: extensions, error, pending } = await useFetch('/api/extensions');

    function removeExtension(extensionName: string) {
        if (extensions.value) {
            extensions.value = extensions.value.filter((ext: { name: string }) => ext.name !== extensionName);
        }
    }

    function toggleActiveState(extension: any) {
        if (extension) {
            extension.isActive = !extension.isActive;
        }
    }

    // Filter extensions based on active/inactive state
    const filteredExtensions = computed(() => {
        if (activeFilter.value === 'active') {
            return (extensions.value ?? []).filter((ext: { isActive: boolean }) => ext.isActive);
        } else if (activeFilter.value === 'inactive') {
            return (extensions.value ?? []).filter((ext: { isActive: boolean }) => !ext.isActive);
        }
        return extensions.value || [];
    });

</script>

<template>
    <div class="w-full h-full">
       
        <div class="flex flex-col gap-16 px-4 lg:px-8 w-full max-w-7xl mx-auto h-full">
            
            <!-- Search Bar -->
            <div class=""></div>

            <!-- Extensions List -->
            <div class="flex flex-col gap-8 w-full h-fit">

                <!-- Extensions List Header -->
                <div class="flex items-center justify-between w-full h-full">
                    <h1 class="text-(--neutral-900) font-bold text-xl lg:text-2xl">
                        Extensions List
                    </h1>

                    <!-- Buttons -->
                    <div class="flex items-center gap-2">
                        <Button 
                            class="flex items-center text-sm bg-(--red-700) hover:bg-opacity-85 font-medium px-4 py-0.5 rounded-full border-1 border-(--border-gray) shadow-lg hover:scale-102 hover:cursor-pointer duration-300 ease-in-out transition-all"
                            :class="{ 
                                'bg-transparent text-(--neutral-900) border-(--border-gray)': activeFilter !== 'all',
                                'bg-(--red-700) text-(--white) border-(--red-700)': activeFilter === 'all'
                            }"
                            @click="toggleFilter('all')"
                        >
                            All
                        </Button>

                        <Button 
                            class="flex items-center text-sm bg-transparent hover:bg-opacity-85 font-medium px-4 py-0.5 rounded-full border-1 border-(--border-gray) shadow-lg hover:scale-102 hover:cursor-pointer duration-300 ease-in-out transition-all"
                            :class="{ 
                                'bg-transparent text-(--neutral-800) border-(--border-gray)': activeFilter !== 'active',
                                'bg-(--red-700) text-(--white) border-(--red-700)': activeFilter === 'active'
                            }"
                            @click="toggleFilter('active')"
                        >
                            Active
                        </Button>

                        <Button 
                            class="flex items-center text-sm bg-transparent hover:bg-opacity-85 font-medium px-4 py-0.5 rounded-full border-1 border-(--border-gray) shadow-lg hover:scale-102 hover:cursor-pointer duration-300 ease-in-out transition-all"
                            :class="{ 
                                'bg-transparent text-(--neutral-800) border-(--border-gray)': activeFilter !== 'inactive',
                                'bg-(--red-700) text-(--white) border-(--red-700)': activeFilter === 'inactive'
                            }"
                            @click="toggleFilter('inactive')"
                        >
                            Inactive
                        </Button>

                    </div>


                </div>

                <div class="w-full h-full">
                    
                    <div v-if="pending">Loading extensions data...</div>
                    <div v-else-if="error">Failed to load extensions data.  {{ error.message }}.</div>


                    <ul v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 bg-(--light-bg-2) w-full h-fit">

                        <!-- Extension Card -->                        
                        <li class="flex flex-col gap-8 p-4 shadow-lg border-1 border-(--border-gray) rounded-xl"
                            v-for="(extension, index) in filteredExtensions"
                            :key="extension.name"
                        >
                        
                            <div class="flex gap-4 w-full h-fit">
                                <img :src="extension.logo" :alt="extension.name" class="w-12 h-12"/>
                                <div class="flex flex-col gap-1">
                                    <h2 class="text-sm lg:text-base text-(--neutral-900) font-semibold">{{ extension.name }}</h2>
                                    <p class="text-xs lg:text-sm text-(--neutral-700)">{{ extension.description }}</p>
                                </div>
                            </div>
                        
                        
                            <!-- Buttons -->
                            <div class="flex items-center justify-between">

                                <Button 
                                    class="text-xs bg-transparent font-medium px-4 py-0.5 rounded-full border-1 border-(--border-gray) hover:border-(--border-gray) shadow-lg hover:scale-102 hover:cursor-pointer duration-300 ease-in-out transition-all"
                                    @click="removeExtension(extension.name)"
                                >
                                    Remove
                                </Button>

                                <!-- Toggle Active State Button -->
                                <Button 
                                    class="flex w-12 h-fit px-1 py-1 rounded-full shadow-lg hover:scale-102 hover:cursor-pointer duration-300 ease-in-out transition-all"
                                    :class="{ 
                                        'bg-(--neutral-300)': !extension.isActive,
                                        'bg-(--red-700)': extension.isActive
                                    }"
                                    @click="toggleActiveState(extension)"
                                >
                                    <div 
                                        class="w-5 h-5 rounded-full shadow-lg bg-(--light-bg-1) border-1 border-(--border-gray) delay-100 duration-500 ease-in-out transition-all"
                                        :class="{ 
                                            '-translate-x-2': !extension.isActive, 
                                            'translate-x-2': extension.isActive 
                                        }"
                                    ></div>
                                </Button>
                                
                            </div>

                        </li>
                    </ul>

                </div>

            </div>
            
        </div>

    </div>
</template>

<style lang="css" scoped>

</style>