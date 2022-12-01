<template>
    <nav class="bg-secondary grid grid-cols-2 items-center">
        <div class="w-full p-4 flex justify-center">
            <div class="relative">
                <input type="text" class="bg-primary rounded-md px-2 py-1 text-white" id="search_input" />
                <label for="search_input" class="text-white opacity-30 flex items-center gap-2 mx-4 center-y"> <fa icon="search" class="text-white" /> Search... </label>
            </div>
        </div>
        <div class="flex justify-center">
            <div class="flex items-center gap-8">
                <div class="space-x-5">
                    <button> <fa icon="line-chart" class="text-white" /> </button>
                    <button> <fa icon="bell" class="text-white" /> </button>
                </div>
                <div class="flex items-center gap-3">
                    <img src="https://cdn.dribbble.com/users/5991729/screenshots/14138144/media/d0f304c94028bac7fa9f66c7bcf11b4a.png?compress=1&resize=400x300" class="w-8 h-8 rounded-full">
                    <button class="py-0 opacity-50"> <fa icon="angle-down" class="text-white" /> </button>
                </div>
            </div>
        </div>
    </nav>
</template>

<!-- <style scoped>
    input {

    }
</style> -->
