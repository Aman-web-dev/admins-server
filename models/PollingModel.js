const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  Polling_Booth_Number: { type: String, required:true  },
  Polling_Booth_Name: { type: String, required:true  },
  Parent_Constituency: { type: String, required:true  },
  Winner_2014: { type: String, required:true  },
  Runner_up_other_than_INC_and_BJP: { type: String, required:true  },
  Margin_Percentage_2014: { type: String, required:true  },
  Margin_2014: { type: String, required:true  },
  Total_Voters_2014: { type: String, required:true  },
  BJP_Votes_2014: { type: String, required:true  },
  BJP_Percentage_vote: { type: String, required:true  },
  INC_Votes_2014: { type: String, required:true  },
  INC_Percentage_votes: { type: String, required:true  },
  Winner_2019: { type: String, required:true  },
  Margin_Percentage_2019: { type: String, required:true  },
  Margin_2019: { type: String, required:true  },
  Total_Voters_2019: { type: String, required:true  },
  BJP_Votes_2019: { type: String, required:true  },
  BJP_Percentage_votes_2019: { type: String, required:true  },
  INC_Votes_2019: { type: String, required:true  },
  INC_Percentage_Votes_2019: { type: String, required:true  },
});

const DataModel = mongoose.model('Data', dataSchema);

module.exports = DataModel;
