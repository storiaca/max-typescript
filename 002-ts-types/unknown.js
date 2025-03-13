/* Unknown type */
// tipicno se koristi u korelaciji sa funkcijama
// razlika izmedju any i unknown je da any prihvata sve, cak i nepostojece funkcije npr. val.log(), dok kod unknown ovo nece raditi, moramo da postavimo vise uslova
function process(val) {
    if (typeof val === "object" &&
        !!val &&
        "log" in val &&
        typeof val.log === "function") {
        val.log();
    }
}
