const Developer = require("../models/developerModel");

// read data
const getDevelopers = async (req, res) => {
    const params = req.body.param;
    console.log(Object.keys(params).length === 0)
    if(Object.keys(params).length === 0){
        console.log("Hello")
        let result = await Developer.find();
        return res.json(result)
    }
//   const params = {
    // stack: ["frontend"],
    // projectStatus: "allocated",
    // skills: [
    //   {
    //     name: "reactjs",
    //     level: "Intermediate",
    //   },
    //   {
    //     name: "Vue js",
    //     level: "beginner",
    //   },
    // ],
//   };

  try {
    let filters = {
      $match: {
      },
    };

    var mainQuery = { $and: [] };
    console.log(params)

    

    if (params.skills) {
      var query = { $or: [] };
      for (var i = 0; i < params.skills.length; i++) {
        query["$or"].push({ skills: { $elemMatch: params.skills[i] } });
      }
      mainQuery["$and"].push(query);
    }
    if (params.stack) {
      mainQuery["$and"].push({ stack: { $in: params.stack } });
    }
    if (params.experience) {
      mainQuery["$and"].push({experience: {$gte: params.experience.start}});
      mainQuery["$and"].push({experience: {$lte: params.experience.end}});
    }
    if (params.projectStatus) {
      mainQuery["$and"].push({projectStatus: {$eq: params.projectStatus}});
    }
    
    filters["$match"] = mainQuery;

    console.log(JSON.stringify(filters));
    let result = await Developer.aggregate([filters]);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal server Error" });
  }
};

// Update data

// Delete Data

// Create Data

module.exports = {
  getDevelopers,
};
