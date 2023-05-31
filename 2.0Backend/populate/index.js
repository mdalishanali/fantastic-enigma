// Example for populate on a array field (where show ref id in a array)
const result = await Claim.findById({_id:'yourId').populate({
  path: "showRef",
});
