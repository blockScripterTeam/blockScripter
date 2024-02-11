<script>
import Blockly from 'blockly'
import * as Ch from 'blockly/msg/zh-hans'
import {javascriptGenerator} from 'blockly/javascript';
import axios from 'axios';

Blockly.setLocale(Ch)

export default {
    data() {
        return {
            workspace: null,
            toolboxXml: ''
        }
    },
    async mounted() {
        const response = await axios.get('/assets/toolbox.xml');
        this.toolboxXml = response.data;

        this.workspace = Blockly.inject(
            'blocklyDiv',
            { toolbox: this.toolboxXml }
        );
        this.workspace.addChangeListener(this.updateCode);
    },
    methods: {
        updateCode() {
          document.getElementById('codespace').value = javascriptGenerator.workspaceToCode(this.workspace);
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

#codespace {
    position: absolute;
    top: 5%;
    bottom: 0px;
    left: 70%;
    right: 0px;
}
</style>