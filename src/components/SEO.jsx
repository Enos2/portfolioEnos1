/* eslint-disable no-unused-vars */
import React from 'react'
import { Helmet } from 'react-helmet-async'

function SEO({ 
  title = 'Enos Omondi Omenda - Software Developer',
  description = 'Portfolio of Enos Omondi Omenda, a Software Developer specializing in full-stack web development, IT support, and cybersecurity. Building modern web applications with React, Node.js, and MongoDB.',
  keywords = 'Enos Omenda, Software Developer, Full-Stack Developer, React Developer, Node.js, Web Developer, Kenya, Cybersecurity, IT Support, Narra',
  url = 'https://enos-omenda.web.app',
  image = 'https://enos-omenda.web.app/img/Enos B.jpg',
  type = 'website',
  author = 'Enos Omondi Omenda'
}) {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />

      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Enos Omondi Omenda" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Robots */}
      <meta name="robots" content="index, follow" />
    </Helmet>
  )
}

export default SEO