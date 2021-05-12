// must be ran as part of a --loader or --experimental-loader param
export async function resolve(specifier, context, defaultResolver) {
    switch (specifier) {
        case "websocket":
            return {
                url: new URL("./websocket.js", import.meta.url).href,
                format: "cjs"
            }

        case "http":
            return {
                url: new URL("./http.js", import.meta.url).href,
                format: "cjs"
            }
    }

    return defaultResolver(specifier, context, defaultResolver)
}
