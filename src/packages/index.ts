/**
 * @Description: component entry
 * @author: fanlu
 * @date:  2024/8/10
 * @project: el-tag-input
 */
import TagInput from "./TagInput.vue";
import {App} from "vue";

const components = {
    TagInput,
};

export  {
    TagInput,
};

export default {
    install(app: App) {
        Object.keys(components).forEach((key) => {
            app.component(key, components[key]);
        });
    }
}
