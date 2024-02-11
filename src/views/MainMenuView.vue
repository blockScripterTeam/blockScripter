<script setup lang="js">
import Notice from '../components/NoticeComponent.vue'
import InjectBlockly from '../components/InjectBlocklyComponent.vue'
import Menu from '../components/MenuComponent.vue'
import { ref } from 'vue'
let isChangingText = false; // 标志变量
const textClass = ref(['flash'])
let clickCount = 0;
// 生成2到5之间的随机整数
const randomClicks = Math.floor(Math.random() * 3) + 3;
function handleClick() {
    clickCount++;
    console.log(`点击次数：${clickCount}/${randomClicks}`);
    if (!clickCount < randomClicks){
        // 重置状态，并执行文本切换
        isChangingText = false;
        clickCount = 0;
        changeText();
    }
}
function handleButtonClick() {
    if (isChangingText) {
        return; // 如果正在切换文本，直接返回
    }
    isChangingText = true; // 设置为正在切换文本状态

    // 小字文本闪烁
    setTimeout(() => {
        textClass.value = []
    }, 200);
}
// 定义文本库数组 严格限制在20字以内（包括20字）
const textLibrary = [
    "欢迎来到BlockScripter",
    "巴拉雅鲁",
    "thinshow",
    "赞助找lazygrounds",
    "人老了话也少了：（",
    "阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴阿巴",
    "大聪明是啥意思",
    "嘟嘟可爱",
    "接插件模组数据包客户端服务端材质包光影定",
    "思密达",
    "很久很久以前",
    "cnm和cmd",
    "lsp cnm",
    "人老也是啥都不懂了",
    "dsb?",
];
let textContent = ref('')
// 随机切换文本函数
function changeText() {
    // 生成一个 0 到 9 的随机整数
    const randomIndex = Math.floor(Math.random() * 15);
    // 获取随机文本
    const randomText = textLibrary[randomIndex];
    // 将小字内容替换为随机文本
    textContent.value = randomText;
}
changeText(); // 初始化时切换一次文本
let isBackgroundWhite = false; // 初始状态为非白色

function toggleBackground() {
    const body = document.body;
    isBackgroundWhite = !isBackgroundWhite; // 取反
    body.style.background = isBackgroundWhite ? '#FFFFFF' : 'linear-gradient(to bottom, #C0C0C0, #FFFFFF)';
}
</script>

<template>
    <h1>BlockScripter</h1>
    <div id="image-wrapper">
        <img src="" alt="">
    </div>
    <div id="button-wrapper">
        <!-- 添加一个链接元素，包含按钮图片 -->
        <a href="https://minecraft.com">
            <img id="button" src="" alt="Button Image">
        </a>
    </div>
    <!-- 添加小字 -->
    <div id="small-text" @click="changeText()" :class="textClass">{{ textContent }}</div>
    <!-- 添加透明按钮 -->
    <div id="text-change-button" @click="handleClick();handleButtonClick()"></div>
    <div id="background-change-button" @click="toggleBackground()"></div>
    <!-- <InjectBlockly/> -->
    <!-- <Notice/> -->
    <Menu />
</template>

<style scoped></style>
