<template>
    <!-- 简单变量监听 -->
    <div>
        <p>
            Ask a yes/no question:
            <input v-model="question" />
        </p>
        <p>{{ answer }}</p>
    </div>

    <!-- 获取数据 -->
    <div>
        <h1>Latest Vue Core Commits</h1>

        <template v-for="branch in branches">
            <input type="radio"
                :id="branch"
                :value="branch"
                name="branch"
                v-model="currentBranch">
            <label :for="branch">{{ branch }}</label>
        </template>

        <p>vuejs@vue{{ currentBranch }}</p>

        <ul>
            <li v-for="{ html_url, sha, author, commit } in commits">
                <a :href="html_url" target="_blank" class="commit">{{ sha.slice(0, 7) }}</a>
                - <span class="message">{{ truncate(commit.message) }}</span><br>
                by <span class="author">
                    <a :href="author.html_url" target="_blank">{{ commit.author.name }}</a>
                </span>
                at <span class="date">{{ formatDate(commit.author.date) }}</span>
            </li>
        </ul>
    </div>
</template>


<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue'

const question = ref('')
const answer = ref('Question usually contain a question mark.')

watch(
    question, 
    async (newQuestion: string | string[]) => {
        if(newQuestion.indexOf('?') > -1) {
            answer.value = 'Thinking...'
            try {
                const res = await fetch('https://yesno.wtf/api')
                answer.value = (await res.json()).answer
            } catch (error) {
                answer.value = 'Error! Could not reach the API. ' + error
            }
        }
})

const API_URL = `https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=`
const branches = ['main', 'v2-compat']
const currentBranch = ref(branches[0])
const commits = ref(null)

watchEffect(async () => {
    // 该 effect 会立即执行
    // 并且在 currectBranch.value 改变时重新运行
    const url = `${API_URL}${currentBranch.value}`
    commits.value = await (await fetch(url)).json()
})

function truncate(v: string | string[]) {
    const newline = v.indexOf('\n')
    return newline > 0 ? v.slice(0, newline) : v
}

function formatDate(v: string) {
    return v.replace(/T|Z/g, ' ')
}
</script>