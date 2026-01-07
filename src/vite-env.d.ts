/// <reference types="vite/client" />
/// <reference types="vite-imagetools" />

declare module '*?*as=srcset*' {
	const srcset: string
	export default srcset
}

declare module '*?*' {
	const value: string
	export default value
}

declare module '*.jpg?*' {
	const value: string
	export default value
}

declare module '*.jpeg?*' {
	const value: string
	export default value
}

declare module '*.png?*' {
	const value: string
	export default value
}

declare module '*.webp?*' {
	const value: string
	export default value
}
