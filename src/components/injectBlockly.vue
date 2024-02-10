<script>
import Blockly from 'blockly'
import * as Ch from 'blockly/msg/zh-hans'
import {javascriptGenerator} from 'blockly/javascript';
import axios from 'axios';

Blockly.setLocale(Ch)

const toolboxXml = await axios.get('/assets/toolbox.xml')

export default {
    data() {
        return {
            workspace: null,
            toolboxXml: toolboxXml.data
        }
    },
    mounted() {
        this.workspace = Blockly.inject(
            'blocklyDiv',
            { toolbox: this.toolboxXml }
        )
        this.workspace.addChangeListener(this.updateCode)
    },
    methods: {
        updateCode(event) {
            const code = javascriptGenerator.workspaceToCode(this.workspace);
            document.getElementById('codespace').value = code;
        }
    }
}    
</script>

<template>
    <div id="blocklyDiv"></div>
    <textarea id="codespace" cols="#" rows="#"></textarea>
</template>

<style scoped>
#blocklyDiv {
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 30%;
}
#codespace{
    position: absolute;
    top: 5%;
    bottom: 0px;
    left: 70%;
    right: 0px;
}
</style>