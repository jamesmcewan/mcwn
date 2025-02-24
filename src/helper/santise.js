import sanitizeHtml from 'sanitize-html'

const options = {
  allowedTags: sanitizeHtml.defaults.allowedTags.concat(['iframe']),
  allowedAttributes: {
    ...sanitizeHtml.defaults.allowedAttributes,
    iframe: [
      'src',
      'width',
      'height',
      'frameborder',
      'allow',
      'allowfullscreen',
      'title',
    ],
  },
  allowedIframeHostnames: ['www.youtube.com', 'youtube.com', 'youtu.be'],
  transformTags: {
    iframe: (tagName, attribs) => {
      // Convert any youtube.com/watch?v= URLs to embed format
      if (attribs.src) {
        const url = new URL(attribs.src)
        if (
          url.hostname === 'www.youtube.com' ||
          url.hostname === 'youtube.com'
        ) {
          const videoId = url.searchParams.get('v')
          if (videoId) {
            attribs.src = `https://www.youtube.com/embed/${videoId}`
          }
        }
        // Handle youtu.be links
        else if (url.hostname === 'youtu.be') {
          const videoId = url.pathname.slice(1)
          attribs.src = `https://www.youtube.com/embed/${videoId}`
        }
      }

      // Add default attributes for security and responsiveness
      return {
        tagName,
        attribs: {
          ...attribs,
          width: '560',
          height: '315',
          frameborder: '0',
          allow:
            'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture',
          allowfullscreen: '',
        },
      }
    },
  },
}

export const santise = (content) => sanitizeHtml(content, options)
