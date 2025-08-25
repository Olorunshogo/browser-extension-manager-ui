
<script setup lang='ts'>
    import { computed } from 'vue'; 
    import { Button } from '@/components/ui/button';
    import { 
        DropdownMenu, DropdownMenuContent, 
        DropdownMenuItem, DropdownMenuTrigger 
    } from '@/components/ui/dropdown-menu';
    import { useColorMode } from '@vueuse/core';

    // Initialize color mode (light/dark/system)
    const colorMode = useColorMode();

    // Dynamically compute the theme icon based on current color mode   
    const themeIcon = computed(() => {
        if (colorMode.value === 'light') return '/images/icon-moon.svg';
        if (colorMode.value === 'dark') return '/images/icon-sun.svg'; 
        return colorMode.value === 'auto' ? '/images/icon-sun.svg' : '/images/icon-moon.svg';
    });

    const themeAlt = computed(() => {
        if (colorMode.value === 'light') return 'Moon Icon';
        if (colorMode.value === 'dark') return 'Sun Icon'; 
        return colorMode.value === 'auto' ? 'Sun Icon' : 'Moon Icon';
    });

</script>

<template>
    <header>
        <div class="w-full h-full">
            <div class="flex items-center justify-between px-2 py-1 shadow-lg bg-(--neutral-400) dark:bg-(--neutral-700) rounded-xl border-1 dark:border-0 border-(--border-gray) w-full max-w-7xl mx-auto h-fit">
                
                <!-- Logo -->
                <div class="relative flex items-center gap-2">
                    <img src="/images/logo.svg" alt="Logo" class="w-fit h-6 lg:h-8" />
                    <span class="absolute left-8 lg:left-12 text-sm lg:text-lg font-semibold text-(--neutral-900) dark:text-(--neutral-100) opacity-0">Extensions</span>
                </div>

                <!-- Theme Toggle -->
                <DropdownMenu>
                    <DropdownMenuTrigger as-child>
                        <Button 
                            variant="outline" 
                            class="bg-(--neutral-200) dark:bg-(--neutral-800) hover:bg-(--neutral-600) hover:cursor-pointer shadow-lg duration-300 ease-in-out transition-all"
                        >

                            <img :src="themeIcon" :alt="themeAlt" class="h-4 w-4 rotate-0 scale-100 transition-all dark:rotate-0 dark:scale-100" />
                            <span class="sr-only">Toggle theme</span>
                        </Button>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                        align="end" 
                        class="text-(--neutral-900) dark:text-(--neutral-100) hover:text-(--neutral-800) dark:hover:text-(--neutral-200) bg-(--neutral-200) dark:bg-(--neutral-800) font-semibold border-1 border-(--border-gray) dark:border-(--neutral-700) shadow-xl"
                    >
                        <DropdownMenuItem @click="colorMode.value = 'light'">
                            Light
                        </DropdownMenuItem>
                        <DropdownMenuItem @click="colorMode.value = 'dark'">
                            Dark
                        </DropdownMenuItem>
                        <DropdownMenuItem @click="colorMode.value = 'auto'">
                            System
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>


            </div>
        </div>
    </header>
</template>

<style lang="css" scoped>

</style>