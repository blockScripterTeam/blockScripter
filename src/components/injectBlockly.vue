<script>
import Blockly from 'blockly'
import * as Ch from 'blockly/msg/zh-hans'
import {javascriptGenerator} from 'blockly/javascript';
Blockly.setLocale(Ch)
export default {
    data() {
        return {
            workspace: null,
            toolboxXml:
                `
<xml id="toolbox" style="display: none">
    <category name="逻辑" categorystyle="logic_category">
        <block type="controls_if"></block>
        <block type="logic_compare"></block>
        <block type="logic_operation"></block>
        <block type="logic_negate"></block>
        <block type="logic_boolean"></block>
    </category>
    <category name="循环" categorystyle="loop_category">
        <block type="controls_repeat_ext">
            <value name="TIMES">
                <shadow type="math_number">
                    <field name="NUM">10</field>
                </shadow>
            </value>
        </block>
        <block type="controls_flow_statements"></block>
    </category>
</xml>
            `
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