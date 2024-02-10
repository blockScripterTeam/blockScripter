<script setup>
let isChangingText = false; // 标志变量
function handleButtonClick() {
    if (isChangingText) {
        return; // 如果正在切换文本，直接返回
    }
    isChangingText = true; // 设置为正在切换文本状态
    // 生成2到5之间的随机整数
    const randomClicks = Math.floor(Math.random() * 3) + 3;
    // 小字文本闪烁
    const smallText = document.getElementById('small-text');
    smallText.classList.add('flash');
    setTimeout(() => {
        smallText.classList.remove('flash');
    }, 200);
    let clickCount = 0;
    function handleClick() {
        clickCount++;
        console.log(`点击次数：${clickCount}/${randomClicks}`);
        if (clickCount < randomClicks) {
            // 点击次数未达到要求，继续监听点击事件
            textChangeButton.removeEventListener('click', handleClick);
            textChangeButton.addEventListener('click', handleClick);
        } else {
            // 重置状态，并执行文本切换
            isChangingText = false;
            clickCount = 0;
            changeText();
        }
    }
    // 初始绑定点击事件
    textChangeButton.removeEventListener('click', handleClick);
    textChangeButton.addEventListener('click', handleClick);
}
// 添加点击事件监听器
const textChangeButton = document.getElementById("text-change-button");
textChangeButton.addEventListener("click", handleButtonClick);
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
// 随机切换文本函数
function changeText() {
    // 生成一个 0 到 9 的随机整数
    const randomIndex = Math.floor(Math.random() * 15);
    // 获取随机文本
    const randomText = textLibrary[randomIndex];
    // 将小字内容替换为随机文本
    document.getElementById("small-text").textContent = randomText;
}
let isBackgroundWhite = false; // 初始状态为非白色

function toggleBackground() {
    const body = document.body;
    isBackgroundWhite = !isBackgroundWhite; // 取反
    body.style.background = isBackgroundWhite ? '#FFFFFF' : 'linear-gradient(to bottom, #C0C0C0, #FFFFFF)';
}
</script>

<script>
import Notice from './components/notice.vue'
import InjectBlockly from './components/injectBlockly.vue'
import Menu from './components/menu.vue'
export default {
    components: {
        Notice,
        InjectBlockly,
        Menu
    }
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
    <div id="small-text" onclick="changeText()">欢迎来到BlockScripter</div>
    <!-- 添加透明按钮 -->
    <div id="text-change-button"></div>
    <div id="background-change-button" onclick="toggleBackground()"></div>
    <!-- <InjectBlockly/> -->
    <!-- <Notice/> -->
    <Menu />
</template>

<style scoped></style>
