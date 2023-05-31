//Example for Aggregate Lookup property

const result = await books
  .aggregate([
    {
      $lookup: {
        from: "authors",
        localField: "authorRef",
        foreignField: "_id",
        as: "author",
      },
    },
    {
      $unwind: "$customer",
    },
  ])

