export let supportsTemplateLiterals = false;
try {
    eval("`foo`");
    supportsTemplateLiterals = true;
} catch (e) { }


export function transformLiterals(expression) {
    if (!supportsTemplateLiterals) {
        let evalExpression = expression.split("`").join("");
        let chunks = evalExpression.split("${");
        let nodes = [];
        for (let i = 0; i < chunks.length; i++) {
            let chunk = chunks[i];
            if (chunk.indexOf("}") == -1) {
                if (chunk) {
                    chunk = "'" + chunk + "'";
                    nodes.push(chunk);
                }
            } else {
                let chunkBits = chunk.split("}");
                for (let j = 0; j < chunkBits.length; j++) {
                    let chunkBit = chunkBits[j];
                    if (chunkBit) {
                        if (j > 0) chunkBit = "'" + chunkBit + "'";
                        nodes.push(chunkBit);
                    }
                }
            }
        }
        expression = nodes.join(" + ");
    }
    return expression;
}