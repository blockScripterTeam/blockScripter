<script>
import Blockly from 'blockly'
export default {
    data() {
        return {
            workspace: null,
            toolbox: {
                "kind": "flyoutToolbox",
                "contents": [
                    {
                        "kind": "block",
                        "type": "controls_if"
                    },
                    {
                        "kind": "block",
                        "type": "controls_repeat_ext"
                    },
                    {
                        "kind": "block",
                        "type": "logic_compare"
                    },
                    {
                        "kind": "block",
                        "type": "math_number"
                    },
                    {
                        "kind": "block",
                        "type": "math_arithmetic"
                    },
                    {
                        "kind": "block",
                        "type": "text"
                    },
                    {
                        "kind": "block",
                        "type": "text_print"
                    },
                ]
            },
            code: null
        }
    },
    methods: {
        initBlockly(){
            this.workspace = Blockly.inject('blocklyDiv', {toolbox: this.toolbox});
        }
    },
    mounted() {
        initBlockly();
    }
}
</script>

<template>
    <div id="blocklyDiv" class="blocklyDiv"></div>
</template>

<style scoped>
#blocklyDiv {
    height: 480px;
    width: 600px;
}
</style>