import sanityClinet from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClinet({
  projectId: "w0m9ylk/;kqbz",
  dataset: "production",
  apiVersion: "2022-08-10",
  useCdn: true,
  token:
    "skzsOaDIkZTrugxkmyd0eONeklj;kplkp9uliulhiu77G0kEhukM1mcAQNDx1AZCRiZcYcYXJmVkxBgEikDkPmA3YVdkM0XIruUjA9ndqpQlArvUguZp9CkfrcYIPS5ssS3CPsMnhaLlnJhR1XJfMijmR4M7pp",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
