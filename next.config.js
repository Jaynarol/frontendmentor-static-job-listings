/** @type {import('next').NextConfig} */

/**
 * eg: https://github.com/Jaynarol/frontendmentor-3-column-preview-card-component
 * const REPO = 'frontendmentor-3-column-preview-card-component'
 */
const REPO = 'frontendmentor-static-job-listings'
const nextConfig = {
  output: 'export'
}

if(process.env.NODE_ENV !== "development"){
  const assetPrefix = `/${REPO}/`
  const basePath = `/${REPO}`
  nextConfig.assetPrefix = assetPrefix
  nextConfig.basePath = basePath
}


module.exports = nextConfig