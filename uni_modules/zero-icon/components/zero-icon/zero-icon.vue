<template>
	<image
		class="zero-icon"
		:src="iconSrc"
		:style="iconStyle"
		@error="handleImageError"
		mode="aspectFit"
	/>
</template>

<script>
const getVal = (val) => {
	const reg = /^[0-9]*$/g;
	return typeof val === "number" || reg.test(val) ? `${val}px` : val;
};

const DEFAULT_API_URL = "https://api.iconify.design";
const svgCache = new Map();

const normalizeApiUrl = (url) => String(url || DEFAULT_API_URL).replace(/\/$/, "");

const parseIconName = (name, defaultPrefix) => {
	const value = String(name || "").trim();
	if (!value) {
		return {
			prefix: defaultPrefix,
			icon: "",
		};
	}

	if (value.includes(":")) {
		const [prefix, ...rest] = value.split(":");
		return {
			prefix: prefix || defaultPrefix,
			icon: rest.join(":") || "",
		};
	}

	return {
		prefix: defaultPrefix,
		icon: value,
	};
};

export default {
	name: "ZeroIcon",
	props: {
		name: {
			type: String,
			default: "",
		},
		color: {
			type: String,
			default: "#333333",
		},
		size: {
			type: [Number, String],
			default: 16,
		},
		iconSet: {
			type: Object,
			default: null,
		},
		prefix: {
			type: String,
			default: "",
		},
		apiUrl: {
			type: String,
			default: DEFAULT_API_URL,
		},
		fallbackName: {
			type: String,
			default: "",
		},
	},
	data() {
		return {
			hasLoadError: false,
		};
	},
	watch: {
		name() {
			this.hasLoadError = false;
		},
		iconSet() {
			this.hasLoadError = false;
		},
		prefix() {
			this.hasLoadError = false;
		},
		fallbackName() {
			this.hasLoadError = false;
		},
		apiUrl() {
			this.hasLoadError = false;
		},
		color() {
			this.hasLoadError = false;
		},
		size() {
			this.hasLoadError = false;
		},
	},
	computed: {
		iconSize() {
			return getVal(this.size);
		},
		isLocalMode() {
			return !!this.iconSet;
		},
		iconSource() {
			return this.iconSet || null;
		},
		iconEntries() {
			return this.iconSource?.icons || this.iconSource || {};
		},
		currentName() {
			return this.hasLoadError ? this.fallbackName : this.name;
		},
		parsedIcon() {
			return parseIconName(this.currentName, this.prefix);
		},
		parsedFallbackIcon() {
			return parseIconName(this.fallbackName, this.prefix);
		},
		normalizedName() {
			return this.parsedIcon.icon;
		},
		resolvedIconName() {
			if (this.normalizedName && this.iconEntries[this.normalizedName]) {
				return this.normalizedName;
			}

			if (this.iconEntries[this.fallbackName]) {
				return this.fallbackName;
			}

			return Object.keys(this.iconEntries)[0] || "";
		},
		iconData() {
			return this.iconEntries[this.resolvedIconName] || null;
		},
		iconSrc() {
			if (this.isLocalMode) {
				if (!this.iconData) {
					return "";
				}

				const cacheKey = `local::${this.resolvedIconName}::${this.color}`;
				if (svgCache.has(cacheKey)) {
					return svgCache.get(cacheKey);
				}

				const width = this.iconData.width || 32;
				const height = this.iconData.height || 32;
				const body = (this.iconData.body || "").replace(/currentColor/g, this.color);
				const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}" fill="${this.color}">${body}</svg>`;
				const dataUri = `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

				svgCache.set(cacheKey, dataUri);
				return dataUri;
			}

			const iconName = this.parsedIcon.icon || this.parsedFallbackIcon.icon;
			if (!iconName) {
				return "";
			}

			const iconPrefix = this.parsedIcon.prefix || this.parsedFallbackIcon.prefix;
			if (!iconPrefix) {
				return "";
			}

			const cacheKey = `cdn::${iconPrefix}:${iconName}::${this.color}::${this.iconSize}::${this.apiUrl}`;
			if (svgCache.has(cacheKey)) {
				return svgCache.get(cacheKey);
			}

			const apiUrl = normalizeApiUrl(this.apiUrl);
			const dataUri = `${apiUrl}/${iconPrefix}/${iconName}.svg?color=${encodeURIComponent(this.color)}&height=${encodeURIComponent(this.iconSize)}`;

			svgCache.set(cacheKey, dataUri);
			return dataUri;
		},
		iconStyle() {
			return {
				width: this.iconSize,
				height: this.iconSize,
			};
		},
	},
	methods: {
		handleImageError() {
			if (!this.hasLoadError && this.currentName !== this.fallbackName) {
				this.hasLoadError = true;
			}
		},
	},
};
</script>

<style lang="scss" scoped>
.zero-icon {
	display: inline-flex;
	flex-shrink: 0;
}
</style>
