import Developer from "../models/developerModel.js";
import { sendInvitationMailToMember } from "../utils/email/email.js";

/*  read data */
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

/* Create Data */
const createDeveloper = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({
      error: "Invalid Inputs, please provide both email and password.",
    });
  }
  const developer = new Developer(req.body);
  try {
    await developer.save();
    await sendInvitationMailToMember(
      developer.email,
      "Your",
      developer.password
    );
    return res.status(200).send(developer);
  } catch (e) {
    console.log(e);
    res.status(400).send(e.message);
  }
};

/*add developer profile data */
const addDeveloperProfileData = async (req, res) => {
  try {
    const allowedUpdates = {
      name: true,
      stack: true,
      skills: true,
      projectStatus: true,
    };
    const updates = Object.keys(req.body);
    const isAllowedUpdate = updates.every((update) => allowedUpdates[update]);
    if (!isAllowedUpdate) {
      return res.status(400).json({ error: "Invalid update" });
    }

    const developer = await Developer.findById(req.params.id);

    if (!developer) {
      return res.status(404).json({ error: "Unable to find developer" });
    }


    updates.forEach((update) => {
      developer[update] = req.body[update];
    });

    await developer.save();
    res.status(200).json(developer);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

/* Update data */
// const updateDeveloper = async (req, res) => {
//   const skill = req.body.skill;
//   delete req.body.skill;
//   // console.log(req.body)
//   try {
//     const developer = await Developer.findOne(
//       { _id: req.params.id, isDeleted: false },
//       { ...req.body }
//     );
//     console.log(developer);
//     if (!developer) {
//       return res.status(400).send();
//     }
//     developer.save();
//     return res.send(developer);
//   } catch (e) {
//     res.status(400).send(e.message);
//   }
// };

/* Delete Data */
const deleteDeveloper = async (req, res) => {
  const id = req.params.id;
  try {
    const developer = await Developer.findOneAndUpdate(
      { _id: id },
      { isDeleted: true }
    );
    if (!developer) {
      return res.status(404).send();
    }
    await developer.save();
    res.status(200).send(developer);
  } catch (e) {
    res.status(400).send(e.message);
  }
};
export  {
  getDevelopers,
  deleteDeveloper,
  createDeveloper,
  addDeveloperProfileData,
};
