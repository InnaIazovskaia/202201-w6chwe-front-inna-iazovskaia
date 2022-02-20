import { rest } from "msw";

export const handlers = [
  rest.get(process.env.REACT_APP_API_ROBOTSAPI, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json([
        {
          id: 1,
          name: "Bibi",
          image: "",
          speed: 1,
          strength: 2,
          "date of creation": "2022",
        },
        {
          id: 2,
          name: "Bobo",
          image: "",
          speed: 6,
          strength: 2,
          "date of creation": "2022",
        },
      ])
    )
  ),
];
