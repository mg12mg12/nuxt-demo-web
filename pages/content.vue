<!-- pages/content.vue -->
<script setup>
const { data: users } = await useFetch('https://jsonplaceholder.typicode.com/users')
</script>

<template>
  <div class="content">
    <h2>內容頁面</h2>
    <p>這是內容頁面的內容。</p>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }} ({{ user.email }})

      </li>
    </ul>
  </div>
</template>

<style scoped>
/* 全域樣式 */
html, body {
  margin: 0; 
  padding: 0;
  overflow-x: hidden; /* 隱藏水平滾動條 */
}

* {
  box-sizing: border-box; /* 確保 padding 和 border 不影響元素大小 */
}

/* App Container Styles */
.test_web-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #001f3f;
  color: white;
  margin: 0;
  width: 100%;
  overflow-x: hidden;
}

.banner {
  background-color: #42b983;
  color: white;
  padding: 20px;
  text-align: center;
  width: 100%; /* 改為 100% */
  box-sizing: border-box; /* 確保 padding 不影響寬度 */
}

/* Navigation Bar Styles */
.navbar {
  display: flex;
  justify-content: center;
  background-color: #f4f4f4;
  padding: 10px;
  width: 100%;
}

.navbar button {
  margin: 0 10px;
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.navbar button:hover {
  background-color: #369b73;
}

/* Main Content Styles */
main {
  padding: 20px;
  text-align: center;
}

/* Navigation content Styles */
.content {
  background-color: #fff;
  color: #333;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.content ul {
  list-style-type: none;
  padding: 0;
}
.content li {
  background-color: #f4f4f4;
  margin: 5px 0;
  padding: 10px;
  border-radius: 5px;
  text-align: left;
}
.content li:hover {
  background-color: #e0e0e0;
}
</style>