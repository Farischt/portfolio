// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator"
import schemaTypes from "all:part:@sanity/base/schema-type"

import pageInfo from "./pageInfo"
import project from "./project"
import experience from "./experience"
import skill from "./skill"
import social from "./social"

export default createSchema({
  name: "default",

  types: schemaTypes.concat([pageInfo, project, experience, skill, social]),
})
