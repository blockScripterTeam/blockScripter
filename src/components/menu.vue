<script lang="js" setup>
import { ref } from 'vue'
let visible = ref(true)
</script>

<template>
    <div id="side-menu" class="side-menu" v-show="visible">
        <ul>
            <li class="menu-item">
                <span class="menu-text">首页</span>
            </li>
            <li class="menu-item">
                <span class="menu-text">办公</span>
            </li>
            <li class="menu-item">
                <span class="menu-text">邮件</span>
            </li>
            <li class="menu-item">
                <span class="menu-text">报表</span>
            </li>
            <li class="menu-item">
                <span class="menu-text">统计</span>
            </li>
            <li class="menu-item">
                <span class="menu-text">云部署</span>
            </li>
        </ul>
        <li id="toogle" class="menu-item toogle" @click="visible = false">
            <span class="menu-text">隐藏</span>
        </li>
    </div>
</template>

<style scoped>
ul,
li {
    padding: 0;
    list-style: none;
}

.side-menu {
    width: 185px;
    height: 520px;
    background-color: #057DFC;
    padding: 10px;
    border-radius: 12px 0px 0px 12px;
    position: absolute;
    left: 84%;
    transition: width 0.2s ease;
    box-shadow: 3px 4px 16px rgba(4, 106, 214, 0.4);
}

.menu-item {
    color: #fff;
    height: 42px;
    display: flex;
    align-items: center;
    padding: 0 12px;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
    white-space: nowrap;
    position: relative;
    transition: background-color 0.2s linear;
}

.menu-item i {
    font-size: 16px;
}

.menu-text {
    margin-left: 8px;
    transition: opacity 0.1s ease;
}

.menu-item:hover {
    background-color: #046FE0;
}

.toogle {
    position: absolute;
    width: calc(100% - 20px);
    padding: 0;
    bottom: 10px;
    justify-content: center;
}

/* collapsible时动效 */
.side-menu.collapsible {
    width: 42px;
}

.side-menu.collapsible .menu-text {
    opacity: 0;
}

.side-menu.collapsible .toogle i {
    transform: rotate(180deg);
}

.side-menu.collapsible .menu-item:hover .popover {
    display: inline-block;
}
</style>