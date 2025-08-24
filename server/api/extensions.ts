
import extensions from '@/assets/data/extensions.json'


export default defineEventHandler(async (event) => {
    // Simulate a delay for demonstration purposes
    await new Promise(resolve => setTimeout(resolve, 500));

    return extensions;
})