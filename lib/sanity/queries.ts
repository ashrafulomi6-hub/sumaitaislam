import groq from 'groq';

export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  ...,
  defaultSeo{..., ogImage}
}`;

export const navigationQuery = groq`*[_type == "navigation"][0]{
  items[] | order(order asc)
}`;

export const footerQuery = groq`*[_type == "footer"][0]`;

export const heroQuery = groq`*[_type == "hero"] | order(order asc)[0]{
  ...,
  profileImage,
  resumeFile{asset->{url}}
}`;

export const aboutQuery = groq`*[_type == "about"][0]`;

export const educationQuery = groq`*[_type == "education"] | order(order asc)`;

export const experienceQuery = groq`*[_type == "experience"] | order(order asc)`;

export const skillCategoriesQuery = groq`*[_type == "skillCategory"] | order(order asc)`;

export const servicesQuery = groq`*[_type == "service"] | order(order asc)`;

export const projectsQuery = groq`*[_type == "project"] | order(order asc){
  ...,
  coverImage,
  gallery,
  video{asset->{url}}
}`;

export const featuredProjectsQuery = groq`*[_type == "project" && featured == true] | order(order asc)`;

export const certificatesQuery = groq`*[_type == "certificate"] | order(order asc){
  ...,
  image,
  certificateFile{asset->{url}}
}`;

export const hackathonsQuery = groq`*[_type == "hackathon"] | order(order asc)`;

export const achievementsQuery = groq`*[_type == "achievement"] | order(order asc)`;

export const resumeQuery = groq`*[_type == "resume"][0]{
  ...,
  file{asset->{url, originalFilename, size}}
}`;

export const socialLinksQuery = groq`*[_type == "socialLink"] | order(order asc)`;

export const contactQuery = groq`*[_type == "contact"][0]`;

export const testimonialsQuery = groq`*[_type == "testimonial"] | order(order asc)`;

export const galleryQuery = groq`*[_type == "galleryItem"] | order(order asc)`;

export const blogPostsQuery = groq`*[_type == "blogPost"] | order(publishedAt desc)`;

export const blogPostBySlugQuery = groq`*[_type == "blogPost" && slug.current == $slug][0]`;
