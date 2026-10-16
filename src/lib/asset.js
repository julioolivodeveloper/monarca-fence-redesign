// Files in public/ resolved against the deploy base: "/" locally, "/monarca-fence-redesign/" on GitHub Pages.
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
