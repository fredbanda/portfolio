import sanityClinet from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClinet({
  projectId: "w0m9yqbz",
  dataset: "production",
  apiVersion: "2022-08-10",
  useCdn: true,
  token:
    "skzsOaDIkZTrugxkmyd0eONe77G0kEhukM1YmwV4tlKG6gLuIsPUIc2NTTpcf22s33l09wfdI9BmcAQNDx1AZCRiZcYcYXJmVkxBgEikDkPmA3YVdkM0XIruUjA9ndqpQlArvUguZp9CkfrcYIPS5ssS3CPsMnhaLlnJhR1XJfMijmR4M7pp",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
