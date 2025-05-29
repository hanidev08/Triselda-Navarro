export type SampleDataItem = {
  slug: string;
  url: string;
  author: string;
  client: string;
  images: string[];
};

export type SampleDataType = SampleDataItem[];

export const sampleData: SampleDataType = [
  {
    slug: "elegant",
    url: "/assets/Stylish Woman in Blazer.jpeg",
    author: "Johanna Nobel",
    client: "Vogue",
    images: [
      "/assets/Modern Elegance Portrait.jpeg",
      "/assets/Minimalist Fashion Pose.jpeg",
      "/assets/Minimalist Fashion Look.jpeg",
      "/assets/Fashionable Woman Pose.jpeg",
      "/assets/Avant-Garde Fashion Look.jpeg",
    ],
  },
  {
    slug: "stylish",
    url: "/assets/img1.jpeg",
    author: "Johanna Nobel",
    client: "Vogue",
    images: [
      "/assets/img2.jpeg",
      "/assets/img3.jpeg",
      "/assets/img4.jpeg",
      "/assets/img2.jpeg",
      "/assets/img3.jpeg",
    ],
  },
  {
    slug: "surfer",
    url: "/assets/img5.jpeg",
    author: "Johanna Nobel",
    client: "Vogue",
    images: [
      "/assets/img6.jpeg",
      "/assets/img7.jpeg",
      "/assets/img8.jpeg",
      "/assets/img8.jpeg",
      "/assets/img9.jpeg",
    ],
  },
  {
    slug: "cheerful",
    url: "/assets/img10.jpeg",
    author: "Johanna Nobel",
    client: "Vogue",
    images: [
      "/assets/img11.jpeg",
      "/assets/img12.jpeg",
      "/assets/img13.jpeg",
      "/assets/img10.jpeg",
      "/assets/img12.jpeg",
    ],
  },
  {
    slug: "monochrome",
    url: "/assets/img14.jpeg",
    author: "Johanna Nobel",
    client: "Vogue",
    images: [
      "/assets/img15.jpeg",
      "/assets/img16.jpeg",
      "/assets/img17.jpeg",
      "/assets/img14.jpeg",
      "/assets/img15.jpeg",
    ],
  },
];

// {
//   slug: "smooth-memories",
//   url: "/assets/Elegant Portrait Close-Up.jpeg",
//   author: "Johanna Nobel",
//   client: "Chanel",
// },
// {
//   slug: "the-wilder-nights",
//   url: "/assets/Pregnant Woman in Flower Field.jpeg",
//   author: "Johanna Nobel",
//   client: "Chanel",
// },
// {
//   slug: "the-future-universe",
//   url: "/assets/Serene Maternity Portrait.jpeg",
//   author: "Johanna Nobel",
//   client: "Vouge",
// },
